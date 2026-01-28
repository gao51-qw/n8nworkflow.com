#  Monitor & Archive Keyword Tweets to Airtable


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