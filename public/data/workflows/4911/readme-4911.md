# Generate summaries from uploaded files using OpenAI Assistants API

> ## Generate Summaries from Uploaded Files using OpenAI Assistants API

### 📑 Overview  
Upload a document (PDF, DOCX, PPTX, TXT, CSV, JSON, or Markdown) and receive an AI-generated summary containing:

* **title** – 5-10 words  
* **summary** – 1-2 sentences  
* **bullets** – 3-5 key points  
* **tags** – 3-6 short keywords  

The workflow:

1. Stores the file in OpenAI.  
2. Runs an Assistant with **File Search** **and Code Interpreter** enabled.  
3. Polls until the run finishes.  
4. Retrieves the summary JSON.

---

### ✅ Prerequisites  

**OpenAI Assistant**
- Create one at &lt;https://platform.openai.com/assistants&gt;
- Enable **File Search** and **Code Interpreter**
- Note: The assistant ID starts with `asst_`

**OpenAI API credential setup in n8n**
- Go to **Credentials → New → HTTP Header Auth**
- Header name: `Authorization`
- Value: `Bearer YOUR-OPENAI-API-KEY` (replace `YOUR-OPENAI-API-KEY` with your OpenAI API secret key for your assistant, starts with `sk-`)
- Name it: `openAIApiHeader`

---

### 🔧 Setup  

1. **Import the workflow JSON**.  
2. When n8n prompts for a credential, choose **`openAIApiHeader`** for every HTTP Request node.  
3. Open **Run Assistant** → Body and replace  

   ```json
   "assistant_id": "REPLACE_WITH_YOUR_ASSISTANT_ID"
   ```  

   with your real ID (starts with `asst_…`). Save.

---

### 🚀 How it works  

| # | Node | Purpose |
|---|------|---------|
| 1 | **On form submission** | User uploads a file (`File`). |
| 2 | **Upload File** | `POST /v1/files` (multipart) → returns `file_id`. |
| 3 | **Create Thread** | Creates a thread and attaches the uploaded file. |
| 4 | **Run Assistant** | Starts the run using your `assistant_id`. |
| 5 | **Poll Run Status → Wait 2 s → IF** | Loops until `status = completed`. |
| 6 | **Fetch Summary** | `GET /v1/threads/{thread_id}/messages` → summary JSON. |

---

### 🖌️ Customisation ideas  

- Edit the user prompt in **Create Thread** to change summary length, tone, or language.  
- Add an **HTTP Response** node after *Fetch Summary* to return plaintext to the uploader.  
- Replace the polling loop with OpenAI’s forthcoming *wait-for-run* endpoint when available.

---

*No community nodes required. Works on any n8n Cloud plan (Starter, Pro, Enterprise) or self-hosted Community Edition.*


## 📊 Basic Information

- **Workflow ID:** 4911
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1104
- **Downloads:** 110
- **Created:** 2025/6/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4911)

## 👤 Author

- **Name:** Sam Robertson 
- **Username:** @samrobertson

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×5)
- **if** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
