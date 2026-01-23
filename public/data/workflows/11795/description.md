**YouTube Caption Extractor** *(Your Channel Only)*
Extracts clean transcripts from **YOUR CHANNEL** YouTube video captions using YouTube Data API v3.

**⚠️ API Limitation**: Only works with videos from **YOUR OWN CHANNEL**. Cannot access external/public videos.

---

### 🎯 **Use Cases**
- AI summarization & sentiment analysis
- Keyword extraction from your content
- Content generation from your videos
- Batch transcript processing

---

### 🔄 **How It Works** *(6 Steps)*

1. **📥 Input**: Receives `videoId` + `preferredLanguage`
2. **🔍 API**: Lists captions from **your channel**
3. **🆔 Selector**: Picks preferred language (fallback to first)
4. **📥 Download**: Gets VTT subtitle file
5. **🧹 Cleaning**: Removes timestamps, [Music], duplicates
6. **✅ Output**: Clean transcript + metadata

---

### 🚀 **How to Use**
* Trigger with JSON payload: `{"youtubeVideoId": "YOUR_VIDEO_ID", "preferredLanguage": "es"}`
* **Video ID must belong to your authenticated YouTube channel**
* Works as sub-workflow (Execute Workflow Trigger) or replace with Webhook/Form trigger
* Handles videos with no captions gracefully with structured error response
* Output ready for downstream AI processing or storage

**⚠️ Setup Required**:
- **Change YouTube credentials** in **"List Captions"** and **"Download VTT"** nodes
- Video ID from **your authenticated channel**
- Sub-workflow or Webhook trigger
- Graceful no-captions handling

---

### 🔧 **Requirements**
- ✅ YouTube OAuth2 (`youtube.captions.read` scope)
- ✅ **Update credentials** in List Captions + Download VTT nodes
- ✅ n8n HTTP Request + Code nodes

---

### 💬 **Need Help?**
- [n8n Forum](https://community.n8n.io/)

**Happy Automating! 🎉**