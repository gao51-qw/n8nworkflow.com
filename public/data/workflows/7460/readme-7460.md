# Generate ASO reports from Google Play Apps with Gemini AI & Google Docs

> # Automated App Analysis & ASO Report Generator

This workflow automates the process of analyzing a mobile app from the Google Play Store and generating a professional **ASO (App Store Optimization) Report**.  
Simply submit a Play Store URL, and the workflow will fetch app intelligence data, parse it, run an AI-based analysis, and deliver a formatted report in Google Docs. A Telegram notification with the document link ensures you never miss a new report.


## ✨ Key Features
- **Form Input Trigger** – Start the workflow by submitting a Play Store URL.  
- **Automated Data Retrieval** – Uses HTTP request to fetch app intelligence (via SensorTower or similar APIs).  
- **Smart Data Parsing** – Extracts essential app details, competitor insights, reviews, downloads, and revenue data.  
- **AI-Powered ASO Report** – Generates a professional analysis using LLM (Gemini via OpenRouter) with structured sections:  
  - 📱 App Overview  
  - ⭐ User Ratings & Reviews  
  - 📊 Competitor Analysis  
  - 📈 Market Insights  
  - 💡 Actionable Recommendations  
- **Google Docs Integration** – Creates and updates a Google Doc with the generated report.  
- **Instant Notification** – Sends a Telegram message with the app report link for quick access.  

---

## 🔐 Required Credentials
To run this workflow, you’ll need:
- **SensorTower API (or alternative App Intelligence API)** – for app details, reviews, competitors, and market data.  
- **OpenRouter API** – to access LLM model.  
- **Google Docs OAuth2** – to create and update the ASO report in Google Docs.  
- **Telegram API** – for instant notifications with the report link.  

---

## 🎁 Benefits
- **Save Time** – Automates the manual process of app research and reporting.  
- **Consistent Reporting** – Ensures every report follows a professional structure with clear sections.  
- **Actionable Insights** – Get AI-generated recommendations to improve app performance and competitiveness.  
- **Collaboration-Ready** – Reports are stored in Google Docs for easy sharing and editing.  
- **Real-Time Alerts** – Stay updated via Telegram whenever a new report is generated.  

---


## 📊 Basic Information

- **Workflow ID:** 7460
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 296
- **Downloads:** 29
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7460)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleDocs** (×2)
- **telegram** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
