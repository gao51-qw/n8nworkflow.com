# Talk to your Google Sheets using ChatGPT-5

> This n8n workflow template creates an intelligent data analysis chatbot that can answer questions about data stored in Google Sheets using OpenAI's GPT-5 Mini model. The system automatically analyzes your spreadsheet data and provides insights through natural language conversations.

## What This Workflow Does

- **Chat Interface**: Provides a conversational interface for asking questions about your data
- **Smart Data Analysis**: Uses AI to understand column structures and data relationships
- **Google Sheets Integration**: Connects directly to your Google Sheets data
- **Memory Buffer**: Maintains conversation context for follow-up questions
- **Automated Column Detection**: Automatically identifies and describes your data columns

## 🚀 Try It Out!

---

### 1. Set Up OpenAI Connection

#### Get Your API Key
1. Visit the [OpenAI API Keys](https://platform.openai.com/api-keys) page.
2. Go to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview).
3. Add funds to your billing account.
4. Copy your API key into your **OpenAI credentials** in n8n (or your chosen platform).

---

### 2. Prepare Your Google Sheet

#### Connect Your Data in Google Sheets
- Data must follow this format: [Sample Marketing Data](https://docs.google.com/spreadsheets/d/1UDWt0-Z9fHqwnSNfU3vvhSoYCFG6EG3E-ZewJC_CLq4/edit?gid=365710158#gid=365710158)
- **First row** contains column names.
- Data should be in **rows 2–100**.
- Log in using **OAuth**, then select your workbook and sheet.

---

### 3. Ask Questions of Your Data

You can ask natural language questions to analyze your marketing data, such as:
- **Total spend** across all campaigns.
- **Spend for Paid Search only**.
- **Month-over-month changes** in ad spend.
- **Top-performing campaigns** by conversion rate.
- **Cost per lead** for each channel.

---

## 📬 Need Help or Want to Customize This?
📧 [rbreen@ynteractive.com](mailto:rbreen@ynteractive.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)
🔗 [n8n Automation Experts](https://ynteractive.com/)


## 📊 Basic Information

- **Workflow ID:** 7449
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 4741
- **Downloads:** 474
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7449)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **googleSheetsTool** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
