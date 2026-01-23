# Extract Thai bank slip data from LINE using SpaceOCR and save to Google Sheets

> ## Who is this for?
This workflow is ideal for businesses, accountants, and finance teams who receive bank slip images via LINE and want to automate the extraction of transaction details. It eliminates manual data entry and speeds up financial tracking.

What problem does this workflow solve?
Many businesses receive bank transfer slips via LINE from customers, but manually recording transaction details into spreadsheets is time-consuming and error-prone. This workflow automates the entire process, extracting structured data from the bank slips and storing it in Google Sheets for seamless record-keeping.

## What this workflow does:
- Receives bank slip images from LINE BOT
- Extracts transaction details (sender, receiver, amount, transaction ID) using SpaceOCR
- Automatically logs extracted data into Google Sheets
- Works with Standard Bank Slips & PromptPay transactions
- Eliminates manual data entry and reduces errors


## Setup Instructions:
### 1. Prerequisites
- A **LINE BOT** with Messaging API enabled
- A **SpaceOCR API Key** (Get from https://spaceocr.com/)
- A **Google Sheets account** to store extracted data
- An **n8n instance** running (Cloud or Self-hosted)

### 2. Setup Google Sheets
Create a Google Sheet with the following structure:

A (Date)	B (Time)	C (Sender)	D (Receiver)	E (Bank Name)	F (Amount)	G (Transaction ID)

- Ensure your Google Sheets API is enabled and connected to n8n.

For an example of the required format, check this Google Sheets template: [Google Sheets Template](https://docs.google.com/spreadsheets/d/1IpvzcnWmb-aLpSleTIF0xoF8xzbOOJQhuT6ITAeEQks/edit?usp=sharing)


### 3. Configure n8n Workflow
#### 1. Webhook Node (Receives bank slip from LINE BOT)

- **Set method:** ```POST```
- **Set Path:** ```/line-webhook```

#### 2. HTTP Request (Download Image from LINE Message)
- Retrieves image URL from the LINE message payload

#### 3. SpaceOCR Node (Extract Text from Bank Slip)
- **Input:** ```image URL``` from LINE
- **API Key:** ```Your SpaceOCR API Key```
#### 4. Google Sheets Node (Save Transaction Data)
- Select your Google Sheet
- Map extracted data (sender, receiver, amount, etc.) to the respective columns

### 4. Deploy & Test
Activate the workflow in n8n
Set Webhook URL in LINE Developer Console
Send a test bank slip image to the LINE BOT
Check Google Sheets for extracted transaction data



## 📊 Basic Information

- **Workflow ID:** 3008
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2429
- **Downloads:** 242
- **Created:** 2025/2/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3008)

## 👤 Author

- **Name:** Jaruphat J.
- **Username:** @jaruphatj

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **set** 
- **httpRequest** (×2)
- **webhook** 
- **googleDrive** 
- **googleSheets** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
