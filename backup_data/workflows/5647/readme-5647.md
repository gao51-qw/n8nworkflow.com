# Clean company names for cold emails with GPT-4 Mini and Google Sheets

> ## Overview
In cold email campaigns, the lead's company name is the 2nd most frequently inserted variable after their first name. They're critical for effective cold email personalization. However, company names are often messy and can contain taglines, legal suffixes (e.g. LLC, Inc.), and other variations that would never be written out by a human in an email.

If your email starts with "I came across Techwave Solutions LLC on LinkedIn...", it's a dead giveaway that you're sending a tempalted email and a response is much less likely. 

This simple workflow uses AI to clean up messy company names in a Google Sheet so that your cold email campaigns can achieve better results. 

## How It Works
1. A form is submitted with a Google Sheet url
2. The workflow grabs the leads and uses an LLM node to clean the company names
3. The updated leads are saved back in a new sheet within the original spreadsheet

## Setup Steps
1. Add your Google Sheets and OpenAI (or your AI model provider of choice) credentials to n8n
2. Create a Google Sheet with your list of leads. **IMPORTANT**: the sheet MUST have a column called "Company"
3. (Optional). The AI workflow has a highly optimized system prompt. However, you may achieve better results by updating the list of examples in the prompt with companies (real or fake) in the industry you're targeting.

If you have any questions or feedback about this workflow, or would like me to build custom workflows for your business, email me at n8n@paperjam.agency.

## 📊 Basic Information

- **Workflow ID:** 5647
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 742
- **Downloads:** 74
- **Created:** 2025/7/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5647)

## 👤 Author

- **Name:** James Francis
- **Username:** @paperjam

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **merge** 
- **set** 
- **formTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
