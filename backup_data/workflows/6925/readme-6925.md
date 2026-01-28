# Automated local business lead generator with AI, social media & WhatsApp links

> # Automated Local Business Lead Generator with AI, Social Media & WhatsApp Links

This workflow automates the process of generating and managing local business leads by scraping Google Maps data, analyzing business information with AI, and creating personalized outreach messages. The system searches for local businesses based on keywords and locations, extracts their contact information and reviews, then generates professional outreach messages tailored to each business. Results are stored in Google Sheets and notifications are sent via Telegram.


📊 **Google Sheets Template**
Use this template: [Local Business Lead Generator](https://docs.google.com/spreadsheets/d/1s1N_cAFoKtCsolQh4v3QZpqr8KmVzi7agKHr5MdBEBs/edit?usp=sharing)


## 🔑 Key Features
- 🔍 Searches Google Maps for local businesses using SerpAPI based on keywords and location parameters  
- 📋 Collects comprehensive business information including name, address, rating, reviews, phone numbers, and websites  
- 🤖 Uses OpenRouter's LLM to analyze business data and generate personalized outreach messages  
- 🌐 Analyzes business websites to provide targeted improvement suggestions  
- 📱 Automatically detects Instagram and TikTok profiles from business websites  
- 🗣️ Generates messages in the local language based on country code settings  
- 📊 Organizes and stores all collected data in Google Sheets with proper categorization  
- 🚀 Sends real-time updates and lead summaries via Telegram bot  
- 💬 Automatically creates WhatsApp links for easy business communication  

---

## 🔧 Requirements
- **SerpAPI Account + API Key** – For Google Maps business data extraction  
- **OpenRouter Account + API Key** – For AI-powered message generation and analysis  
- **Telegram Bot + API Token** – For notifications and bot interactions  
- **Google Sheets** – Connected to n8n for data storage  
- **Google Sheets Template** – Pre-configured with proper column structure  

---

## 🎁 Benefits
- Fully automated lead generation and outreach system  
- Saves time and increases efficiency for local business marketing  
- High personalization improves engagement and response rate  
- Scalable for any niche or location  


## 📊 Basic Information

- **Workflow ID:** 6925
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 1682
- **Downloads:** 168
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6925)

## 👤 Author

- **Name:** Budi SJ
- **Username:** @budisj

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **googleSheets** (×6)
- **telegram** (×2)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **if** (×2)
- **splitOut** 
- **limit** 
- **code** (×2)
- **noOp** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
