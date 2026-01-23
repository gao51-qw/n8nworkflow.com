# AI resume screening & evaluation for HR with GPT-4 & Google Workspace

> ## Try It Out, HireMind – AI-Driven Resume Intelligence Pipeline!
### This n8n template demonstrates how to automate resume screening and evaluation using AI to improve candidate processing and reduce manual HR effort.
A smart and reliable resume screening pipeline for modern HR teams. This workflow combines Google Drive (JD & CV storage), OpenAI (GPT-4-based evaluation), Google Sheets (position mapping + result log), and Slack/SendGrid integrations for real-time communication. Automatically extract, evaluate, and track candidate applications with clarity and consistency.


---

### How it works

* A candidate submits their application using a form that includes name, email, CV (PDF), and a selected job role.
* The CV is uploaded to Google Drive for record-keeping and later reference.
* The **Profile Analyzer Agent** reads the uploaded resume, extracts structured candidate information, and transforms it into a standardized JSON format using GPT-4 and a custom output parser.
* The corresponding job description PDF file is automatically retrieved from a Google Sheet based on the selected job role.
* The **HR Expert Agent** evaluates the candidate profile against the job description using another GPT-4 model, generating a structured assessment that includes strengths, gaps, and an overall recommendation.
* The evaluation result is parsed and formatted for output.
* The evaluation score will be used to mark candidate as qualified or unqualified, based on that an email will be sent to applicant or the message will be send to hiring team for the next process
* The final evaluation result will be stored in a Google Sheet for long-term tracking and reporting.

### Google drive structure

├── jd                        # Google drive folder to store your JD (pdf)
│   ├── Backend_Engineer.pdf
│   ├── Azure_DevOps_Lead.pdf
│   └── ...
│
├── cv                        # Google drive folder, where workflow upload candidate resume
│   ├── John_Doe_DevOps.pdf
│   ├── Jane_Smith_FullStack.pdf
│   └── ...
│
├── Positions (Sample: https://docs.google.com/spreadsheets/d/1pW0muHp1NXwh2GiRvGVwGGRYCkcMR7z8NyS9wvSPYjs/edit?usp=sharing)  # 📋 Mapping Table: Job Role ↔ Job Description (Link)
│   └── Columns:
│       - Job Role
│       - Job Description File URL (PDF in `jd/`)
│
└── Evaluation form (Google Sheet)  # ✅ Final AI Evaluation Results

### How to use

1. **Set up credentials and integrations:**
   - Connect your **OpenAI** account (GPT-4 API).
   - Enable **Google Cloud APIs**:
     - Google Sheets API (for reading job roles and saving evaluation results)
     - Google Drive API (for storing CVs and job descriptions)
   - Set up **SendGrid** (to send email responses to candidates)
   - Connect **Slack** (to send messages to the hiring team)

2. **Prepare your Google Drive structure:**
   - Create a root folder, then inside it create:
     - `/jd` → Store all job descriptions in PDF format  
     - `/cv` → This is where candidate CVs will be uploaded automatically
   - Create a **Google Sheet** named `Positions` with the following structure:
     ```
     | Job Role                     | Job Description Link                   |
     |------------------------------|----------------------------------------|
     | Azure DevOps Engineer        | https://drive.google.com/xxx/jd1.pdf   |
     | Full-Stack Developer (.NET)  | https://drive.google.com/xxx/jd2.pdf   |
     ```

3. **Update your application form:**
   - Use the built-in form, or connect your own (e.g., Typeform, Tally, Webflow, etc.)
   - Ensure the **Job Role** dropdown matches exactly the roles in the `Positions` sheet

4. **Run the AI workflow:**
   - When a candidate submits the form:
     - Their CV is uploaded to the `/cv` folder
     - The job role is used to match the JD from `/jd`
     - The **Profile Analyzer Agent** extracts candidate info from the CV
     - The **HR Expert Agent** evaluates the candidate against the matched JD using GPT-4

5. **Distribute and store results:**
   - Store the evaluation results in the `Evaluation form` Google Sheet
   - Optionally notify your team:
     - ✉️ Send an email to the candidate using SendGrid
     - 💬 Send a Slack message to the hiring team with a summary and next steps

### Requirements

* OpenAI GPT-4 account for both Profile Analyzer and HR Expert Agents
* Google Drive account (for storing CVs and evaluation sheet)
* Google Sheets API credentials (for JD source and evaluation results)

### Need Help?

Join the [n8n Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [n8n Forum](https://community.n8n.io/)!

Happy Hiring! 🚀

## 📊 Basic Information

- **Workflow ID:** 6612
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 772
- **Downloads:** 77
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6612)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×9)
- **formTrigger** 
- **extractFromFile** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **googleSheets** (×2)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **sendGrid** 
- **slack** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
