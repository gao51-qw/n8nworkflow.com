# Automatically classify and label Gmail emails with Google Gemini AI

> ### Description
Quickly organize your inbox with AI!
This simple workflow automatically classifies incoming emails into different categories — like High Priority, Work Related, or Promotions — and applies Gmail labels accordingly.
Setup takes less than 2 minutes, and it runs 24/7, helping you stay focused on what matters most without manual sorting.

### Tools/Services Needed
* Gmail: To trigger the workflow and label emails.
* Google Gemini (or any LLM Model): To intelligently classify email content.


### How It Works
1. Gmail Trigger: Detects every new incoming email.


2. Text Classifier Node: Classifies the email content into predefined categories.


3. Google Gemini Chat Model: Provides the AI-powered understanding behind the classification.
4. Conditional Labeling:
- If the email is High Priority, label it accordingly.
- If it’s Work Related (e.g., internal emails), apply the work label.
- If it’s a Promotion, sort it into the promotions label.
5. Gmail Labeling: Automatically adds the correct label to the email.

### Setup Instructions
* Connect your Gmail account to n8n.
* Connect your Google Gemini (or other LLM) credentials.
* Customize the categories and labels if needed.
* Activate the workflow — and that's it!

### Notes
* You can easily add more categories (like "Finance," "Newsletters," etc.) by adjusting the classification prompt.
* Works best with a clean and minimal set of categories to avoid overlap.
* Can be adapted to work with any other large language model (OpenAI, Claude, etc.) if preferred.

## 📊 Basic Information

- **Workflow ID:** 3772
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 8066
- **Downloads:** 806
- **Created:** 2025/4/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3772)

## 👤 Author

- **Name:** Jakkrapat Ampring
- **Username:** @guitarpmacc

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **gmail** (×4)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
