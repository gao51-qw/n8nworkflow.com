# 🔄️ AI warehouse inventory cycle count bot using GPT, Telegram and Google Sheets

> *Tags: Logistics, Supply Chain, Warehouse Operations, Paperless Processes, Inventory Management*

### Context

Hi! I’m [Samir](https://samirsaci.com), Supply Chain Engineer, Data Scientist based in Paris, and founder of [LogiGreen](https://logi-green.com).

&gt; Let's use AI with n8n to help SMEs digitalise their logistics operations!

Traditional inventory cycle counts often require clipboards, scanners, and manual reconciliation.  

With this workflow, the operator walks through the warehouse, sends **voice messages**, and the bot automatically updates the inventory records.

[![Workflow Overview](https://www.samirsaci.com/content/images/size/w1600/2025/11/image-36.png)](https://youtu.be/_EOJ3M7APsQ)

Using AI-based transcription and structured extraction, we optimise the entire process with a simple mobile device connected to Telegram.

📬 For business inquiries, you can find me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Demo of the workflow

In this example, the bot guides the operator through the cycle count for three locations.

[![Telegram Discussion](https://www.samirsaci.com/content/images/2025/11/image-33.png)](https://youtu.be/_EOJ3M7APsQ)

The workflow automatically records the results in Google Sheets.

[![Google Sheets](https://www.samirsaci.com/content/images/2025/11/image-37.png)](https://youtu.be/_EOJ3M7APsQ)

### Who is this template for?

This template is ideal for companies with limited IT resources:
 
- **Inventory controllers** who need a hands-free, mobile-friendly counting process 
- Small **3PLs** and retailers looking to digitalise stock control

### 🎥 Tutorial

A complete tutorial (with explanations of every node) is available on YouTube:

[![Tutorial + Demo](https://www.samirsaci.com/content/images/2025/11/temp-13.png)](https://youtu.be/_EOJ3M7APsQ)

### What does this workflow do?

This automation uses Telegram and OpenAI’s Whisper transcription: 

1. The operator sends **/start** to the bot. 
2. The bot identifies the **first location** that still needs to be counted.  
3. The operator is guided to the location through a Telegram message.  
4. The operator records a **voice message** with the `location ID` and the `number of units` counted.
5. AI nodes transcribe the audio and extract `location_id` and `quantity`.  
6. If the message cannot be transcribed, the bot asks the operator to repeat.  
7. If the location is valid and still pending, the Google Sheet is updated.  
8. The bot sends the **next location**, until the final one is completed.  
9. The operator receives a confirmation that the cycle count is finished.

### Next Steps

Before running the workflow, follow the sticky notes and configure:

- Connect your **Telegram Bot API**  
- Add your **OpenAI API Key** to the transcription and extraction nodes  
- Connect your **Google Sheets credentials**  
- Update the Google Sheet ID and the worksheet name in all Spreadsheet nodes  
- Adjust the AI prompts depending on your warehouse location naming conventions  

*Submitted: 20 November 2025*  
*Template designed with n8n version 1.116.2*


## 📊 Basic Information

- **Workflow ID:** 11055
- **Complexity:** advanced
- **Node Count:** 38
- **Views:** 416
- **Downloads:** 41
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11055)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Miscellaneous
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×5)
- **telegram** (×7)
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **switch** 
- **wait** 
- **stickyNote** (×10)
- **aggregate** (×2)
- **set** 
- **merge** (×2)
- **limit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 38 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
