# Zip code-based business lead generation with Google Maps and Sheets

> ## Who Is This For?
This workflow is perfect for anyone who wants to automate lead generation using n8n without paying for expensive scraping tools. It uses simple Google Maps API requests and Google Sheets to pull business data by ZIP code and category, then extracts emails at no extra cost.

## What This Workflow Does
* **Automated Lead Generation**: Runs on a schedule to process ZIP codes and business categories automatically.
* **Data Extraction**: Queries Google Maps for businesses based on each ZIP code + subcategory combo.
* **Data Processing**:
  * Skips entries with a **STATUS = "N/A"**
  * Removes duplicate results using `place.id`
  * Extracts and formats relevant business details
* **Error Handling**:
  * Uses exponential backoff when hitting rate limits
  * Stops after 10 retry attempts
* **Data Storage**:
  * Saves results directly to Google Sheets
  * Tracks which ZIP/subcategory pairs have been completed

## Requirements
* **Google Maps API** (business lookup)
* **Google Sheets OAuth2** (data storage)
* **Telegram Bot API** (notifications)
* **Rapiwa API** (WhatsApp alerts)

## How to Use — Step-by-Step Setup
### 1. Set Up Credentials in n8n
* Add your **Google Maps API** credentials (named "Google MAP")
* Add **Google Sheets OAuth2** credentials (named "Google Sheets")
* Add **Rapiwa API** credentials (named "Rapiwa account 2")

### 2. Prepare Your Google Sheet
Create one Sheet document with these tabs:
* **zip** — ZIP codes to process
* **maps categories** — Business categories/subcategories
* **result** — Where extracted business data will be stored
Then update:
* The document ID inside the workflow nodes
* The sheet IDs (gid values) so they match your actual tabs

### 3. Customize the Workflow
* Change the **Limit** node to control how many ZIP codes run per batch (default: 10)
* Adjust retry limits in the relevant nodes (default: 10 attempts)
* Modify the **Schedule** node to set your preferred run frequency (default: hourly)
&gt; This gives you a simple, scalable, nearly free system for generating targeted leads automatically.


## Useful Links
- MAP API [Create Project & API](https://console.cloud.google.com/welcome?project=map-project-478604)
- How to Use [google map docs](https://developers.google.com/maps/documentation/places/web-service/overview)
- **Rapiwa**: [Get your WhatsApp API credentials](https://rapiwa.com/)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 📊 Basic Information

- **Workflow ID:** 11622
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 170
- **Downloads:** 17
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11622)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheets** (×5)
- **code** (×3)
- **removeDuplicates** 
- **wait** (×2)
- **splitInBatches** (×2)
- **scheduleTrigger** 
- **if** (×3)
- **set** (×3)
- **filter** 
- **limit** 
- **telegram** 
- **noOp** 
- **n8n-nodes-rapiwa.rapiwa** 
- **discord** 
- **httpRequest** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
