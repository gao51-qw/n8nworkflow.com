# Classify lead sentiment with Google Gemini and send WhatsApp responses via Typeform & Supabase

> 
Automatically classify incoming leads based on the sentiment of their message using Google Gemini, store them in Supabase by category, and send tailored WhatsApp messages via the official WhatsApp Cloud API.

✅ Use Case:
This workflow is ideal for sales, onboarding, and customer support teams who want to:

Understand the tone and urgency of each lead

Prioritize hot leads instantly

Send smart, automatic WhatsApp replies based on user sentiment

🧠 How it works:
Capture lead via a Typeform webhook

Clean and structure the data (name, email, message, etc.)

Run sentiment analysis using Google Gemini to classify the message as:

Positive → Hot Lead

Neutral → Warm Lead

Negative → Cold Lead

Store lead data in Supabase under the corresponding category

Merge data to unify flow paths

Send WhatsApp message using the official WhatsApp Cloud API, with a custom reply for each sentiment result

🔧 Tools used:
Typeform (incoming data)

Google Gemini (AI-based sentiment classification)

Supabase (database)

WhatsApp Cloud API (response automation)

🏷 Tags:
AI, Sentiment Analysis, Lead Qualification, Supabase, WhatsApp, Gemini, Typeform, CRM, Automation, Customer Engagement



## 📊 Basic Information

- **Workflow ID:** 4322
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1329
- **Downloads:** 132
- **Created:** 2025/5/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4322)

## 👤 Author

- **Name:** Danielle Gomes
- **Username:** @daniellegomes

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **webhook** 
- **set** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **supabase** (×3)
- **merge** 
- **whatsApp** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
