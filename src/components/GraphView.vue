<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import * as vNG from 'v-network-graph'
import {
  ForceLayout,
  type ForceNodeDatum,
  type ForceEdgeDatum,
} from 'v-network-graph/lib/force-layout'
import data from '../utils/data'

const router = useRouter()
const nodeEdgeSelected = ref<string>('')

const graph = ref<vNG.Instance>()
const description = ref<HTMLDivElement>()
const layouts = ref(data.layouts)
const descriptionOpacity = ref(0)
const descriptionPosition = ref({ left: '0px', top: '0px' })

const nodeEdgeNodePosition = computed(() => {
  const nodePos = layouts.value.nodes[nodeEdgeSelected.value]
  return nodePos || { x: 0, y: 0 }
})

watch(
  () => [nodeEdgeNodePosition.value, descriptionOpacity.value],
  () => {
    if (!graph.value || !description.value) return
    const domPoint = graph.value.translateFromSvgToDomCoordinates(nodeEdgeNodePosition.value)
    descriptionPosition.value = {
      left: domPoint.x + 350 - description.value.offsetWidth + 'px',
      top: domPoint.y + 15 - description.value.offsetHeight - 10 + 'px',
    }
  },
  { deep: true },
)

const configs = reactive(
  vNG.defineConfigs({
    view: {
      autoPanAndZoomOnLoad: 'fit-content',
      layoutHandler: new ForceLayout({
        createSimulation: (d3, nodes, edges) => {
          const forceLink = d3
            .forceLink<ForceNodeDatum, ForceEdgeDatum>(edges)
            .id((d: ForceNodeDatum) => d.id)
          return d3
            .forceSimulation(nodes)
            .force('edge', forceLink.distance(100).strength(0.1))
            .force('charge', d3.forceManyBody().strength(-2000))
            .force('x', d3.forceX())
            .force('y', d3.forceY())
            .stop()
            .tick(100)
        },
      }),
    },
    node: {
      normal: {
        color: (n) =>
          n.notDependency && n.notDependency.some((nd: string) => nd === nodeEdgeSelected.value)
            ? '#6666'
            : '#666',
        radius: 10,
      },
      hover: {
        color: 'orange',
        strokeWidth: 2,
        radius: 15,
      },
      label: {
        visible: true,
      },
    },
    edge: {
      normal: {
        color: (e) =>
          e.source === nodeEdgeSelected.value || e.target === nodeEdgeSelected.value
            ? 'orange'
            : '#ccc',
        width: (e) =>
          e.notDependency && e.notDependency.some((nd: string) => nd === nodeEdgeSelected.value)
            ? 0
            : 2,
      },
      hover: {
        color: '#ccc',
        width: 2,
      },
    },
  }),
)

const eventHandlers: vNG.EventHandlers = {
  'node:pointerover': ({ node }) => {
    nodeEdgeSelected.value = node
    descriptionOpacity.value = 1
  },
  'node:pointerout': () => {
    nodeEdgeSelected.value = ''
    descriptionOpacity.value = 0
  },
  'node:pointerdown': () => {
    router.push('/about')
  },
}
</script>

<template>
  <div class="description-wrapper">
    <v-network-graph
      class="graph"
      v-model:layouts="layouts"
      ref="graph"
      :nodes="data.nodes"
      :edges="data.edges"
      :configs="configs"
      :eventHandlers="eventHandlers"
    />
    <div
      ref="description"
      class="description"
      :style="{ ...descriptionPosition, opacity: descriptionOpacity }"
    >
      <div class="description-name">{{ data.nodes[nodeEdgeSelected]?.name ?? '' }}</div>
      <div class="description-desc">{{ data.nodes[nodeEdgeSelected]?.description ?? '' }}</div>
    </div>
  </div>
</template>

<style>
.graph {
  width: 100%;
  height: 90vh;
}
.description-wrapper {
  position: relative;
}
.description {
  top: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  text-align: center;
  width: 300px;
  display: grid;
  font-size: 12px;
  border-radius: 5px;
  background-color: #fbfbfb;
  border: 1px solid #000000;
  box-shadow: 2px 2px 2px #aaa;
  transition: opacity 0.2s var(--ease-in-out);
  pointer-events: none;
}
.description-name {
  font-weight: bold;
  margin-top: 10px;
}
.description-desc {
  margin: 5px;
  margin-bottom: 10px;
}
</style>
