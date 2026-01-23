# Extract Business Emails from Google Maps Listings for Lead Generation

> This workflow scrapes Google Maps business listings (e.g., carpenters in Tarragona) to extract websites and email addresses — perfect for lead generation, local business prospecting, or agency outreach.

🔧 How it works

Manual Trigger – start manually using the “Test Workflow” button.

Scrape Google Maps – fetches the HTML from a Google Maps search URL.

Extract URLs – parses all business links from the page.

Filter Google URLs – removes unwanted Google/tracking links.

Remove Duplicates + Limit – keeps unique websites (default: 100).

Scrape Site – fetches each website’s HTML.

Extract Emails – detects valid email addresses.

Filter Out Empties & Split Out – isolates each valid email per site.

(Optional) Add to Google Sheet – appends results to your Sheet.

💼 Use cases

Local business leads: find emails of carpenters, dentists, gyms, etc., in your city.

Agency outreach: collect websites and contact emails to pitch marketing services.

B2B prospecting: identify businesses by niche and region for targeted campaigns.

🧩 Requirements

n8n instance with HTTP Request and Code nodes enabled.

(Optional) Google Sheets OAuth2 credentials.

Tip: Add a “Google Sheets → Append Row” node and connect it to your account.

🔒 Security

No personal or sensitive data included — only credential references.
If sharing this workflow, anonymize the “credentials” field before publishing.

## 📊 Basic Information

- **Workflow ID:** 10074
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 623
- **Downloads:** 62
- **Created:** 2025/10/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10074)

## 👤 Author

- **Name:** Jose Castillo
- **Username:** @j4ssn3o

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **code** (×2)
- **filter** (×2)
- **removeDuplicates** (×2)
- **limit** 
- **splitInBatches** 
- **wait** (×2)
- **splitOut** 
- **googleSheets** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
