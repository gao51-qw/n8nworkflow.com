# 🧠 Build AI agents with Think-Plan-Act architecture using Llama-4 reasoning

> ![image.png](fileId:1106)

🧠 A plug-and-play n8n workflow that adds LLM-powered reasoning, planning, and action to your automations — with prompts, schemas, and full agent logic included.

**Ever wish your n8n flows could think before they act?**

**Now they can.** Say hello to the ultimate agent-based upgrade:

**"Think → Plan → Act"** – fully automated. Fully intelligent.⚡

🧩 **What Is This?**
This product is a ready-to-use AI-powered workflow template for n8n, featuring a smart “Thinking Agent” that:

🧠 Analyzes tasks
📋 Generates a step-by-step plan
🛠️ Executes actions intelligently
🧾 Returns structured JSON outputs for your next steps

Inspired by the Hugging Face agent architecture, this template gives your automations a brain before they press the red button. 🔴✅

**A clean 2-step process:**
THINK mode → Generates structured reasoning (goal, subgoals, tools, assumptions)
ACT mode → Executes subgoals step-by-step using tools and AI.

🧬 **What's Inside?**
This isn’t just a flow — it’s a framework. You get:
🔹 Modular Agent Loop
🔹 A demonstration workflow

📝 **Requirements**
🔹 OpenRouter API Key (or any other provider like OpenAI, groq...)

🔹 **Built-in Parsers**
🧾 Structured JSON parser for reliable outputs
🪄 Natural language and unstructured parsing fallback

🛠️ Plug in your own goals, tools, and OpenRouter keys

📦 **Includes a demo (e.g., “get the weather”) to get started fast**

💡 **Why You'll Love It**
✅ Plug & Play – Drop into any existing n8n flow
✅ Tool-Aware Reasoning – Plans include which tool to use and why
✅ Composable – Build workflows like agents: Reason → Plan → Execute
✅ Customizable by anyone – Even your intern can tweak the prompts

⚙️ **Agent customization**
🔹 Feel free to customize the agent settings by changing the `Config` node. Here's the default configuration:

```ts
const config = {
  THINK: {
    CONTEXT: ``, // Add the necessary context to the AI.
    CONSTRAINTS: [`Rule 1`, `Rule 2`], // here are the rules that your AI should follow
    TOOLS: [
      {
        tool: "",
        description: "",
      },
    ], // add here the list of the tools that the AI will call in your backend or workflow.
  },
};

return {
  json: {
    config: config,
    input: $input.last().json,
  },
};
```
After updating the configuration file, you will see the AI reasoning for your input. Feel free to connect with any other node creating smart tasks!

## 📊 Basic Information

- **Workflow ID:** 3489
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 1059
- **Downloads:** 105
- **Created:** 2025/4/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3489)

## 👤 Author

- **Name:** Lucas Dias
- **Username:** @devreis

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×8)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×4)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** (×4)
- **webhook** (×2)
- **noOp** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **code** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
