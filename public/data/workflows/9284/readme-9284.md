# Automate meeting summaries & action items with Google Meet, AssemblyAI & Claude AI

> The Google Meet AI Assistant workflow provides intelligent meeting analysis by integrating Google Calendar, Google Drive, AssemblyAI transcription, Anthropic Claude AI, Slack, and Notion. It automates the complete process of fetching meeting data, retrieving recordings, transcribing conversations, analyzing with AI, and distributing actionable insights.

**Workflow Steps**

Step 1: Fetch Meetings
- Retrieves Google Calendar events from the last 24 hours.
- Filters for confirmed meetings with Google Meet conference links.

Step 2: Get Recording
- Searches for the meeting recording file saved in Google Drive.
- Downloads the recording for transcription purposes.

Step 3: Transcribe Recording
- Uses AssemblyAI to transcribe the recording.
- Transcription includes speaker labels, highlights, and sentiment analysis.

Step 4: AI Analysis
- Analyzes the transcript with Anthropic Claude AI.
- Extracts:
Meeting summary (2-3 paragraphs)
Action items with responsible parties
Mentioned dates or deadlines
Overall meeting sentiment

Step 5: Distribute Summary
- Posts meeting summary and insights to a Slack channel.
- Creates tasks for action items in Notion.

**Integration Overview**
- Google Calendar: Event retrieval and filtering of Google Meet meetings.
- Google Drive: Recording search and download.
- AssemblyAI: Audio transcription with advanced features.
- Anthropic Claude (Langchain): AI-driven analysis of transcripts.
- Slack: Notification distribution for meeting summaries.
- Notion: Task creation for actionable items.

**Error Handling**
If a recording is not found, stops execution and returns an error message:
*"No recording found for this meeting. Please ensure the meeting was recorded and saved to Google Drive."*

**Summary**
This workflow fully automates the end-to-end process of meeting analysis from calendar event detection to action item task creation using AI, enabling productivity gains for meeting-heavy teams.

If further use or support is needed, you can contact me via [LinkedIn](LinkedIn).

If you want, I can also help create a detailed documentation or a formatted description ready for sharing or integration guides. Let me know!

## 📊 Basic Information

- **Workflow ID:** 9284
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 444
- **Downloads:** 44
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9284)

## 👤 Author

- **Name:** Dominic GS
- **Username:** @dominicgs

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleCalendar** 
- **filter** 
- **set** (×2)
- **googleDrive** (×2)
- **if** (×2)
- **stopAndError** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **slack** 
- **splitOut** 
- **notion** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
