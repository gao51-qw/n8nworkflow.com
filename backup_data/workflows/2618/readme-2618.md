# Email subscription service with n8n forms, Airtable and AI

> This n8n template shows how anyone can build a simple newsletter-like subscription service where users can enrol themselves to receive messages/content on a regular basis. It uses n8n forms for data capture, Airtable for database, AI for content generation and Gmail for email sending.

### How it works
* An n8n form is setup up to allow users to subscribe with a desired topic and interval of which to recieve messages via n8n forms which is then added to the Airtable.
* A scheduled trigger is executed every morning and searches for subscribers to send messages for based on their desired intervals.
* Once found, Subscribers are sent to a subworkflow which performs the text content generation via an AI agent and also uses a vision model to generate an image.
* Both are attached to an email which is sent to the subscriber. This email also includes an unsubscribe link.
* The unsubscribe flow works similarly via n8n form interface which when submitted disables further scheduled emails to the user.

## How to use
* Make a copy of sample Airtable here: [https://airtable.com/appL3dptT6ZTSzY9v/shrLukHafy5bwDRfD](https://airtable.com/appL3dptT6ZTSzY9v/shrLukHafy5bwDRfD)
* Make sure the workflow is "activated" and the forms are available and reachable by your audience.

## Requirements
* Airtable for Database
* OpenAI for LLM (but compatible with others)
* Gmail for Email (but can be replaced with others)

## Customising this workflow
* This simple use can be extended to deliver any types of content such as your company newsletter, promotions, social media posts etc.
* Doesn't have to be limited to just email - try social messaging, Whatsapp, Telegram and others.

## 📊 Basic Information

- **Workflow ID:** 2618
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 3186
- **Downloads:** 318
- **Created:** 2024/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2618)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **airtable** (×6)
- **gmail** (×2)
- **executeWorkflow** 
- **set** (×2)
- **executeWorkflowTrigger** 
- **formTrigger** (×2)
- **filter** 
- **code** 
- **stickyNote** (×8)
- **executionData** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **editImage** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
