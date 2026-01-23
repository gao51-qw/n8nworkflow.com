# Generate images with GPT-image-1 and store in Google Drive with cost tracking

> ## How it works

- Receive a chat input as an image prompt.
- Call OpenAI's `gpt-image-1` API to generate an image.
- Split the returned images and process them one by one.
- Upload each generated image to **Google Drive**.
- Save image links and thumbnails to a **Google Sheets** document.
- Record token usage and estimated cost into a separate sheet.

## Set up steps

1. Connect your **OpenAI API** credentials for image generation.
2. Connect your **Google Drive** and **Google Sheets** accounts.
3. Set the destination folder in Google Drive.
4. Set the target Google Sheet and specify the correct sheet tabs.
5. The setup usually takes around **5-10 minutes**.
6. Detailed field mappings are already pre-configured inside the workflow.
7. Additional tips and instructions are included as **sticky notes** inside the workflow.

![Screenshot_20250425_190410_NRnD1vZE2x 2.jpg](fileId:1166)

## Google Sheet copy url
[Copy Sheet Link](https://docs.google.com/spreadsheets/d/1zsWBgeA7I5Q_gsocz6hmkW884QT_vfz_mgGCT54VSN0/copy)

## 📊 Basic Information

- **Workflow ID:** 3710
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 3476
- **Downloads:** 347
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3710)

## 👤 Author

- **Name:** darrell_tw
- **Username:** @darrelltw

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **googleDrive** 
- **splitOut** 
- **convertToFile** 
- **splitInBatches** 
- **set** (×2)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **aggregate** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
