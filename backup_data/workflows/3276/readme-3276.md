# Daylight saving time notification for different timezones

> **Who is it for?**
If you are having a lot of meetings as a project manager, CFO, CTO, CEO or any other role that requires handling many meetings, AND you are working with people in different timezones, you may have noticed that it is not uncommon that daylight savings time change day **may differ from timezone to timezone**. This may be very troublesome at times.

If DST change day differs between timezones, then you might need to adjust your meetings time accordingly. And this happens twice a year. So it's good to get notification beforehand (at least a day before).

This automation will notify you if tomorrow you can expect DST in any zone you provide.

**How It Works?**
- Script runs daily and loops through provided timezones
- Checks if there is DST change *to* or *from* the tomorrow (if you want to be notified sooner, just adjust number of days)
- If there is DST change, script provides you with Slack notification (replace with email if needed)

**How to set up?**
- Add and/or edit timezones you want to monitor in "Timezones List" node
- Adjust "Calculate Tomorrow's Date" if you want to be notified sooner than 1 day before DST change
- Adjust "Send Notification on Upcoming Change" to set where on Slack you want to be notified

And that's it. Hope that you won't miss any other meeting because of DST!


## 📊 Basic Information

- **Workflow ID:** 3276
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 479
- **Downloads:** 47
- **Created:** 2025/3/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3276)

## 👤 Author

- **Name:** Łukasz
- **Username:** @lukaszpp

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** 
- **code** 
- **set** (×2)
- **if** 
- **slack** 
- **dateTime** 
- **scheduleTrigger** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
