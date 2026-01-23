# Instant infographic generator (LINE + Nano Banana Pro)

> ## About This Template
This workflow turns complex data or topics sent via LINE into beautiful, easy-to-understand Infographics.

It combines **Gemini** (to analyze data and structure the visual layout) and **Nano Banana Pro** (accessed via Kie.ai API) to generate high-quality, data-rich graphics (Charts, timelines, processes).

## How It Works
1.  **Input:** User sends a topic or data points via LINE (e.g., "Japan's Energy Mix: 20% Solar, 10% Wind...").
2.  **Data Visualization Logic:** Gemini acts as an Information Designer, deciding the best chart type (Pie, Bar, Flow) and layout for the data.
3.  **Render:** Nano Banana generates a professional **3:4 Vertical Infographic**.
4.  **Smart Polling:** The workflow uses a loop to check the API status every 5 seconds, ensuring it waits exactly as long as needed.
5.  **Delivery:** Uploads to S3 and sends the visual report back to LINE.

## Who It’s For
* Social Media Managers needing quick visual content.
* Educators and presenters summarizing data.
* Consultants creating quick visual reports on the go.

## Requirements
* **n8n** (Cloud or Self-hosted).
* **Kie.ai API Key** (Nano Banana Pro).
* **Google Gemini API Key**.
* **AWS S3 Bucket** (Public access).
* **LINE Official Account**.

## Setup Steps
1.  **Credentials:** Configure Header Auth for Kie.ai and your other service credentials.
2.  **Webhook:** Add the production URL to LINE Developers console.

## 📊 Basic Information

- **Workflow ID:** 11244
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 640
- **Downloads:** 64
- **Created:** 2025/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11244)

## 👤 Author

- **Name:** Masaki Go
- **Username:** @pippi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **webhook** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **httpRequest** (×4)
- **wait** 
- **if** 
- **awsS3** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
