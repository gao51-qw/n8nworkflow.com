# Scrape recent news about a company before a call

> # How It works

It's very important to come prepared to Sales calls. This often means a lot of manual research about the person you're calling with. This workflow delivers the latest news about businesses you are about to interact with each day.

- **Scans Your Calendar**: Each morning, it reviews your Google Calendar for any scheduled meetings or calls with companies.
- **Fetches Latest News**: For each identified company, it searches the web for the most recent and relevant news articles using newsapi.org
- **Delivers Insights**: You receive personalized emails via Gmail, each dedicated to a company you're meeting with that day, containing a curated list of news headlines, brief descriptions, and direct links to full articles.

# Setup steps
The workflow requires you to have the following accounts set up in their respective nodes:
1. Google Calendar
2. GMail

Besides those, there are a few parameters in the node called `Setup` that can be used to tweak the workflow:

![Setting up the workflow](https://i.imgur.com/AvStsGb.png)


## 📊 Basic Information

- **Workflow ID:** 2110
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 58694
- **Downloads:** 5869
- **Created:** 2024/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2110)

## 👤 Author

- **Name:** Milorad Filipović
- **Username:** @n8n_milorad

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **set** (×2)
- **stickyNote** (×3)
- **scheduleTrigger** 
- **if** 
- **httpRequest** 
- **code** 
- **gmail** 
- **noOp** 
- **googleCalendar** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
