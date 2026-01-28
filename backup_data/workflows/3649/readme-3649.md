# Automate WhatsApp tests and rank results with PostgreSQL (Module "Quiz")

> ### Who is this for?

This workflow is designed for educators, HR teams, or anyone who needs to create and distribute quizzes or tests via WhatsApp and automatically store and analyze responses in a PostgreSQL database.

### What problem is this workflow solving?

Managing tests or quizzes manually across platforms can be time-consuming and error-prone. This workflow automates the entire process — from test creation to distribution and result collection — providing an efficient way to manage assessments at scale.

### What this workflow does

- Adds test content (including questions and answers) to a PostgreSQL database.
- Allows users to take the test directly via WhatsApp.
- Displays a final ranking to test takers upon completion.

### Setup

#### 1. Create tables in PostgreSQL
- Open the SQL script provided in the workflow.
- Replace `n8n` with your actual database schema name.
- Run the script to set up the required tables.

#### 2. Add required credentials
- **WhatsApp**: Set up OAuth and connect your WhatsApp account.
- **PostgreSQL**: Add your Postgres DB credentials to n8n.

### How to customize this workflow to your needs

- Update the test questions and answers directly in the database.
- Modify the bot flow to suit your test structure or messaging preferences.
- Extend the ranking logic based on specific grading criteria or scoring rules.

## 📊 Basic Information

- **Workflow ID:** 3649
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 450
- **Downloads:** 45
- **Created:** 2025/4/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3649)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **stickyNote** (×9)
- **whatsApp** (×6)
- **postgres** (×15)
- **switch** (×2)
- **set** (×2)
- **sort** 
- **if** (×2)
- **summarize** 
- **whatsAppTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
