# Telegram giveaways among channel subscribers (Module "Giveaway")

> ### Who is this for?
This workflow is ideal for businesses or individuals who want to run Telegram-based giveaways that require users to subscribe to certain channels in order to participate.

### What problem is this workflow solving?
Running a fair and trackable giveaway on Telegram can be difficult without a system that verifies subscriptions and manages participants. This workflow simplifies that process, ensuring only eligible users are included and enabling a smooth drawing process.

### What this workflow does
- The giveaway organizer specifies a list of Telegram channels for participants to must subscribe to.
- The organizer shares a bot link with users.
- Users start the bot, confirming their participation in the giveaway.
- The bot tracks eligible participants.
- The administrator complete the giveaway and select winners.

### Setup
1. **Create tables in your Postgres database**  
   - Open the provided SQL script.
   - Replace `"n8n"` with your schema name.
   - Execute the script in your Postgres DB.

2. **Add credentials in n8n**  
   - Telegram credentials (Bot token, etc.)  
   - Postgres database credentials

### How to customize this workflow to your needs
- Modify the SQL script to match your database schema if needed.
- Customize the Telegram bot messages and logic using the n8n Telegram nodes.
- Add additional nodes if you want to notify winners or log data in other services.

## 📊 Basic Information

- **Workflow ID:** 3611
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 254
- **Downloads:** 25
- **Created:** 2025/4/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3611)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×7)
- **set** (×2)
- **telegram** (×12)
- **postgres** (×12)
- **if** (×4)
- **switch** (×4)
- **sort** 
- **aggregate** 
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
