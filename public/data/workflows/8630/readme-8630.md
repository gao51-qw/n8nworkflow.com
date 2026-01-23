# Auto-like tweets from selected profiles with Phantombuster & SharePoint AI rotation

> ## Who’s it for  
Growth hackers, community builders, and marketers who want to keep their Twitter (X) accounts active by *liking posts from selected profiles* automatically.  

## How it works / What it does  
1. **Schedule Trigger** fires hourly.  
2. **Profile Post Extractor** fetches up to 20 tweets for each profile in your CSV.  
3. **Select Cookie** rotates Twitter session-cookies.  
4. **Get Random Post** checks against `twitter_posts_already_liked.csv`.  
5. Builds `twitter_posts_to_like.csv`, uploads to SharePoint.  
6. **Phantombuster Autolike Agent** likes the tweet.  
7. Logs the liked URL to avoid duplicates.  

## How to set up  
- Add Phantombuster + SharePoint credentials.  
- In SharePoint “Phantombuster” folder:  
  • `twitter_session_cookies.txt`  
  • `twitter_posts_already_liked.csv` (header `postUrl`)  
  • `profiles_twitter.csv` (list of profiles).  

## Profile CSV format  
Your `profiles_twitter.csv` must contain a header `profileUrl` and direct links to the Twitter profiles. Example:  
```csv
profileUrl
https://twitter.com/elonmusk
https://twitter.com/openai

## 📊 Basic Information

- **Workflow ID:** 8630
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 179
- **Downloads:** 17
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8630)

## 👤 Author

- **Name:** plemeo
- **Username:** @plemeo

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **wait** (×3)
- **code** (×5)
- **microsoftSharePoint** (×5)
- **phantombuster** (×5)
- **stickyNote** (×8)
- **set** 
- **scheduleTrigger** 
- **if** (×2)
- **extractFromFile** (×2)
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
