const nodes: {
  [key: string]: {
    id: number
    name: string
    icon?: string
    description?: string
    notDependency?: string[]
  }
} = {
  node0: {
    id: 1,
    name: '0. Foundations',
    icon: 'foundation',
    description:
      'This learning path will provide you with the essential skills and knowledge you need in order to start learning ROS.',
    notDependency: [
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node1: {
    id: 2,
    name: 'Linux for robotics',
    icon: 'precision_manufacturing',
    description: "Learn the Linux fundamentals you'll need for robotics development",
    notDependency: [
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node2: {
    id: 3,
    name: 'C++ Basics for robotics',
    icon: 'precision_manufacturing',
    description: 'Master the basics of C++ for robot programming',
    notDependency: [
      'node1',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node3: {
    id: 4,
    name: 'Python 3 for robotics',
    icon: 'precision_manufacturing',
    description: 'Master the basics of Python 3 for robot programming',
    notDependency: [
      'node1',
      'node2',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node4: {
    id: 5,
    name: '1. Basic ROS2',
    icon: 'foundation',
    description:
      'This learning path will provide you with the essential skills and knowledge you need to understand and create any basic ROS related project.',
    notDependency: [
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node5: {
    id: 6,
    name: '2. ROS Basics',
    icon: 'foundation',
    description:
      'This learning path will provide you with the essential skills and knowledge you need to understand and create any basic ROS related project.',
    notDependency: [
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node6: {
    id: 7,
    name: 'Gazebo Sim with ROS',
    icon: 'precision_manufacturing',
    description:
      'Learn Gazebo Sim Garden, the new generation of simulation software from Open Robotics, and how to seamlessly use it with ROS2.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node7: {
    id: 8,
    name: 'URDF robot modeling ROS2',
    icon: 'precision_manufacturing',
    description: 'Understanding robot modeling using URDF',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node8: {
    id: 9,
    name: 'TF in ROS2',
    icon: 'precision_manufacturing',
    description: 'To finally understand TF and Robot State Publisher in ROS',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node9: {
    id: 10,
    name: 'ROS2 Basics in 5 days (C++)',
    icon: 'precision_manufacturing',
    description:
      "Learn ROS2 basics now. It doesn't matter if you are new to ROS or a veteran, ROS2 is here to stay.",
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node10: {
    id: 11,
    name: 'ROS2 Basics in 5 days (Python)',
    icon: 'precision_manufacturing',
    description: 'Learn the fundamentals of ROS to understand and be able to program robots.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node11: {
    id: 12,
    name: 'ROS2 Basics in 3 days (Rust)',
    icon: 'precision_manufacturing',
    description: 'Be at the forefront of robotics engineering by combining ROS2 and Rust.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node12: {
    id: 13,
    name: '5. Navigation ROS2',
    icon: 'foundation',
    description:
      'Building on your ROS basics skills and knowledge, learn how to navigate ROS-based robots.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node13',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node13: {
    id: 14,
    name: '3. Intermediate ROS2',
    icon: 'foundation',
    description:
      'This learning path will provide you with the essential skills and knowledge you need to understand and create any basic ROS2-related project.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node14: {
    id: 15,
    name: 'RTAB',
    icon: 'precision_manufacturing',
    description: 'Learn how to use the rtabmap_ros package for performing RGB-D SLAM',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node13',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node15: {
    id: 16,
    name: 'Nav2 Basics',
    icon: 'precision_manufacturing',
    description: 'Learn how make robots autonomously navigate using Nav2',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node13',
      'node14',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node16: {
    id: 17,
    name: 'Nav Advanced',
    icon: 'precision_manufacturing',
    description: 'Take a deeper look at Navigation for ROS2',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node13',
      'node14',
      'node15',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node17: {
    id: 18,
    name: 'ROS1 - ROS2 Migration',
    icon: 'precision_manufacturing',
    description: 'Learn how to make your manipulator interact with the environment using ROS',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node18: {
    id: 19,
    name: 'Behavior Trees for ROS2',
    icon: 'precision_manufacturing',
    description: 'Learn to use Behavior Trees in ROS2.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node19: {
    id: 20,
    name: 'Advanced Modern C++ for Robotics',
    icon: 'precision_manufacturing',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node20: {
    id: 21,
    name: 'Intermediate ROS2 (Python)',
    icon: 'precision_manufacturing',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node21: {
    id: 22,
    name: 'Intermediate ROS2 (C++)',
    icon: 'precision_manufacturing',
    description: 'Take your ROS2 knowledge to the next level.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node22: {
    id: 23,
    name: 'ROS2 Control',
    icon: 'precision_manufacturing',
    description: 'Understand ROS2 Control to add feedback control to your robot',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node23: {
    id: 24,
    name: 'ROS2 Security',
    icon: 'precision_manufacturing',
    description: 'Learn to enable and manage security with ROS2',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node24: {
    id: 25,
    name: '4. Robotics Theory',
    icon: 'foundation',
    description: 'Creating your first ROS based Robot from Scratch.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node25: {
    id: 26,
    name: '14. Enterprise',
    icon: 'foundation',
    description: 'Learn how DDS works for ROS2-based robots.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node26: {
    id: 27,
    name: '11. Course of product',
    icon: 'foundation',
    description:
      'Learn robotics programming with Python and the Limo robot, covering sensors, actuators, and odometry in an immersive course.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node27: {
    id: 28,
    name: '13. Simulation',
    icon: 'foundation',
    description:
      'Learn Gazebo Sim Garden, the new generation of simulation software from Open Robotics, and how to seamlessly use it with ROS2.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node28: {
    id: 29,
    name: '8. Robot Creation',
    icon: 'foundation',
    description:
      'Master ROS2 and practical robotics with LIMO in a beginner-friendly, hands-on course.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  node29: {
    id: 30,
    name: '7. Manipulation',
    icon: 'foundation',
    description: 'Master how to create ROS applications for autonomous mobile manipulators',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node30',
      'node31',
      'node32',
    ],
  },
  node30: {
    id: 31,
    name: '9. Artificial Intelligence',
    icon: 'foundation',
    description: 'AI, AI for beginers, AI basics, probability',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node31',
      'node32',
    ],
  },
  node31: {
    id: 32,
    name: '10. ROS Debugging',
    icon: 'foundation',
    description: 'This Course contains several ROS-related problems that need to be solved by you.',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node32',
    ],
  },
  node32: {
    id: 33,
    name: '12. Web Devel for Robots',
    icon: 'foundation',
    description:
      'From the essential to advanced widgets, learn how to control and monitor robots with ROS using just your web browser, all on the web!',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
    ],
  },
}

const edges: { [key: string]: { source: string; target: string; notDependency?: string[] } } = {
  'edge0-1': {
    source: 'node0',
    target: 'node1',
    notDependency: [
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge0-2': {
    source: 'node0',
    target: 'node2',
    notDependency: [
      'node1',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge0-3': {
    source: 'node0',
    target: 'node3',
    notDependency: [
      'node1',
      'node2',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge0-4': {
    source: 'node0',
    target: 'node4',
    notDependency: [
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge0-5': {
    source: 'node0',
    target: 'node5',
    notDependency: [
      'node1',
      'node2',
      'node3',
      'node4',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge5-6': {
    source: 'node5',
    target: 'node6',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge4-8': {
    source: 'node4',
    target: 'node8',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge4-7': {
    source: 'node4',
    target: 'node7',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge4-9': {
    source: 'node4',
    target: 'node9',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node10',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge4-10': {
    source: 'node4',
    target: 'node10',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node11',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge4-11': {
    source: 'node4',
    target: 'node11',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node12',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge4-12': {
    source: 'node4',
    target: 'node12',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node13',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge4-13': {
    source: 'node4',
    target: 'node13',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge12-14': {
    source: 'node12',
    target: 'node14',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node13',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge12-15': {
    source: 'node12',
    target: 'node15',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node13',
      'node14',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge12-16': {
    source: 'node12',
    target: 'node16',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node13',
      'node14',
      'node15',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge13-17': {
    source: 'node13',
    target: 'node17',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge13-18': {
    source: 'node13',
    target: 'node18',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node7',
      'node5',
      'node6',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node19',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge13-19': {
    source: 'node13',
    target: 'node19',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node20',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge13-20': {
    source: 'node13',
    target: 'node20',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node21',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge13-21': {
    source: 'node13',
    target: 'node21',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node22',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge13-22': {
    source: 'node13',
    target: 'node22',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node23',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
  'edge13-23': {
    source: 'node13',
    target: 'node23',
    notDependency: [
      'node0',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
      'node10',
      'node11',
      'node12',
      'node14',
      'node15',
      'node16',
      'node17',
      'node18',
      'node19',
      'node20',
      'node21',
      'node22',
      'node24',
      'node25',
      'node26',
      'node27',
      'node28',
      'node29',
      'node30',
      'node31',
      'node32',
    ],
  },
}

const layouts: {
  nodes: { [key: string]: { x: number; y: number } }
} = {
  nodes: {
    node0: { x: 0, y: 0 },
    node1: { x: 0, y: 1 },
    node2: { x: 0, y: 2 },
    node3: { x: 0, y: 3 },
    node4: { x: 0, y: 4 },
    node5: { x: 1, y: 0 },
    node6: { x: 1, y: 1 },
    node7: { x: 1, y: 2 },
    node8: { x: 1, y: 3 },
    node9: { x: 1, y: 4 },
    node10: { x: 2, y: 0 },
    node11: { x: 2, y: 1 },
    node12: { x: 2, y: 2 },
    node13: { x: 2, y: 3 },
    node14: { x: 2, y: 4 },
    node15: { x: 3, y: 0 },
    node16: { x: 3, y: 1 },
    node17: { x: 3, y: 2 },
    node18: { x: 3, y: 3 },
    node19: { x: 3, y: 4 },
    node20: { x: 4, y: 0 },
    node21: { x: 4, y: 1 },
    node22: { x: 4, y: 2 },
    node23: { x: 4, y: 3 },
    node24: { x: 4, y: 4 },
    node25: { x: 5, y: 0 },
    node26: { x: 5, y: 1 },
    node27: { x: 5, y: 2 },
    node28: { x: 5, y: 3 },
    node29: { x: 5, y: 4 },
    node30: { x: 6, y: 0 },
    node31: { x: 6, y: 1 },
    node32: { x: 6, y: 2 },
  },
}

export default { nodes, edges, layouts }
