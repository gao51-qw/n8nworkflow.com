# Employee time tracking system with GPT-4o reports & Gmail notifications

> ### Overview
This workflow acts as an **AI-powered smart time tracker** for employees or personal use.  
It records work sessions via a webhook, logs start/end/break times into n8n Data Tables,  
and uses **OpenAI** to automatically summarize working patterns and send reminders or monthly reports via Gmail.

---

### How It Works
1. **Webhook `/track-time`** → Receives a `POST` request with a `method` (`start`, `break`, or `end`) and duration if applicable.  
2. **Switch Logic** → Directs the request to create or update the appropriate record in your Data Table.  
3. **Data Tables** → Store timestamps, break durations, and worker IDs in a secure local table.  
4. **Schedule Triggers**  
   - **Daily (10:00)** → Checks if today’s shift was not started and sends a reminder.  
   - **Monthly (Day 1, 06:00)** → Compiles last month’s working data and sends an AI report to management.  
5. **OpenAI Analysis**  
   - Summarizes working hours and productivity trends.  
   - Detects missed clock-ins or irregular patterns.  
6. **Gmail Integration** → Sends formatted daily or monthly reports to both employees and supervisors.

---

### Example Webhook Requests
```json
# Start work
POST /track-time
{
  "method": "start",
  "headers": { "id": "EMP001" }
}

# Log a break
POST /track-time
{
  "method": "break",
  "duration": 15,
  "headers": { "id": "EMP001" }
}

# End work
POST /track-time
{
  "method": "end",
  "headers": { "id": "EMP001" }
}

# Example Email Output

Subject: “Workday Summary – EMP001”

🕒 Workday completed successfully  
Start: 09:00  
Break: 15 minutes  
End: 17:45  

AI Summary:
Consistent work pattern detected this week. Consider shorter but more frequent breaks.


## 📊 Basic Information

- **Workflow ID:** 10189
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 207
- **Downloads:** 20
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10189)

## 👤 Author

- **Name:** Jose Castillo
- **Username:** @j4ssn3o

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **set** (×7)
- **switch** 
- **stickyNote** (×8)
- **respondToWebhook** 
- **webhook** 
- **if** (×2)
- **dataTable** (×7)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **scheduleTrigger** (×2)
- **gmail** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
