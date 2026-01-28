# Analyze form feedback with GPT-4 & sync tasks to Monday, ClickUp & HubSpot

> ## How it works
This workflow automates customer feedback management by capturing reviews through a form, analyzing them with AI for sentiment and insights, and then creating structured tasks across Monday.com, ClickUp, and HubSpot. It ensures that customer concerns are categorized, prioritized, and assigned to the right teams with actionable metadata.

## Step-by-step

**Trigger & Input**

- The workflow starts when a customer submits the Feedback Form containing their Name, Message, Rating, and Product/Service.
 
- The submitted data is pre-processed with a Code node to cleanly extract fields for analysis.

**AI Analysis & Processing**

- The extracted review is sent to OpenAI GPT-4 for analysis.

- AI identifies sentiment, sentiment score, category (e.g., product, service, support, delivery, pricing), department, priority, required actions, keywords, and suggested response tone.

- A Data Processing node enriches the output with due dates, task titles, structured descriptions, and fallback handling in case of parsing issues.

**Structured Output Generation**

- An AI Agent and OpenAI Chat model transform the enriched data into a strict JSON format that is compatible with Monday.com, ClickUp, and HubSpot.

- This ensures consistent field order, formatting, and metadata for all downstream integrations.

**Task Creation in Platforms**

- The structured task data is automatically pushed to:

  - Monday.com → Creates an item in a specified board.

  - ClickUp → Creates a task with mapped fields and priority.

  - HubSpot → Creates an engagement task in CRM with due date and priority.

## Benefits

- Automates end-to-end customer feedback analysis and task creation.

- Ensures structured, AI-driven insights for actionable responses.

- Reduces manual work in categorizing and assigning reviews.

- Keeps customer feedback synchronized across multiple platforms (Monday.com, ClickUp, HubSpot).

- Improves response time by prioritizing high-impact feedback with due dates.

## 📊 Basic Information

- **Workflow ID:** 7721
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 144
- **Downloads:** 14
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7721)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **mondayCom** 
- **clickUp** 
- **hubspot** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
