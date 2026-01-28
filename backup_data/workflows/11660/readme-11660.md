# Generate consensus answers with multiple AI models & peer review system

> ## AI Council: Multi-Model Consensus with Peer Review

**Inspired by [Andrej Karpathy's LLM Council](https://github.com/karpathy/llm-council)**, but rebuilt in n8n.

This workflow creates a "council" of AI models that independently answer your question, then peer-review each other's responses before a final arbiter synthesizes the best answer.

---

## Who is this for?

- If you want to prepare for an upcoming meeting with different people and prep for their different views
- find any "blind spots" in your view on a certain subject
- Researchers wanting more robust AI-generated answers
- Developers exploring multi-model architectures
- Anyone seeking higher-quality responses through AI consensus, potentially with faster/cheaper models.
- Teams evaluating different LLM capabilities side-by-side

---

## How it works

1. **Ask a Question** — Submit your query via the Chat Trigger
2. **Individual Answers** — Four different models (Gemini, Llama, Gemma, Mistral) independently generate responses
3. **Peer Review** — Each model reviews ALL answers, identifying pros, cons, and overall assessment
4. **Final Synthesis** — DeepSeek R1 analyzes all peer reviews and produces a refined, consensus-based final answer

---

## Setup Instructions

### Prerequisites
- Access to an LLM (e.g. [OpenRouter](https://openrouter.ai/) account with API credits)

### Steps
1. **Create OpenRouter credentials** in n8n:
   - Go to *Settings → Credentials → Add Credential*
   - Select "OpenRouter" and paste your API key
2. **Connect all model nodes** to your OpenRouter credential. In this example I used Gemini, Llama, Gemma, Mistral and Deepseek, but you can use whatever you want. You can also use the same models, but change their parameters. Play around to find out what suits you best.
3. **Activate the workflow** and open the Chat interface to test

---

## Customization Ideas

- You can add as many answer and review models as you want. Do note that each AI node is executed in series, so each will add to the total duration.
- Swap models via OpenRouter's model selector (e.g., use Claude, GPT-4, etc.)
- Adjust the peer review prompt to represent a certain persona or with domain-specific evaluation criteria
- Add memory nodes for multi-turn conversations
- Connect to Slack/Discord instead of the Chat Trigger


## 📊 Basic Information

- **Workflow ID:** 11660
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 415
- **Downloads:** 41
- **Created:** 2025/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11660)

## 👤 Author

- **Name:** Guido X Jansen
- **Username:** @gxjansen

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×5)
- **merge** (×2)
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.chainLlm** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
