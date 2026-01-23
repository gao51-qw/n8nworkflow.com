# Ai movie recommender on WhatsApp

> This automated n8n workflow enables an AI-powered movie recommendation system on WhatsApp. Users send messages like "I want to watch a horror movie" or "Where can I watch the Jumanji movie?" The workflow uses AI to interpret the request, searches relevant APIs (e.g., TMDb, JustWatch), and replies with movie recommendations or streaming platform availability via WhatsApp.

## Fundamental Aspects

- **WhatsApp Webhook Trigger**: Initiates the workflow when a WhatsApp message is received.
- **Analyze WhatsApp Message**: Uses AI (e.g., Ollama Model) to interpret the user's intent and extract request type.
- **Check Request Type**: Determines if the request is for a movie genre or a specific movie title.
- **Check Where Request**: Identifies if the request includes a "where to watch" query.
- **Extract Movie Title**: Extracts the movie title from the message if specified.
- **Extract Genre**: Identifies the movie genre from the message if specified.
- **Search Specific Movie Title**: Queries an API (e.g., TMDb) for details about a specific movie.
- **Search Movies by Genre**: Queries an API (e.g., TMDb) for movies matching the genre.
- **Get Streaming Availability**: Queries an API (e.g., JustWatch) for streaming platforms.
- **Format Streaming Response**: Prepares the response with streaming platform details.
- **Format Genre Recommendations**: Prepares the response with genre-based movie recommendations.
- **Prepare WhatsApp Message**: Formats the final response for WhatsApp.
- **Send WhatsApp Response**: Sends the recommendation or streaming info back to the user via WhatsApp.

## Setup Instructions

1. **Import the Workflow into n8n**: Download the workflow JSON and import it via the n8n interface.
2. **Configure API Credentials**:
   - Set up WhatsApp Business API credentials with a valid phone number and token.
   - Configure TMDb API key (e.g., `https://api.themoviedb.org`).
   - Configure JustWatch API key (e.g., `https://api.watchmode.com`).
   - Set up AI model credentials (e.g., Ollama Model).
3. **Run the Workflow**: Activate the webhook trigger and test with a WhatsApp message.
4. **Verify Responses**: Check WhatsApp for accurate movie recommendations or streaming info.
5. **Adjust Parameters**: Fine-tune API endpoints or AI model as needed.

## Features

- **AI Interpretation**: Uses AI to analyze user intents (genre or movie title).
- **API Integration**: Searches TMDb for movie details and JustWatch for streaming availability.
- **Real-Time Responses**: Sends instant replies via WhatsApp.
- **Custom Recommendations**: Provides genre-based or specific movie recommendations.

## Technical Dependencies

- **WhatsApp Business API**: For receiving and sending messages.
- **TMDb API**: For movie details and genre searches.
- **JustWatch API**: For streaming availability.
- **Ollama Model**: For AI-based message analysis.
- **n8n**: For workflow automation and integration.

## Customization Possibilities

- **Add More APIs**: Integrate additional movie databases (e.g., IMDb).
- **Enhance AI**: Train the Ollama Model for better intent recognition.
- **Support More Languages**: Add multilingual support for WhatsApp responses.
- **Add Email Alerts**: Include email notifications for admin monitoring.
- **Customize Responses**: Adjust the format of recommendations or streaming info.


## 📊 Basic Information

- **Workflow ID:** 7173
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1074
- **Downloads:** 107
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7173)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** (×2)
- **set** (×2)
- **httpRequest** (×4)
- **code** (×3)
- **stickyNote** (×6)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
