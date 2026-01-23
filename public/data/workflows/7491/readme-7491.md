# Automate sales call research and follow-ups with GPT-4, Tavily, Google Sheets

> ## Description

This n8n template automates **prospect research** and **personalized follow-up writing** right after a sales call is booked.

It gathers **company background, tech stack, and updates**; suggests **relevant solutions**; and then drafts a **handcrafted email, subject line, and SMS**, all saved back into Google Sheets.

---

## Benefits

* Always show up to calls with **prepared context**.
* Ensure **no follow-up slips through the cracks**.
* Keep all notes, research, and outreach in a **single system of record**.
* Scale personalized outreach without losing the **human touch**.

---

## Use cases

* Prep for sales calls with **richer prospect context**.
* Save hours writing **personal follow-ups**.
* Keep sales records neatly in **one shared sheet**.

---

## Requirements

* Google Sheets with:

  * **Meeting Data** → prospect info + enrichment fields
  * **Success Stories** → testimonials (company, industry, results, solution used)
* Tavily API key
* OpenAI API key (GPT-4.1 or later recommended)
* n8n account with Google Sheets + LangChain enabled

---

## Google Sheets Template

You’ll need **two sheets** inside one Google Spreadsheet:

### 1. Meeting Data (input + output)

Columns:

* `Name`
* `Email`
* `Company`
* `Website`
* `Job Title`
* `Meeting Date`
* `Company Overview` (AI-filled)
* `Tech Stack` (AI-filled)
* `Company Updates` (AI-filled)
* `Primary Solution` (AI-filled)
* `Solution 2` (AI-filled)
* `Solution 3` (AI-filled)
* `Email Subject` (AI-filled)
* `Follow-up Email` (AI-filled)
* `Follow-up SMS` (AI-filled)

### 2. Success Stories (for testimonials)

Columns:

* `Company`
* `Industry`
* `Results`
* `Solution Used`

You can copy this structure into a fresh Google Spreadsheet before starting.

---

## How it works

1. **Trigger** → Pulls new rows from Google Sheets (or connects to your booking system).
2. **Research Agent** → Uses Tavily for company overview, tech stack, and updates.
3. **Product Suggestions** → Pulls from Product List sheet to propose 3 tailored solutions.
4. **Save Research** → Updates the row with the six research fields.
5. **Sales Writing Assistant** → Drafts subject, email, and SMS using context + testimonials.
6. **Update Sheet** → Writes final outputs (subject, email, SMS) into Google Sheets.

---

## Setup Steps

1. **Prepare Google Sheets**

   * Create a new spreadsheet with the **Meeting Data** and **Success Stories** tabs.
   * Add the required columns (see template above).
   * Fill in at least one success story for the workflow to use.

2. **Connect Google Sheets in n8n**

   * Add Google Sheets credentials under **Settings → Credentials**.
   * Make sure n8n has access to your spreadsheet.

3. **Add API Keys**

   * In n8n, create credentials for **OpenAI** (GPT-4.1 or later).
   * Create credentials for **Tavily**.

4. **Import the workflow**

   * Load the JSON file (this template) into n8n.
   * Replace any placeholder spreadsheet IDs with your own.
   * Map the correct sheet/tab names.

5. **Test the Research Agent**

   * Run the workflow manually.
   * Check that `Company Overview`, `Tech Stack`, and `Company Updates` populate.

6. **Test the Writing Assistant**

   * Ensure the workflow uses at least one testimonial from **Success Stories**.
   * Run it again and confirm `Email Subject`, `Follow-up Email`, and `SMS` are written.

7. **Automate**

   * Replace the **Manual Trigger** with your preferred trigger:

     * Google Calendar / Calendly → Google Sheets
     * CRM → Google Sheets
     * Directly from n8n integrations

---

## Customization

This workflow is designed as a flexible foundation. Here are ways to adapt it:

* **Change AI prompts**

  * Update the **Research Agent** prompt to focus on specific industries or data points.
  * Edit the **Sales Writing Assistant** to match your tone of voice.

* **Swap success stories**

  * Add more detailed case studies to the **Success Stories** sheet for stronger personalization.

* **Add integrations**

  * Send follow-up emails automatically with **Gmail** or **Outlook** nodes.
  * Push SMS directly via **Twilio**.
  * Sync enriched data into **HubSpot, Salesforce, or Notion**.

* **Error handling**

  * Add retry logic for API calls.
  * Include a notification node (Slack/Email) if the workflow fails.

---

## Tips & Troubleshooting

* If research doesn’t update → confirm **Email** is the matching column in your Update Sheet nodes.
* If follow-up copy is blank → ensure at least one testimonial exists in **Success Stories**.
* Use **Debug Mode** to inspect AI Agent or Sales Writing Assistant outputs.

---

 


## 📊 Basic Information

- **Workflow ID:** 7491
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 526
- **Downloads:** 52
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7491)

## 👤 Author

- **Name:** Muhammad Bello
- **Username:** @muhammad-bello

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **googleSheets** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **googleSheetsTool** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
