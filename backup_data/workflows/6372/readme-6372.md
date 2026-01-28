# AI-powered auto-translate Google Slides presentation to any language with Gemini

> 
💬🗂️🤖 This workflow automates the **translation of Google Slides presentations** from **any languages**, while preserving the original formatting and slide structure. It leverages **Google APIs**, **AI translation (Gemini/PaLM)**, and modular execution for high flexibility and accuracy.

**DISCLAIMER**: texts are split by Google Slides APIs into small blocks, so the translation will not always be contextualized.

---

###  **Key Benefits**

* **⚡ Time-Saving**: Automates a typically manual and error-prone task of translating slides.
* **🌍 AI-Powered Accuracy**: Uses Google Gemini to provide context-aware translations while respecting defined rules.
* **🔒 Safe & Non-Destructive**: The original presentation is never modified — a new copy is always created.
* **🎯 Precision**: Skips irrelevant text (e.g., emails, URLs, names) to avoid mistranslation.
* **🔁 Modular & Scalable**: Uses subworkflows and batching, ideal for presentations with many slides.
* **🎨 Layout Preservation**: Keeps the original design and formatting intact.

---


### **How it Works**  
1. **Initialization**:  
   - The workflow starts with a manual trigger ("When clicking ‘Execute workflow’"). 
   - Set the language to translate (IMPORTANT **format ISO-639**) 
   - It duplicates a specified Google Slides presentation ("Duplicate presentation") to create a new copy for translation, preserving the original.  

2. **Slide Processing**:  
   - The workflow retrieves slides from the copied presentation ("Get slides from a presentation") and processes them in batches ("Loop Over Items").  
   - For each slide, text content is extracted ("Extract Text") using a custom JavaScript snippet, which identifies and collects text elements while retaining the slide's `objectId`.  

3. **Translation**:  
   - The extracted texts are passed to a LangChain agent ("Translation expert"), which translates the content from Italian to English. The agent follows strict guidelines (e.g., skipping URLs, brand names, etc.).  
   - The translated text is sent to the "Translate Google Slides" node, which replaces the original text in the presentation using the slide's `objectId` for targeting.  

4. **Execution Flow**:  
   - The workflow includes delays ("Wait 10 sec" and "Wait 3 sec") to manage API rate limits and ensure smooth execution.  
   - The process repeats for each batch of slides until all content is translated.  

---  

### **Set Up Steps**  
1. **Prerequisites**:  
   - Ensure access to the source Google Slides presentation (specified by `fileId` in "Duplicate presentation").  
   - Set up Google OAuth2 credentials for Google Drive and Slides (nodes reference credentials like "Google Slides account").  
   - Configure the Google Gemini (PaLM) API credentials for the translation agent.  

2. **Configuration**:  
   - Update the `fileId` in the "Duplicate presentation" node to point to your source presentation.  
   - Adjust the translation guidelines in the "Translation expert" node if needed (e.g., language pairs or exclusion rules).  
   - Modify batch sizes or wait times (e.g., "Wait 10 sec") based on API constraints.  

3. **Execution**:  
   - Run the workflow manually or trigger it via the "Execute Workflow" node from another workflow.  
   - Monitor progress in n8n’s execution log, as each slide is processed and translated sequentially.  

4. **Output**:  
   - The translated presentation is saved as a new file in Google Drive, with the filename including a timestamp (e.g., `NAME_PRESENTATION_{lang}_{timestamp}`).  

*Note*: The workflow is currently inactive (`"active": false`); enable it after configuration.

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 6372
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 800
- **Downloads:** 80
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6372)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSlides** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSlidesTool** 
- **splitOut** 
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **googleDrive** 
- **splitInBatches** 
- **code** 
- **wait** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **googleTranslateTool** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
