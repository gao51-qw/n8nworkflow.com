# Compare LLM token costs across 350+ models with OpenRouter

> ###  This n8n template lets you run prompts against 350+ LLM models and see exactly what each request costs with real-time pricing from OpenRouter

  Use cases are many: Compare costs across different models, plan your AI budget, optimize prompts for cost efficiency, or track expenses for client billing!

  ## Good to know

  - OpenRouter charges a platform fee on top of model costs. See [OpenRouter Pricing](https://openrouter.ai/pricing) for details.
  - You need an OpenRouter account with API credits. Free signup available with some free models included.
  - Pricing data is fetched live from OpenRouter's API, so costs are always up-to-date.

  ## How it works

  1. All available models are fetched from OpenRouter's API when you start.
  2. You select a model and enter your prompt via the form (or just use the chat).
  3. The prompt is sent to OpenRouter and the response is captured.
  4. Token usage (input/output) is extracted from the response using a LangChain Code node.
  5. Real-time pricing for your selected model is fetched from OpenRouter.
  6. The exact cost is calculated and displayed alongside your AI response.

  ## How to use

  - **Chat interface**: Quick testing - just type a prompt and get the response with costs.
  - **Form interface**: Select from all available models via dropdown, enter your prompt, and get a detailed cost breakdown.
  - Click **"Show Details"** on the result form to see the full breakdown (input tokens, output tokens, cost per type).

  ## Requirements

  - OpenRouter account with API key ([Get one here](https://openrouter.ai/settings/keys))

  ## Customising this workflow

  - Add a database node to log all requests and costs over time
  - Connect to Google Sheets for cost tracking and reporting
  - Extend with LLM-as-Judge evaluation to also check response quality

## 📊 Basic Information

- **Workflow ID:** 12100
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 68
- **Downloads:** 6
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12100)

## 👤 Author

- **Name:** Philflow
- **Username:** @philflow

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **executeWorkflowTrigger** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.code** 
- **filter** 
- **form** (×2)
- **splitOut** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.chat** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **executeWorkflow** (×2)
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
