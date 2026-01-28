# Voice-driven travel itinerary generator using ElevenLabs, GPT-4o & Pinecone

> # Overview
This release introduces a Voice-Enabled Tour Recommendation System that leverages n8n, ElevenLabs Voice Agent, OpenAI GPT-4o, and Pinecone Vector DB to deliver personalized travel itineraries based on spoken input. Users speak their preferences to the ElevenLabs voice agent, which then triggers an n8n workflow that returns a tailored tour plan.

## Features
1. Voice interaction with AI-powered travel agent via ElevenLabs

2. Uses ChatGPT-4o for contextual understanding and generation

3. Dynamic query handling with vector-based search using Pinecone

4. Fast response generation using n8n webhook

5. Modular agent memory and role design for scalable enhancement

## Pre-requisites
1. n8n account with workflow creation access

2. ElevenLabs account with agent and webhook setup

3. OpenAI API key (GPT-4o access)

4. Pinecone account for vector database

5. A list of vectorized tour packages using this n8n embedder (https://creators.n8n.io/workflows/5085)

## Setup Instructions
**Step 1:** Configure the Voice Agent Webhook in ElevenLabs
Use POST method
Webhook URL: https://...
**Breakdown voice input into:**
Destination
Type of tour
Number of days
Number of passengers

**Step 2:** Set Up the AI Agent Prompt in ElevenLabs
Use a conversational style with summaries, clarifying questions, and affirmations.

Example Prompt:
“You use a natural speech style and periodically summarize... Your goal is to help callers create a personalized tour plan.”

**Step 3:** Select LLM
LLM: GPT-4o Mini
Memory window: Up to 5 contexts

**Step 4:** Integrate Tools
Use Custom Tool: n8n
ID: tool_xxxxxx
Tool Description: “Generates travel plan once the details are collected”

**Step 5:** Build n8n Workflow
Trigger: Webhook (POST)
Process user input: Tour Recommendation AI Agent
Use OpenAI Chat Model (GPT-4o) for reasoning
Query Pinecone Vector Store using Tour Builder Q&A node
Respond with structured Itinerary Plan via webhook response

## How to use:
1. Execute the n8n workflow (the webhook waits for the voice trigger from elevenlabs)
2. Start the Elevenlabs Voice Agent
![image.png](fileId:1870)
3. Request for a tour plan to any destination giving the details of your tour preferences. 
4. Wait for the Voice Agent to respond back with tour package suggestions after fetching the tour details from the n8n workflow. 
5. Close the conversation. 

| Area               | Improvement                                           |
| ------------------ | ----------------------------------------------------- |
| 🔉 Voice UX        | Natural-sounding travel agent using ElevenLabs        |
| 💡 Personalization | ChatGPT-4o adapts based on travel style & preferences |
| 📚 Knowledge Base  | Pinecone-powered vector retrieval of real tour data   |
| 🔁 Reusability     | Modular workflow with reusable embedding tools        |
| ⚙️ System Design   | Separation of memory, logic, and data layers          |


## Who is this for?
**Travel Agencies & DMCs**
Offer ultra-personalized packages based on customer queries. Let AI do the matching.

**Tour Package Aggregators**
Auto-curate and send matching packages from your catalog — no manual searching needed.

**Content & Marketing Teams**
Craft customized tour recommendations for email campaigns and newsletters.

**Tech-enabled Travel Startups**
Embed this intelligence in your workflows, CRMs, or chatbots to delight customers.






## 📊 Basic Information

- **Workflow ID:** 6481
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 659
- **Downloads:** 65
- **Created:** 2025/7/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6481)

## 👤 Author

- **Name:** Mohan Gopal
- **Username:** @mohan

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** 
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
