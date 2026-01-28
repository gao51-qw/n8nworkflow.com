# Twitter Keyword & Public-Figure Monitor with Automated Airtable Archiving

> #  Monitor & Archive Keyword Tweets to Airtable


## 📌 Overview
Automatically searches Twitter for any keyword/topic (person, brand, hashtag), filters duplicates, and stores new tweets in Airtable with rich metadata - all on a daily schedule.

## 🛠️ Workflow Steps
1. **⏰ Schedule Trigger**  
   Runs daily at 8 AM (customizable)
   
2. **🐦 Twitter Search**  
   Fetches 100 latest tweets matching your keyword

3. **📦 Reformat Data**  
   Structures:
   - Text | Likes | ID | URL  
   - Author | Timestamp

4. **🗂️ Fetch Airtable Records**  
   Retrieves existing tweet IDs

5. **🔍 Deduplicate**  
   Compares IDs to exclude duplicates

6. **➕ Append New Tweets**  
   Saves only fresh entries to Airtable

## 💡 Key Benefits
- **🤖 Automated Monitoring**: Near real-time tracking
- **🧹 Clean Data**: Zero duplicate entries
- **📁 Structured Archive**: Organized metadata for analysis
- **⚙️ Fully Customizable**: Adapt keywords/schedule/output

## 🧩 Perfect For
- Social media analysts tracking brand mentions
- Journalists monitoring public figures
- Researchers archiving topic conversations
- Marketing teams measuring campaign reach

## 🚀 Getting Started
1. **Import** into n8n  
2. **Connect Credentials**:  
   - Twitter API keys  
   - Airtable base + table ID  
3. **Configure**:  
   - Search keyword (e.g., `"Narendra Modi"`)  
   - Schedule timing  
4. **Run & Forget**:  
   - Initial run to backfill  
   - Daily auto-archiving  

## ✅ Enhancement Ideas
+ Add Filters:
  - Exclude retweets
  - Filter by language
  - Geolocation targeting

 + Notifications:
   - Slack alerts for new tweets
   - Email digests

 + AI Extensions:
   - Sentiment analysis
   - Auto-categorization
   - Trend reporting

## 📊 Basic Information

- **Workflow ID:** 5006
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 817
- **Downloads:** 81
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5006)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **twitter** 
- **set** (×2)
- **airtable** (×2)
- **merge** 
- **scheduleTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
