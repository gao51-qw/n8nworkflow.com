# Amazon affiliate marketing automation

> ## **Who this is for**

This workflow is for **Amazon affiliate marketers** and **social media managers** who want to quickly turn product links into **engaging Facebook posts** with AI-generated captions and images — fully automated.

---

## **What this workflow does**

This workflow starts every time a new **Product Link** is added to a connected **Google Sheet**. It then:

* **Extracts the ASIN** from the product link.
* **Fetches product details** from Amazon using RapidAPI.
* **Generates a short, scroll-stopping Facebook caption** with OpenRouter AI.
* **Creates a product image prompt** and sends it to Google Gemini for high-quality image generation.
* **Uploads the creative directly to Facebook** via the Facebook Graph API.
* **Marks the Google Sheet row** as “Done ✅” after posting.

The Facebook post includes:

* Product image (AI-enhanced)
* Short, benefit-focused caption with emojis
* Affiliate link

---

## **Setup**

To set this template up, follow the sticky notes inside the workflow and:

1. **Google Sheets** → Connect your sheet and ensure the columns “Product Link” & “Facebook Upload” exist.
2. **RapidAPI** → Add your API key in the “Amazon Product Details” node.
3. **OpenRouter** → Add credentials for caption generation.
4. **Google Gemini** → Add your API key for image generation.
5. **Facebook Graph API** → Connect your Facebook account for posting.

---

## **How to customize this workflow to your needs**

* Change the Facebook caption prompt to match your tone or branding.
* Adjust the AI image generation prompt to fit your preferred photography style.
* Modify the Google Sheet update logic if you want to track additional info (e.g., posting date, engagement stats).
* Switch Facebook posting to Instagram or another platform by replacing the final API call.

## 📊 Basic Information

- **Workflow ID:** 7422
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 6604
- **Downloads:** 660
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7422)

## 👤 Author

- **Name:** Rakin Jakaria
- **Username:** @rakinjakaria

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **convertToFile** 
- **facebookGraphApi** 
- **googleSheetsTrigger** 
- **googleSheets** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
