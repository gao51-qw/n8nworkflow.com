# Food Photo Analysis to Restaurant & Book Recommendations with GPT Vision and Google APIs

> ## AI Recommender: From Food Photo to Restaurant and Book (Google Books Integrated)
## What it does

Analyzes a food photo with an AI vision model to extract dish name + category

Searches nearby restaurants with Google Places and selects the single best (rating → reviews tie-break)

Finds a matching book via Google Books and posts a tidy summary to Slack

## Who it’s for

Foodies, bloggers, and teams who want a plug-and-play flow that turns a single food photo into a dining pick + themed reading.

## How it works

Google Drive Trigger detects a new photo

Dish Classifier (Vision LLM) → JSON (dish_name, category, basic macros)

Search Google Places near your origin; Select Best Place (AI)

Recommend Book (AI) → Search Google Books → format details

Post to Slack (JP/EN both possible)

## Requirements

Google Drive / Google Places / Google Books credentials, LLM access (OpenRouter/OpenAI), Slack OAuth.

## Customize

Edit origin/radius in Set Origin & Radius, tweak category→keyword mapping in Normalize Classification, adjust Slack channel & message in Post to Slack.

## 📊 Basic Information

- **Workflow ID:** 10211
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 112
- **Downloads:** 11
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10211)

## 👤 Author

- **Name:** noda
- **Username:** @shusaku

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **code** (×5)
- **set** (×2)
- **googleBooks** 
- **slack** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
