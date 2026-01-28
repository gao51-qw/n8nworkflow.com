# Breaking news aggregator with SendGrid and PostgreSQL

> # Breaking News Aggregator with SendGrid and PostgreSQL

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically scrapes multiple government and regulatory websites, extracts the latest policy or compliance-related news, stores the data in PostgreSQL, and instantly emails daily summaries to your team through SendGrid. It is ideal for compliance professionals and industry analysts who need near real-time awareness of regulatory changes impacting their sector.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n.cloud)
- ScrapeGraphAI community node installed
- Operational SendGrid account
- PostgreSQL database accessible from n8n
- Basic knowledge of SQL for table creation

### Required Credentials
- **ScrapeGraphAI API Key** – Enables web scraping and parsing
- **SendGrid API Key** – Sends email notifications
- **PostgreSQL Credentials** – Host, port, database, user, and password

### Specific Setup Requirements
| Resource       | Requirement                                                      | Example Value                |
|----------------|------------------------------------------------------------------|------------------------------|
| PostgreSQL     | Table with columns: `id`, `title`, `url`, `source`, `published_at`| `news_updates`               |
| Allowed Hosts  | Outbound HTTPS access from n8n to target sites & SendGrid endpoint| `https://*.gov`, `https://api.sendgrid.com` |
| Keywords List  | Comma-separated compliance terms to filter results               | `GDPR, AML, cybersecurity`   |

## How it works

This workflow automatically scrapes multiple government and regulatory websites, extracts the latest policy or compliance-related news, stores the data in PostgreSQL, and instantly emails daily summaries to your team through SendGrid. It is ideal for compliance professionals and industry analysts who need near real-time awareness of regulatory changes impacting their sector.

## Key Steps:
- **Schedule Trigger**: Runs once daily (or at any chosen interval).
- **ScrapeGraphAI**: Crawls predefined regulatory URLs and returns structured article data.
- **Code (JS)**: Filters results by keywords and formats them.
- **SplitInBatches**: Processes articles in manageable chunks to avoid timeouts.
- **If Node**: Checks whether each article already exists in the database.
- **PostgreSQL**: Inserts only new articles into the `news_updates` table.
- **Set Node**: Generates an email-friendly HTML summary.
- **SendGrid**: Dispatches the compiled summary to compliance stakeholders.

## Set up steps

**Setup Time: 15-20 minutes**

1. **Install ScrapeGraphAI Node**:  
   - From n8n, go to “Settings → Community Nodes → Install”, search “ScrapeGraphAI”, and install.
2. **Create PostgreSQL Table**:  
   ```sql
   CREATE TABLE news_updates (
     id SERIAL PRIMARY KEY,
     title TEXT,
     url TEXT UNIQUE,
     source TEXT,
     published_at TIMESTAMP
   );
   ```
3. **Add Credentials**:  
   - Navigate to “Credentials”, add ScrapeGraphAI, SendGrid, and PostgreSQL credentials.
4. **Import Workflow**:  
   - Copy the JSON workflow, paste into “Import from Clipboard”.
5. **Configure Environment Variables** (optional):  
   - `REG_NEWS_KEYWORDS`, `SEND_TO_EMAILS`, `DB_TABLE_NAME`.
6. **Set Schedule**:  
   - Open the Schedule Trigger node and define your preferred cron expression.
7. **Activate Workflow**:  
   - Toggle “Active”, then click “Execute Workflow” once to validate all connections.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** – Initiates the workflow at the defined interval.
- **ScrapeGraphAI** – Scrapes and parses news listings into JSON.
- **Code** – Filters articles by keywords and normalizes timestamps.
- **SplitInBatches** – Prevents database overload by batching inserts.
- **If** – Determines whether an article is already stored.
- **PostgreSQL** – Executes parameterized INSERT statements.
- **Set** – Builds the HTML email body.
- **SendGrid** – Sends the daily digest email.

### Data Flow:
1. **Schedule Trigger** → **ScrapeGraphAI** → **Code** → **SplitInBatches** → **If** → **PostgreSQL** → **Set** → **SendGrid**

## Customization Examples

### Change Keyword Filtering
```javascript
// Code Node snippet
const keywords = ['GDPR','AML','SOX']; // Add or remove terms
item.filtered = keywords.some(k =&gt; item.title.includes(k));
return item;
```

### Switch to Weekly Digest
```json
{
  "trigger": {
    "cronExpression": "0 9 * * 1" // Every Monday at 09:00
  }
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "title": "Data Privacy Act Amendment Passed",
  "url": "https://regulator.gov/news/1234",
  "source": "regulator.gov",
  "published_at": "2024-06-12T14:30:00Z"
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI node not found** – Install the community node and restart n8n.
2. **Duplicate key error in PostgreSQL** – Ensure the `url` column is marked `UNIQUE` to prevent duplicates.
3. **Emails not sending** – Verify SendGrid API key and check account’s daily limit.

### Performance Tips
- Limit initial scrape URLs to fewer than 20 to reduce run time.
- Increase SplitInBatches size only if your database can handle larger inserts.

**Pro Tips:**
- Use environment variables to manage sensitive credentials securely.
- Add an Error Trigger node to catch and log failures for auditing purposes.
- Combine with Slack or Microsoft Teams nodes to push instant alerts alongside email digests.

## 📊 Basic Information

- **Workflow ID:** 11669
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 121
- **Downloads:** 12
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11669)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×2)
- **splitInBatches** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **set** (×2)
- **if** 
- **sendGrid** 
- **postgres** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
