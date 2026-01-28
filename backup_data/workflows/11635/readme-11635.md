# Track software security patents with ScrapeGraphAI, Notion, and Pushover alerts

> # Software Vulnerability Tracker with Pushover and Notion

![Workflow Preview Image](https://via.placeholder.com/800x400/007ACC/FFFFFF?text=Software+Vulnerability+Tracker+with+Pushover+and+Notion+Workflow+Preview)

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically scans multiple patent databases on a weekly schedule, filters new filings relevant to selected technology domains, saves the findings to Notion, and pushes instant alerts to your mobile device via Pushover. It is ideal for R&D teams and patent attorneys who need up-to-date insights on emerging technology trends and competitor activity.

## Pre-conditions/Requirements

### Prerequisites
- An n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Active Notion account with an integration created
- Pushover account (user key & application token)
- List of technology keywords / CPC codes to monitor

### Required Credentials
- **ScrapeGraphAI API Key** – Enables web scraping of patent portals  
- **Notion Credential** – Internal Integration Token with database write access  
- **Pushover Credential** – App Token + User Key for push notifications  

### Additional Setup Requirements
| Service | Needed Item | Where to obtain |
|---------|-------------|-----------------|
| USPTO, EPO, WIPO, etc. | Public URLs for search endpoints | Free/public |
| Notion | Database with properties: `Title`, `Abstract`, `URL`, `Date` | Create in Notion |
| Keyword List | Text file or environment variable `PATENT_KEYWORDS` | Define yourself |

## How it works

This workflow automatically scans multiple patent databases on a weekly schedule, filters new filings relevant to selected technology domains, saves the findings to Notion, and pushes instant alerts to your mobile device via Pushover. It is ideal for R&D teams and patent attorneys who need up-to-date insights on emerging technology trends and competitor activity.

## Key Steps:
- **Schedule Trigger**: Fires every week (default Monday 08:00 UTC).
- **Code (Prepare Queries)**: Builds search URLs for each keyword and data source.
- **SplitInBatches**: Processes one query at a time to respect rate limits.
- **ScrapeGraphAI**: Scrapes patent titles, abstracts, links, and publication dates.
- **Code (Normalize & Deduplicate)**: Cleans data, converts dates, and removes already-logged patents.
- **IF Node**: Checks whether new patents were found.
- **Notion Node**: Inserts new patent entries into the specified database.
- **Pushover Node**: Sends a concise alert summarizing the new filings.
- **Sticky Notes**: Document configuration tips inside the workflow.

## Set up steps

**Setup Time: 10-15 minutes**

1. **Install ScrapeGraphAI**:  
   In n8n, go to “Settings → Community Nodes” and install `@n8n-nodes/scrapegraphai`.
2. **Add Credentials**:  
   - ScrapeGraphAI: paste your API key.  
   - Notion: add the internal integration token and select your database.  
   - Pushover: provide your App Token and User Key.
3. **Configure Keywords**:  
   Open the first Code node and edit the `keywords` array (e.g., `["quantum computing", "Li-ion battery", "5G antenna"]`).
4. **Point to Data Sources**:  
   In the same Code node, adjust the `sources` array if you want to add/remove patent portals.
5. **Set Notion Database Mapping**:  
   In the Notion node, map properties (`Name`, `Abstract`, `Link`, `Date`) to incoming JSON fields.
6. **Adjust Schedule** (optional):  
   Double-click the Schedule Trigger and change the CRON expression to your preferred interval.
7. **Test Run**:  
   Execute the workflow manually. Confirm that the Notion page is populated and a Pushover notification arrives.
8. **Activate**:  
   Switch the workflow to “Active” to enable automatic weekly execution.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** – Defines the weekly execution time.
- **Code (Build Search URLs)** – Dynamically constructs patent search URLs.
- **SplitInBatches** – Sequentially feeds each query to the scraper.
- **ScrapeGraphAI** – Extracts patent metadata from HTML pages.
- **Code (Normalize Data)** – Formats dates, adds UUIDs, and checks for duplicates.
- **IF** – Determines whether new patents exist before proceeding.
- **Notion** – Writes new patent records to your Notion database.
- **Pushover** – Sends real-time mobile/desktop notifications.

### Data Flow:
1. **Schedule Trigger** → **Code (Build Search URLs)** → **SplitInBatches** → **ScrapeGraphAI** → **Code (Normalize Data)** → **IF** → **Notion** & **Pushover**

## Customization Examples

### Change Notification Message
```javascript
// Inside the Pushover node "Message" field
return {
  message: `📜 ${items[0].json.count} new patent(s) detected in ${new Date().toDateString()}`,
  title: '🆕 Patent Alert',
  url: items[0].json.firstPatentUrl,
  url_title: 'Open first patent'
};
```

### Add Slack Notification Instead of Pushover
```javascript
// Replace the Pushover node with a Slack node
{
  text: `*${$json.count}* new patents published:\n${$json.list.join('\n')}`,
  channel: '#patent-updates'
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "title": "Quantum Computing Device",
  "abstract": "A novel qubit architecture that ...",
  "url": "https://patents.example.com/US20240012345A1",
  "publicationDate": "2024-06-01",
  "source": "USPTO",
  "keywordsMatched": ["quantum computing"]
}
```

## Troubleshooting

### Common Issues
1. **No data returned** – Verify that search URLs are still valid and the ScrapeGraphAI selector matches the current page structure.  
2. **Duplicate entries in Notion** – Ensure the “Normalize Data” code correctly checks for existing URLs or IDs before insert.

### Performance Tips
- Limit the number of keywords or schedule the workflow during off-peak hours to reduce API throttling.
- Enable caching inside ScrapeGraphAI (if available) to minimize repeated requests.

**Pro Tips:**
- Use environment variables (e.g., `{{ $env.PATENT_KEYWORDS }}`) to manage keyword lists without editing nodes.
- Chain an additional “HTTP Request → ML Model” step to auto-classify patents by CPC codes.
- Create a Notion view filtered by `publicationDate is within past 30 days` for quick scanning.

## 📊 Basic Information

- **Workflow ID:** 11635
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11635)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **code** (×3)
- **splitInBatches** (×2)
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **httpRequest** 
- **notion** 
- **if** 
- **pushover** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
