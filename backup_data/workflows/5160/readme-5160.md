# 🤖 Build resilient AI workflows with automatic GPT and Gemini failover chain

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### How it works

This workflow demonstrates how to create a resilient AI Agent that automatically falls back to a different language model if the primary one fails. This is useful for handling API errors, rate limits, or model outages without interrupting your process.

1.  **State Initialization:** The `Agent Variables` node initializes a `fail_count` to 0. This counter tracks how many models have been attempted.
2.  **Dynamic Model Selection:** The `Fallback Models` (a LangChain Code node) acts as a router. It receives a list of all connected AI models and, based on the current `fail_count`, selects which one to use for this attempt (0 for the first model, 1 for the second, etc.).
3.  **Agent Execution:** The `AI Agent` node attempts to run your prompt using the model selected by the router.
4.  **The Fallback Loop:**
    *   **On Success:** The workflow completes successfully.
    *   **On Error:** If the `AI Agent` node fails, its "On Error" output is triggered. This path loops back to the `Agent Variables` node, which increments the `fail_count` by 1. The process then repeats, causing the `Fallback Models` router to select the *next* model in the list.
5.  **Final Failure:** If all connected models are tried and fail, the workflow will stop with an error.

### Set up steps

**Setup time: ~3-5 minutes**

1.  **Configure Credentials:** Ensure you have the necessary credentials (e.g., for OpenAI, Google AI) configured in your n8n instance.
2.  **Define Your Model Chain:**
    *   Add the AI model nodes you want to use to the canvas (e.g., OpenAI, Google Gemini, Anthropic).
    *   Connect them to the **`Fallback Models`** node.
    *   **Important:** The order in which you connect the models determines the fallback order. The model nodes first created/connected will be tried first.
3.  **Set Your Prompt:** Open the **`AI Agent`** node and enter the prompt you want to execute.
4.  **Test:** Run the workflow. To test the fallback logic, you can temporarily disable the `First Model` node or configure it with invalid credentials to force an error.

## 📊 Basic Information

- **Workflow ID:** 5160
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1885
- **Downloads:** 188
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5160)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **@n8n/n8n-nodes-langchain.code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** (×4)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
