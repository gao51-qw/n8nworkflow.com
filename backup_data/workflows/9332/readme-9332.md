# Automate LinkedIn job postings from Recrutei ATS with GPT-4o content generation

> ## Overview: Automated LinkedIn Job Posting with AI

This workflow automates the publication of new job vacancies on LinkedIn immediately after they are created in the Recrutei ATS (Applicant Tracking System). It leverages a Code node to pre-process the job data and a powerful AI model (GPT-4o-mini, configured via the OpenAI node) to generate compelling, marketing-ready content.

This template is designed for Recruitment and Marketing teams aiming to ensure consistent, timely, and high-quality job postings while saving significant operational time.

## Workflow Logic & Steps

1.  **Recrutei Webhook Trigger:** The workflow is instantly triggered when a new job vacancy is published in the Recrutei ATS, sending all relevant job data via a webhook.
2.  **Data Cleaning (Code Node 1):** The first Code node standardizes boolean fields (like `remote`, `fixed_remuneration`) from `0`/`1` to descriptive text (`'yes'`/`'no'`).
3.  **Prompt Transformation (Code Node 2):** The second, crucial Code node receives the clean job data and:
    * Maps the original data keys (e.g., `title`, `description`) to user-friendly labels (e.g., `Job Title`, `Detailed Description`).
    * Cleans and sanitizes the HTML description into readable Markdown format.
    * Generates a single, highly structured prompt containing all job details, ready for the AI model.
4.  **AI Content Generation (OpenAI):** The AI Model receives the structured prompt and acts as a **'Marketing Copywriter'** to create a compelling, engaging post specifically optimized for the LinkedIn platform.
5.  **LinkedIn Post:** The generated text is automatically posted to the configured LinkedIn profile or Company Page.
6.  **Internal Logging (Google Sheets):** The workflow concludes by logging the event (Job Title, Confirmation Status) into a Google Sheet for internal tracking and auditing.

## Setup Instructions

To implement this workflow successfully, you must configure the following:

1.  **Credentials:**
    * Configure **OpenAI** (for the Content Generator).
    * Configure **LinkedIn** (for the Post action).
    * Configure **Google Sheets** (for the logging).
2.  **Node Configuration:**
    * Set up the Webhook URL in your Recrutei ATS settings.
    * Replace `YOUR_SHEET_ID_HERE` in the **Google Sheets Logging** node with your sheet's ID.
    * Select the correct LinkedIn profile/company page in the **Create a post** node.

## 📊 Basic Information

- **Workflow ID:** 9332
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 460
- **Downloads:** 46
- **Created:** 2025/10/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9332)

## 👤 Author

- **Name:** Recrutei  Automações 
- **Username:** @paulo-lazari

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **code** (×2)
- **linkedIn** 
- **googleSheets** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
