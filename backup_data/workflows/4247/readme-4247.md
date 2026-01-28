# Invoice processor & validator with OCR, AI & Google Sheets

> ### 📝 Say goodbye to manual invoice checking! 
**This smart workflow automates** your entire invoice processing pipeline using **AI**, **OCR**, and **Google Sheets**.

---

### ⚙️ **What This Workflow Does:**

📥 **1. Reads an invoice PDF**
— Select a local PDF invoice from your machine.

🔍 **2. Extracts raw text using OCR**
— Converts scanned or digital PDFs into readable text.

🧠 **3. AI Agent processes the text**
— Transforms messy raw text into clean JSON using natural language understanding.

🧱 **4. Structures and refines the JSON**
— Converts AI output into a structured, usable format.

🔄 **5. Splits item-wise data**
— Extracts individual invoice line items with all details.

🆔 **6. Generates unique keys**
— Creates a unique identifier for each item for tracking.

📊 **7. Updates Google Sheet**
— Adds extracted items to your designated sheet automatically.

📂 **8. Fetches master item data**
— Loads your internal product master to validate against.

✅ **9. Validates item name & cost**
— Compares extracted items with your official records to verify accuracy.

📌 **10. Updates results per item**
— Marks each item as **Valid** or **Invalid** in the sheet based on matching.

---

### 💼 **Use Case:**

Perfect for businesses, freelancers, or operations teams who receive invoices and want to **automate validation**, **detect billing errors**, and **log everything seamlessly in Google Sheets** — all using the power of **AI + n8n**.

&gt; 🔁 Fast. Accurate. Zero manual work.

---
`#OCR #AI #Invoices #Automation`.


## 📊 Basic Information

- **Workflow ID:** 4247
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 28132
- **Downloads:** 2813
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4247)

## 👤 Author

- **Name:** Dhrumil Patel
- **Username:** @itechdp

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **splitOut** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **readWriteFile** 
- **extractFromFile** 
- **if** 
- **set** (×2)
- **googleSheets** (×3)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
