# Map of Knowledge

## Overview

`map_knowledge` is a project designed to manage and visualize knowledge maps. It provides tools for setting up the project, compiling, and hot-reloading for development purposes.

## Features

- **Project Setup**: Install all necessary dependencies using `pnpm install`.
- **Development**: Compile and hot-reload the project for development using `pnpm dev`.

## Setting Up the Project on Linux from Scratch

To set up the `map_knowledge` project on a Linux system from scratch, follow these steps:

1. **Install Node.js and pnpm**:

```sh
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm
```

2. **Clone the Repository**:

```sh
git clone https://github.com/r4zu/map_knowledge.git
cd map_knowledge
```

3. **Install Dependencies**:

```sh
pnpm install
```

4. **Compile and Hot-Reload for Development**:

```sh
pnpm dev
```
