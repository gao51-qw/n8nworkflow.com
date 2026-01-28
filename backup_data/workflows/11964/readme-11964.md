# Schedule and auto-post images to Instagram with Google Sheets, Drive and AI captions

> ## **Description**
This n8n workflow automatically publishes posts to Instagram Business accounts and Facebook Pages using Google Sheets as your content calendar. You schedule posts in the sheet, and n8n processes them, uploads media (if any), posts via Meta’s Graph API, and updates the sheet with success/failure. 
n8n

### **How it Works**
Google Sheets rows marked “Pending” and due for publishing are picked up by a scheduled trigger. Posts are then routed to the proper social platforms and published via Meta’s Graph API. Finally, n8n writes back the publish status and timestamp to the sheet. 
n8n

### **🧠 Step-by-Step**
**1️⃣ Scheduled Trigger**

The workflow automatically checks Google Sheets at fixed intervals (e.g., every 15 min) for posts that are ready (status = Pending, publish time reached).

**2️⃣ Config & Credentials**
Store reusable settings including:

- Google Sheets ID & Sheet name
- Meta App credentials (App ID, App Secret)
- Access token for Meta Graph API
- Instagram Business Account ID
- Facebook Page ID

These configs make the workflow modular and secure.

**3️⃣ Setup: Create a Meta (Facebook) App**
To post via the Graph API, you must first set up a Meta developer app:

🔗 Create App (Meta for Developers):
Go here to start:
https://developers.facebook.com/docs/development/create-an-app/

Steps:

- Log in at Meta for Developers.
- Click Create App and choose Business as the app type. 
- Facebook Developers
- Add a name and contact email.
- In the app dashboard, Add Product → choose Instagram Graph API and Facebook Login. 

📌 After creation, your app will have an App ID and App Secret in Settings → Basic — save both for n8n. 

**4️⃣ Link Accounts & Get IDs**
Before publishing you need:

- Instagram Business account (not a personal account)
- Facebook Page linked to that Instagram account

Link them in Facebook Page settings → Linked Accounts.

Then, generate an access token with permissions (instagram_basic, pages_show_list, etc.) using the Graph API Explorer and your new Meta app. 

From the token response or via Graph API calls, extract:

- Facebook Page ID
- Instagram Business Account ID

These go into your n8n nodes for publishing. 

**5️⃣ Fetch & Filter Posts**
Read rows from Google Sheets and filter those ready to publish (status = Pending, scheduled time reached).

**6️⃣ Image Handling**
If an image link is present, download or retrieve it (Google Drive or external URL). If not, continue with a text-only post.

**7️⃣ Platform Routing**
Route the post to:
- Instagram publishing branch
- Facebook publishing branch
(or both depending on the sheet’s platform column)

**8️⃣ Posting via Meta Graph API**
**Instagram**
- Use Graph API endpoints to create and publish media containers and then make the publish call. 

**Facebook**
- Use Graph API to post to the Facebook Page feed (via /feed or /photos endpoint). 

**9️⃣ Update Sheet Status**
After each attempt, update Google Sheets with:
- Status (Success/Fail)
- Published timestamp


## 📊 Basic Information

- **Workflow ID:** 11964
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 209
- **Downloads:** 20
- **Created:** 2025/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11964)

## 👤 Author

- **Name:** Dinakar Selvakumar
- **Username:** @jamesdinakar

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **googleSheets** (×3)
- **if** (×2)
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **facebookGraphApi** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **wait** 
- **httpRequest** (×3)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
