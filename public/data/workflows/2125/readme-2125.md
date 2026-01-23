# Summarize social media activity of a company before a call

> # How it works

It’s very important to come prepared to Sales calls. This often means a lot of manual research about the person you’re calling with. This workflow delivers a summary of the latest social media activity (LinkedIn + X) for businesses you are about to interact with each day.

- **Scans Your Calendar**: Each morning, it reviews your Google Calendar for any scheduled meetings or calls with companies based on each attendee email address.
- **Fetches Latest Posts**: For each identified company, it fetches recent LinkedIn and X posts and summerizes them using AI to deliver a qucik overview for a busy sales rep.
- **Delivers Insights**: You receive personalized emails via Gmail, each dedicated to a company you’re meeting with that day, containing a reminder of the meeting and a summary of company's recent social media activity.

# Setup steps
The workflow requires you to have the following accounts set up in their respective nodes:

- Google Calendar
- GMail
- Clearbit
- OpenAI

Besides those, you will need an account on the [RapidAPI](https://rapidapi.com) platform and subscribe to the following APIs:
- [Fresh LinkedIn Profile Data](https://rapidapi.com/freshdata-freshdata-default/api/fresh-linkedin-profile-data)
- [Twitter](https://rapidapi.com/omarmhaimdat/api/twitter154)

![Template setup](https://i.imgur.com/AVy08cl.png)

# Email example
![Email example](https://i.imgur.com/VcZfPpJ.png)


## 📊 Basic Information

- **Workflow ID:** 2125
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 10469
- **Downloads:** 1046
- **Created:** 2024/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2125)

## 👤 Author

- **Name:** Milorad Filipović
- **Username:** @n8n_milorad

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **set** (×5)
- **scheduleTrigger** 
- **googleCalendar** 
- **splitOut** 
- **httpRequest** (×2)
- **clearbit** 
- **gmail** 
- **merge** (×2)
- **html** 
- **stickyNote** (×3)
- **filter** 
- **openAi** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
