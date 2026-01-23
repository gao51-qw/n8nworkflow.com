# Send scheduled RSS news digest emails with formatted HTML in Gmail

> ## 📬 Scheduled RSS News Digest Emails with Gmail

Automatically send beautifully formatted news digests from any RSS feed (e.g., Prothom Alo) directly to your Gmail inbox on a schedule using this n8n workflow. Ideal for news curators, bloggers, media professionals, or anyone who wants a daily/weekly news summary in their email.

---

## ✅ Prerequisites

Before using this workflow, ensure you have the following:

* An active **Gmail account** with OAuth2 credentials set up in n8n.
* A public **RSS feed URL** (e.g., [https://prothomalo.com/feed](https://prothomalo.com/feed)).
* An instance of **n8n** running (self-hosted or via n8n cloud).
* Basic familiarity with how n8n workflows function.

---

## ⚙️ Setup Instructions

### 1. **Schedule Trigger**

* Triggers the workflow at your chosen interval (e.g., daily at 8 AM).
* You can configure this under the `interval` section of the Schedule Trigger node.

### 2. **HTTP Request – Get RSS from Prothom Alo**

* Fetches the latest RSS feed from your preferred news source.
* Set the `URL` field to your desired RSS feed, such as `https://prothomalo.com/feed`.

### 3. **Convert XML to JSON**

* Uses the XML node to parse the fetched XML into JSON format for further processing.

### 4. **Code Node – Generate HTML News Preview**

* Transforms the parsed JSON into a styled HTML template.
* Includes dynamic data like the article title, summary, author, category, and a “Read More” button.
* The date is formatted to `bn-BD` locale for regional display.

### 5. **Gmail Node – Send a message**

* Sends the generated HTML as an email.
* Requires **Gmail OAuth2** credentials to be configured.

  * Set the recipient address.
  * Use the generated HTML inside the `message` field.
  * Make sure to use Gmail OAuth2 credentials (you can set this under "Credentials").

---

## 🛠 Customization Options

* **RSS Feed Source**: Replace `https://prothomalo.com/feed` with any RSS/Atom feed of your choice.
* **Email Design**: Modify the embedded HTML/CSS in the Gmail node and code block to reflect your brand/theme.
* **Language & Locale**: Adjust the date and formatting based on your preferred locale (e.g., `en-US`, `bn-BD`, etc.).
* **Email Frequency**: Set your schedule to send digests hourly, daily, or weekly.

---

## 🧹 Flow Overview

```
Schedule Trigger → HTTP Request → XML → Code (HTML Builder) → Gmail Send
```

---

## 💡 Use Cases

* **Daily Newsletters**
* **Team Updates from Blogs**
* **Industry Trends Monitoring**
* **Client Briefings with Custom Feeds**

---

This automated workflow ensures timely delivery of curated news in a mobile-responsive, branded HTML format. No manual copy-pasting — just scheduled insights, beautifully delivered.


## 📊 Basic Information

- **Workflow ID:** 6223
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 563
- **Downloads:** 56
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6223)

## 👤 Author

- **Name:** Sarfaraz Muhammad Sajib
- **Username:** @sarfarazmuhammad

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **gmail** 
- **stickyNote** 
- **xml** 
- **code** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
