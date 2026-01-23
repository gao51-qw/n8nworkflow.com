
## Overview  
This workflow automatically collects the latest articles from Google News RSS feeds, cleans and deduplicates them, and stores them neatly in a Google Sheet. It runs on a set schedule (every Monday at 09:00 by default) and helps you build a fresh pool of content ideas for newsletters, blogs, or social media.  

---

## What you can do with it  
- 🔎 **Research faster** – pull in fresh articles from multiple RSS sources without manual searching.  
- 🧼 **Clean & normalize** – extract the real article URL (instead of Google redirects), keep only the title, summary, and date.  
- 🗑 **No duplicates** – filter out empty or repeated entries before they ever reach your sheet.  
- 📊 **Central storage** – append all new, unique links into a Google Sheet for review or further automation.  

---

## How it works  
1. **Trigger** – Cron starts the flow every Monday at 09:00 (you can change the schedule).  
2. **RSS Read** – Fetches articles from multiple Google News queries (e.g., “AI”, “AI Automation”).  
3. **Merge** – Combines all feed results into one list.  
4. **Set (Clean URL)** – Extracts the real URL, title, summary, and publication date.  
5. **Filter** – Ensures only items with a valid title and URL continue.  
6. **Unique by URL** – Removes duplicate articles across feeds.  
7. **Google Sheets Append** – Saves new links into your chosen Sheet for review and later use.  

---

## Setup Instructions  
1. **Import workflow** into your n8n instance.  
2. **Update RSS feeds**:  
   - Replace the example Google News RSS URLs (`AI`, `AI Automation`) with your own queries.  
   - Format:  
     ```
     https://news.google.com/rss/search?q=YOUR_QUERY&hl=de&gl=DE&ceid=DE:de
     ```  
3. **Connect Google Sheets**:  
   - Add your Google Sheets credentials.  
   - Select the `documentId` (the spreadsheet) and `sheetName` (the tab) in the `Append new Links` node.  
   - Recommended columns: `date`, `title`, `url`, `summary`.  
4. **Adjust schedule**:  
   - In the `Trigger: Montag 09:00` node, change the cron expression to daily or multiple times per day if you want.  
5. **Run test**:  
   - Execute once manually.  
   - Check your sheet for the first rows.  

---

## Tips & Extensions  
- ✅ Add more RSS Read nodes for additional sources (blogs, media outlets, niche topics).  
- ✅ Chain this workflow with an AI node (OpenAI/GPT) to automatically generate post ideas from the collected articles.  
- ✅ Notify yourself in Slack/Telegram when new articles are added.  
- ✅ Use a status column (`Draft`, `Approved`, `Posted`) to manage a simple content pipeline directly from the sheet.  

---

👉 With this template you’ll never run out of content ideas – everything flows into one place, ready to inspire your next posts, newsletters, or campaigns.  
