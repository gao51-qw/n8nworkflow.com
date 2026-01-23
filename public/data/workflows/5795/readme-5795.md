# Find top-performing Instagram Reels & save insights to Notion with Gemini & Apify

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This template helps you discover trending Instagram Reels from competitors or any public profiles you choose. 

### 📺 How It Works 

The workflow automatically monitors selected Instagram accounts using Apify, pulls recent Reels, and analyzes their performance.  

It calculates engagement levels, detects early “hot” content, translates text if needed, and organizes all results into a structured Notion database — ready for review and production.

I've recorded a video walkthrough to show you how the system works in detail.
👉 [https://www.youtube.com/watch?v=rdfRNHpHX8o](https://www.youtube.com/watch?v=rdfRNHpHX8o)

@[youtube](rdfRNHpHX8o)

---

### 📄 Download Notion Database Structure  
You can download the Notion table structure (with all required columns and formats) here:  
👉 [https://drive.google.com/file/d/1FVaS_-ztp6PDAJbETUb1dkg8IqE4qHqp/view?usp=sharing](https://drive.google.com/file/d/1FVaS_-ztp6PDAJbETUb1dkg8IqE4qHqp/view?usp=sharing)

---

### 👤 **Who’s it for**

This workflow is for marketers, content creators, social media managers, and automation enthusiasts who want to stay ahead of Instagram Reels trends.  
Whether you're building a content pipeline or studying competitors, this tool saves hours of manual tracking.

---

### 🔧 **How to set up**

1. Create the required databases in Notion (structure file provided).  
2. Import the `.json` workflow into your n8n instance.  
3. Set up credentials for Notion, Apify, and Gemini API.  
4. Link those credentials in the workflow.  
5. Adjust the `Variables` node with your test account list and settings.  
6. Run a test with 3–5 profiles and validate the output.  
7. Once working, update `Variables` with your full config.

---

### 📋 **Requirements**

- An n8n instance (self-hosted or cloud)  
- A Notion account (separate workspace recommended)  
- Apify account (usage-based pricing for Instagram scraping)  
- Gemini API key for AI processing (usage-based pricing)

---

### 🧩 **How to customize the workflow**

The system is fully modular. You can:
- In the `Set Prompt` node, you can define your own rules for detecting content categories and video types.
- Change video filters (e.g., what counts as “hot” or “early hot”) 
- Modify Notion fields or adapt to your own database structure  
- Add more parsing logic to `Variables`  
- Switch translation language 
- Integrate with your content production flow

Each part of the workflow is clearly labeled and editable — feel free to adapt it to your goals.


## 📊 Basic Information

- **Workflow ID:** 5795
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 8092
- **Downloads:** 809
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5795)

## 👤 Author

- **Name:** Eugene Green
- **Username:** @egrnkvch

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **notion** (×5)
- **code** (×7)
- **switch** (×2)
- **wait** (×2)
- **@apify/n8n-nodes-apify.apify** (×3)
- **httpRequest** (×4)
- **if** (×2)
- **set** 
- **splitInBatches** 
- **scheduleTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
