# Auto-like Twitter posts with AI hashtags, cookie rotation & SharePoint

> ## Who’s it for  
Growth hackers, social-media managers, and brand builders who want to keep their Twitter (X) accounts active by automatically liking relevant posts on a set schedule—without manual scrolling.

## How it works / What it does  
1. **Schedule Trigger** runs every hour at a specified minute.  
2. **Select Cookie** chooses a rotating Twitter session-cookie (to stay under 1 000 likes/day).  
3. **AI Agent** generates a realistic AI/BPA-related hashtag.  
4. **Phantombuster Hashtag Agent** scrapes recent tweets for that hashtag → **Get Posts**.  
5. **Get Random Post** picks one tweet, checks it isn’t already liked (SharePoint CSV), and uploads a one-row `twitter_posts_to_like.csv`.  
6. **Phantombuster Autolike Agent** receives the CSV link and likes the tweet.  
7. The tweet URL is appended to `twitter_posts_already_liked.csv` to prevent duplicates.

## How to set up  
1. Create credentials: Phantombuster API key, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder add:  
   • `twitter_posts_already_liked.csv` (header `postUrl`).  
   • `twitter_session_cookies.txt` – one cookie per line.  
3. Adjust schedule if you need a different frequency.  
4. Activate the workflow—likes will start automatically.

## Requirements  
- n8n 1.33+  
- Phantombuster Growth plan (API access)  
- OpenAI account 
- Microsoft 365 SharePoint tenant

## How to customize  
- Change hashtag logic: edit the prompt in **AI Agent**.  
- Increase daily likes: add more cookies or shorten `Wait` nodes.  
- Swap SharePoint for Google Drive/Dropbox: replace the upload/download nodes.

## 📊 Basic Information

- **Workflow ID:** 6761
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 55
- **Downloads:** 5
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6761)

## 👤 Author

- **Name:** plemeo
- **Username:** @plemeo

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **wait** (×3)
- **code** (×4)
- **microsoftSharePoint** (×4)
- **phantombuster** (×6)
- **stickyNote** (×8)
- **set** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **if** 
- **extractFromFile** (×2)
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
