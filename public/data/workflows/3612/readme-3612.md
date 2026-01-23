# Automate testing and collect responses via Telegram in Postgres (module "Quiz")

> ### Who is this for?  
This template is ideal for educators, HR professionals, and anyone looking to automate testing and collect responses through Telegram, while storing results in a Postgres database.

### What problem is this workflow solving?  
Manually organizing and managing tests can be time-consuming and prone to error. This workflow automates the test distribution, response collection, and scoring process, ensuring a seamless and efficient testing experience.

### What this workflow does  
- Adds test content, including questions and answers, to a Postgres database  
- Sends a Telegram bot link to test participants  
- Automatically delivers the test via the Telegram bot  
- Collects and stores responses  
- Displays the participant's ranking at the end of the test  

### Setup  
1. **Create tables in Postgres**  
   - Replace `"n8n"` in the provided SQL script with the name of your actual schema  
   - Run the script in your database to create the required tables  

2. **Add credentials**  
   - Set up and connect your **Telegram** credentials  
   - Set up and connect your **Postgres** credentials  

### How to customize this workflow to your needs  
- Modify the test content directly in the Postgres database  
- Customize the Telegram bot messages to match your tone and branding.
- Adjust scoring logic if needed to reflect different evaluation methods.

## 📊 Basic Information

- **Workflow ID:** 3612
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 524
- **Downloads:** 52
- **Created:** 2025/4/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3612)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **switch** (×4)
- **telegram** (×8)
- **sort** 
- **wait** 
- **set** (×4)
- **merge** 
- **postgres** (×8)
- **telegramTrigger** 
- **if** (×2)
- **code** 
- **summarize** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
