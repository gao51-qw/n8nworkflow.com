# Create high-converting sales copy with Hormozi Framework, LangChain & Google Docs

> **Note:** This workflow assumes you already have your product’s Amazon reviews saved in a Google Sheet. If you still need those reviews, run my **Amazon Reviews Scraper** workflow first, then plug the resulting spreadsheet into this template.

**What it does**
Transforms any draft Google Doc into multiple high-converting sales pages. It blends Alex Hormozi’s value-stacking tactics with persona targeting based on Maslow’s Hierarchy of Needs, using your own customer reviews for proof and voice of customer (VOC).

**Perfect for**
• Growth and creative strategists
• Freelance copywriters and agencies
• Founders sharpening offers and funnels

**Apps used**
Google Sheets, Google Docs, LangChain OpenRouter LLM

**How it works**

1. Form Trigger collects Drive folder IDs, base copy URL and options.
2. Workflow fetches the draft copy and product feature doc.
3. It samples reviews, extracts VOC insights and maps them to Maslow needs.
4. LLM drafts headlines and hooks following Hormozi’s \$100M Offers principles.
5. Personas drive tone, objections and urgency in each copy variant.
6. Loop writes one Google Doc per variant in your chosen folder.
7. Customer analysis docs are saved to a second folder for reuse.

**Setup**

1. Share two Drive folders, copy the IDs (text after `folders/`).
2. Paste each ID into **Customer Analysis Folder ID** and **Advertorial Copy Folder ID**.
3. Provide **File Name**, **Base copy (Google Docs URL)** and **Product Feature/USPs Doc**.
4. Optional: **Reviews Sheet URL**, **Number of reviews to use**, **Target City**.
5. Set **Number of Copies** you need (1–20).
6. Add Google Docs OAuth2 and Google Sheets OAuth2 credentials in n8n.

**If you have any questions in running the workflow, feel free to reach out to me at my youtube channel:**
https://www.youtube.com/@lifeofhunyao

## 📊 Basic Information

- **Workflow ID:** 7059
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 516
- **Downloads:** 51
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7059)

## 👤 Author

- **Name:** Hunyao
- **Username:** @hun-yao

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×5)
- **googleDocs** (×8)
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.toolThink** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **set** (×2)
- **splitOut** 
- **splitInBatches** 
- **formTrigger** 
- **if** 
- **limit** 
- **sort** 
- **aggregate** 
- **googleSheets** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
