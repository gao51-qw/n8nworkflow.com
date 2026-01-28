# Automate competitor research with Exa.ai, Notion and AI agents

> This n8n workflow demonstrates a simple multi-agent setup to perform the task of competitor research. It showcases how using the HTTP request tool could reduce the number of nodes needed to achieve a workflow like this.

## How it works
* For this template, a source company is defined by the user which is sent to Exa.ai to find competitors.
* Each competitor is then funnelled through 3 AI agents that will go out onto the internet and retrieve specific datapoints about the competitor; company overview, product offering and customer reviews.
* Once the agents are finished, the results are compiled into a report which is then inserted in a notion database.

Check out an example output here: https://jimleuk.notion.site/2d1c3c726e8e42f3aecec6338fd24333?v=de020fa196f34cdeb676daaeae44e110&pvs=4

## Requirements

* An OpenAI account for the LLM.
* Exa.ai account for access to their AI search engine.
* SerpAPI account for Google search.
* Firecrawl.dev account for webscraping.
* Notion.com account for database to save final reports.

## Customising the workflow

Add additional agents to gather more datapoints such as SEO keywords and metrics.

Not using notion? Feel free to swap this out for your own database.

## 📊 Basic Information

- **Workflow ID:** 2354
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 27464
- **Downloads:** 2746
- **Created:** 2024/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2354)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×9)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×10)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **removeDuplicates** 
- **set** (×3)
- **splitOut** 
- **notion** 
- **limit** 
- **splitInBatches** 
- **httpRequest** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
