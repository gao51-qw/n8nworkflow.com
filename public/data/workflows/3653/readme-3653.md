# Collect WhatsApp questionnaire responses in Postgres (Module "Anketa")

> ### Who is this for?
This workflow is designed for businesses or organizations looking to collect and store user responses from questionnaires via a WhatsApp bot, with data saved in a Postgres database.

### What problem is this workflow solving?
This workflow streamlines the process of collecting and managing user responses to questionnaires. It helps automate data collection from multiple users and stores the responses in a centralized database for easy access and analysis.

### What this workflow does
Basis version:
- Add questions to the anketa_question table.
- Save the responses of users who complete the questionnaire in whatsapp into the database.

Additional version:
- All features from basis version.
- The bot sends a lead magnet from Google Drive after filling out the form.
- If the user has not answered all the questions, the bot sends a reminder after a certain time (configurable).

### Setup
1. **Create Tables in Postgres DB**  
   - Replace "n8n" in the provided SQL script with your database schema name.
   - Run the SQL script in your Postgres database (this is available within the workflow).

2. **Add Credentials**  
   - Set up WhatsApp OAuth credentials and account details.
   - Set up Postgres credentials to connect the workflow to your database.

### How to customize this workflow to your needs
- Modify the questions in the `anketa_question` table to suit your specific survey or data collection requirements.
- Adjust the WhatsApp link and communication flow to align with your branding or messaging needs.
- Customize the database table schema if you need to capture additional fields or change the format of the data stored.

## 📊 Basic Information

- **Workflow ID:** 3653
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 706
- **Downloads:** 70
- **Created:** 2025/4/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3653)

## 👤 Author

- **Name:** Andrew
- **Username:** @boanse

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **whatsAppTrigger** 
- **stickyNote** (×10)
- **whatsApp** (×6)
- **postgres** (×10)
- **switch** (×2)
- **set** 
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
