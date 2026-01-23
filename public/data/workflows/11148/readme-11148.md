# Send pre-meeting attendee context with OpenAI, Google Calendar, and Slack

> ## Overiew

This workflow builds an AI meeting assistant who sends information-dense pre-meeting notifications for a user's upcoming meetings. 

### How It Works

* A scheduled trigger fires hourly and checks for upcoming meetings within the hour.
* When found, a search for last correspondence + recent activity is performed for each attendee.
* Using available correspondance, an AI/LLM is used to summarize this information and generate a short notification message which should help the user prepare for the meeting.
* The notification is finally sent to the user's Slack.

### Set up Steps

#### Google Cloud
Create the [credentials](https://console.cloud.google.com/apis/credentials) and replace them in the workflow.
Please [enable](https://console.cloud.google.com/apis/dashboard) the following APIs:
- Gmail API
- Google Calendar API

#### OpenAI

- Create the [credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/) as instructed
- Replace your credentials and connect.

#### Slack

- Create the [credentials](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) as instructed
- Replace your credentials and connect.

## 📊 Basic Information

- **Workflow ID:** 11148
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 76
- **Downloads:** 7
- **Created:** 2025/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11148)

## 👤 Author

- **Name:** Satoshi
- **Username:** @satoshi

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **gmail** (×2)
- **set** (×4)
- **googleCalendar** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **stickyNote** (×7)
- **scheduleTrigger** 
- **if** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
