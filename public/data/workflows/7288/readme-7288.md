# Generate and share professional PDFs with OpenAI, Google Docs, and Slack

> # Free PDF Generator in n8n – No External Libraries or Paid Services
&gt; A 100% free n8n workflow for generating professionally formatted PDFs without relying on external libraries or paid converters. It uses OpenAI to create Markdown content, Google Docs to format and convert to PDF, and integrates with Google Drive and Slack for archiving and sharing, ideal for reports, BRDs, proposals, or any document you need directly inside n8n.
### Watch the demo video below:
[![Watch the video](https://wisestackai.s3.ap-southeast-1.amazonaws.com/free-pdf-generator-from-markdown-in-n8n-no-external-libraries-or-paid-services.jpg)](https://www.youtube.com/watch?v=BB32RPQYI94)

## **Who’s it for**
- Teams that need **auto-generated documents** (reports, guides, checklists) in PDF format.
- Operations or enablement teams who want files **archived in Google Drive** and **shared in Slack** automatically.
- Anyone experimenting with **LLM-powered document generation** integrated into business workflows.

## **How it works / What it does**
1. **Manual trigger** starts the workflow.
2. **LLM generates** a sample Markdown document (via OpenAI Chat Model).
3. **Google Drive folder** is configured for storage.
4. **Google Doc is created** from the generated Markdown content.
5. **Document is exported to PDF** using Google Drive. ([Sample PDF generated from comprehensive markdown](https://wisestackai.s3.ap-southeast-1.amazonaws.com/12082025052957.pdf))
6. **PDF is archived** in a designated Drive folder.
7. **Archived PDF is downloaded** for sharing.
8. **Slack message is sent** with the PDF attached.

## **How to set up**
1. **Add nodes in sequence**:
   - Manual Trigger
   - OpenAI Chat Model (prompt to generate sample Markdown)
   - Set/Manual input for Google Drive folder ID(s)
   - HTTP Request or Google Drive Upload (convert to Google Docs)
   - Google Drive Download (PDF export)
   - Google Drive Upload (archive PDF)
   - Google Drive Download (fetch archived file)
   - Slack Upload (send message with attachment)
2. **Configure credentials** for OpenAI, Google Drive, and Slack.
3. **Map output fields**:
   - `data.markdown` → Google Docs creation
   - `docId` → PDF export
   - `fileId` → Slack upload
4. **Test run** to ensure PDF is generated, archived, and posted to Slack.

## **Requirements**
- **Credentials**:
  - OpenAI API key (or compatible LLM provider)
  - Google Drive (OAuth2) with read/write permissions
  - Slack bot token with `files:write` permission
- **Access**:
  - Write access to target Google Drive folders
  - Slack bot invited to the target channel

## **How to customize the workflow**
- **Change the prompt** in the OpenAI Chat Model to generate different types of content (reports, meeting notes, checklists).
- **Automate triggering**:
  - Replace Manual Trigger with Cron for scheduled document generation.
  - Use Webhook Trigger to run on-demand from external apps.
- **Modify storage logic**:
  - Save both `.md` and `.pdf` versions in Google Drive.
  - Use separate folders for drafts vs. final versions.
- **Enhance distribution**:
  - Send PDFs to multiple Slack channels or via email.
  - Integrate with project management tools for automated task creation.

## 📊 Basic Information

- **Workflow ID:** 7288
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 2590
- **Downloads:** 259
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7288)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDrive** (×3)
- **httpRequest** 
- **manualTrigger** 
- **slack** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
