# WhatsApp product catalog bot with PostgreSQL database

> ### Who is this for?
This workflow is designed for businesses or developers who want to integrate product information into a WhatsApp bot and allow users to retrieve details about products from a database.

### What problem is this workflow solving?
This workflow automates the process of managing and retrieving product information via WhatsApp, allowing businesses to easily share product details with customers without manual interaction.

### What this workflow does
Basis version:
- It adds product data to a Postgres database.
- It enables a WhatsApp bot to retrieve a list of products.
- Users can select a product to receive detailed information about it.

Additional version:
- All features from Basis Version.
- Get a list of product categories.
- Get a list of products in a category.
- Add product to cart.
- Go to the cart or select more products.
- Remove unnecessary items in the cart or clear the entire cart.
- When all the desired items are in the cart, click Buy.
- The bot will send you a payment link.

### Setup
1. **Create Tables in Postgres DB**
   - Modify the SQL script to replace "n8n" with your schema name.
   - Run the provided SQL script in your database (available in the workflow).

2. **Add Credentials**
   - Add WhatsApp credentials (OAuth, Account).
   - Add Postgres credentials to connect the bot to your database.

### How to customize this workflow to your needs
- Update the database schema or table structure if you need additional product information.
- Modify the bot interaction to suit your specific product listing and display preferences.

## 📊 Basic Information

- **Workflow ID:** 3652
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1954
- **Downloads:** 195
- **Created:** 2025/4/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3652)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **stickyNote** (×6)
- **whatsApp** (×4)
- **postgres** (×5)
- **if** (×2)
- **switch** 
- **set** (×2)
- **summarize** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
