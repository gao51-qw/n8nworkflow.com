# Enhance & expand Telegram images to 3:2 with CodeFormer & LightX AI

> ## 🚀 Automatically enhance and expand Telegram images with AI

This n8n workflow turns your Telegram bot into a powerful AI photo enhancer!  
Whether users send a **photo or a link**, it processes the image by:

1. 📥 Receiving the input (photo or link)
2. 🧠 Upscaling quality using **Replicate's CodeFormer**
3. 📐 Analyzing image dimensions and calculating paddings to fit the 3:2 ratio
4. 🖼️ Expanding the image contextually with **LightX AI**
5. ☁️ Uploading the result to S3
6. 🔗 Sending back a public URL to the user in Telegram

---

## 👥 Who is it for?
- Telegram bot creators
- Content creators & photographers
- SMM pros looking to quickly polish user images
- AI enthusiasts who want plug-and-play image workflows

---

## 🛠️ Setup Requirements
- A Telegram bot (via @BotFather)
- AWS S3 Bucket (public)
- Replicate API key
- LightX API key

---

## 🔧 How to customize
- Add custom prompts or ratio in JavaScript node
- Connect to other AI tools for filters or style transfer
- Switch storage destination (e.g. Google Drive or Dropbox)

---

## 💡 Tips
- Works great in photo-related communities
- Can be used for virtual try-ons, image recovery or thumbnail generation

---

## 🌍 Languages
The main sticky note can be localized — feel free to swap it for your audience!

---

## 📊 Basic Information

- **Workflow ID:** 6497
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6497)

## 👤 Author

- **Name:** Vadym Nahornyi
- **Username:** @vadym-nahornyi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **telegram** 
- **set** (×7)
- **awsS3** (×2)
- **httpRequest** (×7)
- **if** (×2)
- **wait** (×2)
- **splitInBatches** 
- **merge** 
- **code** (×2)
- **stickyNote** (×9)
- **telegramTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
