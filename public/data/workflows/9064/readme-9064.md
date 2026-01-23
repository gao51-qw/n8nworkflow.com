# WordPress blog to Google Sheets sync (posts, categories, tags, media)

> # WordPress Blog to Google Sheets Sync  
### Posts • Categories • Tags • Media

---

## 🧩 Overview
This n8n workflow automatically syncs your **WordPress website content** — including posts, categories, tags, and media — into **Google Sheets**.

It helps automate content reporting, SEO analysis, and data backups.  
The workflow can run **on schedule** or **on demand** via a webhook.

---

## 💡 Use cases
- Maintain a live database of blog posts in Google Sheets.  
- Create dashboards in Google Data Studio or Looker Studio.  
- Track new articles for newsletters or social media scheduling.  
- Backup all WordPress content and media outside of your CMS.

---

## ⚙️ Prerequisites

Before importing the workflow, ensure you have:

1. A **WordPress website** with the REST API enabled (default in WP 4.7+).  
2. **Authentication**: either Application Passwords or Basic Auth credentials.  
3. A **Google Sheet** with the following tabs:
   - `Posts`
   - `Categories`
   - `Tags`
   - `Media`
4. The following **credentials configured in n8n**:
   - `HTTP Basic Auth` (for WordPress)
   - `Google Sheets OAuth2`

---

## 🚀 Setup instructions

1. **Import** the workflow into your n8n instance.  
2. Replace all example WordPress API URLs with your domain, for example: https://yourdomain.com/wp-json/wp/v2/ 
3. Connect your **HTTP Basic Auth** credentials (WordPress username + Application Password).  
4. Connect your **Google Sheets OAuth2** account.  
5. Update the **spreadsheet ID** in each Google Sheets node with your own.  
6. Adjust the **Schedule Trigger** (e.g. run daily at 2:00 AM).  
7. Run once manually to verify data sync.

---

## 🧠 Workflow structure

| Section | Description |
|----------|--------------|
| **Schedule / Webhook Trigger** | Starts the workflow manually or automatically |
| **Variables & Loop Vars** | Initialize pagination for REST API requests |
| **Get Posts → Split Out → Update Posts** | Fetch and update all WordPress posts |
| **Get Categories → Update Categories** | Sync WordPress categories |
| **Get Tags → Update Tags** | Sync WordPress tags |
| **Get Media → Split Out → Update Media** | Sync media library (images, videos, etc.) |
| **IF Loops** | Handles pagination logic until all items are retrieved |

---

## ⚠️ Notes & Limitations

- Works with **standard WordPress REST API endpoints** only.  
- Custom post types require editing endpoint URLs.  
- The `per_page` value defaults to **10**; increase for faster syncs.  
- For large sites, consider increasing n8n memory or adding execution logs.  
- Avoid running the workflow too frequently to prevent API rate limits.

---

## 🎥 Video Tutorial

A step-by-step setup guide is available here:
👉 [https://www.youtube.com/watch?v=czSMWyD6f-0](https://www.youtube.com/watch?v=czSMWyD6f-0)

Please subscribe to my YouTube channel to support me: 👉 [https://www.youtube.com/@gregfrolovpersonal](https://www.youtube.com/@gregfrolovpersonal)

---

## 👨‍💻 Author

**Created by:** [Grigory Frolov](https://ozwebexpert.com)  
SEO & Automation Specialist — helping businesses integrate WordPress, AI, and data tools with n8n.

---

## 🧾 License

This workflow is provided under the MIT License.  
Feel free to use, modify, and share improvements with the community.

## 📊 Basic Information

- **Workflow ID:** 9064
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 296
- **Downloads:** 29
- **Created:** 2025/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9064)

## 👤 Author

- **Name:** Grigory Frolov
- **Username:** @gregfrolov

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **if** (×2)
- **set** (×2)
- **code** (×2)
- **httpRequest** (×4)
- **splitOut** (×3)
- **scheduleTrigger** 
- **googleSheets** (×4)
- **stickyNote** (×10)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
