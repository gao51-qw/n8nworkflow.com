# Extract transcripts from external YouTube videos using YouTube Transcript API

> ## 🚀 Try It Out!

### **YouTube Transcript API Extractor** *(Any Public Video)*
Extracts a clean transcript from a **videoId** using **youtube-transcript.io**.

---

### 🎯 **Use Cases**
- AI summaries, sentiment analysis, keyword extraction
- Internal indexing/SEO
- Content pipelines (blog/newsletter)
- Batch transcript processing

---

### 🔄 **How It Works** *(5 Steps)*
1. **📥 Input**: `youtubeVideoId`, `apiToken`
2. **🌐 API**: POST to youtube-transcript.io
3. **🧩 Parse**: Normalizes the response format
4. **🧹 Clean**: Normalizes text and whitespace
5. **✅ Output**: Transcript + metrics (`wordCount`/`charCount`)

---

### 🚀 **How to Use**
Payload:  
`{"youtubeVideoId":"xObjAdhDxBE", "apiToken": "xxxxxxxxxx"}`


**⚙️ Setup**:
- This sub-workflow is intended to be called from another workflow (Execute Workflow Trigger)


## 📊 Basic Information

- **Workflow ID:** 11867
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 528
- **Downloads:** 52
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11867)

## 👤 Author

- **Name:** Joel Cantero
- **Username:** @joelcantero

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **set** 
- **httpRequest** 
- **code** (×3)
- **if** 
- **stickyNote** (×8)
- **switch** 
- **executeWorkflowTrigger** 
- **stopAndError** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
