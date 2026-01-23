# Extract data from resume and create PDF with Gotenberg

> With this workflow you can extract data from resume documents uploaded via a Telegram bot. Workflow transform readable content of PDF resume into structured data, using AI nodes and returns PDF with formatted, plain HTML. 

You can modify this workflow to perform other actions with structured data (e.g. insert it into database or create other, well-formatted documents).

Functionality of this workflow was presented during the n8n community call on March 7, 2024 - recording of presentation available [here](https://youtu.be/eZacuxrhCuo?si=KkJQrgQuvLxj-6FM&t=1701). 

⚠️ **Workflow made for demo purposes.** If you want to use it in real life, please make sure necessary measures for personal data protection are set. 

## How it works? 

User uploads readable PDF resume document into Telegram bot. After authentication based on chat ID parameter, workflow extracts text from the PDF and transfers it into AI chain with connected sub-nodes: OpenAI Chat Model and Structured Output (JSON) Parser. 

Then, each extracted section (employment history, projects etc.) is formatted into desired HTML structure. Finally, the document is converted into new, structured PDF using Gotenberg. 

💡 This workflow requires installed Gotenberg. If you are not familiar with this software, please have a look on [my YouTube tutorial](https://youtu.be/bo15xdjXf1Y?si=3hfPxS5SDzpGse0p). You can also replace call to Gotenberg with other PDF generation service (such as PDFMonkey or ApiTemplate). 

## Set up steps

1. Create Telegram bot and add its credentials in n8n. 
2. Set your chat ID parameter in *Auth* node. 
3. Adjust JSON schema in *Structured Output Parser* according to your needs. 
4. Optionally: replace HTTP call to Gotenberg with PDF generation service of your choice. 

If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows) and/or [my newsletter](https://workfloows.com/).



## 📊 Basic Information

- **Workflow ID:** 2170
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 16461
- **Downloads:** 1646
- **Created:** 2024/3/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2170)

## 👤 Author

- **Name:** Oskar
- **Username:** @workfloows

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **code** (×5)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **telegramTrigger** 
- **if** (×2)
- **noOp** (×2)
- **telegram** (×2)
- **extractFromFile** 
- **set** (×8)
- **merge** (×5)
- **convertToFile** 
- **httpRequest** 
- **stickyNote** (×10)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
