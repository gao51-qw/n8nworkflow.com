# Effortless email management with AI-powered summarization & review

> ### How it Works

This workflow automates the handling of incoming emails, summarizes their content, generates appropriate responses using a retrieval-augmented generation (RAG) approach, and obtains approval or suggestions before sending replies. Below is an explanation of its functionality divided into two main sections:

1. **Email Handling and Summarization**:
   - The process begins with the `Email Trigger (IMAP)` node which listens for new emails in a specified inbox.
   - Once an email is received, the `Markdown` node converts its HTML content into plain text if necessary, followed by the `Email Summarization Chain` that uses AI to create a concise summary of up to 100 words.

2. **Response Generation and Approval**:
   - A `Write email` node generates a professional response based on the summarized content, ensuring brevity and professionalism while keeping within the word limit.
   - Before sending out any automated replies, the system sends these drafts via Gmail for human review and approval through the `Gmail` node configured with free-text response options. If approved, the finalized email is sent back to the original sender using the `Send Email` node; otherwise, it loops back for further edits or manual intervention.
   - Additionally, there's a `Text Classifier` node designed to categorize feedback from humans as either "Approved" or "Declined", guiding whether the email should proceed directly to being sent or require additional editing.

### Set Up Steps

To replicate this workflow within your own n8n environment, follow these essential configuration steps:

1. **Configuration**:
   - Begin by setting up an n8n instance either locally or via cloud services offered directly from their official site.
   - Import the provided JSON configuration file into your workspace, making sure all required credentials such as IMAP, SMTP, OpenAI API keys, etc., are properly set up under Credentials since multiple nodes rely heavily on external integrations for functionalities like reading emails, generating summaries, crafting replies, and managing approvals.

2. **Customization**:
   - Adjust parameters according to specific business needs, including but not limited to adjusting the conditions used during conditional checks performed by nodes like `Approve?`.
   - Modify the template messages given to AI models so they align closely with organizational tone & style preferences while maintaining professionalism expected in business communications.
   - Ensure correct mappings between fields when appending data to external systems where records might need tracking post-interaction completion, such as Google Sheets or similar platforms.

## 📊 Basic Information

- **Workflow ID:** 2862
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 31059
- **Downloads:** 3105
- **Created:** 2025/2/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2862)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **emailReadImap** 
- **markdown** 
- **emailSend** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **set** 
- **manualTrigger** 
- **httpRequest** (×2)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
