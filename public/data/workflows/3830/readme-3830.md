# Discover & enrich decision-makers with Apollo and human verification

> ## 🧩 What This Workflow Does
This workflow automates the process of identifying and enriching decision-maker contacts from a list of companies. By integrating with Apollo's APIs and Google Sheets, it streamlines lead generation, ensures data accuracy through human verification, and maintains an organized leads database.

## 📚 Use Case
Ideal for sales and marketing teams aiming to:
- Automate the discovery of key decision-makers (e.g., CEOs, CTOs).
- Enrich contact information with LinkedIn profiles, emails, and phone numbers.
- Maintain an up-to-date leads database with minimal manual intervention.
- Receive weekly summaries of newly verified leads.

## 🧪 Setup
**1.** Google Sheets Preparation:

- Use the following pre-configured Google Sheet: [Company Decision Maker Discovery Sheet](https://docs.google.com/spreadsheets/d/1KqKFZ7Uxrt1MivBjLklGdPRMgNBhEc0slpthoSjt2wI/edit?gid=0#gid=0).
- This spreadsheet includes the necessary tabs and columns: `Companies`, `Contacts`, and `Contacts (Verified)`.
- It also contains a custom `onEdit` Apps Script function that automatically updates the Status column to `Pending` whenever the Domain field is modified.
- To review or modify the script, navigate to __Extensions &gt; Apps Script__ within the Google Sheet.

**2.** Credentials Setup:

- Configure the following credentials in your n8n instance:
	- Google Sheets: To read from and write to the spreadsheet.
	- Slack: To send verification prompts and weekly reports.
	- Apollo: To access the Organization Search, Organization Enrichment, People Search, and Bulk People Enrichment APIs.
	- LLM Service (e.g., OpenAI): To generate company summaries and determine departments based on job titles.

**3.** Workflow Configuration:

- Import the workflow into your n8n instance.
- Update the nodes to reference the correct Google Sheet and Slack channel.
- Ensure that the Apollo and LLM nodes have the appropriate API keys and configurations.

**4.** Testing the Workflow:

- Add a new company entry in the Companies tab of the Google Sheet.
- Verify that the workflow triggers automatically, processes the data, and updates the Contacts and Contacts (Verified) tabs accordingly.
- Check Slack for any verification prompts and confirm that weekly reports are sent as scheduled.

## 📊 Basic Information

- **Workflow ID:** 3830
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 2318
- **Downloads:** 231
- **Created:** 2025/5/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3830)

## 👤 Author

- **Name:** Uche Madu
- **Username:** @uchemadu

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** (×4)
- **code** (×3)
- **splitInBatches** (×2)
- **googleSheets** (×5)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **slack** (×2)
- **filter** 
- **if** 
- **stickyNote** (×10)
- **splitOut** (×2)
- **scheduleTrigger** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
