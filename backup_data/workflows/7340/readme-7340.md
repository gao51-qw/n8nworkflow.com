# Create Google Calendar events from labeled Gmail emails with Google Gemini AI

> Title
Create Google Calendar events from labeled Gmail emails using AI

Description
Who is it for?
This template is for anyone who frequently receives unstructured event or task information via email and wants to quickly add it to their Google Calendar without manual data entry. It's perfect for busy professionals, personal productivity enthusiasts, and anyone looking to streamline their scheduling.

What it does
This workflow automates the process of creating Google Calendar events from emails you label in Gmail, using AI to parse the details.

Triggers on Labeled Email: The workflow starts when a new email is given a specific label in Gmail (e.g., "Scheduled").

Parses Event with AI: The email's content is sent to Google Gemini to extract structured event data: title, start time, end time, location, and a description.

Creates Calendar Event: Using the data extracted by the AI, a new event is automatically created in your Google Calendar.

Sends Confirmation Email: A confirmation email is sent back to you, containing a summary of the created event and a direct link to edit it in Google Calendar.

Requirements
An active n8n instance.

A Google account for Gmail and Google Calendar.

Credentials for the Google Gemini API.

How to set up
Credentials: Configure your credentials for the 'Gmail Trigger', 'Google Gemini Chat Model', 'Create Google Calendar Event', and 'Send Confirmation Email' nodes.

Gmail Trigger: Select the 'Gmail Trigger' node. In the 'Label Ids' field, choose the Gmail label you want to use to trigger the workflow (e.g., a label named Scheduled).

Confirmation Email: Select the 'Send Confirmation Email' node. In the 'Send To' field, enter the email address where you want to receive the confirmation email.

Activate Workflow: Save and activate the workflow.

How to customize
AI Prompt: You can modify the prompt in the 'Parse Event with AI' node to better suit your needs. For example, you can change the default timezone or add rules for how to handle recurring events.

Email Content: Customize the subject and body of the confirmation email in the 'Send Confirmation Email' node.

Calendar Options: In the 'Create Google Calendar Event' node, you can add more event details, such as attendees or reminders.

## 📊 Basic Information

- **Workflow ID:** 7340
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1618
- **Downloads:** 161
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7340)

## 👤 Author

- **Name:** nobu
- **Username:** @nobu

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **googleCalendar** 
- **gmail** 
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
