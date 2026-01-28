# Generate personalized Strava ride titles & descriptions with DeepSeek AI

> **Title**: Automatic Strava Titles & Descriptions Generation with AI

**Description**:
This n8n workflow connects your Strava account to an AI to automatically generate personalized titles and descriptions for every new cycling activity. It leverages the native Strava trigger to detect new activities, extracts and formats ride data, then queries an AI agent (OpenRouter, ChatGPT, etc.) with an optimized prompt to get a catchy title and inspiring description. The workflow then updates the Strava activity in real time, with zero manual intervention.

**Key Features**:
- Secure connection to the Strava API (OAuth2)
- Automatic triggering for every new activity
- Intelligent data preparation and formatting
- AI-powered generation of personalized content (title + description)
- Instant update of the activity on Strava


**Use Cases**:
- Cyclists wanting to automatically enhance their Strava rides
- Sports content creators
- Community management automation for sports groups


**Prerequisites**:
- Strava account
- Strava OAuth2 credentials set up in n8n
- Access to a compatible AI agent (OpenRouter, ChatGPT, etc.)


**Benefits**:
- Saves time
- Advanced personalization
- Boosts the appeal of every ride to your community

## 📊 Basic Information

- **Workflow ID:** 4736
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1138
- **Downloads:** 113
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4736)

## 👤 Author

- **Name:** Thibaud
- **Username:** @tderouze

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stravaTrigger** 
- **set** 
- **strava** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
