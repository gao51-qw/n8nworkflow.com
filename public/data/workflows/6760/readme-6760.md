# Automated Twitter following with hashtag targeting, Phantombuster, and GPT-4o

> ## Who’s it for  
Growth marketers, community managers, and personal-brand builders who want to steadily grow their Twitter (X) network by following new, relevant accounts on autopilot—while respecting daily limits.

## How it works / What it does  
1. **Schedule Trigger** fires every hour at a specified minute.  
2. **Select Cookie** picks a rotating Twitter session-cookie based on time slices.  
3. **AI Agent** creates a realistic AI/BPA hashtag.  
4. **Phantombuster Hashtag Agent** scrapes recent tweets → extracts profile handles.  
5. **Set Item** builds a small CSV with one profile; **Launch AF Agent** instructs the Phantombuster Auto-follow agent to follow it.  
6. Rate-limit nodes cap follows to roughly 50-80 per day.

## How to set up  
1. Add credentials: Phantombuster API, SharePoint OAuth2, OpenAI API key.  
2. In SharePoint › “Phantombuster” folder create:  
   • `twitter_session_cookies.txt` – one cookie per line.  
3. Adjust schedule or search parameters as needed.  
4. Activate the workflow; it will run hourly and follow 1 new profile each launch.

## Requirements  
- n8n 1.33 +  
- Phantombuster Growth plan (API access)  
- OpenAI account 
- Microsoft 365 SharePoint tenant

## How to customize  
- Change niche: edit hashtag prompt in **AI Agent**.  
- Follow more accounts: raise `numberOfAddsPerLaunch` and schedule frequency.  
- Use Google Drive/Dropbox instead of SharePoint: swap the cookie download node.

## 📊 Basic Information

- **Workflow ID:** 6760
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 49
- **Downloads:** 4
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6760)

## 👤 Author

- **Name:** plemeo
- **Username:** @plemeo

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **phantombuster** (×6)
- **stickyNote** (×7)
- **wait** (×2)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **scheduleTrigger** 
- **microsoftSharePoint** 
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
