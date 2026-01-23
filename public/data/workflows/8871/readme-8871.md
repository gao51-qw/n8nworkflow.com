# Sync Gmail emails to PostgreSQL with S3 attachment storage

> ## Sync Gmail emails to PostgreSQL with S3 attachment storage

**Automated Gmail Email Processing System**

## Who's it for
Businesses and individuals who need to:
- Archive email communications in a searchable database
- Backup email attachments to cloud storage
- Analyze email patterns and communication data
- Comply with data retention policies
- Integrate emails with other business systems

## What it does
This workflow automatically captures, processes, and stores Gmail emails in a PostgreSQL database while uploading file attachments to S3/MinIO storage. It handles both individual emails (via Gmail Trigger) and bulk processing (via Schedule Trigger).

**Key features:**
- Dual processing: real-time individual emails + scheduled bulk retrieval
- Complete email metadata extraction (sender, recipients, labels, timestamps)
- HTML to plain text conversion for searchable content
- Binary attachment processing with metadata extraction
- Organized S3/MinIO file storage structure
- UPSERT database operations to prevent duplicates

## How it works
1. **Email Capture**: Gmail Trigger detects new emails, Schedule Trigger gets bulk emails from last hour
2. **Parallel Processing**: Emails with attachments go through binary processing, others go directly to transformation
3. **Attachment Handling**: Extract metadata, upload to S3/MinIO, create database references
4. **Data Transformation**: Convert Gmail API format to PostgreSQL structure
5. **Storage**: UPSERT emails to database with linked attachment information

## Requirements
**Credentials needed:**
- Gmail OAuth2 (gmail.readonly scope)
- PostgreSQL database connection
- S3/MinIO storage credentials

**Database setup:**
Run the provided SQL schema to create the messages table with JSONB fields for flexible data storage.

## How to set up
1. **Gmail OAuth2**: Enable Gmail API in Google Cloud Console, create OAuth2 credentials
2. **PostgreSQL**: Create database and run the SQL schema provided in setup sticky note
3. **S3/MinIO**: Create bucket "gmail-attachments" with proper upload permissions
4. **Configure**: Update authenticatedUserEmail in transform scripts to your email
5. **Test**: Start with single email before enabling bulk processing

## How to customize
- **Email filters**: Modify Gmail queries (in:sent, in:inbox) to target specific emails
- **Storage structure**: Change S3 file path format in Upload node
- **Processing schedule**: Adjust trigger frequencies based on email volume
- **Database fields**: Extend PostgreSQL schema for additional metadata
- **Attachment types**: Add file type filtering in binary processing logic

**Note**: This workflow processes emails from the last hour to avoid overwhelming the system. Adjust timeframes based on your email volume and processing needs.

## 📊 Basic Information

- **Workflow ID:** 8871
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 186
- **Downloads:** 18
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8871)

## 👤 Author

- **Name:** Jose Cuartas
- **Username:** @josecuartas

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×11)
- **splitInBatches** 
- **code** (×3)
- **set** 
- **merge** (×2)
- **aggregate** 
- **postgres** 
- **filter** 
- **s3** 
- **noOp** (×2)
- **gmail** (×3)
- **scheduleTrigger** 
- **gmailTrigger** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
