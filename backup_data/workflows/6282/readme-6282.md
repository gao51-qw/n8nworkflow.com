# Generate data-driven UX personas with Perplexity, DALL·E 3 & Google Doc

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

***Automated Data-Driven UX Persona Creation – Try It Out!***

## About
You can create personas based on your website, region, and industry.
Unlike traditional persona creation, this process uses reliable data sources and can estimate market size for each persona.

UX personas have a wide range of applications: use them to better define your target users during product development, align your team around user goals during workshops, or inspire new features and ideas by deeply understanding user needs and behaviors.

## How It Works
- The flow is triggered via a web form
- Perplexity analyzes the market and creates a data foundation for the personas
- An AI agent transforms the data into detailed persona descriptions and publishes them in a Google Doc
- We use DALL·E 3 to generate an image for each persona, which is saved to your Google Drive

## How To Use
- Import the package into your N8N interface
- Set up the credentials in each node to access the necessary tools
- Wait for the process to run (it takes just a few seconds)
- Check the final output in Google Docs and your Google Drive

## Requirements
- Perplexity for research
- OpenAI for LLM and Image generation
- Google Doc
- Google Drive to upload images



## 📊 Basic Information

- **Workflow ID:** 6282
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 740
- **Downloads:** 74
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6282)

## 👤 Author

- **Name:** Gulfiia
- **Username:** @gulfia

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **googleDocs** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **perplexity** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleDrive** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
