# Process Thai documents with TyphoonOCR & AI to Google Sheets (multi-page PDF)

> #### ⚠️ Note: This template requires a community node and works only on self-hosted n8n installations. It uses the Typhoon OCR Python package, `pdfseparate` from poppler-utils, and custom command execution. Make sure to install all required dependencies locally.

---

## Who is this for?

This template is designed for developers, back-office teams, and automation builders (especially in Thailand or Thai-speaking environments) who need to process **multi-file, multi-page Thai PDFs** and automatically export structured results to Google Sheets.

It is ideal for:

- Government and enterprise document processing
- Thai-language invoices, memos, and official letters
- AI-powered automation pipelines that require Thai OCR

---

## What problem does this solve?

Typhoon OCR is one of the most accurate OCR tools for Thai text, but integrating it into an end-to-end workflow usually requires manual scripting and handling multi-page PDFs. This template solves that by:

- Splitting PDFs into individual pages
- Running Typhoon OCR on each page
- Aggregating text back into a single file
- Using AI to extract structured fields
- Automatically saving structured data into Google Sheets

---

## What this workflow does
![wf22.gif](fileId:2196)

- **Trigger:** Manual execution or any n8n trigger node
- **Load Files:** Read PDFs from a local `doc/multipage` folder
- **Split PDF Pages:** Use `pdfinfo` and `pdfseparate` to break PDFs into pages
- **Typhoon OCR:** Run OCR on each page via Execute Command
- **Aggregate:** Combine per-page OCR text
- **LLM Extraction:** Use AI (e.g., GPT-4, OpenRouter) to extract fields into JSON
- **Parse JSON:** Convert structured JSON into a tabular format
- **Google Sheets:** Append one row per file into a Google Sheet
- **Cleanup:** Delete temp split pages and move processed PDFs into a Completed folder

---

## Setup

1. **Install Requirements**

   - Python 3.10+
   - `typhoon-ocr`: `pip install typhoon-ocr`
   - poppler-utils: provides `pdfinfo`, `pdfseparate`
   - qpdf: backup page counting

2. **Create folders**

   - `/doc/multipage` for incoming files
   - `/doc/tmp` for split pages
   - `/doc/multipage/Completed` for processed files

3. **Google Sheet**

   - Create a Google Sheet with column headers like:
     ```
     book_id | date | subject | to | attach | detail | signed_by | signed_by2 | contact_phone | contact_email | contact_fax | download_url
     ```

4. **API Keys**

   - Export your `TYPHOON_OCR_API_KEY` and `OPENAI_API_KEY` (or use credentials in n8n)

---

## How to customize this workflow

- Replace the LLM provider in the “Structure Text to JSON with LLM” node (supports OpenRouter, OpenAI, etc.)
- Adjust the JSON schema and parsing logic to match your documents
- Update Google Sheets mapping to fit your desired fields
- Add trigger nodes (Dropbox, Google Drive, Webhook) to automate file ingestion

---

## About Typhoon OCR

Typhoon is a multilingual LLM and NLP toolkit optimized for Thai. It includes `typhoon-ocr`, a Python OCR package designed for Thai-centric documents. It is open-source, highly accurate, and works well in automation pipelines. Perfect for government paperwork, PDF reports, and multi-language documents in Southeast Asia.

---

## Deployment Option

You can also deploy this workflow easily using the Docker image provided in my GitHub repository: [https://github.com/Jaruphat/n8n-ffmpeg-typhoon-ollama](https://github.com/Jaruphat/n8n-ffmpeg-typhoon-ollama)

This Docker setup already includes n8n, ffmpeg, Typhoon OCR, and Ollama combined together, so you can run the whole environment without installing each dependency manually.



## 📊 Basic Information

- **Workflow ID:** 7880
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 456
- **Downloads:** 45
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7880)

## 👤 Author

- **Name:** Jaruphat J.
- **Username:** @jaruphatj

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **executeCommand** (×3)
- **readWriteFile** (×3)
- **stickyNote** 
- **code** (×2)
- **aggregate** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
