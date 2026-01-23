# Optimize SEO meta tags in Google Sheets with Google Gemini

> 🔁 **Loop & Optimize Meta Tags with Google Gemini**

This workflow automates the shortening of meta titles and descriptions for SEO—directly from your Google Sheet, row by row, using Google Gemini.

✅ What it does
- Reads rows from a Google Sheet (meta_title, meta_description, row_index)
- Loops through each row and checks if content exists
- Sends the data to Google Gemini for length-optimized output
- Cleans and parses the response
- Updates the original sheet with the shortened results

🛠️ Setup Requirements
- Google Sheets (OAuth2 credentials connected in n8n)
- Google Gemini API key (configured in n8n credentials)

Sheet must contain:
- row_index
- meta_title
- meta_description

Output will be written into:
- meta_titleFixed
- meta_descriptionFixed



## 📊 Basic Information

- **Workflow ID:** 5411
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 978
- **Downloads:** 97
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5411)

## 👤 Author

- **Name:** Federico De Ponte
- **Username:** @fede

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **if** 
- **aggregate** 
- **googleSheets** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
