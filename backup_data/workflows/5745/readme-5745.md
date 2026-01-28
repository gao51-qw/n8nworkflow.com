# Auto-generate and auto-fill business documents with Google Sheets & Gmail

> This workflow automates the generation and delivery of personalized business documents (e.g., **contracts, job offers, invoices, pay slips**) in **PDF format**. The data source is a **Google Sheet**, and the documents are created using CraftMyPDF, then uploaded to Google Drive and optionally sent via email.

This workflow **is ideal for bulk document generation (contracts, invoices, etc.) with minimal manual intervention**.

---

###  Benefits

* **Fully Automated**: Once triggered, it handles the whole pipeline end-to-end—no manual editing or document creation needed.
* **Customizable**: Works with any type of business document as long as you provide a CraftMyPDF template.
* **Scalable**: Processes multiple entries in batch, ideal for HR departments or finance teams.
* **Integrated**: Seamlessly connects Google Sheets, CraftMyPDF, Google Drive, and Gmail.
* **Trackable**: Updates the original spreadsheet to keep track of which documents have been processed.

---

###  Requirements

* Self-hosted n8n instance (required for some advanced node usage).
* Google Sheet template with columns like: `FIRST NAME`, `LAST NAME`, `ADDRESS`, etc.
* A CraftMyPDF account with a ready-made template.
* Google OAuth2 credentials for Sheets, Drive, and Gmail integrations.

---

### **How It Works**  
1. **Trigger & Data Fetch**:  
   - The workflow starts with a manual trigger ("When clicking ‘Execute workflow’").  
   - It retrieves employee data from a Google Sheet ("Get employees"), filtering rows where the "DONE" column is empty.  

2. **PDF Generation & Processing**:  
   - The "Loop Over Items" node processes each employee record individually.  
   - The "Create agreement" node uses CraftMyPDF to generate a PDF contract, populating it with employee details (name, address, email, etc.).  
   - A conditional node ("Success?") checks if PDF creation was successful.  

3. **PDF Handling & Notifications**:  
   - The PDF is fetched ("Get agreement") and uploaded to Google Drive ("Upload agreement") with a filename like `[First-Name]-[Last-Name].pdf`.  
   - An email with the PDF attachment is sent to the employee via Gmail ("Send email with PDF").  

4. **Tracking & Completion**:  
   - The Google Sheet row is updated with "x" in the "DONE" column ("Update row") to mark completion.  
   - The workflow merges results and loops until all records are processed.  

---  

### **Set Up Steps**  
1. **Prerequisites**:  
   - Use the **self-hosted version of n8n** (required for this workflow).  
   - Clone the provided [Google Sheet template](https://docs.google.com/spreadsheets/d/1YQPuoEubRHJepRKdquks69Iqf2XdGVKfpWOdYwk3RMg/edit?usp=sharing).  

2. **Configure CraftMyPDF**:  
   - Create an account on [CraftMyPDF](https://app.craftmypdf.com/).  
   - Design a PDF template and note its **Template ID**. Insert this ID in the "Create agreement" node.  

3. **Credentials Setup**:  
   - Connect nodes to:  
     - Google Sheets (to fetch/update data).  
     - Google Drive (to store PDFs).  
     - Gmail (to send emails).  
     - CraftMyPDF (for PDF generation).  

4. **Customization**:  
   - Adjust field mappings in the "Create agreement" node to match your PDF template placeholders.  
   - Modify the email template in "Send email with PDF" as needed.  

5. **Execution**:  
   - Run the workflow manually. It will process all rows lacking a "DONE" marker, generating PDFs, sending emails, and updating the sheet automatically.  

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 5745
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2335
- **Downloads:** 233
- **Created:** 2025/7/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5745)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **googleSheets** (×2)
- **n8n-nodes-craftmypdf.craftMyPdf** 
- **httpRequest** 
- **googleDrive** 
- **stickyNote** (×2)
- **if** 
- **merge** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
