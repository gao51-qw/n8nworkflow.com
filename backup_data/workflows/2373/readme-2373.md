# Customer insights with Qdrant, Python and information extractor

> This n8n template is one of a 3-part series exploring use-cases for clustering vector embeddings:
* Survey Insights
* Customer Insights
* Community Insights

This template demonstrates the Customer Insights scenario where Trustpilot reviews can be quickly grouped by similarity and an AI agent can generate insights on those groupings.

With this workflow, marketers can save days and even weeks of work breaking down their own or competitor reviews and identify frequently mentioned positives and negatives.

Sample Output: https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6ipJnXWXgr5wlUJnhioNpeYrxaIpsRYZCwN3C-fFXumkbh9TAsA_JzE0kbv7DcGAVIP7az0L46_2P/pubhtml

### How it works
* Trustpilot reviews are scraped for a particular company using the HTTP request node.
* Reviews are then inserted into a Qdrant collection carefully tagged with the question and Trustpilot metadata.
* Reviews are fetched and put through a clustering algorithm using the Python Code node. The Qdrant points are returned in clustered groups.
* Each group is looped to fetch the payloads of the points and feed them to the AI agent to summarise and generate insights for.
* The resulting insights and raw responses are then saved to the Google Spreadsheet for further analysis by the marketer.

### Requirements
* Qdrant Vectorstore for storing embeddings.
* OpenAI account for embeddings and LLM.

### Customising the Template
* Adjust clustering parameters which make sense for your data.
* Consider expanding date range of reviews for insights over common intervals: 3mth, 6mth and YTD.

## 📊 Basic Information

- **Workflow ID:** 2373
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 6693
- **Downloads:** 669
- **Created:** 2024/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2373)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×5)
- **html** 
- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **filter** 
- **googleSheets** 
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **stickyNote** (×13)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **code** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
