# Automated academic paper metadata & variable extraction with Gemini to Google Sheets

> ### 📚In the social and behavioral sciences (e.g., psychology, sociology, economics, management), researchers and students often need to normalize academic paper metadata and extract  variables before any literature review or meta-analysis.

### 🧩This workflow automates the busywork. Using an LLM, it processes CSV/XLSX/XLS files (exported from WoS, Scopus, EndNote, Zotero, or your own spreadsheets) into normalized metadata and extracted variables, and writes a neat table to Google Sheets.
#### 🔗 Example Google Sheet: [click me](https://docs.google.com/spreadsheets/d/1WiFj0MwieQiSmFyMU2oyaCzbl273sTyknOa80dl8sUA/edit?usp=sharing)

---

## 👥 Who is this for?

- 🎓 Undergraduate and graduate students or researchers in soft-science fields (psychology, sociology, economics, business)
- ⏱️ People who don’t have time to read full papers and need quick overviews
- 📊 Anyone who wants to automate academic paper metadata normalization and variable extraction to speed up a literature review
 
---

## ⚙️ How it works
1. 📤 Upload an **academic paper file** (CSV/XLSX/XLS) in chat.
2. 📑 The workflow creates a Google Sheets **spreadsheet** with two tabs: `Checkpoint` and `FinalResult`.
3. 🔎 A structured-output LLM normalizes **core metadata** (title, abstract, authors, publication date, source) from the uploaded file and writes it to `Checkpoint`; 📧 a Gmail notification is sent when finished.
4. 🧪 A second structured-output LLM uses the metadata above to **extract variables** (Independent Variable, Dependent Variable) and writes them to `FinalResult`; 📧 you’ll get a second Gmail notification when done.

---

## 🛠️ How to set up
### 🔑 Credentials
- **Google Sheets OAuth2** (read/write)
- **Gmail OAuth2** (send notifications)
- **Google Gemini (or any LLM you prefer)**
   
### 🚀 Quick start
1. Connect **Google Sheets**, **Gmail**, and **Gemini (or your LLM)** credentials.
2. Open `File Upload Trigger` → upload your **CSV/XLSX/XLS** file and type a **name** in chat (used as the Google Sheets spreadsheet title).
3. Watch your inbox for status emails and open the Google Sheets spreadsheet to review **Checkpoint** and **FinalResult**.
    
---

## 🎛 Customization
- 🗂️ **Journal lists:** Edit the **Journal Rank Classifier** code node to add/remove titles. The default list is for business/management journals—swap it for a list from your own field.
- 🔔 **Notifications:** Replace Gmail with Slack, Teams, or any channel you prefer.
- 🧠 **LLM outputs:** Need different metadata or extracted data? Edit the LLM’s **system prompt** and **Structured Output Parser**.

---

## 📝 Note
- 📝 **Make sure your file includes abstracts.** If the academic paper data you upload doesn’t contain an abstract, the extracted results will be far less useful.
- 🧩 **CSV yields no items?** Encoding mismatches can break the workflow. If this happens, convert the CSV to `.xls` or `.xlsx` and try again.

---

## 📩 Help
**Contact:** owenlzyxg@gmail.com

## 📊 Basic Information

- **Workflow ID:** 9994
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 247
- **Downloads:** 24
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9994)

## 👤 Author

- **Name:** OwenLee
- **Username:** @owen-n8nlab

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **extractFromFile** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **splitInBatches** (×2)
- **googleSheets** (×5)
- **wait** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** (×2)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **switch** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **executeWorkflowTrigger** 
- **executeWorkflow** 
- **stickyNote** (×6)
- **gmail** (×2)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
