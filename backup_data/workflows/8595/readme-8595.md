# Auto-like Instagram posts from chosen profiles with Phantombuster + SharePoint

> ## Who’s it for  
Social-media managers, growth hackers, and brands who want to keep their Instagram accounts active by auto-liking posts from *specific profiles* they track—without scrolling feeds manually.  

## How it works / What it does  
1. **Schedule Trigger** runs every 2 h.  
2. **Profile Post Extractor** pulls up to 20 recent posts from each Instagram profile in your CSV.  
3. **Select Cookie** rotates Instagram session-cookies.  
4. **Get Random Post** picks one and checks against `instagram_posts_already_liked.csv`.  
5. Builds `instagram_posts_to_like.csv`, uploads to SharePoint.  
6. **Phantombuster Autolike Agent** likes the post.  
7. Liked URLs are appended to prevent duplicates.  
8. **Wait nodes** throttle activity (~12 likes/profile/day).  

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2.  
2. In SharePoint › “Phantombuster” folder create:  
   • `instagram_session_cookies.txt` (one per line).  
   • `instagram_posts_already_liked.csv` (header `postUrl`).  
   • `profiles_instagram.csv` with profile URLs.  
3. Adjust schedule if needed.  
4. Activate the workflow—likes will run automatically.  

## Requirements  
- n8n 1.33+  
- Phantombuster Growth plan  
- Microsoft 365 SharePoint tenant  

## How to customize  
- Add/remove tracked profiles in `profiles_instagram.csv`.  
- Adjust throttle by changing `Wait` intervals.  
- Swap SharePoint for Google Drive/Dropbox if needed.  

## 📊 Basic Information

- **Workflow ID:** 8595
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 1629
- **Downloads:** 162
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8595)

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
- **set** 
- **scheduleTrigger** 
- **if** (×2)
- **extractFromFile** (×2)
- **convertToFile** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** (×2)
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
