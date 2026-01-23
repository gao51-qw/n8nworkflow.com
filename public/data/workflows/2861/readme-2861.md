# AI-powered email processing autoresponder and response approval (Yes/No)

> ### How it Works

This workflow is designed to automate the process of handling incoming emails, summarizing their content, generating appropriate responses, and obtaining approval before sending replies. Below are the key operational steps:

1. **Email Reception and Summarization**:
   - The workflow starts with an `Email Trigger (IMAP)` node that listens for new emails in a specified inbox.
   - Once an email is received, its HTML content is processed by a `Markdown` node to convert it into plain text if necessary, followed by an `Email Summarization Chain` node which uses AI to create a concise summary of the email's content using prompts tailored for this purpose.

2. **Response Generation and Approval**:
   - A `Write email` node generates a professional response based on the summarized content, utilizing predefined templates and guidelines such as keeping responses under 100 words and ensuring they're formatted correctly in HTML.
   - Before sending out any automated replies, the system sends these drafts via Gmail for human review and approval through a `Gmail` node configured with double-approval settings. If approved (`Approve?`), the finalized email is sent back to the original sender using the `Send Email` node; otherwise, it loops back for further edits or manual intervention.

### Set Up Steps

To replicate this workflow within your own n8n environment, follow these essential configuration steps:

1. **Configuration**:
   - Begin by setting up an n8n instance either locally or via cloud services offered directly from their official site.
   - Import the provided JSON configuration file into your workspace, making sure all required credentials like IMAP, SMTP, OpenAI API keys, etc., are properly set up under Credentials section since multiple nodes rely heavily on external integrations for functionalities like reading emails, generating summaries, crafting replies, and managing approvals.

2. **Customization**:
   - Adjust parameters according to specific business needs, including but not limited to adjusting the conditions used during conditional checks performed by nodes like `Approve?`.
   - Modify the template messages given to AI models so they align closely with organizational tone & style preferences while maintaining professionalism expected in business communications. Ensure correct mappings between fields when appending data to external systems like Google Sheets or similar platforms where records might need tracking post-interaction completion. 

## 📊 Basic Information

- **Workflow ID:** 2861
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 11737
- **Downloads:** 1173
- **Created:** 2025/2/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2861)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **emailReadImap** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **emailSend** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **if** 
- **stickyNote** (×5)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
