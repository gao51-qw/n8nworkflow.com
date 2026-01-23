# Auto-post platform-optimized content to X and Threads with late API and Google Sheets

> X (Twitter) and Threads (by Meta) both have different maximum character lengths.

## Different X and Threads Content Auto Poster  
### This n8n template demonstrates how to post different content optimized for X (Twitter) and Meta Threads using the Late API.  

You can use it for any niche. For example: posting AI news to X and Threads.  

**Possible use cases:**  
- Schedule your posts to X and Threads.  
- Use this workflow as a content calendar and automated posting system.  
- Apply it across different content niches.  

### How it works  
- The automation runs according to the time defined in the Schedule Trigger node.  
- Content is pulled from Google Sheets.  
- Any URL is shortened using your preferred short URL API.  
- Images are uploaded to Late’s server first.  
- Content for X is posted in Step 2. The workflow checks that the content length is under 280 characters.  
- Content for Threads is posted in Step 3. The workflow checks that the content length is under 500 characters.  
- Posts on X are published as threaded posts, while on Threads they are single posts.  
- Once posted, the Google Sheets content database is updated.  

### Requirements  
- Google OAuth credentials with the Google Sheets API enabled  
- Bitly account and access token (or OAuth)  
- GetLate API connected to your X and Threads accounts  

---

## HOW TO USE  

**STEP 1**  
1. Adjust the settings in the Schedule Trigger node to define when the workflow runs.  
2. Open this [Google Sheets template](https://docs.google.com/spreadsheets/d/1CtpVHtzu_y9KoELS7Cee3BDivtRN2zVg-Uuy7uZD4ko/edit?usp=sharing), then go to **File → Make a copy**, and update the settings in the Get Topic node.  
3. Get your Bitly OAuth or Access Token [here](https://app.bitly.com/settings/api) and add the credentials in the Short Link node.  
4. Get your API key from [getlate.dev](https://getlate.dev/) and add the credentials in the Upload IMG node.  

**STEP 2**  
1. Add your Late credentials to the Post Twitter node.  
2. Get your Twitter account ID from Late, and update it in the JSON Body section of the Post Twitter node.  

**STEP 3**  
1. Add your Late credentials to the Post Threads node.  
2. Get your Threads account ID from Late, and update it in the JSON Body section of the Post Threads node.  


## 📊 Basic Information

- **Workflow ID:** 8223
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 2770
- **Downloads:** 277
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8223)

## 👤 Author

- **Name:** Fariez
- **Username:** @kelaswfa

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **googleSheets** (×2)
- **if** (×2)
- **httpRequest** (×4)
- **stickyNote** (×5)
- **scheduleTrigger** 
- **code** 
- **set** (×2)
- **noOp** (×2)
- **bitly** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
