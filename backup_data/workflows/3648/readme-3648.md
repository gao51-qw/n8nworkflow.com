# Telegram bot for item multi select and saving to Postgres (Module "Checkbox")

> ### Who is this for?

This template is for developers and automation specialists looking to create a Telegram bot that enables users to select items from a predefined list and save their choices to a Postgres database.

### What problem is this workflow solving?

It provides a simple and efficient way to collect structured user input via Telegram and store it in a Postgres database, useful for inventory selection, order systems, or preference tracking.

### What this workflow does

- Displays a list of selectable options from a Postgres `shop_list` table in Telegram  
- Saves the user’s selection back to the database  
- Automatically deletes messages at each step to keep the chat clean  

### Setup

#### 1. Create the required tables in Postgres

- Replace `"n8n"` in the provided SQL script with the appropriate schema name for your database  
- Run the script to create the `shop_list` table  

#### 2. Add necessary credentials in n8n

- **Telegram**: Connect your Telegram bot using the Bot Token  
- **Postgres**: Add your Postgres DB credentials to allow the workflow to read/write data  

### How to customize this workflow to your needs

- Modify the `shop_list` table to include your specific options.
- Adjust the Telegram messages and logic to match your use case.

## 📊 Basic Information

- **Workflow ID:** 3648
- **Complexity:** advanced
- **Node Count:** 46
- **Views:** 643
- **Downloads:** 64
- **Created:** 2025/4/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3648)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **telegram** (×9)
- **postgres** (×19)
- **code** (×3)
- **set** (×3)
- **telegramTrigger** 
- **if** (×3)
- **switch** (×3)
- **summarize** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 46 nodes with 36 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
