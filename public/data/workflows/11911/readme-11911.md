# Automate invoice processing with GPT-4o classification and XML export to accounting

> # Intelligent Invoice Processing with AI Classification and XML Export

## Summary
Automated invoice processing pipeline that extracts data from PDF invoices, uses AI Agent for intelligent expense categorization, generates XML for accounting systems, and routes high-value invoices for approval.

## Detailed Description
A comprehensive accounts payable automation workflow that monitors for new PDF invoices, extracts text content, uses AI to classify expenses and detect anomalies, converts to XML format for accounting system integration, and implements approval workflows for high-value or unusual invoices.

### Key Features
- **PDF Text Extraction**: Extract from File node parses invoice PDFs automatically
- **AI-Powered Classification**: AI Agent categorizes expenses, suggests GL codes, detects anomalies
- **XML Export**: Convert structured data to accounting-compatible XML format
- **Approval Workflow**: Route invoices over $5,000 or low confidence for human review
- **Multi-Trigger Support**: Google Drive monitoring or manual webhook upload
- **Comprehensive Logging**: Archive all processed invoices to Google Sheets

### Use Cases
- Accounts payable automation
- Expense report processing
- Vendor invoice management
- Financial document digitization
- Audit trail generation

### Required Credentials
- Google Drive OAuth (for PDF source folder)
- OpenAI API key
- Slack Bot Token
- Gmail OAuth
- Google Sheets OAuth

### Node Count: 24 (19 functional + 5 sticky notes)

### Unique Aspects
- Uses **Extract from File** node for PDF text extraction (rarely used)
- Uses **XML** node for JSON to XML conversion (very rare)
- Uses **AI Agent** node for intelligent classification
- Uses **Google Drive Trigger** for file monitoring
- Implements **approval workflow** with conditional routing
- **Webhook response** mode for API integration

### Workflow Architecture
```
[Google Drive Trigger]    [Manual Webhook]
         |                      |
         +----------+-----------+
                    |
                    v
           [Filter PDF Files]
                    |
                    v
           [Download Invoice PDF]
                    |
                    v
           [Extract PDF Text]
                    |
                    v
           [Parse Invoice Data] (Code)
                    |
                    v
           [AI Invoice Classifier] &lt;-- [OpenAI Chat Model]
                    |
                    v
           [Parse AI Classification]
                    |
                    v
           [Convert to XML]
                    |
                    v
           [Format XML Output]
                    |
                    v
           [Needs Approval?] (If)
              /           \
        Yes (&gt;$5000)    No (Auto)
             |              |
      [Email Approval]  [Slack Notify]
             |              |
             +------+-------+
                    |
                    v
           [Archive to Google Sheets]
                    |
                    v
           [Respond to Webhook]
```

### Configuration Guide
1. **Google Drive**: Set folder ID to monitor in Drive Trigger node
2. **Approval Threshold**: Default $5,000, adjust in "Needs Approval?" node
3. **Email Recipients**: Configure finance-approvers@example.com
4. **Slack Channel**: Set #finance-notifications for updates
5. **GL Codes**: AI suggests codes; customize in AI prompt if needed
6. **Google Sheets**: Configure document for invoice archive

## 📊 Basic Information

- **Workflow ID:** 11911
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 249
- **Downloads:** 24
- **Created:** 2025/12/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11911)

## 👤 Author

- **Name:** TOMOMITSU ASANO
- **Username:** @tomo-0310

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **googleDriveTrigger** 
- **webhook** 
- **merge** (×2)
- **filter** 
- **googleDrive** 
- **extractFromFile** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **xml** 
- **set** 
- **if** 
- **gmail** 
- **slack** 
- **googleSheets** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
