# Extract and organize Colombian invoices with Gmail, GPT-4o & Google Workspace

> # 🧾 Personal Invoice Processor

This N8N workflow automates the extraction and organization of **personal invoices in Colombia** received via **Gmail**. It includes the following key steps:

## 🔁 Flow Summary

1. **Email Trigger**
   - Polls Gmail every **30 minutes** for emails with `.zip` attachments (assumed to contain invoices).
   - Expects ZIP file following DIAN standards.

2. **ZIP File Handling**
   - Extracts all files.
   - Filters only **PDF** and **XML** files for processing.

3. **Data Extraction & Processing**
   - Uses **LangChain Agent + OpenAI (GPT-4o-mini)** to extract:
     - Tipo de documento (Factura / Nota Crédito)
     - Número de factura
     - Fecha de emisión (YYYY-MM-DD)
     - NIT emisor y receptor (sin dígito de verificación)
     - Razón social del emisor
     - Subtotal, IVA, Total
     - CUFE
     - Resumen de compra (max 20 words, formatted sentence)

4. **Validation**
   - Ensures **Total = Subtotal + IVA** using a calculator node.

5. **Storage**
   - Uploads the original PDF to **Google Drive**.
   - Renames the file to: `YYYY-MM-DD-NUMERO_FACTURA.pdf`.
   - Inserts or updates invoice details in **Google Sheets** using a unique `Key` (`NIT_Emisor + Numero_Factura`) to prevent duplication.

---

&gt; ⚙️ Designed for personal use with minimal latency tolerance and high automation reliability.

## 📊 Basic Information

- **Workflow ID:** 3951
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 3106
- **Downloads:** 310
- **Created:** 2025/5/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3951)

## 👤 Author

- **Name:** Juan Sanchez
- **Username:** @juansave

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmailTrigger** 
- **code** (×3)
- **filter** 
- **compression** 
- **noOp** 
- **switch** 
- **extractFromFile** (×2)
- **xml** 
- **merge** (×2)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 
- **googleDrive** (×2)
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
