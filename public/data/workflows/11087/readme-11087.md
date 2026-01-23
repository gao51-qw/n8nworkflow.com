# Create film location database with Google Maps, AI analysis & Google Sheets

> ## Who is this for?
This workflow is ideal for **filmmakers, video producers, content creators, and location managers** who need to quickly build a database of potential shooting locations without manual research and data entry.

## How it works
1. **Chat Input**: Start the workflow via the n8n chat interface and enter a search query (e.g., "Quiet cafes in Kyoto" or "Cyberpunk streets").
2. **Search**: The workflow queries the **Google Maps Places API** to find matching real-world locations.
3. **AI Analysis**: An AI agent (via OpenRouter) reviews the location details and writes a short, creative "Director's Commentary" highlighting its cinematic appeal.
4. **Data Entry**: The location name, address, rating, Google Maps link, and the AI's commentary are automatically saved to a **Google Sheet**.
5. **Notification**: Once all locations are processed, a summary link is sent to your **Slack** channel.

## Prerequisites
*   **n8n Version**: 1.0 or later
*   **Google Cloud Platform**: API Key with "Places API (New)" enabled.
*   **Google Sheets**: A formatted sheet (see setup below).
*   **Slack**: An App/Bot token with chat writing permissions.
*   **OpenRouter** (or OpenAI/Anthropic): API Key for the LLM.

## How to set up
1. **Google Sheet**: Create a new sheet with the following headers in the first row:
    *   `場所名` (Name)
    *   `住所` (Address)
    *   `評価(星)` (Rating)
    *   `AI監督のコメント` (AI Comment)
    *   `GoogleMapリンク` (Link)
2. **Credentials**: Configure your credentials for Google Maps, Google Sheets, Slack, and OpenRouter within n8n.
3. **Configuration Node**: Open the node named **"Workflow Configuration"** and input your specific details:
    *   `googleMapsApiKey`: Your Google Cloud API key.
    *   `slackChannelId`: The Channel ID where you want notifications (e.g., C0123456).
    *   `googleSheetId`: The string of characters found in your Google Sheet URL.

## Customization
*   **Adjust Results**: Change the **Limit** node settings to process more locations per run (default is set to 2 to save API credits during testing).
*   **Change Persona**: Edit the "System Prompt" in the **AI Location Analyzer** node to change the AI's tone (e.g., from "Film Director" to "Real Estate Agent" or "Travel Blogger").
*   **Swap LLM**: You can easily replace the OpenRouter node with an OpenAI or Anthropic node if you prefer a different model.

## 📊 Basic Information

- **Workflow ID:** 11087
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 84
- **Downloads:** 8
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11087)

## 👤 Author

- **Name:** Yoshino Haruki
- **Username:** @yoshinoharuki

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** 
- **httpRequest** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** 
- **slack** 
- **limit** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **splitOut** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
