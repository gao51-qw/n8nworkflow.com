# AI-generated weather analysis with NWS alerts, radar imagery, and Home Assistant

> # Overview

This n8n template demonstrates how you can generate an AI-produced weather analysis of your local radar loop and home assistant precipitation sensor(s) to keep your family informed of National Weather Service Alerts.

With as crazy as things have been lately in the open world, how will you and your family know when a severe or extreme alert impacts your area?

## How it Works

- This workflow is triggered by a webhook which takes a latitude and longitude json payload to identify the area for monitoring.
- Then, it fetches the National Weather Service Alerts and filters them down to alerts which are currently active and their severity.
- Next, it fetches the local precipitation value from your Home Assistant instance (a value like "Light Rain" or "No Rain", etc) coupled with your respective weather.gov radar loop image.
- It then submits this data to OpenAI and produces an output regarding the image analysis.
- Finally, it takes this analysis and uses OpenAI to again generate a short summary.

## How to Use

- Import the workflow into your n8n instance
- Update the credentials in the problematic nodes
- Make sure you adjust the radar loop image that is being used

## Requirements

- A Home Assistant Instance (you could remove this data if you wanted)
- An OpenAI account for LLM and image analysis


## 📊 Basic Information

- **Workflow ID:** 6188
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 3417
- **Downloads:** 341
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6188)

## 👤 Author

- **Name:** Carl Danley
- **Username:** @carldanley

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** (×2)
- **splitOut** 
- **set** (×3)
- **filter** (×4)
- **@n8n/n8n-nodes-langchain.openAi** 
- **homeAssistant** 
- **merge** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
