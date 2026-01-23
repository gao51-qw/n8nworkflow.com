# Extract meeting to-do lists from audio with Google Gemini and send to Slack

> This workflow automates the process of converting audio meeting recordings into a structured to-do list. It listens for new audio files in a Google Drive folder, transcribes them, extracts action items using AI, and sends a formatted list to a designated Slack channel.

## Who’s it for
This template is perfect for project managers, teams, and anyone who wants to save time on post-meeting administrative tasks. If you record your meetings and use Google Drive for storage and Slack for team communication, this workflow will streamline your follow-up process and ensure no action item is missed.

## What it does
This workflow automates the entire process of turning spoken words from a meeting into actionable tasks for your team.

1.  **Trigger on New Audio:** The workflow starts automatically when you upload a new audio file (e.g., MP3, M4A, WAV) to a specific folder in your Google Drive.
2.  **Transcribe Audio:** It takes the audio file and uses Google Gemini to generate a full text transcript of the recording.
3.  **Extract To-Do Items:** The transcript is then passed to another Google Gemini node with a specialized prompt. This prompt instructs the AI to carefully analyze the text and extract all action items.
4.  **Format Output:** The AI formats the extracted tasks into a clean JSON array. Each task includes a description, the assigned person, a deadline, and its priority.
5.  **Send to Slack:** Finally, the workflow sends the structured to-do list as a message to your specified Slack channel, making it easy for the whole team to see and act upon.

## How to set up
1.  **Configure Credentials:** Ensure you have configured your credentials for Google Drive, Google Gemini, and Slack in n8n.
2.  **Set Google Drive Folder:** In the "Looking for uploading file" node, select the Google Drive folder you want the workflow to monitor.
3.  **Set Slack Channel:** In the "Send a message" node, choose the correct Slack account and select the channel where you want the to-do list to be posted.
4.  **Activate Workflow:** Save your changes and activate the workflow using the toggle at the top right.
5.  **Test It:** Upload a meeting recording to the designated Google Drive folder to see the magic happen!

## How to customize the workflow
- **Change AI Model:** You can easily swap the Google Gemini nodes for other AI models like OpenAI or Anthropic to handle transcription and analysis based on your preference.
- **Modify the AI Prompt:** Adjust the prompt in the "Analyze document" node to change the output format. For example, you could ask for a meeting summary in addition to the to-do list.
- **Change Notification Service:** Replace the Slack node with another notification service like Discord, Microsoft Teams, or an email node.
- **Archive Results:** Add a node (e.g., Google Sheets, Notion, Airtable) after the "Analyze document" node to save a history of all meeting transcripts and their corresponding action items.

## 📊 Basic Information

- **Workflow ID:** 9808
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 161
- **Downloads:** 16
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9808)

## 👤 Author

- **Name:** higashiyama 
- **Username:** @kazushi

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **dateTime** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
