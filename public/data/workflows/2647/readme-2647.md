# Sentiment analysis tracking on support issues with Linear and Slack

> This n8n template monitors active support issues in Linear.app to track the mood of their ongoing conversation between reporter and assignee using Sentiment Analysis. When sentiment dips into the negative, a notification is sent via Slack to alert the team.

## How it works
* A scheduled trigger is used to fetch recently updated issues in Linear using the GraphQL node.
* Each issue's comments thread is passed into a simple Information Extractor node to identify the overall sentiment.
* The resulting sentiment analysis combined with the some issue details are uploaded to Airtable for review.
* When the template is re-run at a later date, each issue is re-analysed for sentiment
* Each issue's new sentiment state is saved to the airtable whilst its previous state is moved to the "previous sentiment" column.
* An Airtable trigger is used to watch for recently updated rows
* Each matching Airtable row is filtered to check if it has a previous non-negative state but now has a negative state in its current sentiment.
* The results are sent via notification to a team slack channel for priority.

**Check out the sample Airtable here**: [https://airtable.com/appViDaeaFw4qv9La/shrq6HgeYzpW6uwXL](https://airtable.com/appViDaeaFw4qv9La/shrq6HgeYzpW6uwXL)

## How to use
* Modify the GraphQL filter to fetch issues to a relevant issue type, team or person.
* Update the Slack channel to ensure messages are sent to the correct location or persons.
* The Airtable also serves to give a snapshot of Sentiment across support tickets for a given period. It's possible to use this to assess the daily operations.

## Requirements
* Linear for issue tracking (but feel free to use another system if preferred)
* Airtable for Database
* OpenAI for LLM and Sentiment Analysis

## Customising the workflow
* Add more granular levels of sentiment to reduce the number of alerts.
* Explore different types of sentiment based on issue types and customer types. This may help prioritise alerts and response.
* Run across teams or categories of issues to get an overview of sentiment across the support organisation.

## 📊 Basic Information

- **Workflow ID:** 2647
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 2430
- **Downloads:** 243
- **Created:** 2024/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2647)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **splitOut** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **splitInBatches** 
- **airtable** (×2)
- **airtableTrigger** 
- **switch** 
- **graphql** 
- **scheduleTrigger** 
- **removeDuplicates** 
- **slack** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
