# Create a searchable document archive with Telegram, Drive, OCR and Airtable

> This n8n workflow receives files sent in a Telegram chat, uploads them to Google Drive, extracts text using OCR (for images and PDFs), and stores the extracted content in Airtable for quick search and retrieval.
Users can later search through documents using a Telegram `/search` command.


### **Key Features**

* Accepts images and documents from Telegram
* Uploads files to Google Drive automatically
* Detects file type and runs OCR if eligible
* Extracts text from images & PDFs via Google Vision
* Stores file metadata + text in Airtable
* Search documents using `/search` command in Telegram
* Sends result previews and file links
* Error handling & user notifications included


### **Use Cases**

* Personal document vault with search
* Team knowledge filing system
* Receipt & invoice OCR archive
* Legal documents store & retrieval
* Research papers & notes indexing
* Company file inbox for AI knowledge base


### **Workflow Steps**

| Step | Action                | Description                                                |
| ---- | --------------------- | ---------------------------------------------------------- |
| 1    | Telegram Trigger      | Detects incoming docs/images or `/search` command          |
| 2    | Filter File or Search | Routes based on whether message has file or search command |
| 3    | Extract Metadata      | Reads file info such as name, MIME type, user              |
| 4    | Download File         | Downloads file via Telegram API                            |
| 5    | Upload to Drive       | Saves file in Google Drive                                 |
| 6    | OCR Check             | Determines if file supports OCR                            |
| 7    | Google OCR            | Runs OCR for images/PDFs                                   |
| 8    | Extract Text          | Pulls text output from OCR                                 |
| 9    | Merge OCR Text        | Combines file data + text                                  |
| 10   | Save to Airtable      | Indexes with metadata + text                               |
| 11   | Success Reply         | Sends link + success message                               |
| 12   | `/search` Flow        | Parse search query                                         |
| 13   | Airtable Search       | Full-text search for records                               |
| 14   | Send Results          | Sends matches to Telegram                                  |
| 15   | Error Handler         | Notifies user on failure                                   |


### **Input Formats**

#### **File Messages Supported**

* Images
* PDFs
* Documents

#### **Search Command**

```
/search keyword
```

Example:

```
/search invoice
```


### **Output**

#### After Upload:

```
✅ File saved & indexed successfully!
🔗 Drive Link: &lt;link&gt;
```

#### After Search:

Returns structured result:

* File name
* Preview text snippet
* Google Drive link


### **Data Stored in Airtable**

| Field         | Description               |
| ------------- | ------------------------- |
| File Name     | Original name             |
| File Link     | Google Drive link         |
| MIME Type     | File type                 |
| Telegram User | Sender info               |
| OCR Text      | Extracted searchable text |
| Uploaded Date | Timestamp                 |


### **Technical Requirements**

* Telegram Bot Token
* Google Drive API connection
* Google Vision API key
* Airtable API key & table


### **Benefits**

* Automatically organizes Telegram files
* Makes PDFs & images searchable
* Saves manual sorting and indexing time
* AI-ready data storage (future LLM integration)
* Fast search experience right in Telegram


### **Enhancement Ideas**

* Add Whisper for voice message transcription
* Add chat GPT summarization for large docs
* Build dashboard for uploaded files
* Auto-tag documents (invoice, ID, receipt etc.)
* Multi-language OCR support


### Status

✅ Ready for production
✅ Handles images, PDFs, and files
✅ End-to-end automation
🛠 Optional: add more AI enrichment later



## 📊 Basic Information

- **Workflow ID:** 10388
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 118
- **Downloads:** 11
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10388)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **telegramTrigger** 
- **if** (×3)
- **stickyNote** (×16)
- **set** (×4)
- **telegram** (×4)
- **googleDrive** 
- **httpRequest** 
- **merge** 
- **airtable** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
