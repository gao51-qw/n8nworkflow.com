# Generate SEO/AEO-optimized Shopify blog articles with GPT-4 and Google Sheets

> **This n8n template demonstrates how to automatically generate and publish SEO/AEO-optimized Shopify blog articles from a list of keywords using AI for content creation, image generation, and metadata optimization.**

## Who’s it for
Shopify marketers, content teams, and solo founders who want consistent, hands-off blog production with built-in SEO/AEO hygiene and internal linking.

## What it does
The workflow picks a keyword from your Google Sheet based on priority, search volume, and difficulty. It then checks your Shopify blog for existing slugs to avoid duplicate, drafts a 900+ word article optimized for SEO/AEO, generates a hero image, creates the article in Shopify, sets SEO metafields (title/description), and logs the result to your Sheets for tracking and future internal links.

## How it works
- **Google Sheets → Candidate selection:** Reads **Keywords**, **Links**, and **Published** tabs: ranks by priority → volume → difficulty. (In the workflow it is explained how to exactly set up the Google Sheets)
- **De-dupe slugs:** Paginates your blog via Shopify GraphQL to collect existing handles and make sure to use a different one.  
- **OpenAI content + image:** Builds a structured prompt (SEO/AEO and internal linking), calls Chat Completions and Image Generation for a hero image.  
- **Shopify publish:** Creates the article via REST and updates `title_tag` / `description_tag` metafields via GraphQL.  
- **Log + link graph:** Appends to **Published** tab to keep track of articles posted and **Links** tab for ongoing internal-link suggestions.  

## How to set up
1. Open **Set – Config** and fill: `shopDomain`, `siteBaseUrl`, `blogId`, `blogHandle`, `sheetId`, `author`. Optional: `autoPublish`, `maxPerRun`, `tz`.  
2. Create the Google Sheet with **Keywords**, **Links**, **Published** tabs using the provided column structure. I have personally used Semrush to generate that list of keywords. 
3. Add credentials: Shopify Admin token (Header/Bearer), OpenAI API key, and Google Service Account.

## Requirements
- Shopify store with Blog API access  
- OpenAI API key  
- Google Service Account with access to Google Sheets API (can be activated here [here](https://console.cloud.google.com/apis/api/sheets.googleapis.com)) 

## How to customize
- Change the cron in **Schedule Trigger** for different days/times.  
- Adjust `maxPerRun`, `autoPublish`, language or any other variables in the "Set - Config" node.
- Adjust the prompt from the "Code - Build Prompt" node.  
- Extend the Sheets schema with extra scoring signals if needed.  


## 📊 Basic Information

- **Workflow ID:** 9115
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 766
- **Downloads:** 76
- **Created:** 2025/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9115)

## 👤 Author

- **Name:** Geoffroy
- **Username:** @jojoq42

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **httpRequest** (×5)
- **code** (×8)
- **stickyNote** (×8)
- **googleSheets** (×5)
- **merge** (×2)
- **set** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
