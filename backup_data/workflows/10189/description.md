### Overview
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
