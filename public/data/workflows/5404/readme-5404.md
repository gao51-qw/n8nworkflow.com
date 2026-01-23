# B2B lead qualification

> This automated n8n workflow qualifies B2B leads via voice calls using the VAPI API and integrates the collected data into Google Sheets. It triggers when a new lead’s phone number is added, streamlining lead qualification and data capture.

## What is VAPI?
VAPI is an API service that enables voice call automation, used here to qualify leads by capturing structured data through interactive calls.

### Good to Know

- VAPI API calls may incur costs based on usage; check VAPI pricing for details.
- Ensure Google Sheets access is properly authorized to avoid data issues.
- Use credential fields for the HTTP Request node 'Bearer token' instead of hardcoding.
- Use a placeholder Google Sheet document ID (e.g., "your-sheet-id-placeholder") to avoid leaking private data.

## How It Works

1. Detect when a new phone number is added for a lead using the **New Lead Captured node**.
2. Use the Receive Lead Details from **VAPI node** to capture structured data (name, company, challenges) via a POST request.
3. Trigger an outbound VAPI call to qualify the lead with the **Initiate Voice Call (VAPI) node**.
4. Store the collected data into a Google Sheet using the **Save Qualified Lead to CRM Sheet node**.
5. Send a success response back to VAPI with the **Send Call Data Acknowledgement node**.

### How to Use

- Import the workflow into n8n.
- Configure VAPI API credentials in the HTTP Request node using credential fields.
- Set up Google Sheets API access and authorize the app.
- Create a Google Sheet with the following columns: Name (text), Company (text), Challenges (text), Date (date).
- Test with a sample lead phone number to verify call initiation and data storage.
- Adjust the workflow as needed and retest.

## Requirements

1. VAPI API credentials
2. Google Sheets API access

### Customizing This Workflow
Modify the Receive Lead Details from VAPI node to capture additional lead fields or adjust call scripts for specific industries.

## 📊 Basic Information

- **Workflow ID:** 5404
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 979
- **Downloads:** 97
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5404)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** 
- **googleSheets** 
- **stickyNote** (×5)
- **respondToWebhook** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
