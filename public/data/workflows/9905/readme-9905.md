# Automate invoice processing with Gmail, OCR.space, Slack & Xero

>  **How It Works**

1. **Trigger**: Watches for new emails in Gmail with PDF/image attachments.  
2. **OCR**: Sends the attachment to OCR.space API (https://ocr.space/OCRAPI) to extract invoice text.  
3. **Parsing**: Extracts key fields:  
   - Vendor  
   - Invoice number  
   - Amount  
   - Currency  
   - Invoice date  
   - Due date  
   - Description  
4. **Validation Logic**:  
   - Checks if amount is valid  
   - Ensures vendor and invoice number are present  
   - Flags high-value invoices (e.g., over $10,000)  
5. **Routing**:  
   - If invalid: 
   - Sends a Slack message highlighting issues
   - Labels email as **Rejected**  
   - If valid:  
     - Logs the invoice into Google Sheets  
     - Sends a Slack message to the finance team for approval  
     - After approval, creates a draft invoice in Xero  
     - Labels the email as **Processed** in Gmail  
________________________________________
**Set up steps**

•	Estimated setup time: 45-60 mins
•	You’ll need connected credentials for Gmail, Slack, Google Sheets, and Xero
•	Replace the default API key for OCR.space with your own (in the HTTP Request node)
•	Update Slack channel IDs and label IDs to match your workspace
•	Adjust invoice validation rules as needed (e.g. currency, red flag conditions)

All detailed explanations and field mappings are provided in sticky notes within the workflow.



## 📊 Basic Information

- **Workflow ID:** 9905
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 291
- **Downloads:** 29
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9905)

## 👤 Author

- **Name:** Abi Odedeyi
- **Username:** @abiodedeyi

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **code** (×4)
- **googleSheets** (×3)
- **slack** (×4)
- **if** (×3)
- **gmail** (×2)
- **xero** 
- **httpRequest** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
