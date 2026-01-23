# AI-Powered Product Research & Price Comparison with Google Search and OpenAI

> **How it works
**
This intelligent workflow acts as your personal shopping assistant, helping you quickly research products and find potential purchasing options based on your detailed descriptions. It automatically:

- Takes your natural language product description (e.g., "a durable, lightweight hiking backpack for multi-day trips with good ventilation").

- Uses AI to generate optimized search queries to find relevant products online.

- Executes these searches across Google's index.

- Analyzes the top search results (titles and snippets) using AI to identify common product types, features, and potential retailers.

- Compiles a concise summary report with key insights and direct links to relevant product pages.

- Delivers the full report to your inbox, guiding you to the next steps for purchasing.

Save time on product research and get smarter recommendations for your next purchase!

**Set up steps**

Setting up this workflow is more advanced than previous ones due to integrating with a specialized search API, typically taking around 30-60 minutes. You'll need to:

- Set up a Google Custom Search Engine (CSE): This involves creating a CSE in your Google Cloud Platform and obtaining an API Key and Search Engine ID. Detailed instructions are provided within the workflow.

- Obtain API keys for your preferred AI service (e.g., OpenAI, Google AI).

- Connect your preferred email service (e.g., Gmail) to receive the report.

- Provide a clear and detailed description of the product you're looking for.

All detailed setup instructions and specific configuration guidance, including the CSE setup, are provided within the workflow itself using sticky notes.

## 📊 Basic Information

- **Workflow ID:** 6664
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1554
- **Downloads:** 155
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6664)

## 👤 Author

- **Name:** Piotr Sobolewski
- **Username:** @piotrsobolewski

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **openAi** (×2)
- **function** 
- **googleCustomSearch** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
