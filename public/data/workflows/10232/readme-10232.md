# Generate Weather-Based Date Itineraries with Google Places, OpenRouter AI, and Slack

> 🧩 What this template does

This workflow builds a 120-minute local date course around your starting point by querying Google Places for nearby spots, selecting the top candidates, fetching real-time weather data, letting an AI generate a matching emoji, and drafting a friendly itinerary summary with an LLM in both English and Japanese.
It then posts the full bilingual plan with a walking route link and weather emoji to Slack.

👥 Who it’s for

Makers and teams who want a plug-and-play bilingual local itinerary generator with weather awareness — no custom code required.

⚙️ How it works

Trigger – Manual (or schedule/webhook).

Discovery – Google Places nearby search within a configurable radius.

Selection – Rank by rating and pick the top 3.

Weather – Fetch current weather (via OpenWeatherMap).

Emoji – Use an AI model to match the weather with an emoji 🌤️.

Planning – An LLM writes the itinerary in Markdown (JP + EN).

Route – Compose a Google Maps walking route URL.

Share – Post the bilingual itinerary, route link, and weather emoji to Slack.

🧰 Requirements

n8n (Cloud or self-hosted)

Google Maps Platform (Places API)

OpenWeatherMap API key

Slack Bot (chat:write)

LLM provider (e.g., OpenRouter or DeepL for translation)

🚀 Setup (quick)

Open Set → Fields: Config and fill in coords/radius/time limit.

Connect Credentials for Google, OpenWeatherMap, Slack, and your LLM.

Test the workflow and confirm the bilingual plan + weather emoji appear in Slack.

🛠 Customize

Adjust ranking filters (type, min rating).

Modify translation settings (target language or tone).

Change output layout (side-by-side vs separated).

Tune emoji logic or travel mode.

Add error handling, retries, or logging for production use.

## 📊 Basic Information

- **Workflow ID:** 10232
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 51
- **Downloads:** 5
- **Created:** 2025/10/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10232)

## 👤 Author

- **Name:** noda
- **Username:** @shusaku

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×14)
- **set** 
- **httpRequest** 
- **function** (×2)
- **merge** 
- **slack** 
- **deepL** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **openWeatherMap** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
