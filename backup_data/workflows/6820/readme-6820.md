# Research-based article generator with OpenAI and web search for high SEO scores

> Generate research-backed article with n8n

## Who’s it for

Content marketers, SEO teams, and founders who need fast, research-grounded blog posts or long-form articles—multi-language included. Works well for teams that want citations, outlines, and section-by-section drafting with minimal manual effort.

## How it works / What it does

Use a  **Form** to collects domain, keywords, and target language.

The workflow refines keywords, finds recent articles and authoritative citations, then synthesizes a  master outline and loops through each section: generate search queries → fetch web results → summarize findings → write the section with the advanced model. 

Finally, it aggregates all sections into a clean Markdown article. Optional delivery nodes (Email, Telegram) and an AI Agent are included but disabled by default.&#x20;

## How to set up

1. Import the workflow JSON into n8n.
2. Add your **OpenAI** credential
3. Set `simple_model` / `advanced_model` in **LLM Params**

## Requirements

* n8n instance with outbound internet access.
* OpenAI API access (Responses API + `web_search_preview`).
* (Optional) Email/Telegram credentials if you want to deliver results async

## How to customize the workflow

* Edit prompts in **LLM Params** and **Section Prompts** to match tone, structure, and SEO style
* Tweak recency and source rules in **Search Articles** / **Search Citations**.&#x20;
* Insert a **human review step** before “Write Section”,  enable delivery nodes
* Change working/output languages in the **Language** node

## 📊 Basic Information

- **Workflow ID:** 6820
- **Complexity:** advanced
- **Node Count:** 65
- **Views:** 3071
- **Downloads:** 307
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6820)

## 👤 Author

- **Name:** Constantine Kissel
- **Username:** @kissel

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×16)
- **httpRequest** (×10)
- **code** (×10)
- **set** (×12)
- **noOp** (×5)
- **emailSend** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **splitInBatches** 
- **aggregate** (×2)
- **splitOut** (×2)
- **markdown** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 65 nodes with 43 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
