# Create high quality UGC images with Nano Banana (Cheaper & Faster)

> ## Who’s it for?

- Content Creators
- E-commerce Stores
- Marketing Team

**Description**: Generate unique UGC images for your products. Simply upload a product image into a Google Drive folder, and the workflow will instantly generate 50 unique, high-quality AI UGC images using Nano Banana via Fal.ai. 
All results are automatically saved back into the same folder, ready to use across social media, e-commerce stores, and marketing campaigns.

---

## How it works?

📺 **YouTube Video Tutorial:** 
[![Watch on YouTube](https://img.youtube.com/vi/b6tb5mnYU48/maxresdefault.jpg)](https://www.youtube.com/watch?v=b6tb5mnYU48)

**1 -** Trigger: Upload a new Product Image (with white background) to a Folder in your Google Drive
**2 -** Generate 50 different Image Prompts  for your Product
**3 -** Loop over each Prompt Generated
**4 -** Generate UGC Content thanks to Fal.ai (Nano Banana)
**5 -** Upload UGC Content on the initial Google Drive Folder

==**Cost: 0.039$ / image**==

---

## How to set up?

### 1. Accounts & APIs
In the **Edit Field "Setup" Node** replace all ==[YOUR_API_TOKEN]== with your API Token :
- Fal.ai (gemini-25-flash-image/edit): https://fal.ai/models/fal-ai/gemini-25-flash-image/edit/api

In **Credentials** on your n8n Dashboard, connect the following accounts using ==Client ID / Secret==: 
- Google Drive: https://docs.n8n.io/integrations/builtin/credentials/google/

### 2. Requirements
- Base Image of your Product preferably have a **White Background**
- Your Google Drive Folder and every Files it contains should be **publicly available**

### 3. Customizations
- Change the amount of total UGC Generated: In Generate Prompts → Message → "Your task is to generate 50"
- Modify the instructions to generate the UGC Prompts: In Generate Prompts → Message
- Change the amount of Base Image: In Generate Image → Body Parameters → JSON → image_urls
- Change the amount of UGC Generated per prompt: In Generate Image → Body Parameters → JSON → num_images
- Modify the Folder where UGC Generated are stored: In Upload File → Parent Folder

## 📊 Basic Information

- **Workflow ID:** 8644
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 4363
- **Downloads:** 436
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8644)

## 👤 Author

- **Name:** Nasser
- **Username:** @nasser

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **httpRequest** (×2)
- **googleDriveTrigger** 
- **splitInBatches** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **noOp** 
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **splitOut** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
