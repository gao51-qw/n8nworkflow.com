# Automate weekly SEO reports from Google Search Console to email

> ## What this workflow does
This n8n workflow connects to Google Search Console to fetch SEO performance data (clicks, impressions, CTR, and average position) for the last 7 days.  
It formats the results into a clean weekly summary and automatically sends it to your email inbox every Monday morning.

Ideal for:
- Website owners
- Bloggers
- SEO consultants
who want to track site performance over time without manual reporting.

---

## Setup steps

1. Replace `YOUR_SITE_URL` in the HTTP Request node with your verified domain from Google Search Console.
2. Connect your Google OAuth2 credentials to the HTTP Request node.
3. Set up your SMTP credentials in the "Send Email" node.
4. Adjust the recipient email address and subject line if necessary.
5. *(Optional)* Customize the Function node to include more queries or format the report as a PDF.

**Estimated setup time**: ~10 minutes

Sticky notes are included in the workflow canvas to guide you step-by-step.

---

## Technologies used
- Google Search Console API
- SMTP Email Node
- n8n Function Node
- n8n HTTP Request Node
- n8n Sticky Notes


## 📊 Basic Information

- **Workflow ID:** 3712
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 3997
- **Downloads:** 399
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3712)

## 👤 Author

- **Name:** Rodrigue Gbadou
- **Username:** @gbadou

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **cron** 
- **httpRequest** 
- **function** 
- **stickyNote** (×3)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
