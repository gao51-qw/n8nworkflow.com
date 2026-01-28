# Generate content strategy reports analyzing Reddit, YouTube & X with Gemini

> 
### **Description**

This workflow provides a powerful AI assistant for content creators, book editors, and marketers. It automates the collection and analysis of trending discussions from Reddit, YouTube, and X (Twitter), generating insightful topic reports. This frees you from hours of tedious data compilation, allowing you to make faster, more accurate topic decisions based on deep AI analysis.

### **How it works**

This workflow simulates the complete research process of a strategic editor:

1.  **Initiate & Collect**: A user submits a keyword via a public Form Trigger. The workflow then automatically fetches relevant, trending content in parallel from the official APIs of Reddit, YouTube, and X (Twitter).

2.  **Multi-stage AI Processing & Analysis**: The workflow utilizes a layered AI pipeline to process the data.
    * First, a lightweight Gemini model in the `AI Pre-filter Content` node rapidly screens the vast amount of content to filter out noise.
    * Next, a more powerful Gemini Pro model in the `AI Deep Analysis` node performs a detailed, structured analysis on each high-value item, extracting summaries, sentiment, and key arguments.
    * Finally, a "strategist" AI model in the `AI Synthesize Final Report` node aggregates all analyses to generate the comprehensive final topic report in HTML.

3.  **Multi-Channel Report Distribution**: The workflow distributes the final report to multiple channels based on pre-defined templates. The `Send Gmail Report` node sends the complete HTML report. The `Send Feishu Notification` node sends a concise summary card to a group chat. Meanwhile, the `Archive to Google Sheets` node archives key data.

### **Setup Steps**

This workflow takes approximately 20-30 minutes to set up, with most of the time spent connecting your accounts.

1.  **Connect Your API Accounts**: In the n8n `Credentials` section, you will need to prepare and connect credentials for the following services:
    * **Google**: For the Gemini AI model, Gmail sending, and Google Sheets archiving. This requires a Google Cloud API Key and OAuth2 credentials.
    * **Reddit**: For fetching Reddit posts. This requires a Reddit account with OAuth2 configured in n8n to allow searches.
    * **YouTube**: For collecting YouTube videos. You'll need to enable the YouTube Data API v3 in your Google Cloud Console and get an API Key.
    * **Twitter**: For the official Twitter node, requiring a free developer account and an App with v2 API access.

2.  **Configure Output Channels**: In the final nodes (`Send Gmail Report`, `Send Feishu Notification`, `Archive to Google Sheets`), update the recipient email address, the Feishu bot's Webhook URL, and the target spreadsheet ID to match your own.

3.  **Activate and Share the Trigger**: Activate the workflow. The first `Form Trigger` node will automatically generate a public URL. Share this link with your team members to let them start using the tool.

## 📊 Basic Information

- **Workflow ID:** 5375
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 4226
- **Downloads:** 422
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5375)

## 👤 Author

- **Name:** Sheryl
- **Username:** @lysnow

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×5)
- **splitInBatches** 
- **stickyNote** (×3)
- **formTrigger** 
- **set** (×5)
- **reddit** 
- **splitOut** 
- **twitter** 
- **code** (×4)
- **merge** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **if** 
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
