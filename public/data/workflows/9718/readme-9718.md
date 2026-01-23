# Track social media growth and weekly reports with X API, YouTube API, and Gmail

> ## Monitor and record your personal or competitors’ social media growth with this scalable n8n automation template.  
Using official APIs from **X (formerly Twitter)** and **YouTube**, the workflow fetches daily **follower and subscriber counts**, stores them in a structured **n8n Data Table**, and now sends **automated weekly summary emails via Gmail**.

Built with **extensibility** in mind, this workflow is ready for future updates to support additional platforms like Instagram, TikTok, LinkedIn, and more.

---

## **Features**

* 📈 **Daily Social Media Tracking**  
  Automatically collects X follower counts and YouTube subscriber numbers based on **usernames**, not channel IDs.

* 📦 **Data Table Logging**  
  Cleanly stores daily metrics in a dedicated n8n Data Table with timestamps.

* 📧 **Weekly Email Reports (New)**  
  Sends a concise weekly summary of growth trends using the **Gmail node**.

* 🔁 **Easy Customization**  
  Swap out usernames in a couple of fields — no deep edits required.

* 🛠️ **Extensible Design**  
  Structure is ready to support more platforms (e.g., TikTok, Instagram, LinkedIn).

* 🧩 **API-Based Accuracy**  
  Uses official APIs from X and YouTube for real-time, reliable data.

---

## **Setup Instructions**

### 1. Get API Credentials

* **X API (Bearer Token)** → [developer.x.com](https://developer.x.com)  
* **YouTube API Key** → [Google Cloud Console](https://console.cloud.google.com)  
* **Gmail Credentials** → Enable the **Gmail API** in your Google Cloud project and configure OAuth2 credentials for use in n8n.  

---

### 2. Configure in n8n

* Import the template  
* In the **HTTP Request nodes**:
  * Add **Bearer Auth** (for X API)  
  * Add **Query Auth** with your YouTube API Key (`?key=&lt;your_api_key&gt;`)  
* In the **Gmail node**:
  * Connect your Gmail account via OAuth2 credentials  
  * Customize recipient email(s) and message format  
* Edit these fields to track your accounts:
  * `xUsername` → your **X / Twitter handle**  
  * `ytChannelUsername` → your **YouTube channel’s username**

---

### 3. Create the Data Table

Inside the n8n dashboard, create a table with the following fields:

| Field Name          | Type     |
| ------------------- | -------- |
| `date`              | DateTime |
| `xFollowersCount`   | Number   |
| `ytSubscriberCount` | Number   |

---

## **How It Works**

1. **Trigger**: Daily cron node starts the workflow.  
2. **Fetch X Followers**: Grabs follower count using the X API.  
3. **Fetch YouTube Subscribers**: Retrieves sub count using the YouTube API.  
4. **Store Data**: Logs all values into your Data Table with a timestamp.  
5. **Weekly Email Summary**: Once a week, the Gmail node compiles recent data and emails a growth report.  
6. **Future Expansion**: The structure is ready to include more platforms.

---

## **Use Cases**

* Track your brand or competitor’s social growth daily  
* Receive weekly email reports on follower/subscriber changes  
* Build custom dashboards or growth charts  
* Compare performance across platforms  
* Generate automated growth reports  

---

## **Requirements**

* X API Bearer Token  
* YouTube API Key  
* Gmail API Credentials  
* Access to n8n (cloud or self-hosted)  

---

## **Delivery Options**

You can extend this template to:

* Post daily growth summaries to Slack or Telegram  
* Auto-update a Google Sheet or Notion database  
* Send more detailed weekly reports  
* Add new platforms (Instagram, TikTok, LinkedIn, etc.)  

---

## **Details**

| Node         | Function                            |
| ------------ | ----------------------------------- |
| HTTP Request | Pull data from APIs                 |
| Cron         | Trigger workflow daily              |
| Data Table   | Store historical growth data        |
| Gmail        | Send weekly email reports           |
| Set          | Define usernames and settings       |

---


## 📊 Basic Information

- **Workflow ID:** 9718
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 172
- **Downloads:** 17
- **Created:** 2025/10/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9718)

## 👤 Author

- **Name:** ScoutNow
- **Username:** @scoutnow

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **httpRequest** (×2)
- **dataTable** (×4)
- **set** (×2)
- **stickyNote** (×7)
- **scheduleTrigger** 
- **if** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
