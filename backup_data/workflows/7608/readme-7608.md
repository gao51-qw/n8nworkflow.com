# Cybersecurity Intelligence: Create Daily Digest & Viral Topics with Gemini AI

> ## This n8n workflow template simplifies the process of digesting cybersecurity reports by summarizing, deduplicating, organizing, and identifying viral topics of interest into daily emails. 
It will generate two types of emails:
- A daily digest with summaries of deduplicated cybersecurity reports organized into various topics.
- A daily viral topic report with summaries of recurring topics that have been identified over the last seven days. 


**This workflow supports threat intelligence analysts digest the high number of cybersecurity reports they must analyse daily by decreasing the noise and tracking topics of importance with additional care, while providing customizability with regards to sources and output format.**

## How it works
The workflow follows the threat intelligence lifecycle as labelled by the coloured notes.
- Every morning, collect news articles from a set of RSS feeds.
- Merge the feeds output and prepare them for LLM consumption.
- Task an LLM with writing an intelligence briefing that summarizes, deduplicates, and organizes the topics.
- Generate and send an email with the daily digest.
- Collect the daily digests of the last seven days and prepare them for LLM consumption.
- Task an LLM with writing a report that covers 'viral' topics that have appeared prominently in the news. 
- Store this report and send out over email.

## How to use & customization
- The workflow will trigger daily at 7am. 
- The workflow can be reused for other types of news as well. The RSS feeds can be swapped out and the AI prompts can easily be altered. 
- The parameters used for the viral topic identification process can easily be changed (number of previous days considered, requirements for a topic to be 'viral').

## Requirements
- The workflow leverages Gemini (free tier) for email content generation and Baserow for storing generated reports. The viral topic identification relies on the Gemini Pro model because of a higher data quantity and more complex task.
- An SMTP email account must be provided to send the emails with. This can be through Gmail. 

## 📊 Basic Information

- **Workflow ID:** 7608
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 1610
- **Downloads:** 161
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7608)

## 👤 Author

- **Name:** Tom
- **Username:** @tominthebytes

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **code** (×6)
- **baserow** (×3)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **emailSend** (×2)
- **stickyNote** (×8)
- **splitInBatches** 
- **rssFeedRead** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
