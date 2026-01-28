# Strip secrets from JSON file via AI Formatter + Merge node&send mail report

> ## Description

This workflow sanitizes any uploaded n8n workflow JSON by removing credentials, webhook IDs, and sensitive metadata. Using AI and structured comparison, it generates a clean, secure workflow version, creates a downloadable sanitized file, and emails a detailed change-log report to the user.

## Key Features
• AI-powered sanitization of workflow JSON
• Automatic removal of secrets, credentials,  
  webhook IDs, and metadata
• Node-level change detection and comparison
• Generates sanitized workflow file (JSON)
• Sends formatted HTML email report with 
  attachment
• Supports customization for additional 
  filtering rules

## How It Works

The user uploads a workflow JSON file, which is extracted and formatted. AI then sanitizes the workflow and returns a secure version. Both original and sanitized workflows are merged for analysis, and a structured change-log is generated. A sanitized JSON file is created and emailed to the user with the report.

## How to Use

Upload your workflow JSON via the form. The workflow processes it automatically, generates a sanitized version, creates a change-log, and emails both the report and sanitized JSON file to you.

## Requirements
• OpenAI credentials
• Gmail or SMTP credentials 
• n8n workflow JSON exported from the editor

## Customising This Workflow

Modify sanitization rules, formatting logic, or email templates inside the JS and AI nodes to suit organizational security policies or custom metadata filtering.

## Support: 

Join n8n Discord https://discord.com/invite/n8n
or
Community Forum https://community.n8n.io/

README file available at https://bit.ly/GeneratesanitizedJSONfile

## 📊 Basic Information

- **Workflow ID:** 11065
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 140
- **Downloads:** 14
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11065)

## 👤 Author

- **Name:** Sridevi Edupuganti
- **Username:** @edupuganti

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **extractFromFile** 
- **set** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **merge** (×2)
- **convertToFile** 
- **gmail** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
