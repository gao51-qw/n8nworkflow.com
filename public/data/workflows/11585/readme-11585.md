# E-commerce price tracker with ScrapeGraphAI, MongoDB, and Mailgun alerts

> # Product Price Monitor with Mailgun and MongoDB

![Workflow Preview Image](https://via.placeholder.com/800x400/4B5BD5/FFFFFF?text=Product%20Price%20Monitor%20Workflow%20Preview)

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically scrapes multiple e-commerce sites, records weekly product prices in MongoDB, analyzes seasonal trends, and emails a concise report to retail stakeholders via Mailgun. It helps retailers make informed inventory and pricing decisions by providing up-to-date pricing intelligence.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted, desktop, or n8n.cloud)
- ScrapeGraphAI community node installed and activated
- MongoDB database (Atlas or self-hosted)
- Mailgun account with a verified domain
- Publicly reachable n8n Webhook URL (if self-hosted)

### Required Credentials
- **ScrapeGraphAI API Key** – Enables web scraping across target sites
- **MongoDB Credentials** – Connection string (MongoDB URI) with read/write access  
- **Mailgun API Key & Domain** – To send summary emails

### MongoDB Collection Schema
| Field           | Type     | Example Value             | Notes                                       |
|-----------------|----------|---------------------------|---------------------------------------------|
| productId       | String   | `SKU-12345`               | Unique identifier you define                |
| productName     | String   | `Women's Winter Jacket`   | Human-readable name                         |
| timestamp       | Date     | `2024-09-15T00:00:00Z`    | Ingest date (automatically added)           |
| price           | Number   | `79.99`                   | Scraped price                               |
| source          | String   | `example-shop.com`        | Domain where price was scraped              |

## How it works

This workflow automatically scrapes multiple e-commerce sites, records weekly product prices in MongoDB, analyzes seasonal trends, and emails a concise report to retail stakeholders via Mailgun. It helps retailers make informed inventory and pricing decisions by providing up-to-date pricing intelligence.

## Key Steps:
- **Webhook Trigger**: Starts the workflow on a scheduled HTTP call or manual trigger.
- **Code (Prepare Products)**: Defines the list of SKUs/URLs to monitor.
- **Split In Batches**: Processes products in manageable chunks to respect rate limits.
- **ScrapeGraphAI (Scrape Price)**: Extracts price, availability, and currency from each product URL.
- **Merge (Combine Results)**: Re-assembles all batch outputs into one dataset.
- **MongoDB (Upsert Price History)**: Stores each price point for historical analysis.
- **If (Seasonal Trend Check)**: Compares current price against historical average to detect anomalies.
- **Set (Email Payload)**: Formats the trend report for email.
- **Mailgun (Send Email)**: Emails weekly summary to specified recipients.
- **Respond to Webhook**: Returns “200 OK – Report Sent” response for logging.

## Set up steps

**Setup Time: 15-20 minutes**

1. **Install Community Node**  
   In n8n, go to “Settings → Community Nodes” and install **@n8n-community/nodes-scrapegraphai**.
2. **Create Credentials**  
   - Add ScrapeGraphAI API key under Credentials.  
   - Add MongoDB credentials (type: MongoDB).  
   - Add Mailgun credentials (type: Mailgun).
3. **Import Workflow**  
   Download the JSON template, then in n8n click “Import” and select the file.
4. **Configure Product List**  
   Open the **Code (Prepare Products)** node and replace the example array with your product objects `{ id, name, url }`.
5. **Adjust Cron/Schedule**  
   If you prefer a fully automated schedule, replace the Webhook with a **Cron** node (e.g., every Monday at 09:00).
6. **Verify MongoDB Collection**  
   Ensure the collection (default: `productPrices`) exists or let n8n create it on first run.
7. **Set Recipients**  
   In the **Mailgun** node, update the `to`, `from`, and `subject` fields.
8. **Execute Test Run**  
   Manually trigger the Webhook URL or run the workflow once to verify data flow and email delivery.
9. **Activate**  
   Toggle the workflow to “Active” so it runs automatically each week.

## Node Descriptions

### Core Workflow Nodes:
- **Webhook** – Entry point that accepts a GET/POST call to start the job.
- **Code (Prepare Products)** – Outputs an array of products to monitor.
- **Split In Batches** – Limits scraping to N products per request to avoid banning.
- **ScrapeGraphAI** – Scrapes the HTML of a product page and parses pricing data.
- **Merge** – Re-combines batch results for streamlined processing.
- **MongoDB** – Inserts or updates each product’s price history document.
- **If** – Determines whether price deviates &gt; X% from the season average.
- **Set** – Builds an HTML/text email body containing the findings.
- **Mailgun** – Sends the email via Mailgun REST API.
- **Respond to Webhook** – Returns an HTTP response for logging/monitoring.
- **Sticky Notes** – Provide in-workflow documentation (no execution).

### Data Flow:
1. **Webhook** → **Code** → **Split In Batches**  
2. **Split In Batches** → **ScrapeGraphAI** → **Merge**  
3. **Merge** → **MongoDB** → **If**  
4. **If (true)** → **Set** → **Mailgun** → **Respond to Webhook**  

## Customization Examples

### Change Scraping Frequency (Cron)
```javascript
// Cron node settings
{
  "mode": "custom",
  "cronExpression": "0 6 * * 1,4" // Monday & Thursday 06:00
}
```

### Extend Data Points (Reviews Count, Stock)
```javascript
// In ScrapeGraphAI extraction config
{
  "price": "css:span.price",
  "inStock": "css:div.availability",
  "reviewCount": "regex:\"(\\d+) reviews\""
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "productId": "SKU-12345",
  "productName": "Women's Winter Jacket",
  "timestamp": "2024-09-15T00:00:00Z",
  "price": 79.99,
  "currency": "USD",
  "source": "example-shop.com",
  "trend": "5% below 3-month average"
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI returns empty data** – Confirm selectors/XPath are correct; test with ScrapeGraphAI playground.  
2. **MongoDB connection fails** – Verify IP-whitelisting for Atlas or network connectivity for self-hosted instance.  
3. **Mail not delivered** – Check Mailgun logs for bounce or spam rejection, and ensure `from` domain is verified.

### Performance Tips
- Use smaller batch sizes (e.g., 5 URLs) to avoid target site rate-limit blocks.
- Cache static product info; scrape only fields that change (price, stock).

**Pro Tips:**
- Integrate the **IF** node with n8n’s Slack node to push urgent price drops to a channel.  
- Add a **Function** node to calculate moving averages for deeper analysis.  
- Store raw HTML snapshots in S3/MinIO for auditability and debugging.

## 📊 Basic Information

- **Workflow ID:** 11585
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 86
- **Downloads:** 8
- **Created:** 2025/12/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11585)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **webhook** 
- **code** (×2)
- **splitInBatches** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **merge** 
- **mongoDb** 
- **if** 
- **set** 
- **mailgun** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
