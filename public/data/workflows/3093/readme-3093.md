# Extract pay slip data with Line Chatbot and Gemini to Google Sheets

> ## Workflow Overview:
Extract text from image using AI is worth because you need no code. It incorporates Google Gemini 2.0 Flash model for important text extraction from image. If you code without AI, you have to use multiple condition and may cause a lot of bug but with Google Gemini, you don't need any coding and if the Pay Slip is different, Gemini will extract it automatically.
## Workflow description:
1. User uses Line Messaging API to send Pay Slip image or message to the chatbot, create Line Business ID from here: [Line Business](https://account.line.biz/login)
2. Classify the message which is image or text
3. If the message is Pay Slip image, it will process using Gemini 2.0 Flash EXP and extract important information and response in JSON format without coding by using the following prompt: Analyze image and then return in JSON Response that has the only following value: **Status, From, To, Date, Amount**
![slip.png](fileId:995)
To get Google AI Studio API Key, you can find from the following link: [Google AI Studio API Key](https://aistudio.google.com/apikey)
4. Create Google Sheets which include the fileds **(Status, From, To, Date, Amount)** that we have created related to the AI prompt [Google Sheets](http://docs.google.com/spreadsheets) as the following example:
![Google Sheets Example.png](fileId:996)
5. If the message is text, it will process using Gemini 2.0 Flash EXP model as the AI Assistant else if the message is image, it will extract the important fields then reply to the User and insert into Google Sheets

## Key Features:
* **Extract text from image with No Code** Without N8N, we have to write code to extract text from image, but with N8N and Google Gemini 2.0 Flash EXP together, we don't need to code and it will process all slip vendors or other document vendors.
* **Multipurpose Chatbot** this chatbot accept both text and image so we don't have to create many chatbot accounts
* **Reduce human error** this workflow let any officer to verify document status when the job ends

**Note:** You can change the information by changing your prompt and also Google Sheets Column names relatively.

## 📊 Basic Information

- **Workflow ID:** 3093
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 3196
- **Downloads:** 319
- **Created:** 2025/3/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3093)

## 👤 Author

- **Name:** Sirisak Chantanate
- **Username:** @openmymai

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×5)
- **httpRequest** (×3)
- **set** 
- **switch** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleSheets** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
