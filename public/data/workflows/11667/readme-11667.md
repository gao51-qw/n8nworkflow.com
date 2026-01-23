# Batch resume analysis with Google Gemini AI and Google Sheets

> ### How it works
You have several resumes you need to review manually? well this workflows allows you to upload upto 20 bunches pdf at once. AI does the heavy lifting, saving time, reducing repetive tasks and achieving high accuracy.

The job description and qualificattion goes under the agent System message.

### Setup steps.
It will take you roughly 20minutes to finish setting up this workflow.
**n8n Form** Allow multiple file submission
**JavaScript Code** allow mapping of each file individually
**System message** adjust the system message to fit the job description and qualification.
**Google Sheet** [make a copy](https://docs.google.com/spreadsheets/d/1XbMRGqX6N2xP92ZF73LFd09f-PVmGefaAlwOwR980Jk/edit?gid=0#gid=0)

## 📊 Basic Information

- **Workflow ID:** 11667
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 186
- **Downloads:** 18
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11667)

## 👤 Author

- **Name:** Shadrack
- **Username:** @shadrack

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheets** 
- **aggregate** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
