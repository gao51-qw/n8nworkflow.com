# Scrape Google Maps data & discover email addresses with SerpAPI and EmailListVerify

> This workflow allows to : 
- scrape Google Maps data using SerpAPI
- discovery generic email addresses like contact@ using EmailListVerify API

## Who’s it for
This template is designed to prepare cold outreach for local businesses like restaurants or hotels (you need to target a type of business that is listed on Google Maps).

This template will generate a list of leads with phone numbers and email addresses.

The email addresses you will get are generic, like contact@. This isn’t a problem if you are targeting small businesses, as the owner will most likely monitor those emails. However, if your ideal customer profile has more than 20 employees, I do not recommend using those email addresses for cold outreach.
## Requirement
This template uses:
Google Sheet to handle input and output data
[SerpAPI](https://serpapi.com/) to scrape Google Maps (250 searches/month in the free plan)
[EmailListVerify](https://emaillistverify.com/) to discover email (from $0.05 per email)

## Notes
This template is an extension of [Lucas Perret template](https://n8n.io/workflows/2063-google-maps-scraper/) (adding email discovery module).

If there is some interest in it, I can make a similar template using [Apify](https://apify.com/compass/crawler-google-places?backlink=%252Fstore) as an alternative to SerpAPI for Google Map scraping.


## 📊 Basic Information

- **Workflow ID:** 7906
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 1372
- **Downloads:** 137
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7906)

## 👤 Author

- **Name:** EmailListVerify
- **Username:** @emaillistverify

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×4)
- **googleSheets** (×3)
- **httpRequest** (×2)
- **itemLists** (×2)
- **filter** 
- **set** 
- **stickyNote** (×8)
- **if** (×2)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
