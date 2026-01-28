# WhatsApp dietitian AI chatbot workflow

> # WhatsApp Dietitian AI Chatbot Workflow

Transform your WhatsApp into a professional nutrition consultant with this comprehensive AI-powered dietitian assistant. Built using n8n automation and Google Gemini AI, this workflow provides instant, intelligent nutrition advice to your clients 24/7.

## 🍽️ What It Does

**Meal Analysis**: Users can send photos of their meals with captions like "analyze this meal" and receive detailed nutritional breakdowns including calories, macronutrients, and personalized recommendations.

**Nutrition Guidance**: Answers questions about general nutrition, dietary restrictions, meal planning, and healthy eating habits with evidence-based information.

**Meal Recommendations**: Suggests customized meals based on specific criteria like calorie targets, dietary preferences (vegan, keto, etc.), or available ingredients.

## 🚀 Key Features

- **Dual Input Processing**: Handles both text questions and image analysis seamlessly
- **Professional AI Responses**: Uses Google Gemini 2.0 Flash for accurate, contextual nutrition advice
- **WhatsApp Optimized**: Responses formatted specifically for mobile messaging with emojis and clear structure
- **Smart Routing**: Automatically detects message type (text vs image) and processes accordingly
- **Structured Output**: Consistent, professional formatting for all responses
- **Scope Management**: Stays within nutrition expertise and includes appropriate medical disclaimers

## 🛠️ Technical Stack

- **Platform**: n8n workflow automation
- **AI Model**: Google Gemini 2.0 Flash
- **Integration**: WhatsApp Business API
- **Message Types**: Text messages, images with captions
- **Output**: Structured, conversational responses

## 📱 Perfect For

- Nutritionists and dietitians offering remote consultations
- Health coaches providing 24/7 client support
- Fitness professionals adding nutrition guidance
- Wellness businesses expanding their service offerings
- Anyone wanting to monetize nutrition expertise

## 🎯 Ready to Deploy

This workflow comes with comprehensive documentation, clear setup instructions, and professional prompt engineering. Simply configure your WhatsApp Business API and Google Gemini credentials to start serving clients immediately.

**Transform your nutrition expertise into an automated, scalable WhatsApp service that works around the clock!**

## 📊 Basic Information

- **Workflow ID:** 4858
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 800
- **Downloads:** 80
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4858)

## 👤 Author

- **Name:** Tamer
- **Username:** @tamerelzein

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **whatsAppTrigger** 
- **whatsApp** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **switch** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
