# Automate Microsoft Teams meeting analysis with GPT-4.1, Outlook & Mem.ai

> 
Automate Microsoft Teams Meeting Analysis with GPT-4.1, Outlook & Mem.ai
    
- [Watch the YouTube video to get started](https://youtu.be/DRtloBXG8FU)
- [Follow along with the blog post](https://blog.nocodecreative.io/automate-teams-transcript-to-summary-n8n)

## Template Overview

This advanced n8n template automates Microsoft Teams meeting analysis, knowledge base creation, and email drafting directly from meeting recordings and transcripts.

It provides end-to-end automation for the following use cases:

**Meeting Analysis**

- Connects to Microsoft Graph to retrieve meeting recordings, chat messages, and transcripts.
- Analyses meeting content using AI models.
- Extracts key points, action items, questions, and themes from meetings automatically.

**AI-Powered Web App**

- Automatically creates a detailed report from past meetings.
- Stores meeting summaries, metadata, and insights into an easy-to-browse frontend.
- New meetings are added dynamically without manual work.
**
Knowledge Base Indexing (via Mem.ai)**

- Uploads extracted meeting data into a structured knowledge base.
- Supports categorisation, search and chat functionality across meetings.
- 
**Draft Follow-Up Emails**

- Draft personalised follow-up emails for meeting participants.
- Email drafts include:
    - Meeting summary
    - Key decisions
    - Action items
- Emails can be sent manually with a human in the loop context via Microsoft Outlook integration.

**Core Components**

- Microsoft Graph API for accessing meetings, chats, files, and user profiles.
- SharePoint API for file storage and search.
- n8n Webhooks to trigger processes dynamically.
- Generic OAuth2 authentication for seamless Microsoft access.
- JavaScript Code Nodes for flexible, intelligent parsing and structuring of meeting data.
- AI/LLM nodes for summarisation and content creation.

Designed to be scalable, modular, and easily customisable for different organisation sizes and industries.

🛡️ Note

Failure to correctly configure Azure permissions will prevent the template from functioning. Ensure admin approval is fully completed during setup.

## **Important Prerequisites**

⚠️ Administrator consent is required

This template requires a Microsoft 365 Global Administrator or Application Administrator to grant admin consent to a set of Microsoft Graph and SharePoint API scopes.

Basic Azure App Registration knowledge is required:

You need to set up an Azure App Registration manually, configure OAuth2 authentication, and assign specific API permissions.

A setup guide is included, but familiarity with:

- App registrations
- API permissions
- Client secrets
- OAuth2 flows

is highly recommended.

Knowledge of Postgres is required
The template includes a SQL script to create the required Postgres table (see blog post).

You are responsible for hosting your own database (You can use Supabase with the Postgres connection string).


## 📊 Basic Information

- **Workflow ID:** 4512
- **Complexity:** advanced
- **Node Count:** 62
- **Views:** 2275
- **Downloads:** 227
- **Created:** 2025/5/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4512)

## 👤 Author

- **Name:** Wayne Simpson
- **Username:** @nocodecreative

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **set** (×6)
- **scheduleTrigger** 
- **postgres** (×4)
- **code** (×3)
- **filter** (×2)
- **merge** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **httpRequest** (×9)
- **splitOut** (×3)
- **respondToWebhook** (×3)
- **html** (×2)
- **webhook** (×2)
- **switch** 
- **markdown** 
- **splitInBatches** 
- **stickyNote** (×11)
- **sort** 
- **removeDuplicates** 
- **formTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **microsoftOutlook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 62 nodes with 47 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
