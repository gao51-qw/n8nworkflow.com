# Survey insights with Qdrant, Python and Information Extractor

> This n8n template is one of a 3-part series exploring use-cases for clustering vector embeddings:
* Survey Insights
* Customer Insights
* Community Insights

This template demonstrates the Survey Insights scenario where survey participant responses can be quickly grouped by similarity and an AI agent can generate insights on those groupings.

With this workflow, researchers can save days and even weeks of work breaking down cohorts of participants and identify frequently mentioned positives and negatives.

Sample Output: https://docs.google.com/spreadsheets/d/e/2PACX-1vT6m8XH8JWJTUAfwojc68NAUGC7q0lO7iV738J7aO5fuVjiVzdTRRPkMmT1C4N8TwejaiT0XrmF1Q48/pubhtml#

### How it works
* All survey questions and responses are imported from a Google Sheet.
* Responses are then inserted into a Qdrant collection carefully tagged with the question and survey metadata.
* For each question, all relevant response are put through a clustering algorithm using the Python Code node. The Qdrant points are returned in clustered groups.
* Each group is looped to fetch the payloads of the points and feed them to the AI agent to summarise and generate insights for.
* The resulting insights and raw responses are then saved to the Google Spreadsheet for further analysis by the researcher.

### Requirements
* Survey data and format as shown in the attached google sheet.
* Qdrant Vectorstore for storing embeddings.
* OpenAI account for embeddings and LLM.

### Customising the Template
* Adjust clustering parameters which make sense for your data. Add more clusters for open-ended questions and less clusters when responses are multiple choice.

## 📊 Basic Information

- **Workflow ID:** 2372
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 3573
- **Downloads:** 357
- **Created:** 2024/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2372)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **set** (×6)
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **googleSheets** (×5)
- **splitOut** (×3)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitInBatches** 
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **stickyNote** (×12)
- **if** 
- **manualTrigger** 
- **filter** 
- **code** 
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
