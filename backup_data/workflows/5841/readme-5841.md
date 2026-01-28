# Automate social media posts with AI content and images across Twitter, LinkedIn & Facebook

> ## Auto-generate & post content using AI

This workflow helps you create daily content using just a topic prompt. It writes a tweet, generates an image, and publishes across Twitter, Facebook, and LinkedIn — all on autopilot.

---

### How it works

- Triggers daily at 10 PM to start the flow  
- Uses OpenAI to generate a niche topic title  
- Writes a short-form post (tweet style) with hashtags  
- Generates a Japanese anime-style image for visual context  
- Saves everything in Google Sheets  
- Publishes automatically on Twitter, LinkedIn, and Facebook  

---

### Set up steps

- You’ll need OpenAI, Google Sheets, and social media credentials (Twitter, Facebook, LinkedIn)  
- Takes about **10–15 minutes** to configure if you already have the credentials ready  
- Make sure your Sheet and API keys are properly linked before activating  

📝 Keep detailed notes inside the workflow with sticky notes for easier handoff or collaboration.


## 📊 Basic Information

- **Workflow ID:** 5841
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 28303
- **Downloads:** 2830
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5841)

## 👤 Author

- **Name:** Abrar Sami
- **Username:** @abrarsami

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **googleSheets** 
- **twitter** 
- **linkedIn** 
- **facebookGraphApi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
