# Enrich property inventory survey with image recognition and AI agent

> This n8n workflow assists property managers and surveyors by reducing the time and effort it takes to complete property inventory surveys.

In such surveys, articles and goods within a property may need to be captured and reported as a matter of record. This can take a sizable amount of time if the property or number of items is big enough.

Our solution is to delegate this task to a capable AI Agent who can identify and fill out the details of each item automatically.

## How it works

* An AirTable Base is used to capture just the image of an item within the property
* Our workflow monitoring this AirTable Base sends the photo to an AI image recognition model to describe the item for purpose of identification.
* Our AI agent uses this description and the help of Google's reverse image search in an attempt to find an online product page for the item.
* If found, the product page is scraped for the item's specifications which are then used to fill out the rest of the details of the item in our Airtable.

## Requirements

* Airtable for capturing photos and product information
* OpenAI account to for image recognition service and AI for agent
* SerpAPI account for google reverse image search.
* Firecrawl.dev account for webspacing.

## Customising this workflow

Try building an internal inventory database to query and integrate into the workflow. This could save on costs by avoiding fetching new each time for common items.

## 📊 Basic Information

- **Workflow ID:** 2330
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 5564
- **Downloads:** 556
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2330)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **airtable** (×2)
- **executeWorkflowTrigger** 
- **set** (×5)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×10)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
