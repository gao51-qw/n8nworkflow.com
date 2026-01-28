# AI-powered productivity coach using Google Calendar, Todoist, Slack and Sheets

> 

# Analyze productivity metrics from Google Calendar and Todoist to Slack

This workflow acts as an automated personal productivity coach. It aggregates data from your daily tools (Google Calendar, Todoist, and Slack) to provide AI-driven insights into your work habits. It runs daily to log metrics to Google Sheets and sends a summary to Slack. Additionally, every Friday, it generates a comprehensive strategic weekly review.

## Who is this for?
- **Remote Workers & Freelancers** who want to track their focus time and meeting load.
- **Productivity Enthusiasts** looking to automate their "Quantified Self" data collection.
- **Managers** who want a high-level overview of their weekly throughput and communication volume without manual tracking.

## What it does
1. **Daily Trigger:** Runs automatically every weekday morning (default: 8 AM).
2. **Data Collection:**
   - Fetches today's meetings from **Google Calendar**.
   - Retrieves high-priority and overdue tasks from **Todoist**.
   - Analyzes recent message activity from **Slack**.
3. **AI Analysis:** Uses **OpenAI** to analyze the data, identifying focus blocks and potential overload risks.
4. **Logging:** Saves raw metrics (meeting hours, task counts, message volume) to a **Google Sheet** for historical tracking.
5. **Reporting:**
   - Sends a "Daily Productivity Summary" to Slack with actionable advice.
   - On Fridays, it pulls the last 7 days of data from Google Sheets to generate and send a **Weekly Strategic Report** to Slack.

## Requirements
- **n8n** (Self-hosted or Cloud)
- **Google Cloud Console** project with Calendar and Sheets APIs enabled.
- **Todoist** account.
- **Slack** workspace.
- **OpenAI** API Key (GPT-4 is recommended for better analysis).

## How to set up
1. **Configure Credentials:** Set up your credentials in n8n for Google (OAuth2), Todoist, Slack, and OpenAI.
2. **Prepare Google Sheet:**
   - Create a new Google Sheet.
   - Create the following header columns in the first row: `date`, `meetingHours`, `tasksCount`, `slackMessages`.
3. **Update Nodes:**
   - **Log Daily Metrics** node: Select your Spreadsheet and Sheet name.
   - **Fetch Last 7 Days Data** node: Select the same Spreadsheet.
   - **Slack** nodes: Select the channel where you want to receive reports.
4. **Activate:** Toggle the workflow to **Active**.

## How to customize
- **Adjust Schedule:** Change the *Schedule Daily Execution* node to fit your preferred reporting time.
- **Modify AI Persona:** Edit the system prompt in the *AI Analysis* node to change the tone of the report (e.g., make it more strict or more encouraging).
- **Add Data Sources:** You can easily chain additional nodes (like GitHub or Jira) into the *Aggregate Data* code node to include coding or project management metrics.



## 📊 Basic Information

- **Workflow ID:** 12018
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12018)

## 👤 Author

- **Name:** satoshi
- **Username:** @uekusa

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **dateTime** 
- **googleCalendar** 
- **httpRequest** 
- **slack** (×3)
- **code** (×2)
- **openAi** (×3)
- **googleSheets** (×2)
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
