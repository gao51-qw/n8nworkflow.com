# Automate multi-platform social media lookup from Google Sheets with Gemini AI

> ## 📌 Who’s it for

This template is designed for **campaigners, researchers, and organizers who need to enrich spreadsheets of contacts with publicly available social media profiles**. Ideal for advocacy campaigns, outreach, or digital organizing where fast, scalable people lookup is needed.

## ⚙️ What it does

This workflow scans a Google Sheet for rows marked as unanalysed (`"Analysed?" = false`), sends each contact to a dedicated AI-powered research agent, and returns structured public profile links across major platforms like:

- Twitter/X  
- LinkedIn  
- Facebook  
- Instagram  
- GitHub  
- TikTok  
- YouTube  
- Reddit  
- Threads  
- Medium  
- Substack  
- And more (18+ total)

It processes one contact per run for clarity and stability, appending the results back to the original Google Sheet.

## 🛠️ How to set it up

1. **Copy the [Google Sheet template](https://docs.google.com/spreadsheets/d/1nZ8a7MCU-Ku99cRsBkyer-zUPUb-QcMBzovzU3E-IH4/edit?usp=sharing)**  
   → This sheet includes sample columns and headers for contacts and social profile fields.
2. Paste your contact list at the end of the sheet.
3. For each new contact, make sure the **"Analysed?"** column is set to `false`.
4. Clone this workflow and [the AI Research Agent subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/).
5. Connect your Google Sheets account in n8n.
6. Update the workflow with your sheet ID and sheet name (`Sheet1` by default).
7. Trigger the workflow on a schedule (e.g. every 15 minutes) or run it manually.

## ✅ Requirements

- **Google Sheets integration** set up in n8n
- Access to [this AI research subworkflow](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/)  
- OpenRouter API key
- n8n (self-hosted or cloud)

## 🧩 How to customize the workflow

- Modify the research agent to prioritize specific platforms or return only verified profiles.
- Add more profile columns to the Google Sheet and schema to match your custom fields.
- Add logic to send alerts (email, Slack, etc.) for specific contacts.
- Use an n8n webhook instead of a schedule to run the process on demand.
- Use a loop over all items to process all rows sequentially (only recommended for small datasets due to memory constraints)

## 📊 Basic Information

- **Workflow ID:** 6673
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1014
- **Downloads:** 101
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6673)

## 👤 Author

- **Name:** Open Paws
- **Username:** @openpaws

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleSheets** (×2)
- **filter** 
- **limit** 
- **executeWorkflow** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
