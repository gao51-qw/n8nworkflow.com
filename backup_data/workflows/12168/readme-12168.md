# Automate video creation with Gemini Prompts and Vertex AI to Google Drive

> Automate video creation: AI generates ideas, Vertex AI renders videos, and auto-uploads to Google Drive with complete tracking.

**What You Get**

- Gemini AI for creative prompts
- Vertex AI video generation
- Auto-upload to Google Drive
- Complete Google Sheets logging
- Smart retry logic
- Base64 to MP4 conversion

**Setup**

1. Enable Vertex AI in [Google Cloud](https://console.cloud.google.com/vertex-ai/studio/)
2. Get [Gemini API key](https://aistudio.google.com/)
3. Run `gcloud auth print-access-token` for ACCESS TOKEN
4. Import workflow & configure credentials
5. Add prompts & test

**Flow**

Schedule → Gemini AI → Vertex AI → Wait → Convert → Upload → Log

**Resources**

- [Google Sheets Template](https://docs.google.com/spreadsheets/d/1575_YE8kQk92Xj2DTpx4feCYDXu4hZh8CVl57Un2l2k/edit?usp=sharing)

**⚠️ Note:** ACCESS TOKEN expires hourly - refresh using `gcloud auth print-access-token`

---

**📧 LinkedIn:** [linkedin.com/in/yourprofile](https://www.linkedin.com/in/gilbert-onyebuchi/)

**🔗 More n8n Products:** [Click here](https://sites.google.com/view/template-n8n/linkedin-post-designer)

## 📊 Basic Information

- **Workflow ID:** 12168
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 396
- **Downloads:** 39
- **Created:** 2025/12/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12168)

## 👤 Author

- **Name:** Gilbert Onyebuchi
- **Username:** @gilbert-onyebuchi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **code** (×2)
- **set** 
- **convertToFile** 
- **httpRequest** (×2)
- **wait** (×2)
- **googleDrive** 
- **stickyNote** (×5)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
