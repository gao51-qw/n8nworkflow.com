# Automated Reddit lead generation with AI analysis and Google Sheets

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## How It Works
This n8n workflow automatically discovers high-quality business leads from Reddit posts by analysing posts across targeted subreddits.

1. Loads your business profile from a connected Google Sheet.
2. Uses AI to identify relevant subreddits where your potential customers engage.
3. Generates intent-based Reddit search queries based on your services, keywords, and client pain points.
4. Searches Reddit in real time using the generated queries.
5. Classifies posts based on whether they show lead potential.
6. Analyses high-potential posts for service-fit, urgency, and estimated value.
7. Filters and scores leads to prioritize high-conversion opportunities.
8. Saves the most promising leads to a dedicated Google Sheet.
9. Sends Slack alerts to notify your sales team for immediate follow-up.

## Requirements
Before using this workflow, ensure the following services are connected and configured:
1. Google Sheets (OAuth2): Reads your business profile and writes qualified leads
2. Reddit (OAuth2)	Perform Reddit post searches based on generated queries
3. Google Gemini API	Analyse posts, generate queries, and extract insights
4. Slack API	: Notify your team with qualified lead summaries

### Google Sheets Setup
You will need two Google Sheets:

1. Business Profile Sheet (Input)
This sheet contains a single row describing your service business. The workflow reads this to generate relevant subreddit selections and search queries.

Required Fields (as headers in row 1):

- profession

- industry

- primary_services
 
- service_keywords
 
- target_client_profile
 
- pain_points

- intent_signals
 
- urgency_indicators
 
- price_range

2. Reddit Leads Sheet (Output)
This sheet stores high-quality Reddit posts identified as potential leads. The workflow appends or updates rows based on post_id to avoid duplication.

Expected Columns:

- post_id
 
- post_url
 
- post_title
 
- post_post

- post_subreddit
 
- post_date



## 📊 Basic Information

- **Workflow ID:** 6337
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 865
- **Downloads:** 86
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6337)

## 👤 Author

- **Name:** Risper
- **Username:** @risper254

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **splitInBatches** (×2)
- **reddit** 
- **filter** 
- **code** 
- **@n8n/n8n-nodes-langchain.textClassifier** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
