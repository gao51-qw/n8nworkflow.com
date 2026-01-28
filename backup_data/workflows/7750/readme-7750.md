# Auto-generate Instagram carousels with GPT-Image-1 & AI captions from Google Sheets

> # 🧰 Instagram Carousel Scheduler

A tool to **automatically publish Instagram carousels** using a `Post Description`, `Instructions`, and the **number of images** you want to post — all directly from a Google Sheet.
At the end of each post, the next row is marked as `Pending`, allowing **fully automated posting**, so you can prepare **months of content in advance**.
---

## ✅ Requirements

* 📱 **Instagram Business Account**
  Required to publish content via the Meta Graph API.
  Make sure your IG account is **connected to a Facebook Page**.

* 🔐 **Facebook Developers Token**
  Required to use the **Graph API** and publish on Instagram.
  👉 It's highly recommended to create a **System User** so your token **never expires**.

* ☁️ **Cloudinary Upload Preset**
  Used to upload generated images and retrieve public URLs.
  👉 Use an **unsigned upload preset** (no API key required).

* 🧠 **OpenAI API Key**
  Used for:
  * Generating a **caption** from the post description.
  * Creating **image prompts**.
  * Generating images using **`gpt-image-1`**.
    ⚠️ You might need to **verify your business** with OpenAI to access this model.

* 📊 **Google Sheets App with OAuth credentials**
  To fetch your content and instructions from the spreadsheet.
---

## 💬 Notes and Customization

* ✏️ You can **customize the prompt** to change the visual style of the images.
  Examples:

  * *Gumball* style
  * *Comic-style illustration*
  * *Digital painting*

* 🔄 You can **replace Google Sheets** with tools like:

  * Airtable
  * Notion
  * Your own database

* 🔐 If Facebook requires a **Privacy Policy**, you can quickly create one here:
  👉 [https://www.privacypolicygenerator.info](https://www.privacypolicygenerator.info)

## 📊 Basic Information

- **Workflow ID:** 7750
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 44
- **Downloads:** 4
- **Created:** 2025/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7750)

## 👤 Author

- **Name:** Jorge Martínez
- **Username:** @jorgemartinezjam

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserItemList** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitInBatches** 
- **httpRequest** (×7)
- **splitOut** 
- **convertToFile** 
- **wait** (×2)
- **set** (×2)
- **if** 
- **scheduleTrigger** 
- **googleSheets** (×3)
- **code** 
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
