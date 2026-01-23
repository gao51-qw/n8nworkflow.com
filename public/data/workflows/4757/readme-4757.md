# 🚚 CO2 emissions of freight shipments with Carbon Interface API and GPT-4o

> ***Tags**: Sustainability, Supply Chain, AI Agent, CO2 Emissions, Carbon Interface API, Logistics, Automation*

### Context

Hi! I’m [Samir](https://samirsaci.com) — a Supply Chain Engineer and Data Scientist based in Paris, and founder of [LogiGreen Consulting](https://logi-green.com).

I help logistics teams reduce their environmental footprint by combining **AI automation** and **carbon estimation APIs**.

This workflow is part of our **green logistics initiative**, allowing businesses to **track the CO₂ emissions** of last-mile or regional shipments.

&gt; Automate carbon tracking for shipping operations with n8n!

📬 For business inquiries, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow is designed for **logistics coordinators**, **transportation planners**, or **sustainability officers** who want to estimate and record emissions for B2B shipments.

Let’s imagine your carrier sends a **shipment confirmation email** after a pickup is scheduled:

[![Example Email](https://www.samirsaci.com/content/images/2025/06/image-20.png)](https://bit.ly/playlist-n8n-supplyscience)

An **AI Agent** reads the email and extracts structured data: **addresses, distance, cargo weight, and delivery time**.

The **Carbon Interface API** is then called to calculate **CO₂ emissions based on weight and distance**, and the results are stored in a **Google Sheet**.

[![Workflow](https://www.samirsaci.com/content/images/2025/06/image-21.png)](https://bit.ly/playlist-n8n-supplyscience)

### How does it work?

This workflow automates the process of **tracking CO₂ emissions for scheduled shipments**:

- 📨 Gmail Trigger captures shipment confirmation emails  
- 🧠 AI Agent parses the shipment info (pickup, delivery, weight, distance)  
- 🚚 Carbon Interface API estimates CO₂ emissions  
- 📊 Google Sheets is used to store shipment metadata and carbon results

### Steps:

1. 💌 Trigger on new shipment confirmation email  
2. 🧠 Extract structured shipment info with AI Agent  
3. 📋 Store metadata in Google Sheets  
4. ⚙️ Call Carbon Interface API with weight and distance  
5. 📥 Append estimated CO₂ emissions to the shipment row

[![workflow](https://www.samirsaci.com/content/images/size/w1600/2025/06/image-22.png)](https://bit.ly/playlist-n8n-supplyscience)

### What do I need to get started?

You’ll need:

- A **Gmail account** to receive shipment confirmation emails  
- A **Google Sheet** to track shipment data and CO₂  
- A free [Carbon Interface API key](https://www.carboninterface.com/docs)  
- OpenAI access for using the AI Agent parser  
- A few sample emails from your logistics provider to test

### 📺 Learn More with n8n Tutorials 

Get hands-on experience with automation through my comprehensive **n8n tutorial playlist**, featuring 18+ complete, step-by-step videos and ready-to-use templates.

[![n8n Playlist](https://www.samirsaci.com/content/images/size/w1600/2025/11/image-9.png)](https://bit.ly/playlist-n8n-supplyscience)

### Next Steps

🗒️ Use the sticky notes in the n8n canvas to:

- Add your Gmail and Carbon Interface credentials  
- Try with a sample shipment confirmation email  
- Check your Google Sheet to verify emissions and timestamps

*This template was built using n8n v1.93.0*  
*Submitted: June 7, 2025*


## 📊 Basic Information

- **Workflow ID:** 4757
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 349
- **Downloads:** 34
- **Created:** 2025/6/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4757)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** 
- **googleSheets** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
