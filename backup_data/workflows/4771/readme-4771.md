# Turn Monoprix delivery emails into calendar events using ChatGPT and Google Calendar

> **Intro:**
The purpose of this workflow is to simply convert you planned Grocery delivery  confirmation email to a Google Calendar event in your family calendar. While based on a Monoprix.fr email format, it is applicable/adaptable to almost anything else. 

**How it works:**
It is triggered by reception of the confirmation email on your Gmail. The workflow then extracts relevant data using ChatGPT, formats it, and creates a Google Calendar event. 

**Steps to use it:**
1. Import template in your n8n
2. Update credentials for Gmail, Google Calendar, and ChatGPT
3. Test workflow based on confirmation email received
4. Activate workflow

## 📊 Basic Information

- **Workflow ID:** 4771
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 354
- **Downloads:** 35
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4771)

## 👤 Author

- **Name:** Mathieu Romary
- **Username:** @mathi3u

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **googleCalendar** 
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
