# Salesforce to S3 file migration & cleanup

> # Salesforce to S3 File Migration & Cleanup

Automate archiving old Salesforce files to Amazon S3, log them back in Salesforce, and free up org storage — all from a scheduled n8n workflow.

---

## 🔧 How It Works (High-Level)

1. **Schedule Trigger** kicks off (e.g., daily).  
2. **Query Salesforce** for `ContentDocument` records older than 365 days.  
3. **Loop Each File** → download binary via REST.  
4. **Upload to S3** with the original filename.  
5. **Lookup Links** (`ContentDocumentLink`) to keep the parent record reference.  
6. **Filter Out Users** (ignore `LinkedEntityId` starting with `005`).  
7. **Create `S3_File__c`** record in Salesforce for traceability.  
8. **Delete Original File** from Salesforce to reclaim storage.  
9. **Notify via Slack** when the batch is done.

![Screenshot 20250723 135316.png](fileId:1840)
---

## 🚀 Set Up Steps (Time: ~45–90 mins)

1. **Import n8n Workflow JSON** and wire up credentials (Salesforce OAuth2, AWS S3, Slack).  
2. **Install Salesforce Unmanaged Package** (Custom Object `S3_File__c`, Apex controller, LWC, settings).  
3. **Fill `S3Settings__c`** (bucket, region, keys, expiry) or swap to Named Credentials.  
4. **Test with a Sandbox Batch** (e.g., small date range) and verify upload/delete.  
5. **Schedule & Monitor** (tweak interval, Slack channel).


---

## 💖 Why you’ll love it
- 💸 **Slash storage costs** — offload gigabytes to S3  
- 🔍 **Full traceability** — every file still tracked in Salesforce  
- 🧰 **Plug & play** — import JSON, install package, plug in creds  
- 🧱 **Modular & extensible** — swap S3, add approvals, build an uploader UI  
- ⏱ **Set it & forget it** — scheduled automation + Slack alerts

## 📦 What’s Included

- **n8n JSON Flow** – ready to import.  
- **Salesforce Unmanaged Package** – Apex (`S3FilesController.cls`), LWC (`s3FilesViewer`), `S3_File__c`, `S3Settings__c`.  
- **S3 + Salesforce Setup Guide** – quick reference for configuring keys, permissions, and the LWC.

All components are editable — extend, replace, or integrate with your own processes.

---

## 🧱 Requirements

- n8n instance (self-hosted or Cloud) with HTTP Request, AWS S3, Slack, and Salesforce nodes.  
- Salesforce org with API access & permission to install unmanaged packages.  
- You have to have **Query All Files** permission. Setup-&gt; Permission Sets / Profile -&gt; App Permission -&gt; Content -&gt; Query All Files. Allows View All Data users to SOQL query all files in the org.
- AWS S3 bucket + IAM user/role with `GetObject`/`PutObject` (and optional `ListBucket`).  



## 📊 Basic Information

- **Workflow ID:** 6305
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 113
- **Downloads:** 11
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6305)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×12)
- **splitInBatches** 
- **httpRequest** (×2)
- **awsS3** 
- **salesforce** (×3)
- **code** (×2)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
