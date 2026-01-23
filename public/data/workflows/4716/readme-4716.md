# Facebook ads competitive analysis using Gemini and Open AI

> **How it works**
- User submits a keyword through a form to trigger the workflow.
- Ads matching the keyword are scraped from Facebook Ads Library.
- Ads are filtered by media type (image or video).
- Images are analyzed using an AI model to describe visuals and text.
- Videos are downloaded, processed, and sent to Gemini for visual and spoken content analysis.
- Text, URLs, and media descriptions are compiled.
- All ad insights are saved into a Google Sheet for easy viewing.

**Set up steps**
- **Requires** Apify and Gemini API credentials, Google Sheets access, and OpenAI key.
- **Import** the workflow into n8n and connect accounts to form, HTTP, and Sheets nodes.
- Provide form trigger URL for user input; **no advanced config needed**.
- **Estimated setup time:** ~15–20 minutes for a user familiar with n8n.
- **Sticky notes** inside the workflow provide helpful guidance per section.

## 📊 Basic Information

- **Workflow ID:** 4716
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 640
- **Downloads:** 64
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4716)

## 👤 Author

- **Name:** Archit Jain
- **Username:** @architjn

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×3)
- **switch** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **extractFromFile** 
- **set** (×2)
- **merge** 
- **googleSheets** 
- **splitInBatches** 
- **stickyNote** (×5)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
