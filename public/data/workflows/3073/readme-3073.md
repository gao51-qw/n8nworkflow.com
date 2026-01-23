# ⚛️🐋🤖 Extract data from YAPE receipts via Telegram OCR and store in Google Sheets

> ## Detailed Technical Description
This **n8n** workflow automates [Yape](https://www.yape.com.pe/) payment receipt processing, integrating [Telegram bot](https://core.telegram.org/bots), AI-powered OCR, and [Google Sheets](https://support.google.com/docs/answer/6000292) automation. By leveraging **[ChatGPT](https://chatgpt.com/)** Vision Computing, it extracts and structures transaction details, eliminating the need for manual entry. Ideal for freelancers, businesses, and finance teams, this workflow ensures error-free, real-time financial tracking. The AI agent powered by **[DeepSeek](https://www.deepseek.com/)** refines and formats the extracted text, storing it in [Google Sheets](https://support.google.com/docs/answer/6000292) for easy accessibility and reporting. Users can track payments, monitor cash flow, and generate financial reports without any manual work. This seamless integration boosts efficiency, reduces errors, and automates financial record-keeping with 100% accuracy.

### 🛠️ Technologies Used:
✅**n8n** – Workflow orchestrator.
✅**Telegram** – Handles image reception and notifications.
✅**Google Drive** – Manages file creation and storage.
✅**Google Sheets** – Automatically logs extracted data into spreadsheets.

### 🤖Artificial Intelligence:
✅**ChatGPT** Vision Computing – Performs OCR on payment receipts.
✅**DeepSeek** AI – Organizes and converts extracted data into a structured format.

---

## 📌 pre-conditions:
📩 `A Telegram Bot` – Must be created to receive images. [Setup Guide](https://core.telegram.org/bots/features#creating-a-new-bot)
🔑 `Google Sheets API Key` – Required to store extracted data. [Setup Guide](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)
⚛️ `ChatGPT API Key` – Used for OCR and AI text extraction. [Get it here](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)
🐋 `DeepSeek API Key` – Processes extracted text into structured data. [Get it here](https://platform.deepseek.com/api_keys)
 
---

#### 1️⃣ Image Reception & OCR Processing 📩
The user attaches a Yape payment receipt image to the Telegram bot conversation. 🤳🏻

![image.png](fileId:980)
#### 2️⃣ Analyze Image (OCR) 👁️‍🗨️
A ⚛️**ChatGPT** Vision Computing model processes the image and extracts all visible text, ensuring high-accuracy OCR for structured data extraction.
![image.png](fileId:977)

#### 3️⃣ Analyze and format text
Intelligent Data Processing with AI 🤖
The extracted text is sent to a 🐋**DeepSeek-based** AI agent that:
Identifies and structures key transaction details (amount, date, sender, transaction ID, etc.).
Converts the data into a structured JSON format.
![image.png](fileId:978)

#### 4️⃣ Data Storage in Google Sheets 📊
**Google Drive** integration is established.
If the Google Sheets file does not exist, it is automatically created.

Extracted data is automatically recorded in the corresponding spreadsheet, enabling effortless tracking and streamlined financial organization.
![image.png](fileId:979)

## 🚀 Benefits:
✅ Time-saving – Eliminates manual payment processing.
✅ Error-free data entry – Reduces human mistakes in record-keeping.
✅ 100% automation – No manual intervention required.
✅ Seamless integration – Easily connects with other workflows.





---
💡**NOTE**: _The extracted transaction data will be stored in a Google Sheets file with the following columns:_

|      Column Name      | Description                                               |
|:---------------------:|-----------------------------------------------------------|
| **id**                | Unique identifier for each transaction.                   |
| **beneficiaryName**   | Name of the recipient of the payment.                     |
| **amount**            | Payment amount in the specified currency.                 |
| **currency**          | Currency used for the transaction (e.g., PEN, USD).       |
| **company**           | The entity or service handling the transaction.           |
| **date**              | Date of the transaction in a human-readable format.       |
| **hour**              | Time of the transaction.                                  |
| **originalDate**      | The exact date extracted from the receipt.                |
| **dateToISO**         | Standardized ISO 8601 date format.                        |
| **operation**         | Type of financial operation (e.g., deposit, transfer).    |
| **operationNumber**   | Unique operation number provided by the payment system.   |
| **beneficiaryNumber** | Account or phone number of the recipient.                 |
| **commission**        | Any commission or fee charged for the transaction.        |
| **account**           | Account number or reference used for the payment.         |
| **channel**           | Payment method used (e.g., app, POS, bank transfer).      |
| **agentCode**         | Identifier of the agent or entity processing the payment. |

---

This workflow is perfect for **businesses**, **freelancers**, and **individuals** who need a fully automated solution to process [Yape](https://www.yape.com.pe/) payment receipts efficiently. By leveraging **AI-powered** OCR and structured data extraction, it eliminates manual effort, reduces errors, and ensures that all transactions are accurately logged in Google Sheets. Whether you're managing **personal finances**, **freelance payments**, or **business transactions**, this system provides a seamless, hands-free approach to financial tracking, allowing you to focus on what truly matters.

## 📊 Basic Information

- **Workflow ID:** 3073
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 1828
- **Downloads:** 182
- **Created:** 2025/3/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3073)

## 👤 Author

- **Name:** Jesús Pérez 
- **Username:** @jasp402

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×21)
- **telegramTrigger** 
- **switch** (×2)
- **telegram** (×4)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatDeepSeek** 
- **googleDrive** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
