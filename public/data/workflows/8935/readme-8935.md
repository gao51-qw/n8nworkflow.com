# Meeting prep with Google Calendar, Tavily AI Research & Gmail Briefings

> ## Research for Upcoming Meeting

Creator: [Summer Chang](https://www.youtube.com/channel/UCAdp-nOSH-jcrwXkLlUMyXQ)

Never walk into a meeting unprepared again!

This workflow automatically researches your meeting contacts every morning and emails you the latest news and insights about the companies you're meeting with today.

✅ Step 1: Set Your Morning Briefing Time
Open the Every morning @ 7 Schedule Trigger and adjust the time when you'd like to receive your daily meeting briefings. The default is set to 9 AM.

✅ Step 2: Connect Your Google Calendar
Link your Google Calendar credentials to the Get meetings for today node. This allows the workflow to scan your calendar for external meetings.

✅ Step 3: Connect Your Tavily Research API
Add your Tavily API key to the Research Company/Person node. This powers the intelligent research that finds recent news and insights about your meeting contacts.

✅ Step 4: Link Your Gmail Account
Connect your Gmail credentials to the Send news node so your research briefings can be automatically delivered to your inbox each morning.

✅ Step 5: Customize Your Email Settings
In the Send news node, update:

Send To: Your email address
Sender Name: Customize how the emails appear in your inbox

✅ Step 6: Activate the Workflow
Once everything is connected, set the workflow to active so it runs automatically each morning and keeps you prepared.

## 📊 Basic Information

- **Workflow ID:** 8935
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 105
- **Downloads:** 10
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8935)

## 👤 Author

- **Name:** Summer
- **Username:** @summerchang

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **set** (×2)
- **scheduleTrigger** 
- **if** 
- **code** 
- **gmail** 
- **noOp** 
- **googleCalendar** 
- **@tavily/n8n-nodes-tavily.tavily** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
