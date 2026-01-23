# Classify Intercom messages & route to ClickUp or Slack with GPT-4o-mini

> ## How it works
This workflow automates the classification and routing of incoming Intercom conversations. When a new customer message arrives, it is analyzed by AI to determine category, sentiment, urgency, and tags. Based on this classification, the workflow creates tasks in ClickUp for Support or Product requests, or sends real-time alerts to Slack for Sales inquiries.

## Step-by-step

**Webhook Intake**

- Triggered when Intercom sends a new conversation payload.

- Captures customer details, message content, and metadata.

**AI Classification**

- Sends the conversation JSON to OpenAI (gpt-4o-mini) with a structured prompt.

- AI returns a JSON object with category (Support, Product, Sales, Other), sentiment, urgency, reasoning, and tags.

**Processing & Structuring**

- A Code node parses the AI output and merges it with conversation details.

- Prepares formatted task fields such as title, description, customer info, and priority.

**Conditional Routing**

- Support requests → Task created in ClickUp with urgency and tags.

- Product requests → Task created in ClickUp with structured details.

- Sales inquiries → Slack alert sent to the Sales channel with context and AI reasoning.

- Other → No task/action triggered.

## Benefits

- Automates Intercom ticket triage and routing in real time.

- Ensures consistent, AI-driven classification of all customer conversations.

- Reduces manual review time for Support, Product, and Sales teams.

- Creates structured tasks with enriched metadata for faster resolution.

- Keeps Sales teams instantly informed with Slack alerts for urgent leads.

## 📊 Basic Information

- **Workflow ID:** 7933
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 115
- **Downloads:** 11
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7933)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **if** (×3)
- **clickUp** (×2)
- **slack** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
