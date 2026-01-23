# Multilingual WhatsApp translator with OpenAI Whisper & GPT-4 and HubSpot integration

> ![flowinterpreten8n.png](fileId:1307)
## 🌍 AI WhatsApp Translator + Voice Transcriber with HubSpot Integration

#### Hello! I'm Amanda ❤️, a passionate automation creator and AI enthusiast.  
With over 2 years of experience in n8n and Make.com, I design robust, intelligent agents  
that make your operations smarter and smoother.

This translator + transcriber assistant is perfect for multilingual communication via WhatsApp.  
It automatically captures voice or text messages, identifies the customer's region and language,  
transcribes audio using OpenAI Whisper, and generates friendly, culturally adapted translations  
with GPT-4 or GPT-4o. All messages and contacts are saved in your HubSpot CRM—so no lead gets lost.

---

### ✅ What this Workflow Does:

- 🎧 **Transcribes audio messages** using OpenAI Whisper (accurate + fast).
- 🌐 **Translates text & voice** into the client’s native language or a default one.
- 🇧🇷 **Adapts tone, slang, emojis**, and cultural expressions for natural conversation.
- 💼 **Saves contact info & history** to HubSpot automatically (name, phone, and translation).
- 📬 **Replies via WhatsApp** using Evolution API (also works with chatbots).
- ✨ Handles **over 80+ countries** and phone prefixes to detect preferred languages.

---

### 🛠️ How to Use It:

1. Clone the workflow to your n8n instance (cloud or self-hosted).
2. Configure the **Webhook** URL in your Evolution API or WhatsApp provider.
3. Set up credentials for:
   - OpenAI (for transcription and GPT translation)
   - HubSpot (to store leads)
4. Optional: Adjust prompt logic and default languages inside the `AI Agent` node.
5. Done! Your AI translator bot is live 💬🌎

---

### 🧠 LLMs and Tools Used:

- **OpenAI GPT-4o / GPT-4 Mini** for translation
- **OpenAI Whisper** for transcription
- **HubSpot CRM** integration
- **Evolution API** for WhatsApp messaging
- Dynamic language detection based on phone prefix

---

## 💡 Ideal For:

- Multinational businesses with global customers
- Customer support teams with multilingual needs
- Agencies serving clients in Latin America, Europe, or Asia
- Translating informal messages in real-time

---

## 📁 Included:

- 1x Complete n8n Workflow  
- Preconfigured translation agents  
- HubSpot contact mapper  
- Multi-country language index  
- Ready-to-use voice transcription logic

---

#### ❤️ Support Materials and Templates:
**[iloveflows.gumroad.com](https://iloveflows.gumroad.com)**

#### ☁️ Want to use this with n8n Cloud?  
Use my affiliate link to get started:  
👉 **[https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)**

#### 🔥 Buy a VPS server with a Super Discount: **[https://hostinger.com/vps](https://www.hostinger.com/cart?product=vps%3Avps_kvm_4&period=12&referral_type=cart_link&REFERRALCODE=iloveflows&referral_id=0196b5ab-28ce-710f-b543-2fd6a0d7699f)**

## 📊 Basic Information

- **Workflow ID:** 3972
- **Complexity:** advanced
- **Node Count:** 107
- **Views:** 567
- **Downloads:** 56
- **Created:** 2025/5/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3972)

## 👤 Author

- **Name:** Amanda Benks
- **Username:** @amanda

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **convertToFile** (×3)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **filter** (×9)
- **@n8n/n8n-nodes-langchain.toolCalculator** (×3)
- **httpRequest** (×18)
- **if** (×8)
- **code** (×10)
- **@n8n/n8n-nodes-langchain.toolThink** (×3)
- **stickyNote** (×27)
- **set** (×5)
- **scheduleTrigger** 
- **n8n** (×2)
- **splitInBatches** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.textClassifier** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **hubspot** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 107 nodes with 76 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
