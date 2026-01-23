# Auto-comment on Instagram posts with GPT-4o, Phantombuster, and SharePoint

> ## Who’s it for  
Social-media teams and influencers who want to grow engagement by
automatically posting short, relevant comments on new Instagram posts
under rotating hashtags—while staying under platform limits.

## How it works / What it does  
1. **Schedule Trigger** fires every 2 h at a specified minute.  
2. **Select Cookie** chooses a rotating Instagram session-cookie by
   time slice.  
3. **Generate Random Hashtag** (GPT-4o) outputs a realistic AI/BPA tag.  
4. **Hashtag Agent** (Phantombuster) scrapes up to
   `ENV_MAX_POSTS_PER_HASHTAG` recent posts.  
5. **Get Random Post** picks one; **Create Comment** (GPT-4o) crafts a
   ≤150-character reply in the chosen language.  
6. Builds `instagram_post_to_comment.csv`, uploads to SharePoint, then
   launches the **Auto-comment Agent** which posts the reply.  
7. Post URL is logged to `instagram_posts_already_commented.csv`
   to avoid duplicates.  
8. **Wait** nodes throttle launches to ≈80 comments/day.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `instagram_session_cookies.txt` – one cookie per line.  
   • `instagram_posts_already_commented.csv` with header `postUrl`.  
3. Edit **Set ENV Variables** to set default language, prompt, and max
   posts per scrape.  
4. Activate the workflow; it will comment every 2 h.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account (GPT-4o)  
- Microsoft 365 SharePoint tenant

## How to customize  
- Change tone/length: tweak prompt in **Create Comment**.  
- Comment more often: raise `ENV_MAX_POSTS_PER_HASHTAG`,
  adjust cron, and agent limits.  
- Swap SharePoint for Drive/Dropbox by replacing storage nodes.

## 📊 Basic Information

- **Workflow ID:** 6768
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 478
- **Downloads:** 47
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6768)

## 👤 Author

- **Name:** plemeo
- **Username:** @plemeo

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **wait** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **phantombuster** (×6)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **microsoftSharePoint** (×4)
- **stickyNote** (×10)
- **set** 
- **scheduleTrigger** 
- **if** 
- **extractFromFile** (×2)
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
