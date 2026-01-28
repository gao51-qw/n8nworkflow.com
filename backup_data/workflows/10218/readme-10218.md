# Analyze event feedback with sentiment analysis, Google Sheets, Slack & Email

> This n8n workflow automates the collection and analysis of real-time attendee feedback and engagement data during sessions or live polls. It generates actionable insights for organizers, streamlining the process of gathering, processing, and delivering feedback to enhance event management and attendee experience.

### Key Features
- Collects session feedback and live poll responses in real-time.
- Analyzes sentiment and extracts key trends for actionable insights.
- Delivers summarized reports and recommendations to organizers via multiple channels.
- Supports seamless integration with external tools for data logging and communication.

### Workflow Process
- The **Webhook Trigger** node captures incoming feedback or poll data from attendees, initiating the workflow.
- The **Extract Feedback Data** node processes the raw input to organize and prepare it for analysis.
- The **Analyze Sentiment** node uses AI to evaluate feedback sentiment and identify key themes or trends.
- The **Aggregate Feedback** node compiles the analyzed data into a cohesive summary.
- The **Calculate Insights** node generates actionable insights and recommendations based on the aggregated data.
- The **Check Urgency** node assesses the priority of the feedback for timely responses or actions.
- The **Log to Google Sheets** node records the feedback and insights for future reference.
- The **Webhook Response** node sends real-time updates or acknowledgments back to the source.
- The **Post to Slack** node delivers summary messages to organizers via Slack.
- The **Email Report to Organizers** node sends detailed reports to organizers via email.

### Setup Instructions
- Import the workflow into n8n and configure the Webhook Trigger with your event platform's API credentials.
- Set up the AI service for sentiment analysis and insight generation with a suitable language model.
- Configure Google Sheets integration for logging feedback data.
- Set up Slack and email credentials for notifications and reports.
- Test the workflow by sending sample feedback or poll responses to ensure proper data flow and analysis.
- Monitor the output and adjust AI parameters or node settings as needed for optimal performance.

### Prerequisites
- Webhook integration with the event platform or polling system.
- AI/LLM service for sentiment analysis and insight generation.
- Google Sheets account for data logging.
- Slack workspace and email service for notifications and reports.
- Access to real-time attendee data from the event platform.

### Modification Options
- Modify the **Extract Feedback Data** node to include specific data fields or custom parsing rules.
- Adjust the **Analyze Sentiment** node to focus on particular sentiment metrics or keywords.
- Customize the **Calculate Insights** node to prioritize certain types of recommendations.
- Add additional notification channels (e.g., Microsoft Teams) to the **Post to Slack** or **Email Report** nodes.
- Configure the **Check Urgency** node to include custom urgency criteria based on event needs.

## 📊 Basic Information

- **Workflow ID:** 10218
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10218)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×3)
- **webhook** 
- **set** (×3)
- **if** 
- **googleSheets** 
- **aggregate** 
- **slack** (×2)
- **emailSend** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
