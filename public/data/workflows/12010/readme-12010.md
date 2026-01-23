# Track & alert public transport delays using ScrapeGraphAI, Teams and Todoist

> # Public Transport Delay Tracker with Microsoft Teams and Todoist

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow continuously monitors public-transportation websites and apps for real-time schedule changes and delays, then posts an alert to a Microsoft Teams channel and creates a follow-up task in Todoist. It is ideal for commuters or travel coordinators who need instant, actionable updates about transit disruptions.

## Pre-conditions/Requirements

### Prerequisites
- An n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Microsoft Teams account with permission to create an Incoming Webhook
- Todoist account with at least one project
- Access to target transit authority websites or APIs

### Required Credentials
- **ScrapeGraphAI API Key** – Enables scraping of transit data
- **Microsoft Teams Webhook URL** – Sends messages to a specific channel
- **Todoist API Token** – Creates follow-up tasks
- *(Optional)* Transit API key if you are using a protected data source

### Specific Setup Requirements
| Resource                 | What you need                                                 |
|--------------------------|---------------------------------------------------------------|
| Teams Channel            | Create a channel → Add “Incoming Webhook” → copy the URL      |
| Todoist Project          | Create “Transit Alerts” project and note its Project ID       |
| Transit URLs/APIs        | Confirm the URLs/pages contain the schedule & delay elements  |

## How it works

This workflow continuously monitors public-transportation websites and apps for real-time schedule changes and delays, then posts an alert to a Microsoft Teams channel and creates a follow-up task in Todoist. It is ideal for commuters or travel coordinators who need instant, actionable updates about transit disruptions.

## Key Steps:
- **Webhook (Trigger)**: Starts the workflow on a schedule or via HTTP call.
- **Set Node**: Defines target transit URLs and parsing rules.
- **ScrapeGraphAI Node**: Scrapes live schedule and delay data.
- **Code Node**: Normalizes scraped data, converts times, and flags delays.
- **IF Node**: Determines if a delay exceeds the user-defined threshold.
- **Microsoft Teams Node**: Sends formatted alert message to the selected Teams channel.
- **Todoist Node**: Creates a “Check alternate route” task with due date equal to the delayed departure time.
- **Sticky Note Node**: Holds a blueprint-level explanation for future editors.

## Set up steps

**Setup Time: 15–20 minutes**

1. **Install community node**: In n8n, go to “Manage Nodes” → “Install” → search for “ScrapeGraphAI” → install and restart n8n.
2. **Create Teams webhook**: In Microsoft Teams, open target channel → “Connectors” → “Incoming Webhook” → give it a name/icon → copy the URL.
3. **Create Todoist API token**: Todoist → Settings → Integrations → copy your personal API token.
4. **Add credentials in n8n**: Settings → Credentials → create new for ScrapeGraphAI, Microsoft Teams, and Todoist.
5. **Import workflow template**: File → Import Workflow JSON → select this template.
6. **Configure Set node**: Replace example transit URLs with those of your local transit authority.
7. **Adjust delay threshold**: In the Code node, edit `const MAX_DELAY_MINUTES = 5;` as needed.
8. **Activate workflow**: Toggle “Active”. Monitor executions to ensure messages and tasks are created.

## Node Descriptions

### Core Workflow Nodes:
- **Webhook** – Triggers workflow on schedule or external HTTP request.
- **Set** – Supplies list of URLs and scraping selectors.
- **ScrapeGraphAI** – Scrapes timetable, status, and delay indicators.
- **Code** – Parses results, converts to minutes, and builds payloads.
- **IF** – Compares delay duration to threshold.
- **Microsoft Teams** – Posts formatted adaptive-card-style message.
- **Todoist** – Adds a task with priority and due date.
- **Sticky Note** – Internal documentation inside the workflow canvas.

### Data Flow:
1. **Webhook** → **Set** → **ScrapeGraphAI** → **Code** → **IF**  
   a. **IF (true branch)** → **Microsoft Teams** → **Todoist**  
   b. **IF (false branch)** → (workflow ends)

## Customization Examples

### Change alert message formatting
```javascript
// In the Code node
const message = `⚠️ Delay Alert:
Route: ${item.route}
Expected: ${item.scheduled}
New Time: ${item.newTime}
Delay: ${item.delay} min
Link: ${item.url}`;
return [{ json: { message } }];
```

### Post to multiple Teams channels
```javascript
// Duplicate the Microsoft Teams node and reference a different credential
items.forEach(item =&gt; {
  item.json.webhookUrl = $node["Set"].json["secondaryChannelWebhook"];
});
return items;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "route": "Blue Line",
  "scheduled": "2024-12-01T14:25:00Z",
  "newTime": "2024-12-01T14:45:00Z",
  "delay": 20,
  "status": "Delayed",
  "url": "https://transit.example.com/blue-line/status"
}
```

## Troubleshooting

### Common Issues
1. **Scraping returns empty data** – Verify CSS selectors/XPath in the Set node and ensure the target site hasn’t changed its markup.
2. **Teams message not sent** – Check that the stored webhook URL is correct and the connector is still active.
3. **Todoist task duplicated** – Add a unique key (e.g., route + timestamp) to avoid inserting duplicates.

### Performance Tips
- Limit the number of URLs per execution when monitoring many routes.
- Cache previous scrape results to avoid hitting site rate limits.

**Pro Tips:**
- Use n8n’s built-in Cron instead of Webhook if you only need periodic polling.
- Add a SplitInBatches node after scraping to process large route lists incrementally.
- Enable execution logging to an external database for detailed audit trails.

## 📊 Basic Information

- **Workflow ID:** 12010
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 11
- **Downloads:** 1
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12010)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **code** (×3)
- **splitInBatches** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **if** 
- **set** (×2)
- **microsoftTeams** 
- **todoist** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
