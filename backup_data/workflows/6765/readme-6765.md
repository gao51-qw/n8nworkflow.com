# Scheduled Instagram auto-liker with Phantombuster, GPT-4o & cookie rotation

> ## Who’s it for  
Social-media managers and brands that want to keep their Instagram
accounts active by automatically liking fresh posts under selected
hashtags—hands-free and rate-limited.

## How it works / What it does  
1. **Schedule Trigger** runs every 2 hours at a specified minute.  
2. **Select Cookie** chooses a rotating Instagram session-cookie
   (time-slice logic).  
3. **Generate Random Hashtag** (GPT-4o) outputs a realistic AI/BPA
   hashtag.  
4. **Instagram Hashtag Agent** (Phantombuster) scrapes up to
   `ENV_MAX_POSTS_PER_HASHTAG` recent posts.  
5. **Get Random Post** selects one; **duplicate checker** ensures it
   hasn’t been liked before (SharePoint CSV).  
6. Builds `instagram_posts_to_like.csv`, uploads to SharePoint, then
   launches the **Auto-like Agent** which likes the post.  
7. Post URL is appended to `instagram_posts_already_liked.csv` to avoid
   duplicates.  
8. **Wait** nodes throttle launches to ~12 likes per profile daily.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API
   key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `instagram_session_cookies.txt` – one cookie per line.  
   • `instagram_posts_already_liked.csv` with header `postUrl`.  
3. Adjust **Set ENV Variables** to change max posts per scrape.  
4. Activate the workflow; it will like one post every 2 hours.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account
- Microsoft 365 SharePoint tenant

## How to customize  
- Target a different niche: edit hashtag prompt in **Generate Random Hashtag**.  
- Like more posts: raise `ENV_MAX_POSTS_PER_HASHTAG`,
  `numberOfPostsPerLaunch`, or schedule frequency.  
- Replace SharePoint with Drive/Dropbox by swapping storage nodes.

## 📊 Basic Information

- **Workflow ID:** 6765
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 1478
- **Downloads:** 147
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6765)

## 👤 Author

- **Name:** plemeo
- **Username:** @plemeo

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **wait** (×3)
- **phantombuster** (×6)
- **code** (×4)
- **microsoftSharePoint** (×4)
- **stickyNote** (×9)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **scheduleTrigger** 
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

This workflow contains 36 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
