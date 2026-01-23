# Summarize Google Sheets form feedback via OpenAI's GPT-4

> This n8n workflow was developed to collect and summarize feedback from an event that was collected via a Google Form and saved in a Google Sheets document. The workflow is triggered manually by clicking on the "Test workflow" button.

The Google Sheets node retrieves the responses from the feedback form. The Aggregate node then combines all responses for each question into arrays and prepares the data for analysis.

The OpenAI node processes the aggregated feedback data. System Prompt instructs the model to analyze the responses and generate a summary report that includes the overall sentiment regarding the event and constructive suggestions for improvement.

The Markdown node converts the summary report, which is in Markdown format, into HTML. Finally, the Gmail node sends an HTML-formatted email to the specified email address.

## 📊 Basic Information

- **Workflow ID:** 2164
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 9331
- **Downloads:** 933
- **Created:** 2024/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2164)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×4)
- **googleSheets** 
- **aggregate** 
- **openAi** 
- **markdown** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
