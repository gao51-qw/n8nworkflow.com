## Generate Summaries from Uploaded Files using OpenAI Assistants API

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
