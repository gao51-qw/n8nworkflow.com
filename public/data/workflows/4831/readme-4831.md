# Automate LinkedIn profile search & cold email outreach with OpenAI and Hunter

> ## Problem

🚨 LinkedIn search is BROKEN. 


I waste hours on LinkedIn manually filtering profiles, reading summaries, hoping they’d reply—tedious, frustrating, inefficient.

I wish LinkedIn had built an agent that would get me to the right profile with one click!

If only I could just type:
"Product managers working on YouTube Shorts' generative AI features."

and seconds later, have LinkedIn URLs, names, emails, and full context about them.

Introducing LinkGPT, a LinkedIn Agent, an automated agentic workflow powered by n8n.

## Prerequisites: 
Required accounts/API keys for Hunter.io, Google, and OpenAI.

## This would be helpful for:

🎯 Job Seekers: Skip ATS, email hiring managers directly ( I wish I had this when I was recruiting!)

🎯 Recruiters: Reach your dream candidates first

🎯 Founders & Sales Teams: Share your demos with customers directly (this does NOT use the expensive Sales Navigator API)


## Step-by-step workflow:

Takes 5-10 minutes to setup.

1. Generate a Boolean search string for LinkedIn profiles.
2. Perform authenticated Google searches using your query.
3. Extract LinkedIn URLs and workplace context from the search results.
4. Use OpenAI to extract first name, last name, and domain name from the context.
5. Use Hunter.io to find emails of the contacts.
6. Append all results to your connected Google Sheet. Columns: first_name, last_name, domain_name, email, context



I put together a clear, step-by-step guide on setting this up yourself.

## Sample Query

Sample:

Input: "I am headed to NYC later this month, whom should I meet with that works in product management for gen AI products?"

Output: List of 10 contacts with first name, last name, workplace, email address and context about them so you can email them. 




## 📊 Basic Information

- **Workflow ID:** 4831
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1902
- **Downloads:** 190
- **Created:** 2025/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4831)

## 👤 Author

- **Name:** Abhijay Vuyyuru
- **Username:** @abhijayvuyyuru

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **wait** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **googleSheets** (×3)
- **code** (×6)
- **httpRequest** 
- **if** 
- **hunter** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
