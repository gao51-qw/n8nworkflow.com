# Automated customer reservations via Telegram and PostgreSQL (Module "Booking")

> ### Who is this for?  
This workflow is for businesses or services that require managing customer reservations or appointments through a Telegram bot and storing reservation details in a PostgreSQL database.

### What problem is this workflow solving?  
This workflow automates the process of capturing reservation data via a Telegram bot and storing it in a PostgreSQL database. It eliminates the need for manual entry and reduces errors, improving efficiency in managing bookings.

### What this workflow does  
- The workflow allows customers to select a day and time for their reservation through a Telegram bot.
- Customers provide their phone number and name, which are then added to the reservation table in the PostgreSQL database.
- Successfully added reservations are confirmed via the bot, ensuring both the business and customer are updated.

### Setup  
1. **Create tables in Postgres DB**  
   - Replace `"n8n"` in the provided SQL script with the name of your schema in the database.
   - Execute the SQL script to set up the required tables.

2. **Add Credentials**  
   - Add your **Telegram** bot credentials.
   - Add your **PostgreSQL** database credentials to the workflow for seamless integration.

### How to customize this workflow to your needs  
- Modify the available days and times in the Telegram bot according to your business hours or schedule.
- Adjust the database schema or add additional fields for customer preferences, special requests, or payment information as needed.

## 📊 Basic Information

- **Workflow ID:** 3651
- **Complexity:** advanced
- **Node Count:** 49
- **Views:** 1524
- **Downloads:** 152
- **Created:** 2025/4/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3651)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **stickyNote** (×10)
- **postgres** (×15)
- **if** (×3)
- **switch** (×3)
- **whatsApp** (×9)
- **whatsAppTrigger** 
- **set** (×4)
- **summarize** (×2)
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 49 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
