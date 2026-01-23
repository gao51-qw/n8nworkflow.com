# Automatically add travel time blockers to calendar using Google Directions API

> # Automatically add Travel time blockers before Appointments

This bot automatically adds Travel time blockers to your calendar, so you never come late to an appointment again.


## How it works

* **Trigger**: The workflow is initiated daily at 7 AM by a "Schedule Trigger".
* **AI Agent**: An "AI Agent" node orchestrates the main logic. 
* **Fetch events**: It uses the `get_calendar_events` tool to retrieve all events scheduled for the current day.
* **Identify events with location**: It then filters these events to identify those that have a specified location.
* **Check for existing travel time Blockers**: For each event with a location, it checks if a Travel time blocker already exists. Events that *do not* have such a blocker are marked for processing.
* **Calculate travel time**: Using the `Google Directions API` it determines how lot it takes to get to the location of the event. The starting location is by default your **Home Address**, unless there is a previous event within 2 hours before the event, in which case it will use the location of that previous event.
* **Create Travel time blocker**: Finally, it uses the `create_calendar_event` tool to create the Travel time blocker with a duration equal to the calculated travel time + 10 minutes for buffer.

![image.png](fileId:1896)



## Set up steps

1. Set Variables
	1. **Home address**
	2. **Blocker name**
	3. **Mode of Transportation**
2. Connect your **LLM Provider**
3. Connect your **Google Calendar**
4. Connect your **Google Directions API**

## 📊 Basic Information

- **Workflow ID:** 6700
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 426
- **Downloads:** 42
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6700)

## 👤 Author

- **Name:** Kevin Armbruster
- **Username:** @kevin-armbruster

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleCalendarTool** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **set** (×2)
- **httpRequest** 
- **executeWorkflowTrigger** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
