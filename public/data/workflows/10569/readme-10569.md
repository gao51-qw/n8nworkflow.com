# Generate AI meeting summaries and tasks from Fathom recordings to Dart

> Automatically generate a meeting summary from your meetings through Fathom, save it to a Dart document, and create a review task with the Fathom link attached.

## What it does
This workflow activates when a Fathom meeting ends (via a webhook). It uses an AI model to generate a structured summary of the meeting. The workflow then:

## Who’s it for

* Teams or individuals needing automatic meeting notes.
* Project managers tracking reviews and actions from meetings.
* Users of Fathom and Dart who want to streamline their documentation and follow-up process.

## How to set up
1.  Import the workflow into n8n.
2.  Connect your Dart account (it will need workspace and folder access).
3.  Add your PROD webhook link from the webhook node to your Fathom API settings.
4.  Replace the dummy Folder ID and Dartboard ID with your actual target IDs.
5.  Choose your preferred AI model for generating the summaries.

## Requirements
* n8n account
* Connected Dart account
* Connected Fathom account (with access to API webhooks)

## How to customize the workflow
* Edit the AI prompt to adjust the tone, style, or format of the meeting summaries.
* Add, remove, or change the summary sections to match your needs (e.g., Key Takeaways, Action Items, Next Items).

## 📊 Basic Information

- **Workflow ID:** 10569
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 333
- **Downloads:** 33
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10569)

## 👤 Author

- **Name:** Dart
- **Username:** @dart-team

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **n8n-nodes-dart.dart** (×5)
- **code** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
