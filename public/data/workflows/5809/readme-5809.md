# Automated product inquiry responder with GPT-4 and Google Sheets

> ## **AI-Powered Product Assistant for E-commerce**

Transform your online store customer service with an intelligent AI assistant that automatically processes customer inquiries, searches your product database, and provides personalized responses about product availability, pricing, and specifications. Perfect for shoe stores, fashion retailers, and any business with extensive product catalogs - this workflow eliminates manual customer service while increasing response speed and accuracy.

**How it works**
* Customer sends product inquiry via webhook (Instagram DM, website chat, or messaging app)
* AI extracts key product details (brand, model, size, color) from natural language text
* System searches your Google Sheets product database with smart filtering
* AI generates friendly, personalized response with availability, pricing, and stock information
* Automatic response sent back to customer with product details or alternatives

**Screenshots:**
- Customer inquiry: "Do you have Nike Air Max 40 size?"
- AI response: "Nike Air Max 90, size 40 - in stock 3 pieces, price 120$"

**Set up steps**
1. **Prepare your product database** - Create Google Sheets with columns: Brand, Model, Size, Color, Price, Quantity
2. **Configure AI settings** - Connect OpenAI API for natural language processing  
3. **Set up webhook endpoint** - Configure trigger for your messaging platform (Instagram, Telegram, website chat)
4. **Test with sample inquiries** - Verify AI correctly parses requests and finds products
5. **Deploy and monitor** - Launch your automated assistant and track performance

**Time investment:** 30-45 minutes setup, works immediately with any product catalog up to 1000+ items.

## 📊 Basic Information

- **Workflow ID:** 5809
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1743
- **Downloads:** 174
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5809)

## 👤 Author

- **Name:** Dmytro
- **Username:** @dima-ai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **code** (×2)
- **googleSheets** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
