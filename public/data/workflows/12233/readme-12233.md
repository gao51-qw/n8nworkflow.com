# Aggregate commercial property listings with ScrapeGraphAI, Baserow and Teams

> # Property Listing Aggregator with Microsoft Teams and Baserow

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically aggregates commercial real-estate listings from multiple broker and marketplace websites, stores the fresh data in Baserow, and pushes weekly availability alerts to Microsoft Teams. Ideal for business owners searching for new retail or office space, it runs on a timetable, scrapes property details, de-duplicates existing entries, and notifies your team of only the newest opportunities.

## Pre-conditions/Requirements

### Prerequisites
- An n8n instance (self-hosted or n8n.cloud)
- ScrapeGraphAI community node installed
- A Baserow workspace & table prepared to store property data
- A Microsoft Teams channel with an incoming webhook URL
- List of target real-estate URLs (CSV, JSON, or hard-coded array)

### Required Credentials
- **ScrapeGraphAI API Key** – Enables headless scraping of listing pages  
- **Baserow Personal API Token** – Grants create/read access to your property table  
- **Microsoft Teams Webhook URL** – Allows posting messages to your channel  

### Baserow Table Schema
| Column Name | Type    | Notes                          |
|-------------|---------|--------------------------------|
| `listing_id`| Text    | Unique ID or URL slug (primary)|
| `title`     | Text    | Listing headline               |
| `price`     | Number  | Monthly or annual rent         |
| `sq_ft`     | Number  | Size in square feet            |
| `location`  | Text    | City / neighborhood            |
| `url`       | URL     | Original listing link          |
| `scraped`   | Date    | Timestamp of last scrape       |

## How it works

This workflow automatically aggregates commercial real-estate listings from multiple broker and marketplace websites, stores the fresh data in Baserow, and pushes weekly availability alerts to Microsoft Teams. Ideal for business owners searching for new retail or office space, it runs on a timetable, scrapes property details, de-duplicates existing entries, and notifies your team of only the newest opportunities.

## Key Steps:
- **Schedule Trigger**: Fires every week (or on demand) to start the aggregation cycle.
- **Load URL List (Code node)**: Returns an array of listing or search-result URLs to be scraped.
- **Split In Batches**: Processes URLs in manageable groups to avoid rate-limits.
- **ScrapeGraphAI**: Extracts title, price, size, and location from each page.
- **Merge**: Reassembles batches into a single dataset.
- **IF Node**: Checks each listing against Baserow to detect new vs. existing entries.
- **Baserow**: Inserts only brand-new listings into the table.
- **Set Node**: Formats a concise Teams message with key details.
- **Microsoft Teams**: Sends the alert to your designated channel.

## Set up steps

**Setup Time: 15-20 minutes**

1. **Install ScrapeGraphAI node**:  
   In n8n, go to “Settings → Community Nodes”, search for “@n8n-nodes/scrapegraphai” and install.
2. **Create Baserow table**:  
   Follow the schema above. Copy your Personal API Token from Baserow profile settings.
3. **Generate Teams webhook**:  
   In Microsoft Teams, open channel → “Connectors” → “Incoming Webhook”, name it, and copy the URL.
4. **Open the workflow** in n8n and set the following credentials:  
   - ScrapeGraphAI API Key  
   - Baserow token (Baserow node)  
   - Teams webhook (Microsoft Teams node)
5. **Define target URLs**:  
   Edit the “Load URL List” Code node and add your marketplace or broker URLs.
6. **Adjust schedule**:  
   Double-click the “Schedule Trigger” and set the cron expression (default: weekly Monday 08:00).
7. **Test-run** the workflow manually to verify scraping and data insertion.
8. **Activate** the workflow once results look correct.

## Node Descriptions

### Core Workflow Nodes:
- **stickyNote** – Provides inline documentation and reminders inside the canvas.
- **Schedule Trigger** – Triggers the workflow on a weekly cron schedule.
- **Code** – Holds an array of URLs and can implement dynamic logic (e.g., API calls to get URLs).
- **SplitInBatches** – Splits URL list into configurable batch sizes (default: 5) to stay polite.
- **ScrapeGraphAI** – Scrapes each URL and returns structured JSON for price, size, etc.
- **Merge** – Combines batch outputs back into one array.
- **IF** – Performs existence check against Baserow’s `listing_id` to prevent duplicates.
- **Baserow** – Writes new records or updates existing ones.
- **Set** – Builds a human-readable message string for Teams.
- **Microsoft Teams** – Posts the summary into your channel.

### Data Flow:
1. Schedule Trigger → Code → Split In Batches → ScrapeGraphAI → Merge → IF → Baserow  
2. IF (new listings) → Set → Microsoft Teams

## Customization Examples

### Add additional data points (e.g., number of parking spaces)
```javascript
// In ScrapeGraphAI "Selectors" field
{
  "title": ".listing-title",
  "price": ".price",
  "sq_ft": ".size",
  "parking": ".parking span"   // new selector
}
```

### Change Teams message formatting
```javascript
// In Set node
return items.map(item =&gt; {
  const l = item.json;
  item.json = {
    text: `🏢 *${l.title}* — ${l.price} USD\n📍 ${l.location} | ${l.sq_ft} ft²\n🔗 &lt;${l.url}|View Listing&gt;`
  };
  return item;
});
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "listing_id": "12345-main-street-suite-200",
  "title": "Downtown Office Space – Suite 200",
  "price": 4500,
  "sq_ft": 2300,
  "location": "Austin, TX",
  "url": "https://broker.com/listings/12345",
  "scraped": "2024-05-01T08:00:00.000Z"
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI returns empty fields** – Update CSS selectors or switch to XPath; run in headless:true mode.  
2. **Duplicate records still appear** – Ensure `listing_id` is truly unique (use URL slug) and that the IF node compares correctly.  
3. **Teams message not delivered** – Verify webhook URL and that the Teams connector is enabled for the channel.

### Performance Tips
- Reduce batch size if websites block rapid requests.
- Cache previous URLs to skip unchanged search-result pages.

**Pro Tips:**
- Rotate proxies in ScrapeGraphAI for larger scraping volumes.  
- Use environment variables for credentials to simplify migrations.  
- Add a second Schedule Trigger for daily “hot deal” checks by duplicating the workflow and narrowing the URL list.

## 📊 Basic Information

- **Workflow ID:** 12233
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 23
- **Downloads:** 2
- **Created:** 2025/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12233)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **code** (×3)
- **splitInBatches** (×2)
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **merge** (×2)
- **baserow** (×3)
- **if** (×2)
- **set** (×2)
- **microsoftTeams** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
