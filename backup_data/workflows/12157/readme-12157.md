# Automate job applicant screening with GPT-4, Gmail & Google Sheets

> This workflow automates the initial screening process for new job applications, freeing up your recruitment team to focus on qualified candidates. It receives applications from a webhook, uses OpenAI (GPT-4) to analyze resumes for skill and culture fit, generates interview questions, logs the results to Google Sheets, sends interview invitations via Gmail, and notifies your team on Slack.


## 🚀 Who is this for?
- **HR and Recruitment Teams** looking to automate repetitive screening tasks.
- **Hiring Managers** who want a consistent, data-driven first pass on applicants.
- **Startups and SMBs** aiming to build an efficient, scalable hiring pipeline without a large HR team.


## 💡 How it works
1.  **Receive Application**: The workflow triggers when a new application is submitted via a webhook from your job board or application form.
2.  **Extract & Analyze**: It downloads the resume/CV, extracts the text, and sends it to **OpenAI (GPT-4)** with a custom prompt.
3.  **Score & Generate**: The AI scores the candidate on skill match and culture fit, provides a summary, and generates tailored interview questions based on their experience.
4.  **Log Data**: The evaluation scores, AI summary, and candidate information are appended to a new row in a **Google Sheet** for tracking.
5.  **Schedule Interview**: A personalized email is sent to the candidate via **Gmail** with a link to schedule their interview.
6.  **Notify Team**: A summary card with the AI evaluation and links to the full report is posted in a **Slack** channel to keep the hiring team informed.


## ⚙️ How to set up
1.  **Configure Credentials**: Set up your credentials for OpenAI, Google (for both Sheets and Gmail), and Slack in n8n.
2.  **Webhook URL**: Copy the "Production URL" from the "Webhook: New Application" node and set it as the destination in your job board's webhook settings (e.g., Greenhouse, Lever, Ashby, or a web form).
3.  **Google Sheet**: Create a Google Sheet to track applicants. Update the "G Sheets: Save Evaluation" node with your Spreadsheet ID and Sheet Name. Ensure the columns in your sheet match the data you want to save.
4.  **Customize Prompts & Email**:
    -   Modify the prompts in the two **OpenAI** nodes to match your company's values and the specific job requirements.
    -   Update the **Gmail** node with your email content and the logic for your scheduling link (e.g., Calendly, SavvyCal).


## 📋 Requirements
- An n8n instance (Cloud or self-hosted).
- An **OpenAI API** key.
- A **Google** account for Google Sheets and Gmail.
- A **Slack** workspace.
- A job application source capable of sending webhooks.

## 📊 Basic Information

- **Workflow ID:** 12157
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 37
- **Downloads:** 3
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12157)

## 👤 Author

- **Name:** sato rio
- **Username:** @riorio

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **webhook** 
- **set** 
- **if** 
- **httpRequest** (×2)
- **code** (×6)
- **openAi** (×2)
- **googleSheets** 
- **gmail** 
- **slack** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
