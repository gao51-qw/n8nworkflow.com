# AI-powered HR interview system with BeyondPresence

> ## What problem does it solve?

Manual candidate screening is time-consuming and inconsistent. This workflow automates initial interviews, providing 24/7 availability, consistent questioning, and objective assessments for every candidate.

## Who is it for?

- HR teams handling high-volume recruiting
- Small businesses without dedicated recruiters
- Companies scaling their hiring process
- Remote-first organizations needing asynchronous screening

## What this workflow does

Creates AI interviewers from job descriptions that conduct natural conversations with candidates via BeyondPresence Agents. Automatically analyzes interviews and saves structured assessments to Google Sheets.

## Setup



1. **Install Beyond Presence Community Node**: Beyond Presence has [verified community node](https://n8n.io/integrations/beyond-presence/) which you can install from node search panel easily.

	You must install beyondpresence node (available in node search) before copying workflow.


	**WALKTHROUGH [VIDEO](https://www.loom.com/share/9d116f62c51f411290aac373622773d7)**



2. **Copy template sheet**: [BeyondPresence HR Interview System Template](https://docs.google.com/spreadsheets/d/1dXLpP5bRRirBsln4YIQtFgb1MiP-0yR8IDRzse5k7X0/copy)
2. **Add credentials**:
   - BeyondPresence API Key
   - OpenAI API
   - Google Sheets
3. **Configure webhook** in BeyondPresence dashboard:
   `https://[your-n8n-production-webhook]`
4. **Paste job description** in "Your Job Description" node and run setup flow
5. **Share generated interview link** with candidates
6. **Get interview analysis in Google Sheet** As soon as candidates complete interview with you AI Agent you will start getting results in Google Sheet.

## How it works
1. **Agent Creation**: Converts job description into conversational AI interviewer
2. **Interview Conduct**: Candidates chat naturally with AI via shared link
3. **Webhook Trigger**: Completed interviews sent to n8n
4. **AI Analysis**: OpenAI evaluates responses against job requirements
5. **Results Storage**: Assessments saved to Google Sheets with scores and recommendations

## Resources
- [Google Sheets Template](https://docs.google.com/spreadsheets/d/1dXLpP5bRRirBsln4YIQtFgb1MiP-0yR8IDRzse5k7X0/copy)
- [BeyondPresence Documentation](https://docs.bey.dev/introduction)
- [Webhook Setup Guide](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)

## Example Use Case
Tech startup screens 200 applicants for engineering role. Creates AI interviewer in 2 minutes, sends link to all candidates. Receives structured assessments within 24 hours, identifying top 20 candidates for human interviews. Reduces initial screening time from 2 weeks to 2 days.

## 📊 Basic Information

- **Workflow ID:** 4514
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 3433
- **Downloads:** 343
- **Created:** 2025/5/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4514)

## 👤 Author

- **Name:** M Shehroz Sajjad
- **Username:** @mshehrozsajjad

## 🏷️ Categories

- HR
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×10)
- **code** (×3)
- **manualTrigger** 
- **n8n-nodes-beyondpresence.beyondPresence** (×2)
- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** (×3)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
