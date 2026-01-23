# Daily calendar summary notifications via Telegram from Google Calendar

> ## Context:
This workflow automatically sends you a daily message on Telegram summarizing all your meetings and events for the day, straight from your Google Calendar.

## For who ? 
Perfect for anyone who:
- Uses Google Calendar to manage their schedule.
- Wants Telegram reminders for daily events.
- Loves automation and productivity tools.

## Requirements:
- Telegram.
- Google account.
- Google Calendar.


## Steps:
![image.png](fileId:1936)

🗒️ Use the sticky notes in the n8n canvas to:
- Add your Telegram and Google credentials.
- Execute and test the workflow.
- Check if you receive your daily summary on Telegram.

You'll get this:

![capure workflow message.png](fileId:1935)

![capture workflow 2 message.png](fileId:1934)


## Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=eIELi1iWCl4)

## How does it work?
- ⏰ The trigger runs every day at 7AM.
- 📅 Your Google Calendar is checked.
- 🔢 If there are events or meetings, a number &gt; 0 is returned. Otherwise, it's 0.
- 📝 A text message is generated with a summary of all your events, including all relevant details.
- ❌ If no events are found, a "no event" message is sent.

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)


## 📊 Basic Information

- **Workflow ID:** 6952
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1296
- **Downloads:** 129
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6952)

## 👤 Author

- **Name:** Yassin Zehar
- **Username:** @yassinzehar

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **code** (×2)
- **scheduleTrigger** 
- **if** 
- **telegram** (×2)
- **stickyNote** (×4)
- **googleCalendar** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
