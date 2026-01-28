# Auto-generate product comparison pages with OpenAI & Google Sheets

> ## Auto-generate product comparison pages that help users buy faster

This workflow creates detailed "X vs Y" product comparison pages designed to help readers make faster, more confident purchase decisions — all with zero manual writing.

---

### How it works

- Triggered manually or via Google Sheets row
- Takes two product names as input (e.g. “Notion vs Evernote”)
- Uses AI to generate:
  - ✅ A compelling title and meta description
  - 📝 Clear feature-by-feature comparison
  - 🤝 Use-case-based recommendations
  - 💬 FAQ section tailored to user pain points
- Saves each section into a Google Sheet for review or publishing
- Final output can be exported to your CMS or website builder (like Dorik, Webflow, etc.)

---

### Set up steps

- You’ll need OpenAI and Google Sheets credentials
- Takes **10–15 minutes** to plug in your keys and connect the sheet
- Adjust prompts to match your brand tone or SEO goals

📝 You can easily expand this to generate pricing tables, testimonials, or even localized versions using the same structure.

---

Ideal for SaaS companies, affiliate marketers, or content teams who want to scale up comparison content — without spending hours writing.


## 📊 Basic Information

- **Workflow ID:** 5843
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 738
- **Downloads:** 73
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5843)

## 👤 Author

- **Name:** Abrar Sami
- **Username:** @abrarsami

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×18)
- **@n8n/n8n-nodes-langchain.agent** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×5)
- **googleSheets** (×11)
- **merge** (×2)
- **httpRequest** 
- **code** (×2)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
