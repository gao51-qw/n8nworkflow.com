# 🤖 Automate CV screening with AI candidate analysis

> ## How it works

This workflow automates your initial hiring pipeline by creating an AI-powered CV scanner. It collects job applications through a web form, uses AI to analyze the candidate's CV against your job description, and neatly organizes the results in a Google Sheet.

Here’s the step-by-step process:
*   **The Application Form:** A `Form Trigger` provides a public web form for candidates to submit their name, email, and CV (as a PDF).
*   **Initial Logging:** As soon as an application is submitted, the candidate's name and email are added to a Google Sheet. This ensures every applicant is logged, even if a later step fails.
*   **CV Text Extraction:** The workflow uses **Mistral's OCR** model to accurately extract all the text from the uploaded CV PDF.
*   **AI Analysis:** The extracted text is sent to **Google Gemini**. A detailed prompt instructs the AI to act as a hiring assistant, scoring the CV against the specific requirements of your job role and providing a detailed explanation for its score.
*   **Structured Output:** A `JSON Output Parser` ensures the AI's analysis is returned in a clean, structured format, making the data reliable.
*   **Final Record:** The AI-generated qualification score and explanation are added to the candidate's row in the Google Sheet, giving you a complete, analyzed list of applicants.

### Set up steps

**Setup time: ~15 minutes**

You'll need API keys for Mistral and Google AI, and to connect your Google account.

1.  **Get Your Mistral API Key:**
    *   Visit the Mistral Platform at [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys).
    *   Create and copy your API key.
    *   In the workflow, go to the **`Extract CV Text`** node, click the **Credential** dropdown, and select **`+ Create New Credential`**.
    *   Paste your key into the **API Key** field and **Save**.

2.  **Get Your Google AI API Key:**
    *   Visit Google AI Studio at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).
    *   Click **"Create API key in new project"** and copy the key.
    *   In the workflow, go to the **`Gemini 2.5 Flash Lite`** node, click the **Credential** dropdown, and select **`+ Create New Credential`**.
    *   Paste your key into the **API Key** field and **Save**.

3.  **Connect Your Google Account:**
    *   Select the **`Create 'CVs' Spreadsheet`** node.
    *   Click the **Credential** dropdown and select **`+ Create New Credential`** to connect your Google account.
    *   Repeat this for the **`Log Candidate Submission`** and **`Add CV Analysis`** nodes, selecting the credential you just created.

4.  **Create Your Spreadsheet:**
    *   Click the "play" icon on the **`Start Here`** node to run it. This will create a new Google Sheet in your Google Drive named "CVs" with the correct columns.

5.  **Customize the Job Role:**
    *   Go to the **`AI Qualification`** node.
    *   In the **Text** parameter, find the `job_requirements` section and replace the example job description with your own. Be as detailed as possible for the best results.

6.  **Start Screening!**
    *   Activate the workflow using the toggle at the top right.
    *   Go to the **`Application Form`** node and click the **"Open Form URL"** button.
    *   Fill out the form with a test application and upload a sample CV. Check your Google Sheet to see the AI's analysis appear within moments

## 📊 Basic Information

- **Workflow ID:** 7456
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 17985
- **Downloads:** 1798
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7456)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×9)
- **formTrigger** 
- **manualTrigger** 
- **mistralAi** 
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
