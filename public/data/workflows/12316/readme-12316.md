# Synthesize and compare multiple LLM responses with OpenRouter council

> This template adapts Andrej Karpathy’s **LLM Council** concept for use in **n8n**, creating a workflow that collects, evaluates, and synthesizes multiple large language model (LLM) responses to reduce individual model bias and improve answer quality.

## 🎯 The gist

This LLM Council workflow acts as a moderation board for multiple LLM “opinions”:

- The same question is answered independently by several models.
- All answers are anonymized.
- Each model then evaluates and ranks *all* responses.
- A designated **Council Chairman** model synthesizes a final verdict based on these evaluations.
- The final output includes:
  - The original query
  - The Chairman’s verdict
  - The ranking of each response by each model
  - The original responses from all models

The goal is to reduce single‑model bias and arrive at more balanced, objective answers.

## 🧰 Use cases

This workflow enables several practical applications:

- Receiving more balanced answers by combining multiple model perspectives
- Benchmarking and comparing LLM responses
- Exploring diverse viewpoints on complex or controversial questions

## ⚙️ How it works

- The workflow leverages **OpenRouter**, allowing access to many LLMs through a single API credential.
- In the **Initialization** node, you define:
  - **Council member models**: Models that answer the query and later evaluate all responses
  - **Chairman model**: The model responsible for synthesizing the final verdict
- Any OpenRouter-supported model can be used: https://openrouter.ai/models
- For simplicity:
  - Input is provided via a Chat Input trigger
  - Output is sent via an email node with a structured summary of the council’s results

## 👷 How to use

- Select the LLMs to include in your council:
  - **Council member models**: Models that independently answer and evaluate the query. The default template uses:
    - openai/gpt-4o
    - google/gemini-2.5-flash
    - anthropic/claude-sonnet-4.5
    - perplexity/sonar-pro-search
  - **Chairman model**: Choose a model with a sufficiently large context window to process all evaluations and rankings.
- Start the Chat Input trigger.
- Observe the workflow execution and review the synthesized result in your chosen output channel.

⚠️ Avoid using too many models simultaneously. The total context size grows quickly (n responses + n² evaluations), which may exceed the Chairman model’s context window.

## 🚦 Requirements

- **OpenRouter API access** configured in n8n credentials
- **SMTP credentials** for sending the final council output by email (or replace with another output method)

## 🤡 Customizing this workflow

- Replace the Chat Input trigger with alternatives such as Telegram, email, or WhatsApp.
- Redirect output to other channels instead of email.
- Modify council member and chairman models directly in the Initialization node by updating their OpenRouter model names.


## 📊 Basic Information

- **Workflow ID:** 12316
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 15
- **Downloads:** 1
- **Created:** 2025/12/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12316)

## 👤 Author

- **Name:** Ulf Morys
- **Username:** @syrom

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **set** (×10)
- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **httpRequest** (×3)
- **stickyNote** (×6)
- **aggregate** (×2)
- **emailSend** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
