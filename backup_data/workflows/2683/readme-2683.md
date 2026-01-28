# AI agent for project management and meetings with Airtable and Fireflies

> ### Video Guide

I prepared a comprehensive guide detailing how to create a Smart Agent that automates meeting task management by analyzing transcripts, generating tasks in Airtable, and scheduling follow-ups when necessary.

[![Youtube Link](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Video%2011%20-%20Fireflies%20Agent%20Blur.png)](https://www.youtube.com/watch?v=0TyX7G00x3A)

[Youtube Link](https://www.youtube.com/watch?v=0TyX7G00x3A)

### Who is this for?
This workflow is ideal for project managers, team leaders, and business owners looking to enhance productivity during meetings. It is particularly helpful for those who need to convert discussions into actionable items swiftly and effectively.

### What problem does this workflow solve?
Managing action items from meetings can often lead to missed tasks and poor follow-up. This automation alleviates that issue by automatically generating tasks from meeting transcripts, keeping everyone informed about their responsibilities and streamlining communication.

### What this workflow does
The workflow leverages n8n to create a Smart Agent that listens for completed meeting transcripts, processes them using AI, and generates tasks in Airtable. Key functionalities include:
- Capturing completed meeting events through webhooks.
- Extracting relevant meeting details such as transcripts and participants using API calls.
- Generating structured tasks from meeting discussions and sending notifications to clients.

1. **Webhook Integration**: Listens for meeting completion events to trigger subsequent actions.
2. **API Requests for Data**: Pulls necessary details like transcripts and participant information from Fireflies.
3. **Task and Notification Generation**: Automatically creates tasks in Airtable and notifies clients of their responsibilities.

### Setup

#### N8N Workflow
1. **Configure the Webhook**: 
   - Set up a webhook to capture meeting completion events and integrate it with Fireflies.

2. **Retrieve Meeting Content**: 
   - Use GraphQL API requests to extract meeting details and transcripts, ensuring appropriate authentication through Bearer tokens.

3. **AI Processing Setup**: 
   - Define system messages for AI tasks and configure connections to the AI chat model (e.g., OpenAI's GPT) to process transcripts.

4. **Task Creation Logic**: 
   - Create structured tasks based on AI output, ensuring necessary details are captured and records are created in Airtable.

5. **Client Notifications**: 
   - Use an email node to notify clients about their tasks, ensuring communications are client-specific.

6. **Scheduling Follow-Up Calls**: 
   - Set up Google Calendar events if follow-up meetings are required, populating details from the original meeting context.


## 📊 Basic Information

- **Workflow ID:** 2683
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 11486
- **Downloads:** 1148
- **Created:** 2024/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2683)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **gmailTool** 
- **executeWorkflowTrigger** 
- **splitOut** 
- **airtable** 
- **googleCalendarTool** 
- **webhook** 
- **httpRequest** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
