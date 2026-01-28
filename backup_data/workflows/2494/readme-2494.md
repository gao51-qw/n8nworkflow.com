# Generate SEO keyword search volume data using Google API

> ## Use Case
Generate accurate search volume data for SEO keyword research:
- You have a list of potential keywords to target for your website SEO but don't know their actual search volume
- You need historical data to identify seasonal trends in keyword popularity
- You want to assess keyword difficulty to prioritize your content strategy
- You need data-driven insights for planning your SEO campaigns

## What this Workflow Does
The workflow connects to Google's Keyword Planner API to retrieve keyword metrics for your SEO research:

- Fetches monthly search volume for each keyword
- Provides historical trends data for the past 12 months
- Calculates keyword difficulty scores
- Delivers competition metrics from Google Ads


## Setup
1. Fill the `Set 20 Keywords` with up to 20 Keywords of your choosing in an array e.g. ["keyword 1", "keyword 2",...]
2. Create a Google Ads API account and add credentials to `Get Search Data` node
3. Replace the `Connect to your own database` with your own database for the output


## How to Adjust it to Your Needs
- Change the `Set 20 Keywords` node input to a source of your choosing e.g. Airtable database with 20 keywords
- Connect to output source of your choosing 


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 📊 Basic Information

- **Workflow ID:** 2494
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 19575
- **Downloads:** 1957
- **Created:** 2024/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2494)

## 👤 Author

- **Name:** simonscrapes
- **Username:** @simonscrapes

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×7)
- **splitOut** 
- **set** 
- **noOp** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
