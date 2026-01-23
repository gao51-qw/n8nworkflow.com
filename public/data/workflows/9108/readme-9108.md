# Automated 4-stage email follow-up system with AI personalization and database tracking

> This n8n template demonstrates how to automate personalized cold email follow-ups using AI personalization and database tracking. Perfect for sales teams, recruiters, and agencies managing high-volume outreach.

**Use cases:** Follow up with cold leads, re-engage trial users, nurture conference contacts, recruit candidates, or follow up with proposal recipients.

**PS**: 1) This was created as a Follow Up workflow 
it was not meant for inital outreach. (However if you can customize it to include initial outreach then go ahead)

    2)This workflow sends a maximum of 4 follow Ups



## How it works

* NocoDB fetches all leads and filters those needing follow-up today based on the "Next Follow up/Contact" date
* A switch node routes leads to the appropriate follow-up stage (1-4) based on which follow-ups have already been sent
* AI personalizes each email template by inserting the recipient's name while keeping the rest of the content intact
* Emails are sent via SMTP (or Gmail node), then the database updates to mark the follow-up as sent and schedule the next one
* The workflow runs daily at 10 AM to automatically process follow-ups without manual intervention



## Good to know

* Each AI personalization costs ~$0.001 with Groq (free tier available). See Groq pricing for details.
* Follow-up schedule: Day 3, 7, 12, 16 after initial contact (fully customizable)
* Leads marked "Not Interested" are automatically excluded from future follow-ups
* The workflow only processes leads with an "Initial Contact Date" set - this triggers the entire sequence (The initial Contact is done manually and updated manually)



## How to use

* The schedule trigger runs daily but can be replaced with manual trigger or webhook for immediate testing
* Customize the 4 email templates in the AI nodes to match your brand voice and offering
* Adjust follow-up intervals by modifying the "Update a row" nodes (currently +4 or +5 days between follow-ups)
* Import your lead list to NocoDB with minimum required fields: first_name, last_name, email, Initial Contact Date



## Requirements

* **NocoDB account** - Free lead database (You can use any database-Google Sheets, Airtable etc. However ensure the essential details below are in the database)
* **Groq API key** (or OpenAI/Ollama) - For AI personalization (Swap this for any LLM you like/have)
* **SWITCH** the 'Send Email' nodes for the  **Gmail** Node and set it up using OAuth


## 📊 Basic Information

- **Workflow ID:** 9108
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 227
- **Downloads:** 22
- **Created:** 2025/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9108)

## 👤 Author

- **Name:** Buay Biel
- **Username:** @bielbuay

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **nocoDb** (×5)
- **filter** (×2)
- **switch** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** (×4)
- **emailSend** (×4)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×4)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
