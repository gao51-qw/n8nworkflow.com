# Automate applicant tracking with GPT-4.1 CV parsing, Google Sheets and Gmail alerts

> **Template Description:**
&gt; Stop manually reading every CV and copy-pasting data into a spreadsheet. This workflow acts as an AI recruiting assistant, automating your entire initial screening process. It captures applications from a public form, uses AI to read and understand PDF CVs, structures the candidate data, saves it to Google Sheets, and notifies all parties.

This template is designed to save HR professionals and small business owners countless hours, ensuring no applicant is missed and all data is consistently structured and stored.

---

**🚀 What does this workflow do?**

*   Provides a **public web form** for candidates to submit their name, email, experience, and PDF CV.
*   Automatically **reads the text content** from the uploaded PDF CV.
*   Uses an **AI Agent (OpenAI)** to intelligently parse the CV text, extracting key data like contact info, work experience, education, skills, and more.
*   **Writes a concise summary** of the CV, perfect for quick screening by HR.
*   **Checks for duplicate applications** based on the candidate's email address.
*   **Saves all structured applicant data** into a new row in a Google Sheet, creating a powerful candidate database.
*   Sends an **automated confirmation email** to the applicant.
*   Sends a **new application alert** with the CV summary to the recruiter.

**🎯 Who is this for?**

*   **HR Departments & Recruiters:** Streamline your hiring pipeline and build a structured candidate database.
*   **Small Business Owners:** Manage job applications professionally without dedicated HR software.
*   **Hiring Managers:** Quickly get a summarized overview of each candidate without reading the full CV initially.

**✨ Benefits**

*   **Massive Time Savings:** Drastically reduces the time spent on manual CV screening and data entry.
*   **Structured Candidate Data:** Turns every CV into a consistently formatted row in a spreadsheet, making it easy to compare candidates.
*   **Never Miss an Applicant:** Every submission is logged, and you're instantly notified.
*   **Improved Candidate Experience:** Applicants receive an immediate confirmation that their submission was successful.
*   **AI-Powered Summaries:** Get a quick, AI-generated summary of each CV delivered to your inbox.

**⚙️ How it Works**

1.  **Form Submission:** A candidate fills out the n8n form and uploads their CV.
2.  **PDF Extraction:** The workflow extracts the raw text from the PDF file.
3.  **AI Analysis:** The text is sent to OpenAI with a prompt to structure all key information (experience, skills, etc.) into a JSON format.
4.  **Duplicate Check:** The workflow checks your Google Sheet to see if the applicant's email already exists. If so, it stops.
5.  **Save to Database:** If the applicant is new, their structured data is saved as a new row in Google Sheets.
6.  **Send Notifications:** Two emails are sent simultaneously: a confirmation to the applicant and a notification with the CV summary to the recruiter.

**📋 n8n Nodes Used**

*   `Form Trigger`
*   `Extract From File`
*   `OpenAI`
*   `Code` (or `JSON Parser`)
*   `Google Sheets`
*   `If`
*   `Gmail`

**🔑 Prerequisites**

*   An active n8n instance.
*   **OpenAI Account & API Key**.
*   **Google Account** with access to Google Sheets and Gmail (OAuth2 Credentials).
*   **A Google Sheet** prepared with columns to store the applicant data (e.g., name, email, experience, skills, cv_summary, etc.).

**🛠️ Setup**

1.  **Import the workflow** into your n8n instance.
2.  **Configure Credentials:** Connect your credentials for OpenAI and Google (for Sheets & Gmail) in their respective nodes.
3.  **Customize the Form:** In the `1. Applicant Submits Form` node, you can add or remove fields as needed.
4.  **Activate the workflow.** Once active, **copy the Production URL** from the Form Trigger node and share it to receive applications.
5.  **Set Your Email:** In the `8b. Send Notification...` (Gmail) node, change the "To" address to your own email address to receive alerts.
6.  **Link Your Google Sheet:** In the `5. Check for Duplicate...` and `7. Save Applicant Data...` nodes, select your spreadsheet and sheet.


## 📊 Basic Information

- **Workflow ID:** 8751
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 212
- **Downloads:** 21
- **Created:** 2025/9/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8751)

## 👤 Author

- **Name:** Onur
- **Username:** @onurpolat05

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **code** (×2)
- **noOp** 
- **formTrigger** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** (×2)
- **if** 
- **gmail** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
