# AI-powered file management automation for Google Drive with MCP

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## 📁 Google Drive MCP Workflow – AI-Powered File Management Automation 🚀

## 🧠 Overview
A secure and intelligent n8n workflow that connects with Google Drive via MCP (Model Control Protocol). Ideal for AI agent tasks, compliance-driven storage, and document automation.

## 🌟 Key Features
🔒 Built-In Safety

Backs up files before edits (timestamped)
Supports rollback using file history
Validates file size, type, and permissions
📁 Smart Organization

Automatically converts file types (PDF, DOCX, etc.)
Moves files to structured folders
Auto-archives old files based on age or rules
## 🔄 MCP Integration

Accepts standardized JSON via webhook
Real-time execution for AI agents
Fully customizable input (action, fileId, format, etc.)
## ✅ AI Callable MCP Actions
These are the commands AI agents can perform via MCP:

Download a file (with optional format conversion)
Upload a new file to Google Drive
Copy a file for backup
Move a file to a specific folder
Archive old or inactive files
Organize documents into folders
Convert files to a new format (PDF, DOCX, etc.)
Retrieve and review file history for rollback
📝 Example Input
{
  "action": "download",
  "fileId": "abc123",
  "folderPath": "/projects/clientA",
  "convertFormat": "pdf"
}
## 🔐 Security & Performance
OAuth2 secured access to Google Drive API
No sensitive data stored in transit
Real-time audit logs and alerts
Batch-friendly with built-in rate limiting
📌 Ideal For
Businesses automating file management
AI Agents retrieving, sorting, converting, or archiving files
Compliance teams needing file versioning and backups
⚙️ Requirements
n8n + Google Drive API v3
MCP server + Webhook integration
Google OAuth2 Credentials


## 📊 Basic Information

- **Workflow ID:** 5425
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 4167
- **Downloads:** 416
- **Created:** 2025/6/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5425)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **googleDriveTool** (×5)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
