# Seo blog generator with GPT-4o, Perplexity, and Telegram integration

> ### SEO Blog Generator with GPT-4o, Perplexity, and Telegram Integration

This workflow helps you automatically generate SEO-optimized blog posts using **Perplexity.ai**, **OpenAI GPT-4o**, and optionally **Telegram** for interaction.

---

### 🚀 Features

- 🧠 **Topic research** via Perplexity sub-workflow
- ✍️ **AI-written blog post** generated with GPT-4o
- 📊 Structured output with metadata: title, slug, meta description
- 📩 Integration with Telegram to trigger workflows or receive outputs (optional)

---

### ⚙️ Requirements

- ✅ OpenAI API Key (GPT-4o or GPT-3.5)
- ✅ Perplexity API Key (with access to `/chat/completions`)
- ✅ (Optional) Telegram Bot Token and webhook setup

---

### 🛠 Setup Instructions

1. **Credentials**:
   - Add your OpenAI credentials (`openAiApi`)
   - Add your Perplexity credentials under `httpHeaderAuth`
   - Optional: Setup Telegram credentials under `telegramApi`

2. **Inputs**:
   - Use the **Form Trigger** or **Telegram** input node to send a `Research Query`

3. **Subworkflow**:
   - Make sure to import and activate the subworkflow `Perplexity_Searcher` to fetch recent search results

4. **Customization**:
   - Edit prompt texts inside the `Blog Content Generator` and `Metadata Generator` to change writing style or target industry
   - Add or remove output nodes like Google Sheets, Notion, etc.

---

### 📦 Output Format

The final blog post includes:

- ✅ Blog content (1500-2000 words)
- ✅ Metadata: title, slug, and meta description
- ✅ Extracted summary in JSON
- ✅ Delivered to Telegram (if connected)

---

Need help? Reach out on the [n8n community forum](https://community.n8n.io)


## 📊 Basic Information

- **Workflow ID:** 3672
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 5476
- **Downloads:** 547
- **Created:** 2025/4/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3672)

## 👤 Author

- **Name:** HoangSP
- **Username:** @hoangsp

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **merge** 
- **formTrigger** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **telegramTrigger** 
- **telegram** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
