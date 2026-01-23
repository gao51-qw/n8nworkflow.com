# 🗞️ AI-powered sustainability newsletter for marketing with Gmail, GPT-4o

> *Tags: Sustainability, Web Scraping, OpenAI, Google Sheets, Newsletter, Marketing*

### Context

Hey! I’m [Samir](https://samirsaci.com), a Supply Chain Engineer and Data Scientist from Paris, and the founder of [LogiGreen Consulting](https://logi-green.com).

We use **AI, automation, and data** to support sustainable business practices for small, medium and large companies.

I use this workflow to bring **awareness about sustainability** and **promote my business** by delivering automated daily news digests.

[![Workflow](https://www.samirsaci.com/content/images/2025/04/image-12.png)](https://www.youtube.com/watch?v=q8VCAUbuat8)


&gt; Promote your business with a fully automated newsletter powered by AI!

This n8n workflow scrapes articles from the official EU news website and sends a **daily curated digest**, highlighting only the **most relevant sustainability news**.

📬 For business inquiries, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow is useful for:
- **Business owners** who want to promote their service or products with a fully automated newsletter
- **Sustainability professionals** staying informed on EU climate news  
- **Consultants and analysts** working on CSRD, Green Deal, or ESG initiatives  
- **Corporate communications teams** tracking relevant EU activity  
- **Media curators** building newsletters  

### What does it do?

This n8n workflow:
1. ⏰ Triggers automatically every morning  
2. 🌍 Scrapes articles from the EU Commission News Portal  
3. 🧠 Uses **OpenAI GPT-4o** to classify each article for sustainability relevance  
4. 📄 Stores the results in a **Google Sheet** for tracking  
5. 🧾 Generates a **beautiful HTML digest email**, including titles, summaries, and images  
6. 📬 Sends the digest via **Gmail** to your mailing list  

### How it works

[![Workflow Screenshot](https://www.samirsaci.com/content/images/size/w1600/2025/04/image-11.png)](https://www.youtube.com/watch?v=q8VCAUbuat8)


1. **Trigger** at 08:30 every morning
2. **Scrape and extract** article blocks from the EU news site  
3. **Use OpenAI** to decide if articles are sustainability-related  
4. **Store relevant entries** in Google Sheets  
5. **Generate HTML email** with a professional layout and logo  
6. **Send the digest** via Gmail to a configured recipient list

### What do I need to get started?

You’ll need:
- A **Google Sheet** connected to your n8n instance  
- An **OpenAI account** with GPT-4 or GPT-4o access  
- A **Gmail OAuth credential** setup  

### Follow the Guide!

Follow the **sticky notes** inside the workflow or check out my step-by-step tutorial on how to configure and deploy it.

[![EU News Digest Banner](https://www.samirsaci.com/content/images/2025/04/temp-10.png)](https://www.youtube.com/watch?v=q8VCAUbuat8)

🎥 [Watch My Tutorial](https://www.youtube.com/watch?v=q8VCAUbuat8)

### Notes

- You can customise the system prompt to adjust how AI classifies “sustainability”  
- Works well for tracking updates relevant to **climate action**, **green transition**, and **circular economy**

*This workflow was built using n8n version 1.85.4*  
*Submitted: April 24, 2025*


## 📊 Basic Information

- **Workflow ID:** 3684
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 3645
- **Downloads:** 364
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3684)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleSheets** (×2)
- **gmail** 
- **code** 
- **html** (×2)
- **scheduleTrigger** 
- **httpRequest** 
- **splitOut** 
- **splitInBatches** 
- **set** 
- **merge** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
