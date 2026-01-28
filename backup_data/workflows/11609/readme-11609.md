# E-commerce product price tracker with ScrapeGraphAI, Baserow and Slack alerts

> # Product Price Monitor with Mailchimp and Baserow

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow scrapes multiple e-commerce sites for product pricing data, stores the historical prices in Baserow, analyzes weekly trends, and emails a neatly formatted seasonal report to your Mailchimp audience. It is designed for retailers who need to stay on top of seasonal pricing patterns to make informed inventory and pricing decisions.

## Pre-conditions/Requirements

### Prerequisites
- Running n8n instance (self-hosted or n8n cloud)
- ScrapeGraphAI community node installed
- Mailchimp account with at least one audience list
- Baserow workspace with edit rights
- Product URLs or SKU list from target e-commerce platforms

### Required Credentials
| Credential | Used By | Scope |
|------------|---------|-------|
| **ScrapeGraphAI API Key** | ScrapeGraphAI node | Web scraping |
| **Mailchimp API Key & Server Prefix** | Mailchimp node | Sending emails |
| **Baserow API Token** | Baserow node | Reading & writing records |

### Baserow Table Setup
Create a table named `price_tracker` with the following fields:

| Field Name | Type | Example |
|------------|------|---------|
| `product_name` | Text | “Winter Jacket” |
| `product_url` | URL | `https://example.com/winter-jacket` |
| `current_price` | Number | `59.99` |
| `scrape_date` | DateTime | `2023-11-15T08:21:00Z` |

## How it works

This workflow scrapes multiple e-commerce sites for product pricing data, stores the historical prices in Baserow, analyzes weekly trends, and emails a neatly formatted seasonal report to your Mailchimp audience. It is designed for retailers who need to stay on top of seasonal pricing patterns to make informed inventory and pricing decisions.

## Key Steps:
- **Schedule Trigger**: Fires every week (or custom CRON) to start the monitoring cycle.
- **Code (Prepare URLs)**: Loads or constructs the list of product URLs to monitor.
- **SplitInBatches**: Processes product URLs in manageable batches to avoid rate-limit issues.
- **ScrapeGraphAI**: Scrapes each product page and extracts the current price and name.
- **If (Price Found?)**: Continues only if scraping returns a valid price.
- **Baserow**: Upserts the scraped data into the `price_tracker` table.
- **Code (Trend Analysis)**: Aggregates weekly data to detect price increases, decreases, or stable trends.
- **Set (Mail Content)**: Formats the trend summary into an HTML email body.
- **Mailchimp**: Sends the seasonal price-trend report to the selected audience segment.
- **Sticky Note**: Documentation node explaining business logic in-workflow.

## Set up steps

**Setup Time: 10-15 minutes**

1. **Clone the template**: Import the workflow JSON into your n8n instance.
2. **Install ScrapeGraphAI**: `n8n-nodes-scrapegraphai` via the Community Nodes panel.
3. **Add credentials**:  
   a. ScrapeGraphAI API Key  
   b. Mailchimp API Key & Server Prefix  
   c. Baserow API Token  
4. **Configure Baserow node**: Point it to your `price_tracker` table.
5. **Edit product list**: In the “Prepare URLs” Code node, replace the sample URLs with your own.
6. **Adjust schedule**: Modify the Schedule Trigger CRON expression if weekly isn’t suitable.
7. **Test run**: Execute the workflow manually once to verify credentials and data flow.
8. **Activate**: Turn on the workflow for automatic weekly monitoring.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** – Initiates the workflow on a weekly CRON schedule.
- **Code (Prepare URLs)** – Generates an array of product URLs/SKUs to scrape.
- **SplitInBatches** – Splits the array into chunks of 5 URLs to stay within request limits.
- **ScrapeGraphAI** – Scrapes each URL, using XPath/CSS selectors to pull price & title.
- **If (Price Found?)** – Filters out failed or empty scrape results.
- **Baserow** – Inserts or updates the price record in the database.
- **Code (Trend Analysis)** – Calculates week-over-week price changes and flags anomalies.
- **Set (Mail Content)** – Creates an HTML table with product, current price, and trend arrow.
- **Mailchimp** – Sends or schedules the email campaign.
- **Sticky Note** – Provides inline documentation and edit hints.

### Data Flow:
1. **Schedule Trigger** → **Code (Prepare URLs)** → **SplitInBatches**  
2. **SplitInBatches** → **ScrapeGraphAI** → **If (Price Found?)** → **Baserow**  
3. **Baserow** → **Code (Trend Analysis)** → **Set (Mail Content)** → **Mailchimp**

## Customization Examples

### Change scraping frequency
```javascript
// Schedule Trigger CRON for daily at 07:00 UTC
0 7 * * *
```

### Add competitor comparison column
```javascript
// Code (Trend Analysis)
item.competitor_price_diff = item.current_price - item.competitor_price;
return item;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "product_name": "Winter Jacket",
  "product_url": "https://example.com/winter-jacket",
  "current_price": 59.99,
  "scrape_date": "2023-11-15T08:21:00Z",
  "weekly_trend": "decrease"
}
```

## Troubleshooting

### Common Issues
1. **Invalid ScrapeGraphAI key** – Verify the API key and ensure your subscription is active.
2. **Mailchimp “Invalid Audience” error** – Double-check the audience ID and that the API key has correct permissions.
3. **Baserow “Field mismatch”** – Confirm your table fields match the names/types in the workflow.

### Performance Tips
- Limit each SplitInBatches run to ≤10 URLs to reduce scraping timeouts.
- Enable caching in ScrapeGraphAI to avoid repeated requests to the same URL within short intervals.

**Pro Tips:**
- Use environment variables for all API keys to avoid hard-coding secrets.
- Add an extra If node to alert you if a product’s price drops below a target threshold.
- Combine with n8n’s Slack node for real-time alerts in addition to Mailchimp summaries.

## 📊 Basic Information

- **Workflow ID:** 11609
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 59
- **Downloads:** 5
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11609)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×4)
- **splitInBatches** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **if** (×2)
- **baserow** 
- **set** 
- **stickyNote** (×6)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
