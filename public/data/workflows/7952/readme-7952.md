# Scheduled Gmail cleanup - auto-delete spam, promotions, social & trash

> # Scheduled Gmail Cleanup – Auto-Delete Spam, Promotions, Social & Trash to save the Gmail space and time
Managing Gmail manually can be tedious and time-consuming. Spam, Promotions, Social, and Trash folders quickly fill up with unwanted emails, taking up valuable storage and creating clutter. This workflow provides a simple yet powerful **Gmail automation** for efficient **email management**, helping you maintain a cleaner inbox with zero daily effort.  

This workflow is triggered by a **Schedule node** that runs once per day (customizable). It then uses multiple **Gmail nodes** to:  
1. **Fetch Spam Emails** – Identify all emails in the Spam folder.  
2. **Fetch Promotions Emails** – Collect promotional messages from Gmail’s Promotions category.  
3. **Fetch Social Emails** – Pull emails from the Social tab.  
4. **Fetch Trash Emails** – Find all items already marked as trash.  
5. **Delete Fetched Emails** – Automatically delete the emails retrieved from these categories.  

By default, the workflow deletes the selected emails permanently. Once removed, they are not recoverable.  

---

## Key Benefits
- Automatically deletes junk, spam, and promotional emails daily  
- Keeps Gmail storage under control and prevents hitting Google’s limits  
- Saves time by eliminating manual cleanup tasks  
- Helps you achieve and maintain **Inbox Zero**  
- Simple “set and forget” automation — once activated, it runs in the background  

---

## How to Use
1. Import this workflow into your n8n account.  
2. Connect your Gmail account using **Gmail OAuth2 credentials**.  
3. Open each Gmail node and select your Gmail credential.  
4. Adjust the **Schedule Trigger** if you want to run it more or less frequently (default: once per day).  
5. Save and activate the workflow.  

Once set up, your Gmail inbox will automatically stay clean and organized every day.  

---

## Who Is This For?
- Professionals who want to focus only on important emails  
- Productivity enthusiasts striving for Inbox Zero  
- Users approaching Gmail’s **15GB storage limit**  
- Teams managing shared inboxes with heavy email flow  

---

## Customising this workflow
- **Schedule**: Adjust the Schedule Trigger to run hourly, daily, or weekly.  
- **Categories**: Remove nodes for folders you want to keep, or add filters to only delete emails older than a certain number of days.  
- **Deletion Settings**: Modify the Gmail Delete node to move emails to Trash instead of permanent deletion if you prefer a safer cleanup.

## 📊 Basic Information

- **Workflow ID:** 7952
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1111
- **Downloads:** 111
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7952)

## 👤 Author

- **Name:** Tejas Ambalia
- **Username:** @tejas

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **stickyNote** (×7)
- **gmail** (×5)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
