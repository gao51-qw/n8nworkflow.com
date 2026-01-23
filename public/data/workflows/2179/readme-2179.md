# Translate PDF documents from Google Drive folder with DeepL

> This workflow will translate all your PDF documents from specified Google Drive folder to the desired language. Translated files will be automatically uploaded to the original folder.

### Required accounts
1️⃣ Google Drive account
2️⃣ [DeepL developer account](https://www.deepl.com/pro-api?cta=header-pro-api) and API key

### How to setup?

1️⃣ Setup your google drive folder url, target and source language in the configuration node
2️⃣ Connect your Google Drive account with all Google Drive nodes
3️⃣ Setup HTTP header credentials that should be used for HTTP nodes in the template (replace `yourAuthKey` with your DeepL API key)
![Deepl HTTP Header auth](https://i.imgur.com/t4zOVgc.png)
4️⃣ Set your DeepL header credentials in all HTTP nodes

## 📊 Basic Information

- **Workflow ID:** 2179
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 6073
- **Downloads:** 607
- **Created:** 2024/3/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2179)

## 👤 Author

- **Name:** Milorad Filipovic
- **Username:** @mfilipovic

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **manualTrigger** 
- **googleDrive** (×3)
- **filter** 
- **httpRequest** (×3)
- **wait** (×2)
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
