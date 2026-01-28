# Auto-like LinkedIn posts with GPT-4o, Phantombuster and SharePoint

> ## Who’s it for  
Recruiters, B2B marketers, and thought-leadership builders who want to boost their LinkedIn engagement by automatically liking fresh, relevant posts—while staying under LinkedIn’s daily limits.

## How it works / What it does  
1. **Schedule Trigger** runs hourly at a specified minute.  
2. **Select Cookie** chooses a rotating LinkedIn session-cookie (time-slice logic).  
3. **Generate Random Search Term** (GPT-4o) outputs a realistic AI/BPA keyword.  
4. **Phantombuster LinkedIn Content Search Agent** scrapes recent posts → **Get Posts**.  
5. **Get Random Post** selects one post, checks it isn’t already liked (SharePoint CSV) and appends the company-ID query param. If a personal LinkedIn Account is used, no company-ID is needed.
6. Creates `linkedin_posts_to_like.csv`, uploads to SharePoint, and provides the URL to **Autolike Agent** which likes the post.  
7. The post URL is added to `linkedin_posts_already_liked.csv` to avoid duplicates.  
8. **Wait** nodes throttle launches to ≈400 likes/day.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `linkedin_session_cookies.txt` – one cookie per line.  
   • `linkedin_posts_already_liked.csv` with header `postUrl`.  
3. Update **Set ENV Variables** with your LinkedIn company ID (`ENV_COMPANY_ID_LINKEDIN`).  
4. Adjust schedule or likes-per-launch as needed.  
5. Activate the workflow; it will run hourly and like one new post per launch.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account (GPT-4o)  
- Microsoft 365 SharePoint tenant

## How to customize  
- Change niche: edit the prompt in **Generate Random Search Term**.  
- Like more posts: raise `numberOfLinesPerLaunch` and schedule frequency.  
- Swap SharePoint for Google Drive/Dropbox: replace the upload/download nodes.

## 📊 Basic Information

- **Workflow ID:** 6762
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 103
- **Downloads:** 10
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6762)

## 👤 Author

- **Name:** plemeo
- **Username:** @plemeo

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **wait** (×3)
- **code** (×4)
- **microsoftSharePoint** (×4)
- **phantombuster** (×6)
- **stickyNote** (×9)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
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

This workflow contains 36 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
