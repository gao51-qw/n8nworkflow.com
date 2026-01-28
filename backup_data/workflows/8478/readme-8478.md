# Automated lead intelligence: enrich Google Sheets with Clearbit & sync to Notion and ClickUp

> **Description**

Give your sales team a competitive edge with this Lead Profile Enrichment automation! This workflow automatically enriches lead data by fetching company details, logos, and brand colors, then syncs everything into Notion, ClickUp, and Google Sheets—ensuring your reps walk into every call fully prepared.

With domain lookups, Clearbit API integration, and seamless updates across platforms, you’ll always have a complete 360° profile of every lead—without the manual research.

**What This Template Does (Step-by-Step)**
📋  Pulls lead details from Google Sheets
 🕒 Triggers enrichment when a meeting is booked or a rep is assigned
 🔗 Extracts company domain from the lead’s email
 🏢 Fetches company logos & metadata via Clearbit APIs
 🎨 Assigns brand colors & industries for visual consistency
 📝 Creates enriched profiles in Notion & ClickUp with full lead context
 📊 Appends enriched records to Google Sheets for logging & history

**Prerequisites**
- Google Sheets with lead data (Name, Email, Company, Status)
- Clearbit Logo & Company Enrichment API access
- Notion API credentials
- ClickUp API credentials
- n8n instance (self-hosted or cloud)

**Step-by-Step Setup**
- Prepare your Google Sheet with columns: Name, Email, Company, Status, Domain.
- Set a trigger for enrichment (meeting booked OR &gt;24 hrs since reply).
- Extract company domain from the lead’s email.
- Connect to Clearbit APIs to fetch:
  - Logo
  - Industry
  - Brand colors
  - Company metadata
- Format the enriched data and create a new profile entry in Notion.
- Create/update a ClickUp task with enriched lead details.
- Append enriched data to Google Sheets for tracking & reporting.

**Customization Ideas**

- Extend enrichment with LinkedIn or Crunchbase APIs.
- Add Slack/Telegram notifications when enrichment completes.
- Auto-assign leads to reps based on industry or geography.
- Sync with CRM platforms (HubSpot, Salesforce, Zoho).

**Key Benefits**
✅ Saves time on manual research
 ✅ Provides sales reps with complete lead profiles instantly
 ✅ Ensures consistent logos, colors, and metadata
 ✅ Keeps data synchronized across Notion, ClickUp, and Sheets

**Perfect For**
- Sales Teams preparing for discovery calls
- SDRs handling lead qualification
- Account Managers wanting full company context
- Businesses that value data-driven sales preparation


## 📊 Basic Information

- **Workflow ID:** 8478
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 52
- **Downloads:** 5
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8478)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **function** (×2)
- **httpRequest** (×2)
- **googleSheets** (×2)
- **clickUp** 
- **if** 
- **manualTrigger** 
- **merge** 
- **notion** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
