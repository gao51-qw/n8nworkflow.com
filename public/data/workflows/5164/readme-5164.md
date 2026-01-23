# LinkedIn engagement automator with GPT-4o/Claude, human review & multilingual comments

> Automate LinkedIn engagement without sounding like a bot.
This workflow:
🌍 Detects language & tone (German / English)
👍 Chooses the right reaction (like / celebrate / support …)
🗣 Generates a personalised comment in your voice and mentions the author
📲 Optional Telegram review – approve ✅ or regenerate ❌ before posting
💸 Runs on cost-efficient GPT-4o mini or Claude 3.5 Haiku
☁️ Publishes comment + reaction via the Unipile API
Setup (≈ 15-30 min)
Unipile – connect LinkedIn → copy account_id, dsn, then create an Access-Token (X-API-KEY).
Telegram (optional) – create a bot, add a credential named YOUR TELEGRAM ACCOUNT.
OpenAI / Anthropic – add your API key and keep one LLM node (delete the other).
Open the “Defining guardrails” node and replace the credential placeholders.
(Optional) Tweak role, comment_length and openers_example_1-3 for your brand voice.
Security: no live keys included – all secrets are placeholders.
Best for: solopreneurs, marketing teams, personal-branding consultants.

## 📊 Basic Information

- **Workflow ID:** 5164
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1673
- **Downloads:** 167
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5164)

## 👤 Author

- **Name:** Stefan
- **Username:** @stefan

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **if** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **filter** 
- **telegram** 
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
