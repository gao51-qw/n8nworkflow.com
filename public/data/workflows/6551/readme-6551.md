# Automate cryptocurrency analysis & reports with Google Gemini and CoinGecko email alerts

> ```markdown
## Automated Cryptocurrency Analysis & Reporting with Google Gemini and CoinGecko  
This powerful template is an **n8n workflow** that automates cryptocurrency market data analysis and delivers reports directly to your inbox. It fetches real-time data from CoinGecko API, generates AI-powered analysis, and sends the report via email.  

### Features  
- **Scheduled Execution**: Runs automatically at a set time daily (default: 10:00 AM).  
- **Customizable Analysis**: Personalize analysis content/language via "AI Prompt" nodes.  
- **Easy Scalability**: Duplicate node groups to add more cryptocurrencies.  
- **Flexible AI Integration**: Defaults to Google Gemini, but supports ChatGPT/Ollama.  

### Setup Instructions  
1. **n8n Installation**: Install n8n (self-hosted or Cloud version).  
2. **Email Account Setup**:  
   - Add email service credentials in n8n (e.g., Microsoft Outlook OAuth2).  
3. **AI Model Credentials (Google Gemini)**:  
   - Obtain API key from Google AI Studio and add to n8n "Credentials".  
4. **Import Template**: Copy the JSON code into n8n as a new workflow.  

### Customization  
- **Change Cryptocurrencies**: Update `ids=` parameter in HTTP Request nodes (e.g., `ids=bitcoin`).  
- **Edit AI Prompt**: Modify text in "AI Prompt" nodes.  
- **Use Different AI Model**: Replace Google Gemini with supported alternatives.  
- **Update Email Address**: Change recipient in "Send Mail" nodes.  
```

## 📊 Basic Information

- **Workflow ID:** 6551
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 939
- **Downloads:** 93
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6551)

## 👤 Author

- **Name:** ömerDrn
- **Username:** @duran

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×6)
- **set** (×4)
- **microsoftOutlook** (×4)
- **httpRequest** (×4)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
