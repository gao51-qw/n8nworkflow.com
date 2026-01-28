# Generate business proposals with GPT-4o, Google Sheets and Google Docs

> ## 📊 Description
Automate your client proposal creation with this intelligent workflow that transforms Google Sheets entries into professional Google Docs proposals using OpenAI GPT-4o. Designed for agencies and sales teams, it delivers personalized, branded, and structured proposals in minutes — no manual editing required. 🚀📄🤖

## What This Template Does
- Triggers when a new row is added in a connected Google Sheet. 📋
- Filters only the latest row to ensure one proposal per new entry. 🔍
- Uses GPT-4o to generate structured proposal content (Executive Summary, Scope, Costing, Timeline, Conclusion). 💡
- Parses output into validated JSON format for accurate field mapping. ⚙️
- Populates a Google Docs template with AI-generated content using placeholders. 📝
- Downloads the completed proposal as a PDF file. 💾
- Archives the finalized document into a designated Google Drive folder. 📂
- Resets the template for the next proposal cycle automatically. 🔄

## Key Benefits
✅ Eliminates repetitive manual proposal writing.
 ✅ Ensures brand consistency with structured templates.
 ✅ Generates high-quality proposals using AI in real time.
 ✅ Automates document formatting, saving hours per client.
 ✅ Scales easily for agencies handling multiple clients daily.

## Features
- Google Sheets trigger for new entries.
- GPT-4o-based content generation with customizable prompts.
- JSON output validation and structured parsing.
- Google Docs population using placeholder replacement.
- Drive storage automation for version tracking.
- End-to-end automation from data to proposal delivery.

## Requirements
- Google Sheets document with columns: clientName, jobDescription.
- Google Docs template with placeholders (e.g., {{executive_summary}}, {{scope_of_work}}).
- OpenAI API key (GPT-4o).
- Google Drive credentials for output management.

## Target Audience
- Marketing and web agencies automating client proposal generation.
- Sales teams preparing project estimates and deliverables.
- Freelancers and consultants managing multiple client requests.
- Businesses streamlining documentation workflows.

## Step-by-Step Setup Instructions
- Connect Google Sheets and replace the Sheet ID placeholder.
- Set up your Google Docs proposal template and replace the Document ID.
- Add your OpenAI API key for GPT-4o content generation.
- Specify your Google Drive folder for saving proposals.
- Test the workflow with a sample entry to confirm formatting.
- Activate the workflow for continuous proposal generation. ✅


## 📊 Basic Information

- **Workflow ID:** 10336
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 195
- **Downloads:** 19
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10336)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheetsTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleDocs** (×2)
- **googleDrive** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
