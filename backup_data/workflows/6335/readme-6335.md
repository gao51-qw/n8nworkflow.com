# Task deadline reminders with Google Sheets, ChatGPT, and Gmail

> ## Intro
This template is for **project managers**, **team leads**, or **anyone** who wants to automatically remind teammates of tasks due today—no manual copy‑and‑paste required.

## How it works
1. **Schedule Trigger** runs every morning at 8 AM.  
2. **Google Sheets** node reads your “Tasks” sheet.  
3. **If** node filters rows where **Due Date = today**.  
4. **Summarize (ChatGPT HTTP Request)** generates a friendly reminder per person.  
5. **Message a model** sends the prompt to your ChatGPT Assistant and returns the AI response.  
6. **Send a message (Gmail)** emails each assignee their personalized reminder.

## Required Google Sheet Structure
| Column Name | Type   | Example                   | Notes                   |
|-------------|--------|---------------------------|-------------------------|
| Name        | string | Alice Johnson             | Person to remind        |
| Email       | string | user@example.com          | Recipient email address |
| Task        | string | Submit quarterly report   | Task description        |
| Due Date    | date   | 2025‑07‑29                | Format: YYYY‑MM‑DD       |

## Detailed Setup Steps
1. **Google Sheets**  
   - Create your sheet with the columns above.  
   - In n8n → Credentials, add **Google Sheets API** (do not include real sheet IDs in the name).  
2. **ChatGPT Assistant**  
   - In the OpenAI Dashboard → Assistants, click **Create Assistant**.  
   - Choose a model (e.g., `gpt-4`), copy the **Assistant ID**.  
   - In n8n → Credentials → OpenAI, add your **API Key** and **Assistant ID**.  
3. **Gmail**  
   - In n8n → Credentials → Gmail (OAuth2 or SMTP), connect your account without embedding your real address in the credential name.  
4. **Import & Configure**  
   - Export this workflow’s JSON (three‑dot menu → Export).  
   - Paste it under **Template Code** in the Creator form.  
   - In each node, select your **Google Sheets**, **OpenAI**, and **Gmail** credentials.  
5. **Sticky Notes**  
   - A note on the Schedule node: _“Set your desired run time.”_  
   - A note on the ChatGPT node: _“Customizes reminder text.”_  
   - A note on the Gmail node: _“Sends reminder email.”_

## Customization Guidance
- **Change schedule**: edit the Cron expression in **Schedule Trigger**.  
- **Adjust tone**: modify the system prompt in your ChatGPT Assistant.  
- **Email format**: update **Subject** and **Body** in the Gmail node.  
- **Batch processing**: insert a **SplitInBatches** node before Summarize for large sheets.

## Troubleshooting
- Ensure your Google Sheet is shared with the connected service account.  
- Verify **Due Date** format (`YYYY‑MM‑DD`).  
- If ChatGPT fails, check your API key and quota.

## Security & Best Practices
- **Do not** hard‑code API keys, sheet IDs, or real emails.  
- Use **n8n Credentials** or environment variables only.  
- Remove any private information before submitting.


## 📊 Basic Information

- **Workflow ID:** 6335
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 849
- **Downloads:** 84
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6335)

## 👤 Author

- **Name:** Yar Malik (Asfandyar)
- **Username:** @yar

## 🏷️ Categories

- Project Management
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **googleSheets** 
- **if** 
- **summarize** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
