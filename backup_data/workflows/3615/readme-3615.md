# Verify Telegram channel subscriptions with access control using Postgres

> 
### Who is this for?  
This workflow is for Telegram bot developers or marketers who want to verify user subscriptions to specific Telegram channels and optionally reward them with downloadable files.

### What problem is this workflow solving?  
This workflow ensures users have subscribed to required Telegram channels before they are granted access to resources or rewards, such as Google Drive files. It automates the subscription verification process, saving time and reducing manual effort.

### What this workflow does  
- Verifies if a user is subscribed to specific Telegram channels.  
- Allows adding and removing channel IDs for verification.  
- Sends referral links to users for subscription checks.  
- Optionally grants access to Google Drive files upon successful verification (currently inactive)
 
### Setup  
1. **Add the bot to your Telegram channels as an admin** – this is required for the bot to check subscription status.  
2. **Add channel IDs via the bot** – these are the channels users will need to subscribe to.  
3. **Send the referral link** to users you want to verify.  
4. **Remove channels anytime** from the subscription check list if needed.  
5. **Create tables in Postgres**:  
   - Replace `"n8n"` in the provided SQL script with your DB schema name.  
   - Run the script in your Postgres DB.  
6. **Add credentials**:  
   - Telegram  
   - Postgres  

### How to customize this workflow to your needs  
- Modify the SQL script to suit your existing database structure.  
- Adjust the logic to enable or disable file delivery from Google Drive.  

## 📊 Basic Information

- **Workflow ID:** 3615
- **Complexity:** advanced
- **Node Count:** 45
- **Views:** 382
- **Downloads:** 38
- **Created:** 2025/4/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3615)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×4)
- **telegram** (×14)
- **postgres** (×12)
- **aggregate** 
- **if** (×4)
- **googleDrive** (×2)
- **set** (×2)
- **telegramTrigger** 
- **switch** (×4)
- **summarize** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 45 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
