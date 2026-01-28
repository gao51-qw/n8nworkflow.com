# Create AI meeting summaries with Fireflies transcripts & Dart tasks using Gemini

> Automatically generate a meeting summary from your meetings through Fireflies.ai, save it to a Dart document, and create a review task with the meeting link attached.

## What it does

This workflow activates when a Fireflies.ai meeting is processed (via a webhook). It retrieves the meeting transcript via the FirefliesAI transcript node and uses an AI model to generate a structured summary.

## Who’s it for

* Teams or individuals needing automatic meeting notes.
* Project managers tracking reviews and actions from meetings.
* Users of Fireflies.ai and Dart who want to streamline their documentation and follow-up process.

## How to set up

* Import the workflow into n8n.
* Connect your Dart account (it will need workspace and folder access).
* Add your PROD webhook link from the webhook node to your Fireflies.ai API settings.
* Add your Fireflies.ai API key on the Fireflies Transcript node.
* Replace the dummy Folder ID and Dartboard ID with your actual target IDs.
* Choose your preferred AI model for generating the summaries.

## Requirements

* n8n account
* Connected Dart account
* Connected Fireflies.ai account (with access to API key and webhooks)

## How to customize the workflow

* Edit the AI prompt to adjust the tone, style, or format of the meeting summaries.
* Add, remove, or change the summary sections to match your needs (e.g., Key takeaways, Action Items, Summary).

## 📊 Basic Information

- **Workflow ID:** 10851
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10851)

## 👤 Author

- **Name:** Dart
- **Username:** @dart-team

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **n8n-nodes-dart.dart** (×5)
- **stickyNote** (×7)
- **@firefliesai/n8n-nodes-fireflies.fireflies** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
