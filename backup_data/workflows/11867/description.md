## 🚀 Try It Out!

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
