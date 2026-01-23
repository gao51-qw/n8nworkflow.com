# Turn any PDF into a clean Google Doc with Mistral OCR

> Upload a PDF and instantly get a neatly formatted Google Doc with all the readable text—no manual copy-paste, no messy line breaks.

**What this workflow does**

* Accepts PDF uploads via a public form
* Sends the file to Mistral Cloud for high-accuracy OCR
* Detects and merges page images with their extracted text
* Cleans headers, footers, broken lines, and noise
* Creates a new Google Doc in your chosen Drive folder
* Writes the polished markdown text into the document

**What you need**

* Mistral Cloud API key with OCR access
* Google Docs & Drive credentials connected in n8n
* Drive folder ID for new documents
* A PDF file to process (up to 100 MB)

**Setup**

1. Import the workflow into n8n and activate credentials.
2. In **Trigger • Form Submission**, copy the webhook URL and share it or embed it.
3. In **Create • Google Doc**, replace the default folder ID with yours.
4. Fill out Mistral API key under **Mistral Cloud API** credentials.
5. Save and activate the workflow.
6. Visit the form, upload a PDF, name your future doc, and submit.
7. Open Drive to view your newly generated, clean Google Doc.

**Example use cases**

* Convert annual reports into editable text for analysis.
* Extract readable content from scan-only invoices for bookkeeping.
* Turn magazine PDFs into draft blog posts.
* Digitize lecture handouts for quick search and annotation.
* Convert image-heavy landing pages / advertorials into editable text for AI to analyze structure and content.


## 📊 Basic Information

- **Workflow ID:** 6937
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1494
- **Downloads:** 149
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6937)

## 👤 Author

- **Name:** Hunyao
- **Username:** @hun-yao

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **stickyNote** (×2)
- **httpRequest** (×4)
- **code** (×2)
- **merge** (×2)
- **set** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleDocs** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
