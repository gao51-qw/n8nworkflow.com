# Analyze Google Business Reviews & send sentiment reports to Slack with Gemini

> # ⭐ Google Review Sentiment Analysis & Slack Notification Workflow  

This workflow automates the process of collecting **Google Business Profile reviews** 🏪, analyzing customer sentiment with **Google Gemini** 🤖✨, and sending structured reports to **Slack** 💬.  

---

## 🔑 Key Advantages  
- 📥 Fetches Google Business Profile reviews for a given business and time period  
- 🧠 Runs sentiment analysis using Gemini AI  
- 📊 Consolidates comments, ratings, and trends into a **JSON-based summary**  
- 🧩 Restructures results into **Slack Block Kit** format for easy readability  
- 🚀 Sends automated sentiment reports directly to a Slack channel  

---

## ⚙️ Set Up Essentials You’ll Need  
- 🔑 Google Business Profile **API access** with project approval  
- ✅ Enabled **Google Business Profile API** service  
- 🔐 **Gemini API credentials**  
- 💬 **Slack workspace & channel** for receiving reports  

---

## 🚀 How to Get Started  
1. 🔧 Configure your **Google Business Profile API** and enable access  
2. 👤 Set the **owner name** and 📍 **location** to fetch reviews  
3. ⏳ Define the **review time period** using the *Set Time Period* node  
4. 🔗 Connect your **Slack account** and select a channel for notifications  
5. 🕒 Deploy and let the workflow run on schedule for **automated insights**  

---


## 📊 Basic Information

- **Workflow ID:** 8111
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 1089
- **Downloads:** 108
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8111)

## 👤 Author

- **Name:** SayOne Technologies
- **Username:** @sayonetech

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleBusinessProfile** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **stickyNote** (×5)
- **set** (×2)
- **filter** 
- **code** (×6)
- **slack** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
