# Automated sales proposal & summary generator using GPT-4o, Sheets, Drive & Gmail

> ## 📘 Description:
This workflow automates the creation, storage, and reporting of personalized sales collateral for booked leads using GPT-4o, Google Sheets, Google Drive, and Gmail.
It pulls leads from a central sheet, filters booked ones, generates AI-written sales materials (summary, one-pager, and proposal), uploads the output to Drive, updates the sheet with proposal links, and emails a consolidated HTML summary to the marketing inbox.
It serves as a full-cycle AI-powered outreach content generator that transforms structured lead data into ready-to-use collateral in minutes.

## ⚙️ What This Workflow Does (Step-by-Step)

▶️ When Clicking ‘Execute Workflow’ (Manual Trigger)
 Starts the automation manually, fetching the latest lead records for batch processing.

📊 Retrieve Lead Records from Google Sheets
 Pulls all lead details (company name, contact, email, booking status, etc.) from the outreach automation sheet used as the CRM base.

🧩 Validate Lead Data Payload
 Checks each row for a valid email format.
 ✅ Valid entries proceed to booking filter.
 ❌ Invalid ones are logged to an error sheet.

⚠️ Log Invalid Leads to Google Sheets
 Stores incomplete or malformed lead data in a separate tab for cleanup without interrupting execution.

🎯 Filter for Booked Leads
 Isolates leads marked as BOOKED—the confirmed clients eligible for personalized collateral generation.

⚙️ Configure GPT-4o Model (Azure OpenAI)
 Initializes the GPT-4o model to generate tailored text content based on lead data (company, title, industry, etc.).

🧠 Generate Sales Collateral (AI)
 Uses GPT-4o to produce three structured assets per lead:
 1️⃣ Sales Summary — a concise 80-word follow-up note.
 2️⃣ One-Pager — headline + three selling points + CTA.
 3️⃣ Proposal Draft — introduction, scope, timeline, and next steps.
 All outputs returned as structured JSON for parsing.

🧹 Parse AI JSON Output
 Cleans and normalizes GPT-4o responses, ensuring JSON integrity and consistency across all generated materials.

📄 Convert Collateral into Text Reports
 Compiles each lead’s collateral into a .txt report containing all three sections.
 Formatting uses clean dividers and labeled blocks for readability.

☁️ Upload Sales Collateral to Google Drive
 Uploads each generated file to the collatral data Drive folder.
 Returns both view and download links for each report.

🔗 Map Uploaded Files with Lead Data
 Cross-references uploaded files with corresponding leads using index mapping.
 Prepares structured data with Email, ProposalLink, and timestamps.

✅ Update Lead Record with Proposal Link
 Updates the source Google Sheet, attaching each lead’s proposal link for traceability and internal access.

🗂️ Aggregate Uploaded File Metadata
 Compiles an HTML-formatted list of uploaded reports (file names and links).
 Calculates total processed leads for the summary section.

✉️ Generate Sales Summary Email (AI)
 Uses GPT-4o to create a clean HTML report section containing:
Total booked leads processed
Linked list of uploaded files
Short insights paragraph summarizing sales activity

📧 Send Sales Summary Email via Gmail
 Delivers the HTML report to the internal inbox (e.g., newscctv22@gmail.com) with subject “Sales Collateral Summary.”
 The email is formatted for Gmail/Outlook rendering and ready for forwarding to management.

## 🧩 Prerequisites
Google Sheets and Drive OAuth setup (Techdome account)
Azure OpenAI GPT-4o credentials
Gmail integration for report delivery

## 💡 Key Benefits
 ✅ Eliminates manual collateral drafting for booked leads
 ✅ Auto-updates CRM sheets with proposal links
 ✅ Generates consistent, professional B2B materials in real time
 ✅ Provides an instant HTML summary for daily or weekly reporting
 ✅ Ensures full traceability of every proposal created

## 👥 Perfect For
- B2B marketing and pre-sales teams
- Agencies managing client acquisition pipelines
- Business development operations using Google Sheets as CRM
- Teams seeking AI-driven, hands-off collateral generation and reporting


## 📊 Basic Information

- **Workflow ID:** 10836
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 142
- **Downloads:** 14
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10836)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** (×3)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **code** (×4)
- **googleDrive** 
- **gmail** 
- **stickyNote** (×15)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
