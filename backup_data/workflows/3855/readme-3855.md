# 🚀 YouTube comment sentiment analyzer with Google Sheets & OpenAI

> # 🚀 YouTube Comment Sentiment Analyzer with Google Sheets & OpenAI

---

### Who Should Use This?
Influencers, marketers, and data teams who need **instant insights** into audience sentiment—without manual exports or scattered tools.

---

### The Challenge
- **Manual exports** from YouTube Studio  
- **Time-consuming** sentiment tagging  
- **Data scattered** across multiple platforms  

Our workflow automates **everything**: from fetching comments to logging analysis—so you can focus on insights, not spreadsheets.

---

### What You’ll Get
1. **Dynamic Input**  
   Read a list of YouTube URLs from your Google Sheet.  
2. **Full Comment Harvest**  
   Pull **all** top-level comments (handles pagination 100/page).  
3. **Deep Sentiment Scan**  
   Classify each comment as **Positive**, **Neutral**, or **Negative** using OpenAI.  
4. **Smart Formatting**  
   Capture metadata (author, likes, timestamp) alongside sentiment.  
5. **Seamless Storage**  
   Append or update rows in your Google Sheet—ready for reporting.

---

### Easy Setup
1. **Prepare Google Sheet**  
   - Create a sheet with a `video_urls` column (full YouTube links).  
   - Add and authorize a Google Sheets Oauth or service-account credential in n8n.  
2. **Enable YouTube API**  
   - Activate Data API v3 in Google Cloud, grab an API key, and save as an HTTP credential in n8n.  
3. **Configure OpenAI**  
   - Enter your API key under the “OpenAI Chat” credential in n8n.  
4. **Import the Workflow**  
   - Paste the provided JSON into n8n.  
5. **Run Manually**  
   - Use the **Manual Trigger** node to start fetching and analyzing comments on demand.

---

### Customize to Your Needs
- **Filter Comments**: Add an IF node to process only comments with specific keywords or minimum likes.  
- **Automate Schedule**: Swap the Manual Trigger for a Cron node if you later want periodic runs.  
- **Extended Analysis**: Swap sentiment classification for topic extraction, summarization, or translation by tweaking the LLM prompt.  
- **Alternate Destinations**: Replace Google Sheets with Airtable, Notion, or any database node.

---

### Tags
``YouTube`` ``Google Sheets`` ``OpenAI`` ``Sentiment Analysis`` ``n8n`` ``Manual Trigger``  


## 📊 Basic Information

- **Workflow ID:** 3855
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 643
- **Downloads:** 64
- **Created:** 2025/5/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3855)

## 👤 Author

- **Name:** Aayushman Sharma
- **Username:** @ajstyle0411

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **splitOut** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **noOp** (×2)
- **googleSheets** (×3)
- **if** (×3)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **set** 
- **manualTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
