# Automate content research with Reddit scraping, AI analysis, and Google Sheets

> # Workflow Summary

This workflow automatically scrapes new Reddit posts from your chosen subreddits and keywords, analyzes them with AI to extract summaries, pain points, and content angles, and then saves the insights into a Google Sheet. It’s a fully automated Content Research Engine that delivers fresh marketing ideas and community pain points straight into your database.


# Setting up the workflow

1. Connect Reddit
	•	In n8n, create a Reddit credential.
	•	Add the subreddits and keywords you want to track.

2. Connect Google Sheets
	•	Make a copy of the database sheet.
	•	Connect your Google account in n8n.

3. Connect OpenAI
	•	Add your OpenAI API key as a credential.
	•	The AI will summarize posts, extract pain points, and suggest content ideas.

4. Run the workflow
	•	The workflow will search Reddit on a schedule.
	•	Results are processed by AI and automatically added to your Google Sheet.



## 📊 Basic Information

- **Workflow ID:** 8140
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3205
- **Downloads:** 320
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8140)

## 👤 Author

- **Name:** Michael Taleb
- **Username:** @michaeltaleb

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **reddit** (×3)
- **merge** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
