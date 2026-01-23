# Smart shipping prioritization with Google Gemini and Google Sheets

> **How it works**
This template waits for an external button to be pressed via webhook, then reads a Google Sheet with pending shipments. The sheet contains the columns: idEnvio, fechaOrden, nombre, direccion, detalle, and enviado. It determines the next shipment using Google Gemini Flash 2.5, considering not only the date but also the customer’s comments. Once the next shipment is selected, the column “enviado” is updated with an X, and the shipping information is forwarded to Unihiker’s n8n Terminal.

**Setup**
Create a new Google Sheet and name it "Shipping".

Add the following column headers in the first row: idEnvio, fechaOrden, nombre, direccion, detalle, and enviado.

Connect your Google Sheets and Google Gemini credentials.

In your n8n workflow, select the Shipping sheet in the Google Sheets node.

Copy the webhook URL and paste it into the .ino code for your Unihiker n8n Terminal. 🚀

## 📊 Basic Information

- **Workflow ID:** 7296
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 267
- **Downloads:** 26
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7296)

## 👤 Author

- **Name:** Roni Bandini
- **Username:** @bandini

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **dateTimeTool** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **stickyNote** 
- **googleSheets** 
- **respondToWebhook** 
- **googleSheetsTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
