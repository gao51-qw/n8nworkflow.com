# Automate Instagram influencer contract compliance with Claude AI & Slack alerts

> This enterprise-grade **n8n workflow** automates **influencer contract compliance** for Instagram campaigns — from deadline tracking to breach detection — using **Claude AI**, Instagram API, and smart reminders. It ensures timely deliverables by monitoring posts, sending proactive alerts, and escalating breaches, all with zero manual oversight.


## **Key Features**

* **Daily contract scanning** from Google Sheets
* **Deadline calculations** for approaching or passed dates
* **Automated reminders** via Slack for nearing deadlines
* **Post verification** using Instagram API and **Claude 3.5 Sonnet** for hashtag/description matching
* **Breach detection engine** identifies non-compliant influencers
* **Escalation notifications** to managers on breaches
* **Audit logs** stored in Google Sheets for compliance records
* **Scalable triggers:** Daily schedule or webhook for new contracts


## **Workflow Process**

| Step | Node                                | Description                                              |
| ---- | ----------------------------------- | -------------------------------------------------------- |
| 1    | **Schedule Trigger**                | Runs daily at 9 AM or via webhook (`/influencer-compliance`) |
| 2    | **Get Contracts**                   | Loads influencer contracts from `Contracts` sheet        |
| 3    | **Loop Over Contracts**             | Processes each contract individually                     |
| 4    | **Calculate Deadline Status**       | Computes days to deadline, flags approaching/passed     |
| 5    | **IF Approaching Deadline**         | Branches if within 3 days                                |
| 6    | **Send Reminder (Slack)**           | Notifies influencer/team of upcoming deadline            |
| 7    | **IF Deadline Passed**              | Branches if deadline has passed                          |
| 8    | **Get Influencer Posts**            | Fetches recent posts from influencer's Instagram         |
| 9    | **Check Post Compliance (Claude AI)** | Uses AI to verify if post matches contract requirements |
| 10   | **IF Breach Detected**              | Branches if non-compliant                                |
| 11   | **Notify Breach (Slack)**           | Alerts manager of contract breach                        |
| 12   | **Log Breach**                      | Records breach details in `Logs` sheet                   |
| 13   | **End (Compliant Path)**            | Terminates compliant branches                            |


## **Setup Instructions**

### 1. Import Workflow

* Open **n8n → Workflows → Import from Clipboard**
* Paste the JSON workflow

### 2. Configure Credentials

| Integration       | Details                                            |
| ----------------- | -------------------------------------------------- |
| **Google Sheets** | Service account with spreadsheet access            |
| **Instagram API** | Business access token for fetching media           |
| **Claude AI**     | Anthropic API key for `claude-3-5-sonnet-20241022` |
| **Slack**         | Webhook or OAuth app                               |

### 3. Update Spreadsheet IDs

Ensure your Google Sheets include:

* `Contracts`
* `Logs`

### 4. Set Triggers

* **Webhook:** `/webhook/influencer-compliance` (for real-time updates)
* **Schedule:** Daily at 9:00 AM

### 5. Run a Test

Use **manual execution** to confirm:

* Reminder and breach notifications
* Post compliance checks
* Log entries in sheet


## **Google Sheets Structure**

### **Contracts**

| campaignId | influencerName | influencerUserId | deadline   | requiredHashtag | campaignDescription |
|------------|----------------|------------------|------------|-----------------|---------------------|
| CAMP-001   | InfluencerX    | 1234567890       | 2023-12-31 | #BrandPromo     | Promote new product |

### **Logs**

| campaignId | influencerName | action          | timestamp          | details              |
|------------|----------------|-----------------|--------------------|----------------------|
| CAMP-001   | InfluencerX    | Breach Detected | 2023-10-01T12:00:00Z | Failed to post by deadline |


## **System Requirements**

| Requirement           | Version/Access                                 |
| --------------------- | ---------------------------------------------- |
| **n8n**               | v1.50+ (AI and API integrations supported)     |
| **Claude AI API**     | `claude-3-5-sonnet-20241022`                   |
| **Instagram Graph API**| Business account access token                  |
| **Google Sheets API** | `https://www.googleapis.com/auth/spreadsheets` |
| **Slack Webhook**     | Required for notifications                     |


## **Optional Enhancements**

* Add **email reminders** to influencers directly
* Integrate **Asana/Trello** for task creation on breaches
* Use **advanced AI prompts** for deeper post analysis (e.g., sentiment)
* Connect **Payment APIs (Stripe)** to withhold payments on breaches
* Enable **multi-platform checks** (e.g., TikTok/YouTube)
* Add **reporting dashboard** via Google Data Studio
* Implement **auto-contract updates** from CRM systems


**Result:**
A single automated system that tracks, reminds, and enforces influencer deliverables — **with full AI verification and zero manual work.**


**[Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n automation!**

## 📊 Basic Information

- **Workflow ID:** 10333
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 148
- **Downloads:** 14
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10333)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **cron** 
- **googleSheets** (×2)
- **splitInBatches** 
- **code** 
- **if** (×3)
- **slack** (×2)
- **httpRequest** (×2)
- **set** 
- **stickyNote** (×11)
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
