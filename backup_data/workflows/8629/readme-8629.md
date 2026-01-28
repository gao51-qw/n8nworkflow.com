# Automated Instagram commenting on selected profiles with GPT-4o and Phantombuster

> ## Who’s it for  
Influencers and social-media teams who want to *comment automatically on posts from selected Instagram profiles*—scaling engagement while staying within platform limits.  

## How it works / What it does  
1. **Schedule Trigger** runs every 2 h.  
2. **Profile Post Extractor** fetches up to 20 posts per profile from your CSV.  
3. **Select Cookie** rotates Instagram session-cookies.  
4. **Get Random Post** selects one.  
5. **Create Comment** (GPT-4o) writes ≤150-character reply in your chosen language.  
6. Builds `instagram_post_to_comment.csv`, uploads to SharePoint.  
7. **Phantombuster Autocomment Agent** posts it.  
8. Logged in `instagram_posts_already_commented.csv` to prevent repeats.  

## How to set up  
- Same as the auto-liker, but also add `instagram_posts_already_commented.csv` (header `postUrl`).  
- Define tracked profiles in `profiles_instagram.csv`.  
- Configure comment prompt & language in **Set ENV Variables**.  

## Profile CSV format  
Your `profiles_instagram.csv` must contain a header `profileUrl` and valid Instagram profile URLs. Example:  
```csv
profileUrl
https://www.instagram.com/brand_account/
https://www.instagram.com/influencer123/

## 📊 Basic Information

- **Workflow ID:** 8629
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 487
- **Downloads:** 48
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8629)

## 👤 Author

- **Name:** plemeo
- **Username:** @plemeo

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **wait** (×3)
- **code** (×5)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **microsoftSharePoint** (×5)
- **phantombuster** (×5)
- **stickyNote** (×10)
- **set** 
- **scheduleTrigger** 
- **if** (×2)
- **extractFromFile** (×2)
- **convertToFile** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
