# Scrape & analyze Google Ads with Bright Data API and AI for email reports

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow is a gem for all PPC managers and experts out there looking to keep track of competitor ads and the campaigns they are running and generate an email report 
![image.png](fileId:1819)
How does it work
1. We use Bright Data API to scrap Google for a given keyword that can trigger an ad. We then extract and analyse different components of the ads to get insights and data rekevant for our processes 

Setting it up
1. Make a copy of this workflow to your canvas
2. Make a copy of this [google sheet](https://docs.google.com/spreadsheets/d/1QU9rwawCZLiYW8nlYYRMj-9OvAUNZoe2gP49KbozQqw/edit#gid=0)
3. Add high intent commercial keywords to your google sheet. These are relevant to trigger ads
4. Set your Bright Data API credentials and update the zone to your respective zone as set on your Bright Data account
5.  We filter only if ads are found and if true extract the top and botton ads
6. This routes the results via different paths

   1. Store raw Ad results
   2. Process the Ads to get new insights and data

7. Map the raw data to match your account
8. You can adjust the prompt to provide any data as needed
9. Connect your emailing platform or tool and update the to email

## Setting up Bright Data serp API and Zone

1. On Bright Data, go to the [Proxies & Scraping](https://brightdata.com/cp/zones) tab
2. Under SERP API, create a new zone
3. Give it a suitable name and description. The default is `serp_api`
3. Add this to your account
 
If you have any questions, feel free to reach out via [linkedin](https://www.linkedin.com/in/zacharia-kimotho/)

## 📊 Basic Information

- **Workflow ID:** 6256
- **Complexity:** advanced
- **Node Count:** 45
- **Views:** 830
- **Downloads:** 83
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6256)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **googleSheets** (×2)
- **splitInBatches** 
- **stickyNote** (×9)
- **set** (×6)
- **noOp** 
- **splitOut** 
- **filter** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×4)
- **aggregate** (×3)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 45 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
