# Qualify TikTok influencers from username with Dumpling AI + GPT-4

> ## Who’s it for

This workflow is for marketers, influencer agencies, or outreach teams who want to quickly check if a TikTok user meets certain criteria before adding them to an influencer list. No manual profile checking—just drop in a username, and the system does the rest.

---

## What it does

This workflow takes a TikTok username submitted via form, fetches the user’s profile using **Dumpling AI**, then evaluates the user using **GPT-4** to decide if they qualify for influencer outreach based on predefined rules:

- 40+ videos  
- 100,000+ followers  
- 300,000+ total likes

It then checks Google Sheets:
- If the user **does not exist**, it **adds a new row**
- If the user **already exists**, it **updates the row**

---

## How it works

1. **Form Trigger**: Collects TikTok username  
2. **Dumpling AI**: Pulls TikTok profile (username, ID, followers, videos, likes, etc.)  
3. **GPT-4**: Checks if the user meets outreach criteria  
4. **Google Sheets**:  
   - Checks if user already exists  
   - Updates or appends user data + qualification status

---

## Requirements

- ✅ Dumpling AI API key (HTTP Header Auth)
- ✅ OpenAI API key (GPT-4)
- ✅ Google Sheets integration with the following columns:
  - `Tik Tok user`
  - `User ID`
  - `Follower Count`
  - `Following Count`
  - `Heart Count`
  - `Video Count`
  - `Qualified?`

---

## How to customize

- Change the qualification logic in the GPT-4 prompt  
- Add additional TikTok data (bio, profile pic, location, etc.)  
- Send a notification if the user is qualified  
- Push the qualified leads to Airtable, Notion, or your CRM

---

&gt; This workflow gives you a plug-and-play tool to qualify TikTok influencers instantly using AI—without leaving your browser or spreadsheet.


## 📊 Basic Information

- **Workflow ID:** 9126
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 138
- **Downloads:** 13
- **Created:** 2025/10/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9126)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** (×3)
- **switch** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
