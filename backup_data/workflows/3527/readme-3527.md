# Compare sequential, agent-based, and parallel LLM processing with Claude 3.7

> This workflow demonstrates three distinct approaches to chaining LLM operations using Claude 3.7 Sonnet. Connect to any section to experience the differences in implementation, performance, and capabilities.

## What you'll find:

### 1️⃣ Naive Sequential Chaining
The simplest but least efficient approach - connecting LLM nodes in a direct sequence. Easy to set up for beginners but becomes unwieldy and slow as your chain grows.

### 2️⃣ Agent-Based Processing with Memory
Process a list of instructions through a single AI Agent that maintains conversation history. This structured approach provides better context management while keeping your workflow organized.

### 3️⃣ Parallel Processing for Maximum Speed
Split your prompts and process them simultaneously for much faster results. Ideal when you need to run multiple independent tasks without shared context.

## Setup Instructions:

1. **API Credentials**: Configure your Anthropic API key in the credentials manager. This workflow uses Claude 3.7 Sonnet, but you can modify the model in each Anthropic Chat Model node, or pick an entirely different LLM.

2. **For Cloud Users**: If using the parallel processing method (section 3), replace `{{ $env.WEBHOOK_URL }}` in the "LLM steps - parallel" HTTP Request node with your n8n instance URL.

3. **Test Data**: The workflow fetches content from the n8n blog by default. You can modify this part to use a different content or a data source.

4. **Customization**: Each section contains a set of example prompts. Modify the "Initial prompts" nodes to change the questions asked to the LLM.

Compare these methods to understand the trade-offs between simplicity, speed, and context management in your AI workflows!

---

Follow me on [LinkedIn](https://www.linkedin.com/in/parsadanyan/) for more tips on AI automation and n8n workflows!

## 📊 Basic Information

- **Workflow ID:** 3527
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 1816
- **Downloads:** 181
- **Created:** 2025/4/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3527)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **markdown** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×6)
- **merge** (×4)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.memoryManager** 
- **set** (×3)
- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×5)
- **webhook** 
- **noOp** (×3)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
