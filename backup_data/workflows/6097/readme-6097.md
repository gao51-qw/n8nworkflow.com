# Generate personalized cold outreach icebreakers with GPT-4 and Google Sheets

> ## Automated Personalized Email Icebreakers

This workflow automates creating personalized email icebreakers. It reads leads from a Google Sheet, scrapes their company website, uses OpenAI to analyze the data and craft a unique opening line, and then saves that icebreaker back into the original sheet.

## How It Works

* **Fetch Lead**: The workflow starts, loops through your leads, and pulls one from your Google Sheet.
* **Scrape & Summarize**: It scrapes the lead's company website and uses a fast OpenAI model to summarize the key points about the company and the person.
* **Generate Icebreaker**: This summary is then sent to a more powerful OpenAI model, which follows specific instructions to write a short, personalized icebreaker.
* **Update Sheet**: The new icebreaker is saved back into the correct lead's row in your Google Sheet, using their email to match the record.

---

## Requirements

* An n8n instance.
* An OpenAI API key with available credits.
* A Google account with a Sheet for your leads.
* The Google Sheet must have columns for lead data (e.g., `Email`, `Website`, `Company Name`) and an empty column named `icebreaker`.
* The `Email` column must be unique for each lead.

---

## Setup Instructions

1.  **Add Credentials**: In n8n, add your OpenAI API key and connect your Google account via the **Credentials** menu.
2.  **Configure Google Sheets Nodes**: Select each of the two Google Sheets nodes (`Client data` and `Add icebreaker to sheet`). In each, choose your credential, select your spreadsheet and the specific sheet name, and ensure the column mapping is correct.
3.  **Configure OpenAI Nodes**: Select both OpenAI nodes (`Summarising prospect data` and `Creating icebreaker`) and choose your OpenAI credential from the dropdown.
4.  **Verify Update Node**: On the final `Add icebreaker to sheet` node, ensure the **Operation** is set to `Append Or Update` and the **Matching Columns** field is set to `Email`.

---

## Customization Options 💡

* **Trigger**: Change the manual start to an automatic trigger, like when a new row is added to the sheet or on a daily schedule (Cron).
* **AI Prompt**: Modify the prompt in the "Creating icebreaker" node to change the tone, style, or length of the output.
* **AI Model**: Experiment with different OpenAI models (like `gpt-4o`) for a different balance of cost, speed, and quality.
* **Data Source**: Replace Google Sheets with a CRM like HubSpot or a database like Postgres.

## 📊 Basic Information

- **Workflow ID:** 6097
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 505
- **Downloads:** 50
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6097)

## 👤 Author

- **Name:** Matthew
- **Username:** @matthew-synteria

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **splitInBatches** 
- **manualTrigger** 
- **googleSheets** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** 
- **markdown** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
