# Personalized lead nurturing with GPT-4.1 based on commitment scoring via Google Sheets

> ## AI-Powered Personalized Email Nurturing

This workflow automates sending tailored onboarding and follow-up emails based on lead commitment levels. It's designed for **coaches, consultants, and service-based businesses** who want to personalize their outreach and nurture prospects more effectively.

---

## How It Works

1.  **Triggered by New Data**: The workflow automatically starts whenever a new row is added to your specified Google Sheet.
2.  **Assess Commitment**: An **If node** checks the "Commitment" score from your Google Sheet data.
    * If the commitment score is **8 or higher**, the lead is considered "warm" and receives a detailed onboarding email.
    * If the commitment score is **below 8**, the lead is considered "colder" and receives a gentle nudge email.
3.  **Craft Warm Email (for high commitment)**: For "warm" leads, an **OpenAI node** generates an aspirational and confident first-touch email. This email highlights their goals, introduces your flagship offers, and invites them to a 30-minute discovery call.
4.  **Craft Colder Email (for lower commitment)**: For "colder" leads, a different **OpenAI node** generates an encouraging, non-pushy follow-up email. This email thanks them for sharing their goals, reinspires them with the ROI of personal branding, asks a reflective question, and offers a no-pressure Q&A session.
5.  **Send Emails**: The appropriate **Gmail node** sends the personalized email to the lead.
6.  **Record Activity**: Finally, the **Google Sheets node** appends the lead's information and details of the sent email to a separate "Contacts" sheet, keeping a clear record of all interactions.

---

## Google Sheet Structure

Your primary Google Sheet (the one triggering the workflow) must have the following exact column headers:

* **Email**
* **First name**
* **Last name**
* **Phone number**
* **Industry**
* **Title**
* **Three goals you wish to achieve this year**
* **1-10 how commited are you to your goals**

Your secondary Google Sheet (for appending contacts) must have these exact column headers:

* **name**
* **email**
* **phone**
* **industry**
* **title**
* **three goals**
* **commitment**

---

## Setup Instructions

1.  **Add Credentials**:
    * In n8n, add your **OpenAI API key** via the **Credentials** menu.
    * Connect your **Google account** via the **Credentials** menu for Google Sheets and Gmail access.

2.  **Configure Google Sheets Trigger**:
    * Select the **`Google Sheets Trigger`** node.
    * Choose your **Google Sheets credential**, select your **spreadsheet**, and the **specific sheet name** that contains your incoming lead data.

3.  **Configure Commitment Logic**:
    * Select the **`Commitment ≥ 8?`** If node.
    * The condition is set to `={{ $json['1-10 how commited are you to your goals'] }} &gt;= 8`. Ensure your Google Sheet column name for commitment matches exactly, including spacing and capitalization.

4.  **Configure OpenAI Nodes**:
    * Select both **`crafting warmer email`** and **`crafting colder email`** nodes.
    * Choose your **OpenAI credential** from the dropdown.
    * **Crucially**: In both nodes' **Messages** section, replace placeholder information with your actual **company name**, **founder name**, and any specific details about your **flagship offers** and **booking links** (`https://calendly.com/brandied/discovery`).

5.  **Configure Gmail Nodes**:
    * Select both **`Send warmer email`** and **`Send colder email`** nodes.
    * Choose your **Gmail credential**.

6.  **Configure Append Row in Sheet**:
    * Select the **`Append row in sheet`** node.
    * Choose your **Google Sheets credential**, select the **spreadsheet** and **sheet name** where you want to log sent emails (your "Contacts" sheet).
    * Verify that the column mappings correctly align with the "Google Sheet Structure" for your secondary sheet.

---

## Customization Options 💡

* **Commitment Threshold**: Adjust the number in the **`Commitment ≥ 8?`** If node to change what constitutes a "warm" lead (e.g., `gte 7` for a commitment score of 7 or higher).
* **Email Content & Tone**: Modify the prompts in the **`crafting warmer email`** and **`crafting colder email`** OpenAI nodes to fine-tune the email tone, length, specific calls to action, or any other elements to better suit your brand voice and strategy.
* **Follow-Up Cadence**: Instead of immediate sending, you could introduce a **Wait node** after the email crafting to space out follow-ups or integrate with an email sequence tool.
* **CRM Integration**: Replace the final **Google Sheets node** with an integration to your CRM (e.g., HubSpot, Salesforce) to automatically log these interactions and enrich lead profiles directly within your CRM.

## 📊 Basic Information

- **Workflow ID:** 6099
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 350
- **Downloads:** 35
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6099)

## 👤 Author

- **Name:** Matthew
- **Username:** @matthew-synteria

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **if** 
- **googleSheetsTrigger** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **googleSheets** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
