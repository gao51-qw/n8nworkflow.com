# Monitor ad performance drops with Meta & Google Ads + multi-channel alerts

> ## How it works
This workflow monitors Meta Ads and Google Ads campaigns on a daily schedule to detect performance drops. It fetches yesterday’s campaign data, standardizes metrics, and calculates CTR and ROAS against fixed benchmarks. Campaigns that fall below thresholds are flagged automatically. Alerts are then sent across multiple channels and all results are logged in Google Sheets for tracking.

## Step-by-step
- **Step 1: Fetch ad performance data**
  - **Schedule Trigger (Daily Ad Check2)** – Runs the Meta Ads performance check at the scheduled time.
  - **HTTP Request (Fetch Meta Ads Data)** – Retrieves campaign metrics from the Meta Ads API.
  - **Set (Set Benchmarks)** – Normalizes Meta Ads data and assigns platform details.
  - **Schedule Trigger (Daily Ad Check3)** – Runs the Google Ads performance check at a separate scheduled time.
  - **Google Ads (Get many campaigns)** – Fetches campaign performance data from Google Ads.
  - **Set (Set Benchmarks4)** – Normalizes Google Ads data and assigns platform details.

- **Step 2: Detect performance drops**
  - **Code (Detect Performance Drop)** – Calculates CTR and ROAS, compares them with predefined benchmarks, and flags drops.
  - **If** – Filters only campaigns where a performance drop is detected.
  - **Split In Batches (Loop Over Items)** – Processes each affected campaign individually.

- **Step 3: Alert and log results**
  - **WhatsApp (Send message1)** – Sends instant WhatsApp alerts for critical visibility.
  - **Slack (Send a message)** – Posts detailed alerts to a Slack channel.
  - **Gmail (Send a message4)** – Sends email notifications with full campaign metrics.
  - **Code (Code in JavaScript)** – Recombines campaign data after notifications.
  - **Wait (Wait1)** – Ensures alert delivery before logging.
  - **Google Sheets (your-google-sheets-name)** – Appends or updates campaign records for reporting and audit history.

## Why use this?
- Catch CTR and ROAS drops before ad spend is wasted.
- Monitor Meta Ads and Google Ads in a single automated flow.
- Notify teams instantly via WhatsApp, Slack, and Email.
- Keep a centralized performance log for analysis and reporting.
- Reduce manual checks with consistent daily monitoring.


## 📊 Basic Information

- **Workflow ID:** 12091
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 251
- **Downloads:** 25
- **Created:** 2025/12/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12091)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** 
- **scheduleTrigger** (×2)
- **httpRequest** 
- **set** (×2)
- **code** (×2)
- **if** 
- **slack** 
- **gmail** 
- **splitInBatches** 
- **googleAds** 
- **wait** 
- **whatsApp** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
