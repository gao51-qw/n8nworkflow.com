# Track certification requirements with ScrapeGraphAI, GitLab and Rocket.Chat

> # Certification Requirement Tracker with Rocket.Chat and GitLab

**⚠️ COMMUNITY TEMPLATE DISCLAIMER: This is a community-contributed template that uses ScrapeGraphAI (a community node). Please ensure you have the ScrapeGraphAI community node installed in your n8n instance before using this template.**

This workflow automatically monitors websites of certification bodies and industry associations, detects changes in certification requirements, commits the updated information to a GitLab repository, and notifies a Rocket.Chat channel. Ideal for professionals and compliance teams who must stay ahead of annual updates and renewal deadlines.

## Pre-conditions/Requirements

### Prerequisites
- Running n8n instance (self-hosted or n8n.cloud)
- ScrapeGraphAI community node installed and active
- Rocket.Chat workspace (self-hosted or cloud)
- GitLab account and repository for documentation
- Publicly reachable URL for incoming webhooks (use n8n tunnel, Ngrok, or a reverse proxy)

### Required Credentials
- **ScrapeGraphAI API Key** – Enables scraping of certification pages  
- **Rocket.Chat Access Token & Server URL** – To post update messages  
- **GitLab Personal Access Token** – With `api` and `write_repository` scopes

### Specific Setup Requirements
| Item                           | Example Value                              | Notes |
| ------------------------------ | ------------------------------------------ | ----- |
| GitLab Repo                    | `gitlab.com/company/cert-tracker`          | Markdown files will be committed here |
| Rocket.Chat Channel            | `#certification-updates`                   | Receives update alerts |
| Certification Source URLs file | `/data/sourceList.json` in the repository  | List of URLs to scrape |

## How it works

This workflow automatically monitors websites of certification bodies and industry associations, detects changes in certification requirements, commits the updated information to a GitLab repository, and notifies a Rocket.Chat channel. Ideal for professionals and compliance teams who must stay ahead of annual updates and renewal deadlines.

## Key Steps:
- **Webhook Trigger**: Fires on a scheduled HTTP call (e.g., via cron) or manual trigger.
- **Code (Prepare Source List)**: Reads/constructs a list of certification URLs to scrape.
- **ScrapeGraphAI**: Fetches HTML content and extracts requirement sections.
- **Merge**: Combines newly scraped data with the last committed snapshot.
- **IF Node**: Determines if a change occurred (hash/length comparison).
- **GitLab**: Creates a branch, commits updated Markdown/JSON files, and opens an MR (optional).
- **Rocket.Chat**: Posts a message summarizing changes and linking to the GitLab diff.
- **Respond to Webhook**: Returns a JSON summary to the requester (useful for monitoring or chained automations).

## Set up steps

**Setup Time: 20-30 minutes**

1. **Install Community Node**: In n8n UI, go to *Settings → Community Nodes* and install `@n8n/community-node-scrapegraphai`.
2. **Create Credentials**:  
   a. ScrapeGraphAI – paste your API key.  
   b. Rocket.Chat – create a personal access token (`Personal Access Tokens → New Token`) and configure credentials.  
   c. GitLab – create PAT with `api` + `write_repository` scopes and add to n8n.
3. **Clone the Template**: Import this workflow JSON into your n8n instance.
4. **Edit StickyNote**: Replace placeholder URLs with actual certification-source URLs or point to a repo file.
5. **Configure GitLab Node**: Set your repository, default branch, and commit message template.
6. **Configure Rocket.Chat Node**: Select credential, channel, and message template (markdown supported).
7. **Expose Webhook**: If self-hosting, enable n8n tunnel or configure reverse proxy to make the webhook public.
8. **Test Run**: Trigger the workflow manually; verify GitLab commit/MR and Rocket.Chat notification.
9. **Automate**: Schedule an external cron (or n8n Cron node) to `POST` to the webhook yearly, quarterly, or monthly as needed.

## Node Descriptions

### Core Workflow Nodes:
- **stickyNote** – Human-readable instructions/documentation embedded in the flow.
- **webhook** – Entry point; accepts `POST /cert-tracker` requests.
- **code (Prepare Source List)** – Generates an array of URLs; can pull from GitLab or an environment variable.
- **scrapegraphAi** – Scrapes each URL and extracts certification requirement sections using CSS/XPath selectors.
- **merge (by key)** – Joins new data with previous snapshot for change detection.
- **if (Changes?)** – Branches logic based on whether differences exist.
- **gitlab** – Creates/updates files and opens merge requests containing new requirements.
- **rocketchat** – Sends formatted update to designated channel.
- **respondToWebhook** – Returns `200 OK` with a JSON summary.

### Data Flow:
1. **webhook** → **code** → **scrapegraphAi** → **merge** → **if**  
2. **if (true)** → **gitlab** → **rocketchat**  
3. **if (false)** → **respondToWebhook**

## Customization Examples

### Change Scraping Frequency
```javascript
// Replace external cron with n8n Cron node
{
  "nodes": [
    {
      "name": "Cron",
      "type": "n8n-nodes-base.cron",
      "parameters": {
        "schedule": {
          "hour": "0",
          "minute": "0",
          "dayOfMonth": "1"
        }
      }
    }
  ]
}
```

### Extend Notification Message
```javascript
// Rocket.Chat node → Message field
const diffUrl = $json["gitlab_diff_url"];
const count = $json["changes_count"];
return `:bell: **${count} Certification Requirement Update(s)**\n\nView diff: ${diffUrl}`;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "timestamp": "2024-05-15T12:00:00Z",
  "changesDetected": true,
  "changesCount": 3,
  "gitlab_commit_sha": "a1b2c3d4",
  "gitlab_diff_url": "https://gitlab.com/company/cert-tracker/-/merge_requests/42",
  "notifiedChannel": "#certification-updates"
}
```

## Troubleshooting

### Common Issues
1. **ScrapeGraphAI returns empty results** – Verify your CSS/XPath selectors and API key quota.  
2. **GitLab commit fails (401 Unauthorized)** – Ensure PAT has `api` and `write_repository` scopes and is not expired.

### Performance Tips
- Limit the number of pages scraped per run to avoid API rate limits.
- Cache last-scraped HTML in an S3 bucket or database to reduce redundant requests.

**Pro Tips:**
- Use GitLab CI to auto-deploy documentation site whenever new certification files are merged.
- Enable Rocket.Chat threading to keep discussions organized per update.
- Tag stakeholders in Rocket.Chat messages with `@cert-team` for instant visibility.

## 📊 Basic Information

- **Workflow ID:** 12234
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 6
- **Downloads:** 0
- **Created:** 2025/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12234)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **webhook** 
- **code** (×4)
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **gitlab** (×2)
- **merge** 
- **if** 
- **rocketchat** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
