# Scrape business leads from Google Maps using OpenAI and Google Sheets

> ![Workflow Screenshot](https://www.dr-firas.com/Google_Maps_Finale.png)

# Google Maps Data Extraction Workflow for Lead Generation

This workflow is ideal for **sales teams, marketers, entrepreneurs, and researchers** looking to efficiently gather detailed business information from Google Maps for:

- Lead generation  
- Market analysis  
- Competitive research

---

# Who Is This Workflow For?

- **Sales professionals** aiming to build targeted contact lists  
- **Marketers** looking for localized business data  
- **Researchers** needing organized, comprehensive business information  

---

# Problem This Workflow Solves

Manually gathering business contact details from Google Maps is:

- Tedious  
- Error-prone  
- Time-consuming  

This workflow **automates** data extraction to **increase efficiency, accuracy, and productivity**.

---

# What This Workflow Does

- Automates extraction of business data (name, address, phone, email, website) from **Google Maps**  
- Crawls and extracts **additional website content**  
- Integrates **OpenAI** to enhance data processing  
- Stores structured results in **Google Sheets** for easy access and analysis  
- Uses **Google Search API** to fill in missing information  

---

# Setup

1. **Import** the provided n8n workflow JSON into your **n8n instance**.  
2. Set your **OpenAI** and **Google Sheets API** credentials.  
3. Provide your **Google Maps Scraper** and **Website Content Crawler** API keys.  
4. Ensure **SerpAPI** is configured to enhance data completeness.  

---

# Customizing This Workflow to Your Needs

- Adjust scraping parameters:
  - Location  
  - Business category  
  - Country code  
- Customize **Google Sheets output format** to fit your current data structure  
- Integrate additional **AI processing steps or APIs** for richer data enrichment  

---

# Final Notes

This structured approach ensures:

- **Accurate and compliant data extraction** from Google Maps  
- Streamlined **lead generation**  
- Actionable and well-organized data ready for business use  

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/GOOGLE-MAPS-SCRAPER-1cc3d6550fd98005a99cea02986e7b05?pvs=4)

## Demo Video

🎥 Watch the full tutorial here: [YouTube Demo](https://www.youtube.com/watch?v=DoBRufiwElU)


## 📊 Basic Information

- **Workflow ID:** 3443
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 64037
- **Downloads:** 6403
- **Created:** 2025/4/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3443)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **stickyNote** (×3)
- **executeWorkflowTrigger** 
- **httpRequest** (×2)
- **googleSheets** (×2)
- **aggregate** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
