# Community insights using Qdrant, Python and Information Extractor

> This n8n template is one of a 3-part series exploring use-cases for clustering vector embeddings:
* Survey Insights
* Customer Insights
* Community Insights

This template demonstrates the Community Insights scenario where HN commments can be quickly grouped by similarity and an AI agent can generate insights on those groupings.

With this workflow, Researchers or HN users can quickly breakdown community consensus on a particular topic and identify frequently mentioned positives and negatives.

Sample Output: https://docs.google.com/spreadsheets/d/e/2PACX-1vQXaQU9XxsxnUIIeqmmf1PuYRuYtwviVXTv6Mz9Vo6_a4ty-XaJHSeZsptjWXS3wGGDG8Z4u16rvE7l/pubhtml

### How it works
* HN comments are imported via the Hacknews API node.
* Comments are then inserted into a Qdrant collection carefully tagged with the Hackernews API metadata.
* Comments are then fetched and are put through a clustering algorithm using the Python Code node. The Qdrant points are returned in clustered groups.
* Each group is looped to fetch the payloads of the points and feed them to the AI agent to summarise and generate insights for.
* The resulting insights and raw responses are then saved to the Google Spreadsheet for further analysis by the researcher or the HN user.

### Requirements
* Works best with lots of comments!
* Qdrant Vectorstore for storing embeddings.
* OpenAI account for embeddings and LLM.

### Customising the Template
* Adjust clustering parameters which make sense for your data.
* Adjust sentimentality setting if comments are overwhelmingly negative at times.

## 📊 Basic Information

- **Workflow ID:** 2374
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 47111
- **Downloads:** 4711
- **Created:** 2024/8/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2374)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **hackerNews** 
- **splitOut** (×2)
- **set** (×5)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **filter** 
- **googleSheets** 
- **executeWorkflowTrigger** 
- **executeWorkflow** 
- **stickyNote** (×13)
- **code** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
