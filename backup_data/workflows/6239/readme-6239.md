# LinkedIn job search: auto-match resume with AI + cover letter & Telegram alerts

> ## Overview
This n8n templates helps you to authomatically search Linkeding jobs. It uses AI (Gemini or OpenAPI) to match your resume with each job description and write a sample cover letter for each job and update the job google sheet. You can receive daily matched linkedin job alerts by telegram.
## Prerequisites
- AI API Key from one model like:
	- [Google Gemini](https://aistudio.google.com/apikey)
	- [OpenAI](https://platform.openai.com/settings/organization/api-keys) 
- Telegram Bot Token - Create via @BotFather
- Google Sheets - [OAuth2 credentials](https://console.cloud.google.com/apis/)
- Google Drive - [OAuth2 credentials](https://console.cloud.google.com/apis/)
## Setup
### 1. Upload your resume
Upload your CV in PDF format in google drive and configure google drive node to read your resume from list of google drive files. You need to configure Google Drive OAuth2 and grant access to your drive before that. You can find useful infomration about how to configure Googel OAuth2 API key in [n8n documents](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/).
### 2. Create Google sheet
You need to create a google sheet document consist of two sheets, one sheet for define job filter criteria and second sheet to store job search result. You can download [this Google Sheet Template](https://docs.google.com/spreadsheets/d/1mtKVxj_z_QCLGXMx0mJVihWSgS41SzHfU1Rv4r_mRY0) and copy in your personal space. Then you can add your job filter in Google sheet. You can search job by keywords, location, remote type, job type and easy apply.
You need to configure Google Sheet OAuth2 and grant access to your drive before that.
### 3. Conifgure Telegram Bot
You need to create a new Telegram Bot in [@BotFather](https://telegram.me/BotFather) and insert API Key in Telegram node and you need to TELEGRAM_CHAT_ID to your telegram ID.


## 📊 Basic Information

- **Workflow ID:** 6239
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 32266
- **Downloads:** 3226
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6239)

## 👤 Author

- **Name:** Hojjat Jashnniloofar
- **Username:** @jashnniloofar

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **splitOut** 
- **splitInBatches** 
- **wait** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **extractFromFile** 
- **googleDrive** 
- **googleSheets** (×2)
- **telegram** 
- **code** 
- **scheduleTrigger** 
- **stickyNote** (×14)
- **httpRequest** (×2)
- **set** (×2)
- **html** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
