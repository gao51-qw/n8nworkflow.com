This visual workflow represents an AI-powered automated CV filtering system created using tools like n8n, Google Drive, Google Sheets, and Ollama (LLM)



## ⚙️ Key Features
- ### 📂 Google Drive Integration – Automatically searches and downloads CVs (PDF/DOCX/PPTX) from a shared folder.
- ### 📋 Criteria Matching – Reads and applies filtering rules from a Google Sheet.
- ### 🧠 LLM-Based Analysis – Uses a Large Language Model (Ollama) to assess and interpret CV content.
- ### 🧪 Smart Parsing – Includes structured and auto-fixing output parsers to ensure data accuracy.
- ### 📊 Automated Results Output – Writes matching candidates and analysis to a Google Sheet.
- ### 🔁 Loop and Aggregate Logic – Handles multiple CVs with iterative processing and aggregation.
- ### 🚀 No-Code Automation with n8n – Fully visual, modifiable without programming.

## 🛠️ How It Works

Trigger: Workflow is initiated via a Webhook (from a UI “Start Workflow” button).

CV Search: Searches for CV files in a designated Google Drive folder.
Loop Over Files:
Each file is downloaded.
Text is extracted (from PDFs or other formats).
Criteria Input: Matching rules are fetched from a predefined Google Sheet.
Merge & Aggregate: Combines file text and criteria for unified processing.

LLM Processing:
Text + criteria are sent to the Basic LLM Chain.

Utilizes Ollama Model for advanced language understanding.

Structured or auto-fixing output parsers enhance reliability.

Custom Code Execution: Optionally enriches or reformats the data.

Output: Results are appended to a shared Google Sheet (the output sheet).