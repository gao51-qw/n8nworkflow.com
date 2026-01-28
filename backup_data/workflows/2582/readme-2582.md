# Automate sales meeting prep with AI &  APIFY sent to WhatsApp

> This n8n template builds a meeting assistant that compiles timely reminders of upcoming meetings filled with email history and recent LinkedIn activity of other people on the invite. This is then discreetly sent via WhatsApp ensuring the user is always prepared, informed and ready to impress!

## How it works
* A scheduled trigger fires hourly to check for upcoming personal meetings.
* When found, the invite is analysed by an AI agent to pull email and LinkedIn details of the other invitees.
* 2 subworkflows are then triggered for each invitee to (1) search for last email correspondence with them and (2) scrape their LinkedIn profile + recent activity for social updates.
* Using both available sources, another AI agent is used to summarise this information and generate a short meeting prep message for the user.
* The notification is finally sent to the user's WhatsApp, allowing them ample time to review.

## How to use
* There are a lot of moving parts in this template so in it's current form, it's best to use this for personal rather than team calendars.
* The LinkedIn scraping method used in this workflow requires you to paste in your LinkedIn cookies from your browser which essentially let's n8n impersonate you. You can retrieve this from dev console or ask someone technical for help!

**Note**: It may be wise to switch to other LinkedIn scraping approaches which do not impersonate your own account for production.

## Requirements
* OpenAI for LLM
* Gmail for Email
* Google Calendar for upcoming events
* WhatsApp Business account for notifications

## Customising this workflow
* Try adding information sources which are relevant to you and your invitees. Such as company search, other social media sites etc.
* Create an on-demand version which doesn't rely on the scheduled trigger. Sometimes you want to know prepare for meetings hours or days in advance where this could help immensely.

## 📊 Basic Information

- **Workflow ID:** 2582
- **Complexity:** advanced
- **Node Count:** 61
- **Views:** 11045
- **Downloads:** 1104
- **Created:** 2024/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2582)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **gmail** (×2)
- **set** (×13)
- **googleCalendar** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **executeWorkflowTrigger** 
- **whatsApp** 
- **stickyNote** (×14)
- **scheduleTrigger** 
- **switch** 
- **if** (×4)
- **splitOut** (×3)
- **executeWorkflow** (×2)
- **merge** (×2)
- **aggregate** (×2)
- **html** (×5)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 61 nodes with 40 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
