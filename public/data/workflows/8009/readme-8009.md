# Generate professional Zoom meeting summaries with GPT-4O and Google Docs

> 
## How it Works

This automated workflow transforms Zoom meeting emails into professional summaries and Google Docs. It monitors your Gmail for Zoom meeting notification emails, extracts meeting content using AI-powered analysis, and generates both email-safe HTML summaries and Google Docs-compatible text. 

The workflow intelligently parse meeting transcripts, creating structured summaries with attendee lists, key discussion points, action items, and next steps. 

It automatically creates Google Docs for record-keeping and sends formatted email summaries to meeting participants.

## Who is it For

Perfect for **project managers**, **team leads**, **executives**, and **meeting coordinators** who regularly conduct Zoom meetings and need consistent, professional documentation. Ideal for organizations that require structured meeting records, action item tracking, and seamless integration between communication tools. Especially valuable for distributed teams, consulting firms, and corporate environments where meeting accountability and follow-up are critical.

## Benefits for Using this Workflow

- **Time Savings**: Eliminates 30-60 minutes of manual meeting summary creation per meeting.
- **Professional Consistency**: Ensures all meeting summaries follow the same structured format with headers, attendees, discussion points, and action items. 
- **Automated Documentation**: Creates searchable Google Docs archives and distributes summaries without manual intervention.
- **Enhanced Accountability**: Clear action item tracking with assignees and deadlines improves follow-through. 
- **Multi-Format Output**: Provides both email-friendly HTML and plain text formats for maximum compatibility across different platforms and systems.

## Setup Requirements
- **Prerequisites**: Active n8n instance, Gmail account, Google Docs access, OpenAI API key. 
- **Required Credentials**: Configure Gmail OAuth2 for both trigger and sending, Google Docs OAuth2 for document creation, OpenAI API for GPT-4 processing. 
- **Configuration Steps**: 
		1) Import workflow and activate Gmail trigger with filter for Zoom meeting emails, 
		2) Set up Google Drive folder permissions for document creation, 
		3) Configure OpenAI credentials and verify AI agent tools connection, 
		4) Test workflow with a sample Zoom email to ensure proper formatting and delivery. 
- **Optional Customization**: Modify Gmail search filters, adjust Google Docs folder location, customize email templates, or fine-tune AI prompt for specific meeting formats.



## 📊 Basic Information

- **Workflow ID:** 8009
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 201
- **Downloads:** 20
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8009)

## 👤 Author

- **Name:** inderjeet Bhambra
- **Username:** @idsinghbhambra

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **markdown** (×2)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDocs** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **noOp** (×2)
- **stickyNote** (×5)
- **gmailTrigger** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmailTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
