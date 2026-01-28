# Reddit freelance job monitor with Google Sheets tracking and Telegram alerts

> 
## What It Does

This n8n workflow monitors Reddit for freelance job posts related to n8n and sends alerts via Telegram while logging relevant data in Google Sheets. It filters out duplicates and only stores unique, paid opportunities.

---

## Workflow Steps

### 1. **Schedule Trigger**

Runs every 5 minutes.

### 2. **Reddit Search**

Sends a query to Reddit API for freelance-related keywords.

### 3. **Extract Post Metadata**

Parses out relevant data from Reddit response.

### 4. **Separate Posts**

Splits array into individual post items.

### 5. **Filter Paid Jobs**

Matches posts with keywords like "hiring", "paid", "job", etc.

### 6. **Check Existing Records**

Pulls already logged post IDs from Google Sheets.

### 7. **Filter Unique Posts**

Uses JavaScript to compare incoming posts with the existing ones and filters out duplicates.

### 8. **Get UTC Date**

Converts Reddit `created_utc` timestamp into readable format.

### 9. **Save to Google Sheets**

Appends unique posts with these fields:

* `id`
* `title`
* `url`
* `flair`
* `created_utc`

### 10. **Send Telegram Alert**

Sends a formatted notification with clickable links and meta info.

---

## Required Credentials

* **Reddit OAuth2** (application with access to `search`)
* **Google Sheets API** (via service account)
* **Telegram Bot API** (bot token, chat ID)

---

## Google Sheet Configuration

Make sure the sheet has these columns:

* `id` (used for deduplication)
* `title`
* `url`
* `flair`
* `created_utc`

&gt; First row must be the header.

---

## How to Set It Up

### Reddit API

1. Create a Reddit App at [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps)
2. Set up OAuth2 credentials in n8n with correct scopes

### Google Sheets

1. Create a new Google Sheet
2. Share with your service account email
3. Add required columns in the first row

### Telegram

1. Create a bot via [BotFather](https://t.me/BotFather)
2. Copy the bot token
3. Use a private chat or group, get the chat ID

---

## Notes

* **Interval**: Adjust schedule node to change frequency
* **Search Query**: You can customize keywords in the Reddit API URL
* **Profanity**: Clean output only; no slang or offensive words

---

## Final Output

* **Google Sheets**: A log of all new freelance Reddit posts
* **Telegram**: Instant lead alerts for new job posts

---

## 📊 Basic Information

- **Workflow ID:** 6079
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 99
- **Downloads:** 9
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6079)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **set** (×2)
- **filter** 
- **googleSheets** (×2)
- **code** 
- **telegram** 
- **splitOut** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
