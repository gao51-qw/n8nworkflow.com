# Summarize YouTube transcripts in any language with Google Gemini & Google Docs

> ### **YouTube Transcript Summarization in Any Language for Social Media**

This n8n workflow automates the process of:

1. **Retrieving YouTube Video Transcripts:**  
   It fetches the transcript for any YouTube video URL provided using the **[YouTube Transcript API](https://rapidapi.com/skdeveloper/api/youtube-transcriptor-pro)** from **RapidAPI**.

2. **Generating a Concise Summary in Any Language:**  
   The workflow uses **Google Gemini (PaLM)** to create a concise summary of the transcript in the language specified by the user (e.g., English, Spanish, etc.).

3. **Storing the Summary in Google Docs:**  
   The generated summary is inserted into a predefined **Google Document**, making it easy for users to share or edit.

### **Features:**
- **Language Flexibility:** Summaries are created in the desired language.
- **Fully Automated:** From fetching the transcript to updating Google Docs, the process is fully automated.
- **Social Media Ready:** The summary is formatted and stored in a Google Doc, ready for use in social media posts.

This workflow integrates with **[YouTube Transcript API](https://rapidapi.com/skdeveloper/api/youtube-transcriptor-pro)** via **RapidAPI**, allowing you to easily fetch video transcripts and summarize them with AI. The entire process is automated and seamless.

### **Powered by RapidAPI:**
- **API Used:** [YouTube Transcript API](https://rapidapi.com/skdeveloper/api/youtube-transcriptor-pro) via **RapidAPI** to get the transcript data.

---

### **Benefits:**
- **Saves Time:** Automates the transcript summarization process, eliminating the need for manual content extraction and summarization.
- **Customizable Language Support:** Provides summaries in any language, enabling accessibility and engagement for a global audience.
- **Streamlined Content Creation:** Automatically generates concise, engaging summaries that are ready for social media use.
- **Google Docs Integration:** Saves summaries directly into a Google Doc for easy sharing, editing, and content management.

---

### **Challenges Addressed:**
- **Manual Transcript Extraction:**  
  **Problem:** Manually transcribing and summarizing YouTube videos for social media can be time-consuming and error-prone.  
  **Solution:** This workflow fully automates the process, saving hours of manual work using the **[YouTube Transcript API](https://rapidapi.com/skdeveloper/api/youtube-transcriptor-pro)**.

- **Lack of Language Support in Summaries:**  
  **Problem:** Many automated tools only summarize content in a single language, limiting their accessibility.  
  **Solution:** With language flexibility, the workflow creates summaries in the language of your choice, helping you cater to diverse audiences.

- **Inconsistent Video Quality & Transcript Accuracy:**  
  **Problem:** Not all YouTube videos have well-structured or accurate transcripts, leading to incomplete or inaccurate summaries.  
  **Solution:** The workflow can process and format even imperfect transcripts, ensuring that the generated summaries are still accurate and useful.

- **Managing Content Across Platforms:**  
  **Problem:** Transcripts and summaries often need to be stored in multiple locations for social media posts, which can be cumbersome.  
  **Solution:** The workflow integrates with Google Docs to automatically store and manage summaries in one place, making it easier to share and reuse content.

---


## 📊 Basic Information

- **Workflow ID:** 5866
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1908
- **Downloads:** 190
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5866)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleDocs** 
- **set** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequest** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
