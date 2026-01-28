**🧠 Problem This Solves:**
For developers and creators, consistently posting quality content on LinkedIn can be time-consuming. This workflow automates the process by:

Fetching the latest Dev.to articles

Posting them to LinkedIn twice daily

Preventing duplicates using Airtable

Sending success alerts to Telegram

This ensures you're always active on LinkedIn, with zero manual effort.

**👥 Who This Template Is For**
Developers who want to build their presence on LinkedIn

Tech creators or solo founders looking to grow an audience

Community/page managers who want regular, curated content

Busy professionals aiming for consistent LinkedIn engagement without doing it manually

**⚙️ Workflow Breakdown**
This automation runs twice a day (9:00 AM and 7:00 PM) and performs the following steps:

Fetches Dev.to articles based on a tag

Checks Airtable to avoid reposting the same article

Posts to LinkedIn if it’s new

Sends a Telegram message after posting successfully

**🧩 Step-by-Step Setup Instructions**
✅ 1. Airtable Configuration
Create a new base in Airtable with just one table and one column:

Table Name: PostedArticles

Column:

ArticleID (Single line text – stores the unique ID of each Dev.to article posted)

This column is used to track posted articles and prevent duplicates.

🔗 2. Dev.to API Setup
Use the following endpoint in the HTTP Request node:

arduino
Copy
Edit
https://dev.to/api/articles?tag=YOUR_TAG_HERE&per_page=10
Replace YOUR_TAG_HERE with a tag like android, webdev, ai, etc.

💬 3. Telegram Bot Setup
Open @BotFather in Telegram and create a new bot

Save the bot token

Get your chat ID using @userinfobot or via Telegram API

Add a Telegram node in n8n using this token and chat ID

This will notify you when a post is successfully published.

🧾 4. LinkedIn Setup
Create a LinkedIn Developer App

Use OAuth2 to connect it in n8n

Choose to post on either a user profile or a company page

🧱 5. n8n Workflow Structure
Here’s the basic structure of the workflow:

Cron Node – Triggers at 9:00 AM and 7:00 PM daily

HTTP Request – Fetches latest articles from Dev.to

Airtable Search – Checks if ArticleID already exists

IF Node – Filters new vs. already-posted articles

LinkedIn Post – Publishes new article

Airtable Create – Saves the new ArticleID

Telegram Message – Sends success confirmation

**🛠️ Customization Tips**
Change the Dev.to tag in the API URL

Modify LinkedIn post format (add hashtags, emojis, personal notes)

Adjust posting times in the Cron node

Use additional filters (e.g., only post articles with a cover image or certain word count)