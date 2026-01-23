# Integrating AI with Open-Meteo API for enhanced weather forecasting

> 
## Use case

### Workshop

We are using this workflow in our workshops to teach how to use Tools a.k.a functions with artificial intelligence. In this specific case, we will use a generic "AI Agent" node to illustrate that it could use other models from different data providers.

### Enhanced Weather Forecasting

In this small example, it's easy to demonstrate how to obtain weather forecast results from the Open-Meteo site to accurately display the upcoming days.

This can be used to plan travel decisions, for example.

## What this workflow does

1. We will make an HTTP request to find out the geographic coordinates of a city.
2. Then, we will make other HTTP requests to discover the weather for the upcoming days.

In this workshop, we demonstrate that the AI will be able to determine which tool to call first—it will first call the geolocation tool and then the weather forecast tool. All of this within a single client conversation call.


## Setup

Insert an OpenAI Key and activate the workflow.

by Davi Saranszky Mesquita
https://www.linkedin.com/in/mesquitadavi/

## 📊 Basic Information

- **Workflow ID:** 2692
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3318
- **Downloads:** 331
- **Created:** 2025/1/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2692)

## 👤 Author

- **Name:** Davi Saranszky Mesquita
- **Username:** @frkr

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
