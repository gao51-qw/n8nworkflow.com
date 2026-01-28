# Hr job posting and evaluation with AI

> # Workflow Documentation: HR Job Posting and Evaluation with AI

## **Detailed Description**
The HR Job Posting and Evaluation with AI workflow is designed to streamline and enhance recruitment for technical roles, such as Automation Specialists. By automating key stages in the hiring process, this workflow ensures a seamless experience for both candidates and HR teams. From collecting applications to evaluating candidates using AI and scheduling interviews, this workflow provides an end-to-end solution for recruitment challenges.

---

## **Who is this for?**
This workflow is ideal for:
- **HR Professionals**: Managing multiple job postings and candidates efficiently.
- **Recruitment Teams**: Handling large volumes of applications for technical positions.
- **Hiring Managers**: Ensuring structured and objective candidate evaluations.

---

## **What problem does this workflow solve?**
- **Time-Consuming Processes**: Automates repetitive tasks like data entry, CV management, and scheduling.
- **Fair Candidate Evaluation**: Leverages AI to provide objective insights based on resumes and job descriptions.
- **Streamlined Communication**: Ensures timely and personalized candidate interactions, improving their experience.

---

## **What this workflow does**
This workflow automates the following steps:
1. **Form Submission**: Collects candidate information via a structured application form.
2. **Data Storage**: Stores applicant details in Airtable for centralized tracking.
3. **CV Management**: Automatically uploads resumes to Google Drive for easy access and organization.
4. **AI-Powered Candidate Evaluation**: Scores candidates based on their resumes and job descriptions using OpenAI, providing actionable insights.
5. **Interview Scheduling**: Automates scheduling based on candidate and interviewer availability.
6. **Communication**: Sends customized emails to candidates for interview invitations and feedback.

---

## **Setup**
### **Prerequisites**
To use this workflow, you’ll need:
- **n8n Account**: To create and run the workflow.
- **Airtable Account**: For managing applicant data.
- **Google Drive Account**: For storing candidate CVs.
- **OpenAI API Key**: For AI-powered candidate scoring.
- **SMTP Email Account**: For sending candidate communications.

### **Setup Process**
1. **Airtable Configuration**:
   - Create a base in Airtable with tables for Applicants and Job Positions.
2. **Google Drive Setup**:
   - Create a folder for CV storage and ensure you have write permissions.
3. **Integrate Airtable in n8n**:
   - Use the Airtable API key to connect Airtable to n8n.
4. **Integrate Google Drive in n8n**:
   - Authorize Google Drive to enable CV storage automation.
5. **OpenAI Integration**:
   - Add your OpenAI API key to n8n for candidate scoring.
6. **Email Configuration**:
   - Set up your SMTP email account in n8n for sending notifications and invitations.

---

## **How to customize this workflow**
Tailor the workflow to fit your unique recruitment needs:

1. **Edit Job Descriptions**:
   - Adjust the form parameters to match the specific role and qualifications.
2. **Refine AI Evaluation Criteria**:
   - Modify OpenAI prompts to reflect the skills and competencies for the desired position.
3. **Personalize Email Templates**:
   - Update email content to match your organization’s tone and branding.
4. **Add New Features**:
   - Incorporate additional steps like feedback collection or integration with other HR tools.

---
## **Conclusion**
The HR Job Posting and Evaluation with AI workflow simplifies and automates the recruitment process, enabling HR teams to focus on engaging with candidates rather than handling administrative tasks. With its powerful integrations and customization options, this workflow helps organizations hire efficiently while improving the candidate experience.

## 📊 Basic Information

- **Workflow ID:** 2773
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 9150
- **Downloads:** 915
- **Created:** 2025/1/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2773)

## 👤 Author

- **Name:** Francis Njenga
- **Username:** @gatura

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **airtable** (×6)
- **googleDrive** (×2)
- **set** (×3)
- **stickyNote** (×6)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **airtableTool** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** (×4)
- **form** 
- **emailSend** 
- **googleCalendarTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
