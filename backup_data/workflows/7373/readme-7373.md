# Generate qualified Instagram leads from hashtags with Apify and Google Sheets

> # Instagram Hashtag Lead Generation

Automate the process of finding and qualifying Instagram leads based on hashtags. This workflow reads hashtags from Google Sheets, scrapes Instagram for posts using Apify, analyzes caption content and language, compiles unique usernames, gathers detailed user info, and filters leads based on follower count.

---

## How It Works

1. **Fetch Hashtags**  
   The workflow starts and pulls a list of hashtags from a Google Sheet.

2. **Scrape Instagram Posts**
   For each hashtag, it builds Instagram explore URLs and scrapes posts using Apify.

3. **Analyze Captions**
   Each caption is cleaned, hashtags and links are removed, and language/content is analyzed (English/French/Spanish).

4. **Extract & Filter Usernames**
   Usernames are combined and deduplicated, their Instagram profiles scraped for follower counts and other details.

5. **Qualified Leads**
   Only users with followers in your target range are kept as qualified leads for outreach or analysis.

---

## Requirements

- An n8n instance.
- Apify API key.
- Google account with a Sheet containing hashtags.
- Apify Instagram Scraper actor access.
- The Google Sheet should have a column with hashtags.

---

## Setup Instructions

1. **Add Credentials**  
   In n8n, add your Apify API key and Google Sheets credentials.

2. **Configure Google Sheets Nodes**  
   Choose your credentials, spreadsheet, and sheet name in the “Get list of Hashtags” node.

3. **Configure Apify Request Nodes**  
   Enter your Apify API key and select the Instagram scraper actors.

4. **Adjust Filtering**  
   Edit the min/max follower count in the relevant filter node to match your needs.

5. **Test & Run**  
   Manually execute the workflow or add a trigger to run on a schedule.

---

## Customization Options 💡

- **Trigger:** Add a schedule or webhook to automate execution.
- **Language Filtering:** Modify keyword lists or add language detection logic.
- **Lead Output:** Extend the workflow to save leads to a CRM or send notifications.

---

## Details

**Nodes used in workflow:**
- Manual Trigger
- Google Sheets
- Code
- HTTP Request (Apify)
- IF (Conditional)
- Aggregate
- Remove Duplicates
- Sticky Note

## 📊 Basic Information

- **Workflow ID:** 7373
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1329
- **Downloads:** 132
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7373)

## 👤 Author

- **Name:** Matthew
- **Username:** @matthew-synteria

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×2)
- **httpRequest** (×2)
- **if** (×3)
- **aggregate** (×2)
- **removeDuplicates** 
- **googleSheets** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
