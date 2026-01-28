# Compare vendor quotations with Grok AI and export to Google Sheets & email

> This workflow automates the process of receiving vendor quotations, extracting and summarizing their contents using **AI**, and logging the results for comparison. The system listens for new file uploads via **webhook**, processes each file using a **summarization engine**, and generates a well-formatted **summary table** that is stored in **Google Sheets** and sent via **email** to stakeholders.

## **Good to Know**

* **Saves hours of manual work** by auto-comparing multiple vendor quotations.
* **Uses AI summarization** to intelligently identify highlights and differences in each quote.
* **Supports structured summaries** for quick stakeholder decision-making.
* **Maintains a Google Sheets log** for historical comparison and auditing.
* **Email notifications** ensure stakeholders receive real-time updates.

## **How It Works**

### **1. Upload Quotes**

**Webhook trigger** that listens for uploaded vendor quotation files (PDF, Excel, or Docs).

### **2. Extract File Data**

**Parses the uploaded file** and extracts relevant quote data (price, items, vendor name, etc.).

### **3. AI Summarization**

**Sends extracted data to an AI API (Grok)** to generate a human-readable comparison summary.

### **4. Wait For Reply**

**Pauses the workflow** until the AI response is fully received.

### **5. Format Summary**

**Formats the AI-generated content** into a structured summary (e.g., table format or comparison bullets).

### **6. Log to Google Sheets**

**Appends the formatted summary** to a Google Sheet for tracking and reference.

### **7. Send Email**

**Emails the summary** to predefined recipients (procurement, finance, etc.).

## **Data Sources**

* **Uploaded Vendor Quotation Files** – Typically in PDF, DOCX, or Excel format containing vendor proposals.
* **AI API (Grok)** – Processes the quote data and returns a summarized comparison.

## **How to Use**

1. **Import the workflow** into your n8n instance (self-hosted or cloud).
2. **Configure the Webhook URL** to receive file uploads.
3. **Set up file extraction logic** in the “Extract File Data” node to match your file format.
4. **Configure your Grok API credentials** in the “AI Summarization” node.
5. **Connect your Google Sheets account** to the “Log to Google Sheets” node.
6. **Customize the recipient email address** in the “Send Email” node.
7. **Test with sample quotation files** to validate the entire flow.

## **Requirements**

* **Self-hosted n8n instance** (if using community nodes).
* **API key for Grok** or another AI summarization service.
* **Google account access** to log summary data to Sheets.
* **Mail credentials** for sending automated emails (SMTP setup).
* **File parsing logic** (for PDFs, DOCX, Excel) depending on your vendor formats.

## **Customizing This Workflow**

* **Modify the Extract File Data node** to support additional quote formats or fields.
* **Enhance AI Summarization** with custom prompts or models for industry-specific terms.
* **Format output into a PDF summary** or comparison chart if needed.
* **Add Slack/Teams integration** for real-time team alerts.
* **Apply filters** to compare only specific vendors or line items.





## 📊 Basic Information

- **Workflow ID:** 6688
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 639
- **Downloads:** 63
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6688)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **function** (×2)
- **httpRequest** 
- **googleSheets** 
- **wait** 
- **emailSend** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
