# 📰 EU sustainability news curation with RSS, GPT, Gmail, ElevenLabs & Telegram

> *Tags: EU News, RSS, AI Classifier, Data Table, Email Digest, Automation, n8n*

### Context

Hi! I’m [Samir](https://samirsaci.com) , Supply Chain Engineer and Data Scientist based in Paris, and founder of the startup [LogiGreen](https://logi-green.com).

This workflow helps me closely follow EU sustainability news that impacts my business.

[![Workflow Overview](https://www.samirsaci.com/content/images/size/w1600/2025/11/image-18.png)](https://youtu.be/vNavNGRqcK4)

&gt; Use this assistant to automatically curate and summarize EU news tailored to the topics that matter most to you.

By default, the workflow filters **sustainability-related news**, but you can easily adapt the topic description (e.g. AI, trade, digital, energy) using the edit node **Topic Config**.

📬 For business inquiries, you can find me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This template is designed for:

- **Policy analysts and researchers** who want to track EU updates on a specific topic
- **Consultants and sustainability teams** who need a daily view of relevant announcements
- **Business owners or startup founders**, like myself, who need to adapt their business strategies to the recent news

### What does this workflow do?

This workflow acts as an **AI-powered EU news filter and digest generator**.

1. **Fetches the latest press releases** from the Council of the EU RSS feed every morning at 09:00
2. **Filters out** all the news already recorded to avoid duplicates  
3. **Uses an AI classifier** (OpenAI) to decide whether each article is relevant to your topic  
4. **Stores only the relevant items** in an **n8n Data	 Table**  
5. **Generates a formatted HTML newsletter** grouping the day’s relevant articles  
6. **Sends the digest by email** using the Gmail node
7. **Generates an audio summary** with ElevenLabs that is sent via Telegram

Here’s an example of the generated email:

[![Digest Example](https://www.samirsaci.com/content/images/size/w1000/2025/11/image-5.png)](https://youtu.be/vNavNGRqcK4)

### 🎥 Tutorial

A complete tutorial (with explanations of every node) is available on YouTube:

[![Tutorial + Demo](https://www.samirsaci.com/content/images/2025/11/temp-9.png)](https://youtu.be/vNavNGRqcK4)

### Next Steps

🗒️ Inside the workflow:

- Replace the Data Table reference with your own  
- Set up your Gmail, OpenAI and ElevenLabs credentials
- Update the recipient email address in the Gmail node
- Customize the HTML digest (colors, logo, style) in the Code node  
- Adjust the schedule time if necessary  

*Submitted: 18 November 2025*
*Template designed with n8n version 1.116.2*




## 📊 Basic Information

- **Workflow ID:** 10961
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 176
- **Downloads:** 17
- **Created:** 2025/11/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10961)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **splitInBatches** 
- **scheduleTrigger** 
- **rssFeedRead** 
- **if** (×2)
- **gmail** 
- **stickyNote** (×6)
- **dataTable** (×3)
- **merge** 
- **aggregate** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **telegram** 
- **@elevenlabs/n8n-nodes-elevenlabs.elevenLabs** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
