# Daily meetings summarization with Gemini AI

> This workflow implements the Gemini AI chat model to summarize your daily meetings and send the summary to a Slack channel daily at 9 AM (or any other time you choose).

It automatically retrieves your Google Calendar events and feeds them to the model.

The workflow uses Google’s Gemini AI for response generation.

**How it works**
- The workflow uses a Scheduled Trigger Node as the main trigger.
- The AI Agent Node uses the Google Calendar action to retrieve relevant meeting data.
- The AI Agent sends the retrieved information to the Google Gemini Chat Model (gemini-flash).
- The Google Gemini Chat Model generates a summary and informative response based on today’s meetings.

**++Setup Steps++**
1. Google Cloud Project and Vertex AI API:

	- Create a Google Cloud project.
	- Enable the Vertex AI API for your project.

1. Google AI API Key:
	- Obtain a Google AI API key from Google AI Studio.
1. Credentials in n8n:
	- Configure credentials in your n8n environment for:
		- Google Gemini (PaLM) API (using your Google AI API key).
1. Import the Workflow:
	- Import this workflow into your n8n instance.
1. Configure the Workflow:
	- Update both Slack and Gemini nodes with your credentials.


## 📊 Basic Information

- **Workflow ID:** 2789
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 4349
- **Downloads:** 434
- **Created:** 2025/1/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2789)

## 👤 Author

- **Name:** Johnny Rafael
- **Username:** @johnnyrafael

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×4)
- **slack** 
- **googleCalendarTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
