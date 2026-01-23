# Extract timesheet data with Mistral OCR & Gmail human verification

> ## 📖 Description  

### 🔹 How it works  
This workflow introduces an **AI + Human-in-the-Loop pipeline** for employee timesheet management. It combines the power of **Google Drive, AI (OCR + LLM), and Gmail** with a **human review step** to ensure accuracy and compliance.  

1. **AI-Powered File Discovery**  
   - Scans a Google Drive folder for new or updated timesheet files (PDF, Word, Excel, Images).  

2. **AI Data Extraction**  
   - Uses OCR and LLM (Mistral) to intelligently read and extract structured data. 
   -  Supports **multiple formats**: PDF, Word (DOC/DOCX), Excel (XLS/XLSX), and Image files (JPG, PNG, scanned documents).   
   - Creates clean JSON with file details and timesheet logs (date, hours worked, tasks, notes).  

3. **Smart Data Formatting**  
   - Converts AI output into a **clear HTML summary table** for easy review.  
   - Flags potential anomalies (missing hours, duplicate dates, irregular entries).  

4. **Human-in-the-Loop Verification**  
   - Sends an approval email via Gmail containing:  
     - File metadata  
     - AI-generated HTML summary  
     - JSON attachment of raw extracted data  
   - HR/Managers review the summary and **approve/reject** before final actions occur.  

5. **Post-Approval Automation** *(optional)*  
   - Approved records can be saved in a separate Google Drive folder.  
   - Employees or HR receive confirmation emails.  

---

## ⚙️ Set up steps  

1. **Connect Credentials**  
   - Add Google Drive and Gmail credentials in n8n.  
   - Configure Mistral (or any LLM) API credentials. 

2. **Configure Google Drive**  
   - In the “Search files and folders” node, replace the `folderId` with your company’s timesheet folder ID.  

3. **Customize Extraction Schema**  
   - Sticky notes explain how JSON output is structured.  
   - Adapt it for your organization’s needs (e.g., overtime, project codes).  

4. **Set Up Human Verification Emails**  
   - Update Gmail node recipients to your HR or approval team.  
   - Customize the email body (AI summary + JSON file attached).  

5. **Activate & Test**  
   - Enable the workflow.  
   - Upload a sample timesheet to trigger the AI + human verification loop.  

---

  



⚡ **Result:** A robust **AI + Human-in-the-Loop workflow** that reduces repetitive data entry, prevents payroll errors, and gives HR full confidence before final approval.  

## 📊 Basic Information

- **Workflow ID:** 8767
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 286
- **Downloads:** 28
- **Created:** 2025/9/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8767)

## 👤 Author

- **Name:** ResilNext
- **Username:** @rnair1996

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **spreadsheetFile** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **googleDrive** (×3)
- **set** (×5)
- **switch** 
- **gmail** 
- **httpRequest** (×4)
- **aggregate** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
