# Track and score contact engagement with Zoho CRM, PDL, News & Reddit

> # Zoho CRM – Social Media Engagement Tracker  

This workflow automatically monitors new or updated Contacts in Zoho CRM, enriches them using People Data Labs, checks public visibility across News + Reddit, calculates an engagement score and updates Zoho CRM fields accordingly. When a Contact shows high online engagement, the workflow automatically opens a Deal and logs a note to help sales teams act quickly.


### 🚀 Quick Implementation

1. Import this workflow JSON into n8n.
2. Add Zoho OAuth2 credentials & set webhook URL.
3. Add People Data Labs API Key & GNews API Key.
4. Ensure CRM custom fields exist-`Social_Profiles`,`Engagement_Score`,`Mentions_Counts`,`Social_Status`
5. Update a Contact in Zoho → watch automation fire!


## 🔍 What It Does
This automation transforms a simple Zoho CRM instance into a proactive intelligence system that detects which contacts are gaining public attention online. When a Contact is created or updated in Zoho CRM, n8n automatically retrieves verified profile data such as LinkedIn, Twitter, Facebook and GitHub using People Data Labs — eliminating manual research and spreadsheet maintenance.

Next, the workflow checks whether the contact is appearing in global News platforms (via GNews) or being discussed on Reddit. It analyzes the volume and context of these public mentions to estimate how relevant, visible or influential the person may be online. Each discovered activity contributes to a calculated Engagement Score.

That score and all enrichment details are written back to Zoho CRM, helping sales and marketing teams instantly identify high-potential contacts. When the score exceeds a defined threshold, the workflow even creates a Deal automatically — meaning your CRM will notify your team of hot prospects before someone else reaches them. This safeguards missed opportunities, speeds outreach and improves your entire pipeline efficiency.


## 🎯 Who’s It For

- B2B sales teams & SDRs.
- CRM admins improving data quality.
- Marketing analysts tracking brand mentions.
- Growth teams targeting public-facing prospects.
- Lead scoring, enrichment & prioritization automation.


## 🧩 Requirements
| Tool | Purpose |
|------|---------|
| n8n | Workflow automation |
| Zoho CRM | Contact data and CRM updates |
| PDL API Key | Social profiles enrichment |
| GNews API Key | Public news mention search |
| Internet Access | API communication |

Zoho CRM must contain these custom Contact fields:
- `Social_Profiles`
- `Engagement_Score`
- `Mentions_Counts`
- `Social_Status`


## ⚙️ How It Works — Setup & Configuration Steps

### 1️⃣ Install and Import

- Open n8n → **Import from File**
- Import this workflow JSON

### 2️⃣ Configure Authentication

- Assign Zoho OAuth2 credentials to all Zoho nodes
- Add **PDL API Key** in header `x-api-key`
- Add **GNews API Key** in query param `apikey`

### 3️⃣ Configure Zoho CRM Webhook

Zoho CRM → Developer Space → Webhooks
- Module: **Contacts**
- URL:  
  `https://YOUR-N8N-URL/webhook/zoho-crm-new-contact`
- Method: POST  
- Trigger: Create + Update

Test by modifying a Contact.

### 4️⃣ Validate CRM Field Mappings

Ensure custom fields exist and allow updates


## 🛠 Customize Nodes

| Node | Customization Options |
|------|----------------------|
| Engagement Scoring | Adjust weights for likes/comments/news |
| IF High Engagement | Change threshold (default ≥ 200) |
| Deal Creation | Customize Deal name, stage, pipeline |
| Social Profiles | Add more sites: TikTok, Instagram, etc. |
| Notes | Include full mention breakdown |


## ➕ Add-Ons / Optional Improvements

| Feature | Benefit |
|--------|---------|
| Slack notifications | Real-time alerts for hot contacts |
| Google Sheets logging | Trend reports across engagements |
| Weekly re-scans | Detect new mentions automatically |
| UTM tracking | Monitor marketing effectiveness |
| AI sentiment scoring | Prioritize positive vs negative mentions |


## 💡 Use Case Examples

1. Automatic lead prioritization for outbound sales.
2. Identify influencers or public figures inside CRM.
3. Detect PR opportunities from sudden news mentions.
4. Track competitor engagement through contacts.
5. Increase CRM intelligence without manual data entry.

(And many more real-world CRM automation use cases)


## 🧯 Troubleshooting Guide

| Issue | Reason | Solution |
|------|--------|----------|
| No workflow execution | Webhook not triggered | Check Zoho webhook config |
| No social profiles | Contact lacks digital footprint | Test with a known public profile |
| Deal not created | Score below limit | Reduce score threshold |
| HTTP 401 errors | Invalid API credentials | Re-connect Zoho / update keys |
| Reddit search empty | Rate limiting or mismatch | Retry + adjust keyword logic |


## 🤝 Need Help?

This workflow is built by n8n automation developers at **WeblineIndia**. 

We can help you:
- Deploy this workflow into production,
- Integrate more CRMs & intelligence providers,
- Add reporting dashboards & alerts,
- Build custom scoring and automation logic,
- And so much more.

## 📊 Basic Information

- **Workflow ID:** 11700
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 53
- **Downloads:** 5
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11700)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **function** (×3)
- **httpRequest** (×5)
- **if** (×2)
- **zohoCrm** (×3)
- **stickyNote** (×7)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
