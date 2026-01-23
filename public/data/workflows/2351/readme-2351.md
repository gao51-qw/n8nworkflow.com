# 2-way sync Notion and Google Calendar

> ![image 5.jpg](fileId:824)
This workflow syncs multiple Notion databases to your Google Calendar. And it works both ways.

### What events are supported?

Everything except recurring events.

All day events, multiple day events, start and end date… these are all supported.

You set them in Notion and they stay in sync with Google. And vice versa.
### Why doesn’t it support recurring events?

Notion doesn’t support recurring events yet.

So when you create a recurring event in Google, it will only consider the first date, ignoring future occurrences of the event.

### Can I connect more than one Notion database?

Yes. You can have many Notion databases synced to one Google Calendar account.

You can see how to do it in the workflow instructions.

It is recommended that you create more calendars in your account, so that you can link each calendar to a different database in Notion. But that’s a choice.
![image 1.png](fileId:823)

### What happens if I delete an event or page?

- Notion page deleted → Deletes event in Google
- Notion date property cleared → Deletes event in Google
- Google event deleted → Clears the date property in Notion, but keeps the page, so you don’t lose your work.

### Does it update the events?

Yes. When you update the event in Google or in Notion it syncs both ways.

### How can I know what Notion item was linked to an event?

Either by the name or by clicking the hyperlink in the event description that says: **👉 View in Notion**.


### When I create a new event in Google, does it add an item to Notion?

Yes. When you create an event inside one of your calendars, the item is synced to the corresponding Notion database.

### Does it sync event descriptions?

No. The event description will always be “View in Notion”. Even if you change it in Google Calendar it will be overwritten when you make a change to the Notion page.

🎉 When you buy this template you receive step-by-step instructions on how to set it up.

### Check out my other templates
👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)

## 📊 Basic Information

- **Workflow ID:** 2351
- **Complexity:** advanced
- **Node Count:** 127
- **Views:** 3004
- **Downloads:** 300
- **Created:** 2024/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2351)

## 👤 Author

- **Name:** Solomon
- **Username:** @solomon

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **googleCalendar** (×9)
- **notion** (×16)
- **noOp** (×2)
- **stickyNote** (×29)
- **if** (×16)
- **splitInBatches** (×6)
- **dateTime** (×10)
- **merge** 
- **httpRequest** (×15)
- **filter** (×4)
- **set** (×5)
- **code** (×3)
- **googleCalendarTrigger** (×6)
- **manualTrigger** 
- **notionTrigger** (×2)
- **splitOut** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 127 nodes with 82 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
