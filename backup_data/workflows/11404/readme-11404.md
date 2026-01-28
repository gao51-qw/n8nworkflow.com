# Track software vulnerability patents with ScrapeGraphAI, Matrix, and Intercom

> # Software Vulnerability Patent Tracker

![Workflow Preview Image](https://via.placeholder.com/800x400/004AAD/FFFFFF?text=Software+Vulnerability+Patent+Tracker+Workflow+Preview)

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically tracks newly-published patent filings that mention software-security vulnerabilities, buffer-overflow mitigation techniques, and related technology keywords. Every week it aggregates fresh patent data from USPTO and international patent databases, filters it by relevance, and delivers a concise JSON digest (and optional Intercom notification) to R&D teams and patent attorneys.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n cloud, v1.7.0+)
- ScrapeGraphAI community node installed
- Basic understanding of patent search syntax (for customizing keyword sets)
- Optional: Intercom account for in-app alerts

### Required Credentials
| Credential | Purpose |
|------------|---------|
| **ScrapeGraphAI API Key** | Enables ScrapeGraphAI nodes to fetch and parse patent-office webpages |
| **Intercom Access Token** (optional) | Sends weekly digests directly to an Intercom workspace |

### Additional Setup Requirements
| Setting | Recommended Value | Notes |
|---------|-------------------|-------|
| Cron schedule | `0 9 * * 1` | Triggers every Monday at 09:00 server time |
| Patent keyword matrix | See example CSV below | List of comma-separated keywords per tech focus |

Example keyword matrix (upload as `keywords.csv` or paste into the “Matrix” node):

```
topic,keywords
Buffer Overflow,"buffer overflow, stack smashing, stack buffer"
Memory Safety,"memory safety, safe memory allocation, pointer sanitization"
Code Injection,"SQL injection, command injection, injection prevention"
```

## How it works

This workflow automatically tracks newly-published patent filings that mention software-security vulnerabilities, buffer-overflow mitigation techniques, and related technology keywords. Every week it aggregates fresh patent data from USPTO and international patent databases, filters it by relevance, and delivers a concise JSON digest (and optional Intercom notification) to R&D teams and patent attorneys.

## Key Steps:
- **Schedule Trigger**: Fires weekly based on the configured cron expression.
- **Matrix (Keyword Loader)**: Loads the CSV-based technology keyword matrix into memory.
- **Code (Build Search Queries)**: Dynamically assembles patent-search URLs for each keyword group.
- **ScrapeGraphAI (Fetch Results)**: Scrapes USPTO, EPO, and WIPO result pages and parses titles, abstracts, publication numbers, and dates.
- **If (Relevance Filter)**: Removes patents older than 1 year or without vulnerability-related terms in the abstract.
- **Set (Normalize JSON)**: Formats the remaining records into a uniform JSON schema.
- **Intercom (Notify Team)**: Sends a summarized digest to your chosen Intercom workspace.  
  _(Skip or disable this node if you prefer to consume the raw JSON output instead.)_
- **Sticky Notes**: Contain inline documentation and customization tips for future editors.

## Set up steps

**Setup Time: 10-15 minutes**

1. **Install Community Node**  
   Navigate to “Settings → Community Nodes”, search for **ScrapeGraphAI**, and click “Install”.
2. **Create Credentials**  
   - Go to “Credentials” → “New Credential” → select **ScrapeGraphAI API** → paste your API key.  
   - (Optional) Add an **Intercom** credential with a valid access token.
3. **Import the Workflow**  
   - Click “Import” → “Workflow JSON” and paste the template JSON, or drag-and-drop the `.json` file.
4. **Configure Schedule**  
   Open the **Schedule Trigger** node and adjust the cron expression if a different frequency is required.
5. **Upload / Edit Keyword Matrix**  
   Open the **Matrix** node, paste your custom CSV, or modify existing topics & keywords.
6. **Review Search Logic**  
   In the **Code (Build Search Queries)** node, review the base URLs and adjust patent databases as needed.
7. **Define Notification Channel**  
   If using Intercom, select your Intercom credential in the **Intercom** node and choose the target channel.
8. **Execute & Activate**  
   Click “Execute Workflow” for a trial run. Verify the output. If satisfied, switch the workflow to “Active”.

## Node Descriptions

### Core Workflow Nodes:
- **Schedule Trigger** – Initiates the workflow on a weekly cron schedule.
- **Matrix** – Holds the CSV keyword table and makes each row available as an item.
- **Code (Build Search Queries)** – Generates search URLs and attaches meta-data for later nodes.
- **ScrapeGraphAI** – Scrapes patent listings and extracts structured fields (title, abstract, pub. date, link).
- **If (Relevance Filter)** – Applies date and keyword relevance filters.
- **Set (Normalize JSON)** – Maps scraped fields into a clean JSON schema for downstream use.
- **Intercom** – Sends formatted patent summaries to an Intercom inbox or channel.
- **Sticky Notes** – Provide inline documentation and edit history markers.

### Data Flow:
1. **Schedule Trigger** → **Matrix** → **Code** → **ScrapeGraphAI** → **If** → **Set** → **Intercom**

## Customization Examples

### Change Data Source to Google Patents
```javascript
// In the Code node
const base = 'https://patents.google.com/?q=';
items.forEach(item =&gt; {
  item.json.searchUrl = `${base}${encodeURIComponent(item.json.keywords)}&oq=${encodeURIComponent(item.json.keywords)}`;
});
return items;
```

### Send Digest via Slack Instead of Intercom
```javascript
// Replace Intercom node with Slack node
{
  "text": `🚀 New Vulnerability-related Patents (${items.length})\n` +
          items.map(i =&gt; `• &lt;${i.json.link}|${i.json.title}&gt;`).join('\n')
}
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "topic": "Memory Safety",
  "keywords": "memory safety, safe memory allocation, pointer sanitization",
  "title": "Memory protection for compiled binary code",
  "publicationNumber": "US20240123456A1",
  "publicationDate": "2024-03-21",
  "abstract": "Techniques for enforcing memory safety in compiled software...",
  "link": "https://patents.google.com/patent/US20240123456A1/en",
  "source": "USPTO"
}
```

## Troubleshooting

### Common Issues
1. **Empty Result Set** – Ensure that the keywords are specific but not overly narrow; test queries manually on USPTO.
2. **ScrapeGraphAI Timeouts** – Increase the `timeout` parameter in the ScrapeGraphAI node or reduce concurrent requests.

### Performance Tips
- Limit the keyword matrix to &lt;50 rows to keep weekly runs under 2 minutes.
- Schedule the workflow during off-peak hours to reduce load on patent-office servers.

**Pro Tips:**
- Combine this workflow with a vector database (e.g., Pinecone) to create a semantic patent knowledge base.
- Add a “Merge” node to correlate new patents with existing vulnerability CVE entries.
- Use a second ScrapeGraphAI node to crawl citation trees and identify emerging technology clusters.

## 📊 Basic Information

- **Workflow ID:** 11404
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11404)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **scheduleTrigger** 
- **code** (×2)
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **if** 
- **matrix** 
- **set** 
- **intercom** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
