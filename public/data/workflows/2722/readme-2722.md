# Email summary agent

> ## Problem
Teams often struggle with email overload, leading to missed actions and inefficient meeting preparation.

## Solution
This workflow automates email management using n8n and AI. It fetches emails, summarizes key points and actions, and sends two concise updates—one in the morning and one at night.

## How It Works

- Triggers at 7 AM and 9 PM: Automates the process to summarize emails received during specific time blocks.

- Fetches Emails: Retrieves emails from the last 24 hours or after a specific time.

- Summarizes with AI: Uses OpenAI to process the email content into actionable summaries.
Sends Team Updates: Compiles the summaries into a concise, formatted email and sends it to the team.

## Expected Results
Significant reduction in missed actions and follow-ups. 

## Customizations
Adjust timings, filters, and recipients to suit your team’s needs.

## 📊 Basic Information

- **Workflow ID:** 2722
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 75937
- **Downloads:** 7593
- **Created:** 2025/1/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2722)

## 👤 Author

- **Name:** Vishal Kumar
- **Username:** @vishalquantana

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **scheduleTrigger** 
- **gmail** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
