# Automate LinkedIn posts with Claude AI, DALL-E images & Google Sheets approval

> **How it works**

This workflow automates your entire LinkedIn content strategy, from ideation to publishing.

* **Daily Idea Generation:** Every day, the workflow uses an advanced AI agent (Anthropic's Claude model) to generate a new, viral-optimized LinkedIn post idea, complete with a title, full text, and a detailed image description. It analyzes your past posts from a Google Sheet to ensure content is fresh and aligns with one of your four content pillars: timeless principles, case studies, growth hacks, or controversial ads.
* **AI Image Creation:** It then uses OpenAI's DALL-E to create a custom, high-quality image based on the generated description and a style reference image you provide, ensuring brand consistency.
* **Review & Approval Workflow:** The generated post and its accompanying image are automatically saved as a new row in a Google Sheet, marked with a "review" status. This gives you full editorial control.
* **Automated Publishing:** Once you approve a post by changing its status to "ready" in the Google Sheet, a separate part of the workflow picks it up and automatically publishes it to your LinkedIn profile at a scheduled time.
* **Status Tracking:** After publishing, the workflow updates the status in your Google Sheet to "posted," so you always have a clear overview of your content pipeline.

**Set up steps**

This workflow integrates several services. Follow these steps to get it running:

1.  **Copy the Google Sheet:** Make a copy of the [AI Posts Content Machine Google Sheet template](https://docs.google.com/spreadsheets/d/1-F3ZioIs3oWOKMyDPMuquaH-qiuaZs6qdZXP-yNeRbs/edit?usp=sharing) and select your copy in the `Get Past Ideas`, `Save Post`, `Get Ready Posts`, and `Update Status` nodes.
2.  **Set Up Credentials:** You will need to create and add API credentials for the following services within the corresponding n8n nodes:
    * **Google Sheets & Google Drive:** Create a Google credential.
    * **Anthropic:** Add your API key in the `Anthropic Chat Model` node.
    * **OpenAI:** Add your API key as a Header Auth credential in the `OpenAI Image` node.
    * **Perplexity AI:** Add your API key as a Header Auth credential inside the `Perplexity Research` sub-workflow.
    * **LinkedIn:** Create a LinkedIn credential.
3.  **Customize Your Content:**
    * In the `Idea Generator` node, adjust the system prompt to reflect your specific audience, topics, and content style.
    * Create a folder in Google Drive for your post images. Add a reference image to this folder that defines your desired visual style.
    * Paste the shareable link to your style reference image into the `Image Style` node.
4.  **Activate the Workflow:** Enable the workflow to start the automated content creation and publishing process.

## 📊 Basic Information

- **Workflow ID:** 4766
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 3545
- **Downloads:** 354
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4766)

## 👤 Author

- **Name:** Usman Liaqat
- **Username:** @usmanliaqat

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **convertToFile** 
- **scheduleTrigger** (×2)
- **code** 
- **limit** 
- **twitter** 
- **set** 
- **facebookGraphApi** (×2)
- **wait** 
- **httpRequest** 
- **googleDrive** (×3)
- **googleSheets** (×4)
- **linkedIn** 
- **perplexityTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
