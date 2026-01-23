# Organise an Event using Slack, Google Calendar and AI

> This n8n workflow takes Slack conversations and turns them into Calendar events complete with accurate date and times and location information. Adding and removing attendees are also managed automatically.

## How it works

* Workflow monitors a Slack channel for invite messages with a "📅" reaction and sends this to the AI agent.
* AI agent parses the message determining the time, date and location.
* Using its Location tool, the AI agent searches for the precise location address from Google Maps.
* Using its Calendar tool, the AI agent creates a Google Calendar invite with the title, description and location address for the user.
* Back in the Slack channel, others can RSVP to the invite by reacting with the "✅" emjoi.
* The workflow polls the message after a while and adds the users who have reacted to the Calendar Invite as attendees. Conversely, removing any attendees who have since removed their reaction.

## Examples

**Jill**: "Hey team, I'm organising a round of Laser Tag (Bunker 51) next Thursday around 6pm. Please RSVP with a ✅"

**AI**: "I've helped you create an event in your calendar https://cal.google.com/..."

**Jack**: "✅"

**AI**: "I've added Jack to the event as an attendee".

## Requirements
* Slack channel to attach the workflow
* OpenAI account to use a GPT model
* Google Calendar to create and update events

## Customising the Workflow

This workflow can work with other messaging platforms that support reactions or tagging like features such as discord. Don't use Google Calendar? Swap it out for Outlook or your own.

Use any combinations of emjoi reactions and add new rules like "RSVP maybe" which could send reminder updates nearer the event date.

## 📊 Basic Information

- **Workflow ID:** 2326
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 7901
- **Downloads:** 790
- **Created:** 2024/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2326)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **splitOut** (×2)
- **slack** (×5)
- **code** 
- **if** (×2)
- **googleCalendar** (×3)
- **set** (×2)
- **filter** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **scheduleTrigger** 
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
