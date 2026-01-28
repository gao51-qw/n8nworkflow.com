# Consolidate and report monthly financial PDFs with Google Drive and Slack

> # Consolidate and report monthly financial documents using Google Drive and Slack

## 🎯 Description
Streamline your month-end accounting processes with this enterprise-grade automation designed to aggregate, validate, and merge fragmented financial documents into a single, professional reporting bundle. This workflow transforms manual document chaos into a structured, touchless system using Google Drive and Slack.



### ✨ How to achieve automated document consolidation
You can achieve a fully autonomous financial reporting cycle by using the available tools to:

1. **List and scan folders** — Automatically retrieve all documents from a designated Google Drive folder at the end of each month.
2. **Validate file formats** — Use an **IF Node** to ensure only PDF documents (invoices, receipts, statements) are processed, preventing workflow crashes from incompatible file types.
3. **Aggregate binary data** — Gather separate file streams into a unified data array using the **Aggregate Node** to ensure stable processing for the merge engine.
4. **Merge into master reports** — Utilize the **HTML to PDF** engine to consolidate individual files into one "Monthly Finance Pack" with professional naming conventions.
5. **Secure and archive** — Upload the consolidated master file back to a secure archive folder in Google Drive.
6. **Notify the team** — Send a real-time **Slack** alert with the final filename, ensuring the accounting team knows exactly when the report is ready.

### 💡 Key features

**Intelligent filtering and validation**
The workflow auto-detects MIME types to filter out non-PDF noise and system files. This ensures a consistent input for the merge engine and prevents processing errors.

**Advanced data aggregation**
By utilizing the **Aggregate Node**, the workflow handles multiple binary files simultaneously. This architecture prevents the "looping errors" common in basic PDF workflows and maintains document order during the merge process.

**Dynamic time-stamping with Luxon**
A critical technical feature of this template is the use of **Luxon expressions** for professional document naming. By utilizing `{{ $now.setZone('America/New_York').toFormat('MMMM yyyy') }}` within the Slack and upload nodes, the workflow automatically generates accurate timestamps. This eliminates manual renaming and ensures your archives are perfectly organized by month and year.

### 🎯 Perfect for
* **Finance departments** — Consolidate hundreds of monthly vendor invoices into one audit-ready file.
* **Property managers** — Bundle monthly utility bills and maintenance receipts for property owners.
* **Freelancers and agencies** — Collate all business expenses for the month to send to a tax preparer.

### 📦 What you will need

**Required integrations:**
1. **Google Drive** — Source folder for documents and destination for the final bundle.
2. **HTML to PDF Node** — The core engine for PDF merging operations.
3. **Slack** — For automated team notifications and status updates.

### 📈 Expected results
* **90% time savings** — Reduce manual report creation from 30 minutes to seconds.
* **Zero lost documents** — Maintain a complete digital trail with automatic archival.
* **Audit readiness** — Ensure a consistent naming and storage structure for all past financial reports.

***

**Ready to automate your reporting?** Import this template, connect your credentials, and turn your monthly document collection into a 100% automated workflow.

## 📊 Basic Information

- **Workflow ID:** 12544
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12544)

## 👤 Author

- **Name:** Jitesh Dugar
- **Username:** @jiteshdugar

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **n8n-nodes-htmlcsstopdf.htmlcsstopdf** 
- **scheduleTrigger** 
- **googleDrive** (×3)
- **if** 
- **aggregate** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
