# Parse & evaluate HR candidates with GPT-4.1 and LinkedIn data in CSV/XLSX

> # AI-Powered HR Candidate Evaluation Agent with LinkedIn Data Enrichment in CSV/XLSX Format

## 🎯 Overview

Transform your manual hiring process into an intelligent evaluation system that saves 15-20 minutes per candidate! This workflow automates the entire candidate assessment pipeline - from CSV/XLSX upload to AI-powered scoring with LinkedIn insights.

When you upload a candidate list, this workflow automatically:
- 📊 Converts your file into a formatted Google Sheet with RTL support
- 🔍 Researches each candidate's recent LinkedIn posts via Apify
- 🤖 Evaluates candidates using GPT-4.1 with context-aware scoring (0-100)
- 💬 Generates professional Hebrew explanations for each score
- 📈 Auto-sorts by score and applies professional formatting
- ⚠️ Sends error alerts to keep everything running smoothly

**Cost per candidate: ~$0.05** | **Time saved: 15-20 minutes each**

## 👥 Who's it for?

- HR teams drowning in candidate applications
- Recruitment agencies needing consistent evaluation criteria  
- Hiring managers seeking data-driven candidate insights
- Companies looking to scale their team
- Anyone tired of manual spreadsheet juggling

## ⚡ How it works

1. **Form submission** triggers with CSV/XLSX upload
2. **Google Drive** stores the file and creates a new Sheet
3. **Data extraction** processes the file content
4. **AI Agent** loops through each candidate:
   - Fetches up to 3 recent LinkedIn posts via Apify
   - Analyzes qualifications against job requirements
   - Generates evaluation score and Hebrew explanation
5. **Sheet formatting** applies filters, sorting, and styling
6. **Error handling** notifies admin of any issues

## 🛠️ Setup Instructions

**Time to deploy: 15 minutes**

### Requirements:
- Google account (Drive + Sheets access)
- OpenAI API key (GPT-4.1 access)
- Apify API key (for LinkedIn scraping)
- Gmail account (for error notifications)

### Step-by-step:
1. Import this template into your n8n instance
2. Configure Google credentials:
   - Connect Google Drive OAuth2
   - Connect Google Sheets OAuth2
3. Add OpenAI API key to the GPT-4.1 node
4. Set up Apify credentials for LinkedIn scraping
5. Configure Gmail for error alerts (update email in "Send a message" node)
6. Update folder IDs in Google Drive nodes to your folders
7. Test with a sample CSV containing 2-3 candidates
8. Activate and share the form URL with your team!

## 📋 Input File Format

Your CSV/XLSX should include these columns (Hebrew):
- שם פרטי (First name)
- שם משפחה (Last name)  
- חשבון לינקדאין (LinkedIn URL)
- Your custom evaluation questions

## 🎨 Customization Options

### Easy tweaks:
- **Scoring criteria**: Modify the AI agent's system message
- **Language**: Switch from Hebrew to any language
- **Scoring rubric**: Adjust the 50/25/15/10 weighting
- **LinkedIn posts**: Change from 3 posts to more/fewer
- **Sheet styling**: Customize colors and formatting

### Advanced modifications:
- Add integration with your ATS (Greenhouse, Lever, etc.)
- Connect to Slack for real-time notifications
- Add multiple evaluation agents for different roles
- Implement multi-language support
- Add candidate email automation

## 💡 Pro Tips

- **Better LinkedIn data**: Ensure candidates provide complete LinkedIn URLs (not just usernames)
- **Consistent scoring**: Run batches of similar roles together for normalized scoring
- **Cost optimization**: Adjust Apify settings to fetch only essential data
- **Scale smartly**: Process in batches of min 10-20 for optimal performance

## ⚠️ Important Notes

- LinkedIn scraping respects Apify's rate limits
- Scores are relative within each batch - don't compare across different job roles
- The workflow handles both CSV and XLSX formats automatically
- Error notifications help you catch issues before they cascade

## 📊 Expected Results

After implementation, expect:
- Data-driven evaluation across candidates
- Professional explanation for hiring decisions
- Happy recruiters who can focus on human connection

## Built with ❤️ by [Elay Guez](https://www.linkedin.com/in/elay-g)

## 📊 Basic Information

- **Workflow ID:** 8775
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 446
- **Downloads:** 44
- **Created:** 2025/9/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8775)

## 👤 Author

- **Name:** Elay Guez
- **Username:** @elay96

## 🏷️ Categories

- HR
- AI Chatbot

## 🔗 Nodes Used

- **formTrigger** 
- **noOp** 
- **merge** (×2)
- **googleSheets** (×4)
- **googleDrive** (×3)
- **extractFromFile** (×2)
- **code** 
- **set** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheetsTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@apify/n8n-nodes-apify.apifyTool** (×2)
- **switch** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
