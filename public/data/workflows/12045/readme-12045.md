# Transform viral Instagram Reels into original scripts with AI, Perplexity & Apify

> ## How it works
Please guys, stop staring at a blank page. This workflow turns viral Instagram trends into original scripts for your channel automatically.

* **Scrapes Trends:** Finds viral reels in your niche using Apify.
* **Transcribes:** Downloads the video and converts the audio to text.
* **Researches:** Uses Perplexity to find facts and add depth to the topic.
* **Writes:** Generates a fresh, unique script based on the viral structure using AI.
* **Saves:** meaningful content directly to your Google Sheet, ready for filming.

## Set up steps
* **Apify:** You need an account to run the Instagram scraper.
* **API Keys:** Have your OpenAI (for writing/transcription) and Perplexity (for research) keys ready.
* **Google Sheet:** Create a sheet with headers for `URL`, `Transcript`, and `Final Script`.
* **Credentials:** Enter your keys into the node credentials in n8n.
* **Test:** Start with a low limit (e.g., 1-2 items) to verify the flow.

## Who is this for?
* **Content Creators:** Beat writer's block and post more consistently.
* **Social Media Managers:** Scale research without hiring a team.
* **Agencies:** Rapidly repurpose trends for multiple clients.

## 📊 Basic Information

- **Workflow ID:** 12045
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 194
- **Downloads:** 19
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12045)

## 👤 Author

- **Name:** Neal Mcleod
- **Username:** @ctk-industries

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **limit** 
- **scheduleTrigger** 
- **httpRequest** (×3)
- **googleSheets** (×3)
- **merge** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
