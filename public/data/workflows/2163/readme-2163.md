# Qualify new leads in Google Sheets via OpenAI's GPT-4

> This n8n workflow was developed to evaluate and categorize incoming leads based on certain criteria. The workflow is triggered by adding a new row in a Google Sheets document.

The workflow uses the OpenAI node to process the lead information. The system query contains detailed qualification rules and the response format. The user message contains the data for the individual lead.

The JSON response from the OpenAI node is then processed by the Edit Fields node to extract the response. This response is merged together with the original lead data by the Merge node.

Finally, the Google Sheets node updates the original lead entry in the Google Sheets document with the qualification result ("qualified" or "not qualified") in a separate column. This allows for easy tracking and sorting of the qualified leads.

## 📊 Basic Information

- **Workflow ID:** 2163
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 29106
- **Downloads:** 2910
- **Created:** 2024/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2163)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **merge** 
- **stickyNote** (×4)
- **googleSheets** 
- **set** 
- **openAi** 
- **googleSheetsTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
