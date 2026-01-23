# AI-generated LinkedIn posts with human approval using GPT-4, GoToHuman & Blotato

> 

This workflow is designed for creators, marketers, and agencies who want to automate content publishing while keeping quality control through human review. It integrates four powerful tools — **Google Sheets**, **OpenAI**, **GoToHuman**, and **Blotato** — to deliver a seamless AI-assisted, human-approved, auto-publishing system for LinkedIn.

---

## ⚙️ What This Workflow Does

1. **📅 Pulls Today’s Topic from Google Sheets**  
   - You store ideas in a spreadsheet with a date column.  
   - The workflow runs daily (or manually) and selects the row matching today’s date.

2. **🧠 Generates a Caption with OpenAI**  
   - The selected idea is passed to GPT-4 via an AI Agent node.  
   - OpenAI returns a short, emoji-rich LinkedIn caption (1–2 sentences).  
   - The result is saved back to the sheet.

3. **👤 Sends the Caption for Human Review via GoToHuman**  
   - A human reviewer sees the AI-generated caption.  
   - They approve or reject it using a GoToHuman review template.  
   - Only approved captions move forward.

4. **🚀 Publishes the Approved Caption to LinkedIn via Blotato**  
   - The caption is posted to a LinkedIn account via Blotato's API.  
   - No additional input is required — it's fully automated after approval.

---

## 🔧 Setup Requirements

### ✅ Google Sheets
- Create or copy the provided sample sheet.
- Connect your Google Sheets account in n8n using OAuth2.

### ✅ OpenAI
- Create an API key at [platform.openai.com](https://platform.openai.com/account/api-keys).
- Add it to n8n as an OpenAI credential.

### ✅ GoToHuman
- Create an account and a Review Template at [gotohuman.com](https://gotohuman.com).
- Add your API credential in n8n and use your `reviewTemplateId` in the node.

### ✅ Blotato
- Create an account at [blotato.com](https://blotato.com).
- Get your API key and Account ID.
- Insert them into the HTTP Request node that publishes the LinkedIn post.

---

## 🧪 Testing the Workflow

- Use the **Manual Trigger** node for step-by-step debugging.  
- Review nodes like `AI Agent`, `Ask Human for Approval`, and `Post to LinkedIn` to verify output.  
- Once confirmed, activate the schedule for fully hands-free publishing.

---

## 👋 Built By

**Robert Breen**  
Founder of Ynteractive — Automation, AI, and Data Strategy

🌐 Website: [https://ynteractive.com](https://ynteractive.com)  
📧 Email: [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 LinkedIn: [https://www.linkedin.com/in/robert-breen-29429625/](https://www.linkedin.com/in/robert-breen-29429625/)  
📺 YouTube: [YnteractiveTraining](https://www.youtube.com/@ynteractivetraining)

---

## 🏷 Tags

`linkedin` `openai` `gotohuman` `social automation` `ai content` `approval workflow` `google sheets` `blotato` `marketing automation`


## 📊 Basic Information

- **Workflow ID:** 6827
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1000
- **Downloads:** 100
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6827)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** 
- **manualTrigger** 
- **googleSheets** (×3)
- **code** 
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@gotohuman/n8n-nodes-gotohuman.gotoHuman** 
- **filter** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
