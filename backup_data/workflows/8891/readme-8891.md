# Sync Productboard features to Linear issues with Telegram notifications

> ## How it works

This workflow automatically syncs new Productboard features into Linear as issues and notifies the team via Telegram. It starts on a schedule, fetches Productboard features through API requests, and transforms the raw data into clean, structured fields. Newly created features are filtered, then inserted into Linear, and a success message is sent to Telegram for confirmation.

## Step-by-step

**1. Trigger and fetch data**  
- **Schedule Trigger** – Starts the workflow at predefined intervals.  
- **HTTP Request to Productboard** – Pulls the latest features from the Productboard API.  

**2. Transform and clean data**  
- **Code (Transform Features)** – Strips HTML, formats dates, and extracts clean fields like name, description, status, owner, and link.  

**3. Filter for new items**  
- **If (Filter New Features)** – Compares createdAt with today’s date, allowing only new features to proceed.  

**4. Create issues in Linear**  
- **Create Linear Issue** – Opens a new Linear issue using the feature’s name and description.  

**5. Notify via Telegram**  
- **Success Notification (Telegram)** – Sends a confirmation message once the sync is successful.  

## Why use this?

- Automates the sync of Productboard features into Linear without manual copying.  
- Ensures only new features are captured, preventing duplicates.  
- Keeps your team updated instantly through Telegram notifications.  
- Saves time by standardizing data and formatting before inserting into Linear.  
- Creates a smooth handoff from product planning to engineering execution.  


## 📊 Basic Information

- **Workflow ID:** 8891
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 68
- **Downloads:** 6
- **Created:** 2025/9/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8891)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **code** 
- **if** 
- **linear** 
- **telegram** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
