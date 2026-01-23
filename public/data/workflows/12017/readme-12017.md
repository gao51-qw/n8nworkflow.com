# Prevent employee burnout with AI analysis of Slack and tasks data to Google Sheets

> 

# Monitor employee stress levels from Slack and tasks to Google Sheets

This workflow functions as an automated "Chief Wellness Officer," helping HR teams and managers prevent employee burnout before it happens. It aggregates data from communication channels and work tools to provide an AI-driven daily assessment of employee well-being, while prioritizing privacy through data anonymization.

## Who is this for
- **HR & People Operations Teams** wanting to track organizational health trends without invading personal privacy.
- **Remote-first Companies** where physical cues of burnout are harder to spot.
- **Team Managers** looking for data-backed insights to support their direct reports.

## What it does
1.  **Daily Trigger:** Runs automatically every morning (default: 2 AM) to analyze the previous day's activity.
2.  **Data Collection:**
    *   Fetches public Slack messages to analyze communication tone.
    *   Retrieves attendance data (work hours, late arrivals) and task completion rates via API.
3.  **AI Analysis:** Uses **OpenAI** to process the data, predicting a "Stress Level" based on sentiment and workload metrics.
4.  **Privacy-First Reporting:** Hashes employee IDs to anonymize data, then logs stress scores to **Google Sheets** for trend analysis.
5.  **Direct Intervention:** If the AI detects "High" stress, it sends a private, empathetic DM to the employee on **Slack** offering support or counseling resources.

## Requirements
- **n8n** (Self-hosted or Cloud)
- **Slack** Workspace (with a Bot User OAuth Token).
- **OpenAI** API Key.
- **Google Sheets** (for the dashboard).
- **Postgres** (optional, for logging counseling actions).
- **HR/Task Management Tools** (e.g., Jira, Asana, BambooHR) accessible via API.

## How to set up
1.  **Configure Credentials:** Set up your credentials for Slack, OpenAI, Google Sheets, and Postgres in n8n.
2.  **Prepare Google Sheet:** Create a sheet with headers: `employee_hash`, `department`, `stress_score`, `stress_level`, and `analysis_date`.
3.  **Connect Data Sources:**
    *   The workflow uses **HTTP Request** nodes as placeholders for Attendance and Task data. You must update these URLs to point to your specific HRIS or Project Management tool APIs (or replace them with native n8n nodes like Asana or Jira).
4.  **Update Slack Settings:** Ensure the Slack node has the correct permissions (`channels:history`, `chat:write`, `users:read`) and target channel/user mapping.

## How to customize
- **Adjust Sensitivity:** Modify the system prompt in the *AI Stress Level Prediction* node to change how "High" stress is defined.
- **Change Data Sources:** Replace the generic HTTP Request nodes with specific n8n nodes for services like **Harvest**, **Jira**, or **Trello** depending on your stack.
- **Modify Action:** Instead of a direct DM, you can change the final step to alert a manager or create a ticket in a sensitive HR service desk.



## 📊 Basic Information

- **Workflow ID:** 12017
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 23
- **Downloads:** 2
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12017)

## 👤 Author

- **Name:** satoshi
- **Username:** @uekusa

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **scheduleTrigger** 
- **code** (×6)
- **httpRequest** (×3)
- **splitInBatches** 
- **slack** (×2)
- **openAi** (×2)
- **set** (×2)
- **googleSheets** 
- **if** 
- **postgres** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
