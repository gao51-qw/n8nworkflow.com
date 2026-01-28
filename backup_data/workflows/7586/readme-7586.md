# Generate marketing campaign ROI reports with Google Sheets, GPT-4o and Email

> This n8n workflow pulls campaign data from Google Sheets, summarizes it using OpenAI, and sends a performance recap via Outlook email.

---

### ✅ Step 1: Connect Google Sheets

1. In n8n, go to **Credentials** → click **New Credential**
2. Select **Google Sheets OAuth2 API**
3. Log in with your Google account and authorize
4. Use a spreadsheet with:
   - Column names in the first row  
   - Data in rows 2–100  
5. Example format: [📄 Sample Marketing Sheet](https://docs.google.com/spreadsheets/d/1UDWt0-Z9fHqwnSNfU3vvhSoYCFG6EG3E-ZewJC_CLq4/edit?usp=sharing)

---

### ✅ Step 2: Connect OpenAI

1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Make sure you have a payment method set under [Billing](https://platform.openai.com/settings/organization/billing/overview)
3. In n8n, create a new **OpenAI API** credential
4. Paste your API key and save

---

### 📬 Need Help?

Feel free to contact me if you run into issues:

- 📧 robert@ynteractive.com  
- 🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)


## 📊 Basic Information

- **Workflow ID:** 7586
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 625
- **Downloads:** 62
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7586)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **summarize** (×2)
- **aggregate** (×2)
- **merge** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
