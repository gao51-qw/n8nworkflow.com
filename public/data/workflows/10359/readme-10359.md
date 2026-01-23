# Automate CV screening and candidate scoring with Gemini AI and Google Sheets

> 
![Screenshot 20251030 174902.png](fileId:3149)
## Who’s it for

For HR professionals, recruiters, and hiring managers who want to automate the initial CV screening and candidate evaluation process. This workflow helps teams efficiently assess applicants based on submitted answers and resume data — saving hours of manual review and ensuring fair, consistent scoring.

## How it works

This workflow automates CV screening using Google Drive, Google Sheets, and Gemini AI.
When a candidate submits a form with their answers and CV, the file is uploaded to Drive, converted from PDF to plain text, and merged with the form data.
Gemini AI then analyzes both inputs, comparing skills, experience, and responses to generate consistency, job-fit, and final scores.
Finally, the results are parsed, saved to Google Sheets, and automatically sorted by score, providing a ranked list of candidates for easy review.

## How to set up

1. Connect your Google Drive and Google Sheets credentials in n8n.
2. Configure your Form Trigger to capture candidate answers and CV uploads.
3. Set up the Extract from File node to parse PDF files into text.
4. Add your Gemini AI credentials securely using n8n’s credential system (no hardcoded keys).
5. Execute the workflow once to verify that CVs are uploaded, analyzed, and ranked in the connected Google Sheet.

## Requirements

1. n8n account (cloud or self-hosted).
2. Google Drive and Google Sheets integrations.
3. Gemini AI (Chat Model) API credentials.
4. A connected form (e.g., Typeform, n8n Form Trigger)

## How to customize

You can modify the AI prompt to align with your company’s job criteria or evaluation style.
Add more scoring categories (e.g., education, technical skills, experience).
Change the output destination — send results to Airtable, Notion, or Slack.
Enhance it with dashboards or extra nodes for reporting and analytics.

## ⚠️ Disclaimer

This workflow uses Gemini AI, which may require self-hosting for community node compatibility.
Ensure that no personal or sensitive candidate data is shared externally when using AI services.

## 📊 Basic Information

- **Workflow ID:** 10359
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 371
- **Downloads:** 37
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10359)

## 👤 Author

- **Name:** Asfandyar Malik
- **Username:** @asfandyar-malik

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×12)
- **formTrigger** 
- **googleDrive** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** (×4)
- **googleSheets** (×4)
- **merge** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
