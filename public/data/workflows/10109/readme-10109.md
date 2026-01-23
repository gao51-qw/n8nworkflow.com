# Daily cash flow reports with Google Sheets, Slack & Email for finance teams

> Simplify financial oversight with this automated n8n workflow. Triggered daily, it fetches cash flow and expense data from a Google Sheet, analyzes inflows and outflows, validates records, and generates a comprehensive daily report. The workflow sends multi-channel notifications via email and Slack, ensuring finance professionals stay updated with real-time financial insights. 💸📧

### Key Features  
- Daily automation keeps cash flow tracking current.  
- Analyzes inflows and outflows for actionable insights.  
- Multi-channel alerts enhance team visibility.  
- Logs maintain a detailed record in Google Sheets.  

### Workflow Process  
- The **Every Day** node triggers a daily check at a set time.  
- **Get Cash Flow Data** retrieves financial data from a Google Sheet.  
- **Analyze Inflows & Outflows** processes the data to identify trends and totals.  
- **Validate Records** ensures all entries are complete and accurate.  
- If records are valid, it branches to:  
  - Sends **Email Daily Report** to finance team members.  
  - **Send Slack Alert** to notify the team instantly.  
- **Logs to Sheet** appends the summary data to a Google Sheet for tracking.  

### Setup Instructions  
- Import the workflow into n8n and configure Google Sheets OAuth2 for data access.  
- Set the daily trigger time (e.g., 9:00 AM IST) in the "Every Day" node.  
- Test the workflow by adding sample cash flow data and verifying reports.  
- Adjust analysis parameters as needed for specific financial metrics.  

### Prerequisites  
- Google Sheets OAuth2 credentials  
- Gmail API Key for email reports  
- Slack Bot Token (with chat:write permissions)  
- Structured financial data in a Google Sheet  

**Google Sheet Structure:**  
1. Create a sheet with columns:  
   - Date  
   - Cash Inflow  
   - Cash Outflow  
   - Category  
   - Notes  
   - Updated At  

### Modification Options  
- Customize the "Analyze Inflows & Outflows" node to include custom financial ratios.  
- Adjust the "Validate Records" filter to flag anomalies or missing data.  
- Modify email and Slack templates with branded formatting.  
- Integrate with accounting tools (e.g., Xero) for live data feeds.  
- Set different trigger times to align with your financial review schedule.  

**Discover more workflows – [Get in touch with us](https://www.oneclickitsolution.com/contact-us/)**

## 📊 Basic Information

- **Workflow ID:** 10109
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 558
- **Downloads:** 55
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10109)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **code** (×4)
- **merge** 
- **googleSheets** 
- **emailSend** 
- **googleDrive** 
- **slack** 
- **n8n-nodes-pdfmonkey.pdfMonkey** 
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
