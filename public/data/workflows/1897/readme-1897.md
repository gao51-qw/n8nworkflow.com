# Send specific PDF attachments from Gmail to Google Drive using OpenAI

> This workflow reads PDF textual content and sends the text to OpenAI. Attachments of interest will then be uploaded to a specified Google Drive folder. For example, you may wish to send invoices received from an email to an inbox folder in Google Drive for later processing. This workflow has been designed to easily change the search term to match your needs. See the workflow for more details.

## Prerequisites

- [OpenAI credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/).
- [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).

## How it works

1. Triggers off on the `On email received` node.
2. Iterates over the attachments in the email.
3. Uses the `OpenAI` node to filter out the attachments that do not match the search term set in the `Configure` node. You could match on various PDF files (i.e. invoice, receipt, or contract).
4. If the PDF attachment matches the search term, the workflow uses the `Google Drive` node to upload the PDF attachment to a specific Google Drive folder.

## 📊 Basic Information

- **Workflow ID:** 1897
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 21442
- **Downloads:** 2144
- **Created:** 2023/3/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1897)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- File Management
- AI Summarization

## 🔗 Nodes Used

- **readPDF** 
- **stickyNote** (×2)
- **set** 
- **if** (×4)
- **noOp** (×5)
- **code** 
- **openAi** 
- **merge** 
- **googleDrive** 
- **gmailTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
