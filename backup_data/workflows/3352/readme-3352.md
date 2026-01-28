# Health check websites with Google Sheets & Telegram alerts

> ## What does this template do ? 

This workflow performs scheduled health checks on a list of URLs stored in a Google Sheet. Every X minutes, it retrieves the URLs, sends HTTP requests to check their availability, and notifies a Telegram chat if any request fails.

You can easily replace Telegram with any other notification service supported by n8n, such as Slack, Discord, Email, or Microsoft Teams.

## Use Case
Ideal for monitoring internal or external services, ensuring uptime and responsiveness. Integrate with your preferred messaging platform for real-time failure notifications—without setting up complex infrastructure.

## What the Workflow Does
- ⏰ Triggers at regular intervals using **Schedule Trigger**  
- 📄 Reads URLs from a **Google Sheet**  
- 🌐 Sends HTTP requests to check URL health  
- 🚨 Sends failure alerts (including error code and URL) to **Telegram (or any service of your choice)**  

## Apps & Services Used
- Google Sheets  
- Telegram (or alternative notification service)  
- HTTP Request  

## Pre-requisites
- Telegram bot and chat ID (if using Telegram)  
- Connected Google Sheet with a `URLS` column  ([template](https://docs.google.com/spreadsheets/d/17-tY9_wn-D2FV627Sx3-Z3abqFYvz794edej7es5J6w/edit?usp=sharing))

## Customization Tips
- Adjust the schedule interval in the trigger node  
- Replace Telegram with Slack, Email, Discord, or any other notification node  
- Customize alert messages with more context or formatting  
- Add filters, retries, or logging as needed  

## 📊 Basic Information

- **Workflow ID:** 3352
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 3560
- **Downloads:** 356
- **Created:** 2025/3/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3352)

## 👤 Author

- **Name:** Hugues Stock
- **Username:** @hpstock

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **noOp** 
- **telegram** 
- **scheduleTrigger** 
- **googleSheets** 
- **httpRequest** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
