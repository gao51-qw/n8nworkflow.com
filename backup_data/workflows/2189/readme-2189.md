# Assistant for Hubspot chat using OpenAi and Airtable

> This workflow will allow you to use OpenAI Assistant API together with a chatting platform. This version is configured to work with Hubspot, however, the Hubspot modules can be replaced by other platform and it will work similarly. 

## Prerequisites: 
- Create a Hubspot Chat (Live chat available on free plan) or Chatflow (paid hubspot only) and configure it to send all replies toward an n8n webhook (you need to create a custom app for that. I will create a separate article on how to do it, meanwhile, feel free to message me if you need support. 

## Setup:
- Create a OpenAI Assistant, define its functionality and functions
- Update the Hubspot modules with the Hubspot API Key
- Update the OpenAI modules with OpenAI API Key
- Create an Airtable or any other database where you keep a reference between the thread id in Hubspot and Assistant API

If you need help deploying this solution don't hesitate to email  [me](mailto:tsocaci@makeitfuture.eu/) or schedule a call [here.](https://meetings.hubspot.com/makeitfuture/tiberiu-makeitfuture-xcal) 

![CleanShot 20240420 at 16.23.15.png](fileId:789)


 

## 📊 Basic Information

- **Workflow ID:** 2189
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 1584
- **Downloads:** 158
- **Created:** 2024/3/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2189)

## 👤 Author

- **Name:** Tiberiu S - Makeitfuture.com
- **Username:** @tbiyss

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **httpRequest** (×11)
- **switch** (×2)
- **wait** (×4)
- **code** (×2)
- **if** (×3)
- **airtable** (×2)
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.openAi** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
