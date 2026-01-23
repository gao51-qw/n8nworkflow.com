# Learn n8n interactively, lesson 1: data flow, execution & debugging

> # Learn n8n: Interactive Lesson 1

This interactive tutorial teaches you how to build in **n8n** from scratch, using a live walkthrough with real-time examples. Rather than static documentation, this guided workflow explains key n8n concepts while you execute each step. It is ideal for developers new to n8n but experienced with programming, JSON, and APIs.

---

## Requirements
- An active n8n instance (cloud or self-hosted)
- Basic programming experience (JavaScript or TypeScript, JSON, and APIs)
- Web browser with console access (for log inspection)

---

## What This Workflow Covers

- Triggers, Form nodes, and data flow
- How n8n executes nodes one step at a time
- How data moves between nodes (variables, context, side effects)
- Merge, Split, Aggregate, and Loop patterns
- Code nodes in single vs multiple execution modes
- Debugging using Logs and console output

---

## Step-by-Step Setup

1. **Manual Setup**  
   Before starting, create your n8n account and optionally enable dark mode. A video link is included with suggested background material.

2. **Form-Based Progression**  
   The tutorial uses `Form Trigger` and `Form` nodes as interactive checkpoints. You will execute the workflow, follow the browser prompts, and observe what happens in the visual editor.

3. **Live Code and Flow Examples**  
   Key concepts like branching, merging, and data references are shown in action. Sticky notes in the workflow explain what to look for and how things work.

4. **Execution Behavior**  
   You will see how multiple items affect execution count, and how to control it using options like Execute Once, batching, and aggregation.

5. **Debugging with Logs**  
   Toward the end, the workflow encourages you to inspect inputs and outputs of each node, and use `console.log()` inside Code nodes to understand the data being passed around.

---

## How to Use This Workflow

This workflow is meant to be a long-term reference. If you get stuck building in n8n, return to it.

Each section focuses on a core concept such as how data flows, how execution counts behave, or how to merge parallel branches. You can copy and paste working examples from this tutorial directly into your own workflows to solve common problems.

This is not just a lesson. It's a toolbox.


## 📊 Basic Information

- **Workflow ID:** 6149
- **Complexity:** advanced
- **Node Count:** 73
- **Views:** 1053
- **Downloads:** 105
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6149)

## 👤 Author

- **Name:** Wyeth
- **Username:** @wyeth

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stickyNote** (×20)
- **formTrigger** 
- **form** (×18)
- **merge** (×2)
- **noOp** (×10)
- **splitInBatches** 
- **set** (×7)
- **aggregate** (×3)
- **code** (×10)
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 73 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
