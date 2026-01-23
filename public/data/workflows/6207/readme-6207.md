# Automate CV screening with GPT-4o-mini: Gmail to Google Sheets HR evaluation system

> # AI-Powered HR Workflow: CV Analysis and Evaluation from Gmail to Sheets

![Workflow Screenshot](https://www.dr-firas.com/AI-Powered-HR-Workflow-CV-Analysis.png)

### Who is this for?

This workflow is designed for HR professionals, recruiters, startup founders, and operations teams who receive candidate resumes by email and want to automate the evaluation process using AI.

It's ideal for teams that receive high volumes of applications and want to streamline screening without sacrificing quality.

### What problem is this workflow solving?

Manually reviewing every resume is time-consuming, inconsistent, and often inefficient. This workflow automates the initial screening process by:

- Extracting resume data directly from incoming emails
- Analyzing resumes using GPT-4 to evaluate candidate fit
- Saving scores and notes in Google Sheets for easy filtering

It helps teams qualify candidates faster while staying organized.

### What this workflow does

1. Detects when a new email with a CV is received (Gmail)
2. Filters out non-relevant messages using an AI classifier
3. Extracts the resume text (PDF parsing)
4. Uploads the original file to Google Drive
5. Retrieves job offer details from a connected Google Sheet
6. Uses GPT-4 to evaluate the candidate’s fit for the job
7. Parses the AI output to extract the candidate's score
8. Logs the results into a central Google Sheet
9. Sends a confirmation email to the applicant

### Setup

1. Install **n8n self-hosted**
2. Add your **OpenAI API Key** in the AI nodes
3. Enable the following APIs in your [Google Cloud Console](https://console.cloud.google.com):
   - Gmail API
   - Google Drive API
   - Google Sheets API
4. Create OAuth credentials and connect them in n8n
5. Configure your **Gmail trigger** to watch the inbox receiving CVs
6. Create a Google Sheet with columns like: `Candidate`, `Score`, `Job`, `Status`, etc.

### How to customize this workflow to your needs

- Adjust the AI scoring prompt to match your company’s hiring criteria
- Add new columns to the Google Sheet for additional metadata
- Include Slack or email notifications for each qualified candidate
- Add multiple job profiles and route candidates accordingly
- Add a Telegram or WhatsApp step to notify HR in real time

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/AI-Powered-HR-Workflow-CV-Analysis-and-Evaluation-from-Gmail-to-Sheets-2363d6550fd98087b305d2f10f20e290?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 📊 Basic Information

- **Workflow ID:** 6207
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2641
- **Downloads:** 264
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6207)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **noOp** 
- **extractFromFile** 
- **googleDrive** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
