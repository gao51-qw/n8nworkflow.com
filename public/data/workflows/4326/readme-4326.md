# Auto-scrape TikTok user data via Dumpling AI and Segment in Airtable

> ### Who is this for?

This workflow is for social media agencies, influencer marketers, and brand managers who need to automatically qualify TikTok creators based on their follower metrics. It’s especially useful for teams managing influencer outreach campaigns or building talent databases.

---

### What problem is this workflow solving?

Manually tracking TikTok user stats is time-consuming and inconsistent. This automation instantly pulls TikTok profile data and only saves creators who meet a defined follower threshold. It removes manual vetting, reduces spreadsheet work, and makes influencer qualification scalable.

---

### What this workflow does

This workflow uses **Airtable** as the trigger, **Dumpling AI** to scrape TikTok profile information, and a logic condition to check if the profile has more than **100k followers**. Qualified profiles are updated with full metrics and stored back in Airtable.

---

### Setup

1. **Airtable Setup**
   - Create a table with a field named `Tik tok username`
   - Connect your Airtable account to n8n using a Personal Access Token
   - Set up a trigger to run when a new TikTok username is added

2. **Dumpling AI**
   - Sign up at [Dumpling AI](https://dumplingai.com)
   - Create a Dumpling AI credential in n8n using your API key
   - The HTTP node sends the TikTok handle to Dumpling’s `/get-tiktok-profile` endpoint

3. **Configure Filter**
   - The IF node checks if `followerCount` is greater than or equal to 100000

4. **Airtable Update**
   - If qualified, the record is updated with:
     - `ID` (TikTok ID)
     - `followerCount`
     - `followingCount`
     - `heartCount`
     - `videoCount`
  
---

### How to customize this workflow to your needs

- Change the follower count threshold to fit your campaign (e.g. 10K, 500K, 1M)
- Add fields like engagement rate, niche tags, or scraped bio
- Chain additional steps like sending approved creators to your CRM or triggering outreach messages
- Add another filter to exclude private or inactive accounts



## 📊 Basic Information

- **Workflow ID:** 4326
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1068
- **Downloads:** 106
- **Created:** 2025/5/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4326)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **airtableTrigger** 
- **httpRequest** 
- **if** 
- **airtable** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
