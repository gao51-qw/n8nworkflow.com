# Screen applicants with AI, notify HR and save them in a Google Sheet

> ## What this workflow does
This workflow helps HR teams screen CVs with AI, store compatibility ratings in Google Sheets, and send email notifications to candidates and HR. It simplifies the recruitment process.

1. CV Submission Form:
Candidates submit their details and CV (PDF) through a web form, triggering the workflow in n8n.
2. PDF Extraction & AI Rating:
The submitted CV is processed to extract text, and AI analyzes it to generate a compatibility rating.
3. Results Storage & Notifications:
Ratings are stored in a Google Sheet for easy access and organization.
10. Confirmation emails are automatically sent to both HR and the candidate.

## Setup
- Use the provided template to configure your form and connect it to n8n.
- Ensure your Google Sheets and email service integrations are active.

## Customization Instructions:

- Modify the email template to match your organization’s branding.
- Adjust the AI compatibility rating thresholds based on your requirements.
- Ensure you have updated the prompt for cv screening.

## 📊 Basic Information

- **Workflow ID:** 2632
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 6263
- **Downloads:** 626
- **Created:** 2024/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2632)

## 👤 Author

- **Name:** Sarfaraz Muhammad Sajib
- **Username:** @sarfarazmuhammad

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **extractFromFile** 
- **formTrigger** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
