# Automate Telegram channel posts using Postgres (Module "Cross-Posting")

> ### Who is this for?
This template is ideal for users managing Telegram channels who want to automate the process of posting messages, including text and images, directly from an bot.

### What problem is this workflow solving?
Manually posting content to multiple Telegram channels can be time-consuming and inconsistent. This workflow automates that process, enabling efficient and consistent content delivery to one or more channels.

### What this workflow does
This workflow connects to a Postgres database to retrieve post content and automatically sends text or image posts to designated Telegram channels where the bot is an admin. It supports scheduling and content customization through the database.

### Setup
#### 1. Create the necessary tables in your Postgres database
- Open the SQL script provided in the workflow.
- Replace `"n8n"` with your actual schema name.
- Run the script in your database to set up the required tables.

#### 2. Add credentials
- **Telegram**: Create and connect a bot, ensuring it has admin access to the target channels.
- **Postgres**: Connect your Postgres instance using valid credentials.

### How to customize this workflow to your needs
- Modify the SQL script to match your specific table or schema naming conventions.
- Adjust the content format or post frequency directly from your database.

## 📊 Basic Information

- **Workflow ID:** 3614
- **Complexity:** advanced
- **Node Count:** 47
- **Views:** 637
- **Downloads:** 63
- **Created:** 2025/4/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3614)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** (×2)
- **telegramTrigger** 
- **postgres** (×16)
- **if** (×3)
- **switch** (×4)
- **telegram** (×16)
- **summarize** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 47 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
