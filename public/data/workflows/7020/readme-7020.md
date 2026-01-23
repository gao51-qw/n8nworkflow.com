# Transform meeting transcripts into LinkedIn content with AI and Google Docs

> ## 🎯 Universal Meeting Transcript to LinkedIn Content

### Automatically transform your meeting insights into engaging LinkedIn content with AI

Perfect for coaches, consultants, sales professionals, and content creators who want to share valuable insights from their meetings without the manual effort of content creation.

### How it works
* Calendar trigger detects when your coaching/meeting ends
* Waits for meeting completion, then sends you a form via email
* You provide the meeting transcript and specify post preferences
* AI analyzes the transcript using your personal brand guidelines
* Generates professional LinkedIn content based on real insights
* Creates organized Google Docs with both transcript and final post
* Sends you links to review and publish your content

### How to use
* Connect your Google Calendar and Gmail accounts
* Update the calendar filter to match your meeting types
* Customize the AI prompts with your brand voice and style
* Replace email addresses with your own
* Test with a sample meeting transcript

### Requirements
* Google Calendar (for meeting detection)
* Gmail (for form delivery and notifications)
* Google Drive & Docs (for content storage)
* LangChain AI nodes (for content generation)

### Good to know
* AI processing may incur costs based on your LangChain provider
* Works with any meeting platform - just copy/paste transcripts
* Can be adapted to use webhooks from recording tools like Fireflies.ai
* Memory nodes store your brand guidelines for consistent output

Happy Content Creating!

## 📊 Basic Information

- **Workflow ID:** 7020
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 352
- **Downloads:** 35
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7020)

## 👤 Author

- **Name:** Anna Bui
- **Username:** @annabuiplayground

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **filter** 
- **wait** 
- **gmail** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **set** 
- **googleDrive** 
- **googleDocs** (×4)
- **switch** 
- **googleCalendarTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
