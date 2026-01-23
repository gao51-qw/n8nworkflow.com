# Automatic LinkedIn engagement with AI comments using GPT-4o and Phantombuster

> ## Who’s it for  
B2B marketers, recruiters, and personal-brand builders who want to spark
conversations on LinkedIn by automatically posting short, relevant comments on
fresh industry content—while staying under daily limits.

## How it works / What it does  
1. **Schedule Trigger** fires every hour.  
2. **Select Cookie** picks a rotating LinkedIn session-cookie (time-slice logic).  
3. **Generate Random Search Term** (GPT-4o) outputs a realistic AI/BPA keyword.  
4. **LinkedIn Search Agent** (Phantombuster) scrapes recent posts.  
5. **Get Random Post** chooses one post and passes its text to **Create Comment**
   (GPT-4o) which returns a ≤150-character reply in the chosen language.  
6. Builds `linkedin_posts_to_comment.csv`, uploads to SharePoint, and launches
   the **Auto-comment Agent** to post the reply.  
7. Post URL is logged to `linkedin_posts_already_commented.csv` to avoid
   duplicates.  
8. **Wait** nodes throttle launches to ~120 comments/day.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `linkedin_session_cookies.txt` – one cookie per line.  
   • `linkedin_posts_already_commented.csv` with header `postUrl`.  
3. Edit **Set ENV Variables** to set default language, comment prompt,
   company ID, etc.  
4. Adjust schedule or comments-per-launch as needed.  
5. Activate the workflow; it will run hourly and comment on one new post each
   launch.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account 
- Microsoft 365 SharePoint tenant

## How to customize  
- Change tone/length: edit the prompt in **Create Comment**.  
- Comment more often: raise `numberOfLinesPerLaunch` and schedule frequency.  
- Use Google Drive/Dropbox instead of SharePoint by swapping storage nodes.

## 📊 Basic Information

- **Workflow ID:** 6764
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 159
- **Downloads:** 15
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6764)

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
