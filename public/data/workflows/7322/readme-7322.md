# Search and compare flights with DeepSeek AI and Google Flights API

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![image.png](fileId:2067)
# How it works
- Takes departure city, destination, and travel dates from the user.
- Searches multiple airlines for flight options and compares price, duration, and stops.
- Suggests flexible travel dates for better deals.
- Tracks selected flights and sends real-time price alerts.
- Provides 24/7 AI-powered travel recommendations.

# Set up steps
- **Add credentials** for your chosen Chat Model (DeepSeek in this case) and SerpAPI (Google Flights).
- In the **AI Agent** node, link:
  - Chat Model → **DeepSeek Chat Model** node.
  - Memory → **Simple Memory** node (for conversation context).
  - Tool → **Google_flights search in SerpApi** node.
- In the **SerpApi** node, set `engine=google_flights` and map input fields for departure, destination, and travel dates.
- Test the workflow by providing a sample itinerary request in the **Chat** node’s input.
- Review AI responses to ensure it searches, compares, and returns relevant flight options.

## 📊 Basic Information

- **Workflow ID:** 7322
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1514
- **Downloads:** 151
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7322)

## 👤 Author

- **Name:** Fakhar Khan
- **Username:** @fakharkhan

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **n8n-nodes-serpapi.serpApiTool** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
