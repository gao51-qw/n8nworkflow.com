# Automated B2B prospecting with RapidAPI, Hunter.io, GPT & Gmail

> Automate your B2B prospecting by finding local businesses and sending AI-personalized outreach emails to qualified contacts.

What This Workflow Does
This workflow acts as a powerful AI Sales Assistant, automating your entire B2B lead generation process for local businesses. It saves you countless hours of manual research and outreach by intelligently finding prospects, enriching their data, and drafting personalized emails tailored to their specific business. Stop prospecting manually and start scaling your outreach efforts effectively.

How It Works
The process is designed to be both smart and efficient:

Find Businesses: It starts by searching for local businesses based on your criteria (e.g., "engineering in London").

Qualify & Enrich: It filters out businesses without a website. For the valid ones, it scrapes the website's title and description to understand what they do.

Identify Contacts: Using Hunter.io, it finds professional email contacts associated with the company and verifies their validity to ensure high-quality leads.

Generate AI-Personalized Emails: For each valid contact, it uses OpenAI to write a unique, short, and professional outreach email. The AI uses the scraped website information to create a personalized hook, showing you've done your research.

Send & Organize: The final email is sent automatically via your Gmail account. If a business has no website, a follow-up task is created in your Google Tasks for manual review.

Key Benefits
Save Time: Automate a time-consuming prospecting process from start to finish.

Increase Reply Rates: Engage prospects with personalized emails, not generic templates.

Scale Your Outreach: Generate and contact dozens of qualified leads effortlessly.

Stay Organized: Never lose a lead, thanks to the integrated task management for manual follow-ups.

## 📊 Basic Information

- **Workflow ID:** 7393
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 946
- **Downloads:** 94
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7393)

## 👤 Author

- **Name:** Jimmy Gay
- **Username:** @jimmyjoe

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **formTrigger** 
- **httpRequest** (×2)
- **splitOut** (×2)
- **if** (×3)
- **html** 
- **hunter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **set** (×2)
- **gmail** 
- **googleTasks** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
