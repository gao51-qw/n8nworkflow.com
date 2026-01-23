# Summarize PDFs with Groq AI and convert to audio using Qwen TTS

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### How it works
- **User Uploads PDF** : The workflow accepts a PDF via webhook.
- **Extract Text** : n8n extracts the text content from the PDF.
- **Summarize with AI** : The extracted text is passed to an AI model (Groq) with OpenAI model for summarization.
- **Generate Audio** : The summary text is sent to a TTS (Text-to-Speech) API (Qwen-TTS-Demo), you can use other free alternatives.
- **Serve Result** : The workflow outputs both Summary and Audio File URL (WAV link) which you can attached to your audioPlayer.

This allows users to read or listen to the summary instantly.

### How to use / Requirements
- **Import Workflow** : Copy/paste the workflow JSON into your n8n instance.
- **Set Up Input Trigger** : If you want users to upload directly you can use webhook or any other trigger.
- **Configure AI Node** : Add your own API key for (Groq / Open AI).
- **Configure TTS Node** : Add credentials for your chosen TTS service.
- **Run Workflow** : Upload a PDF and get back the summary and audio file url.

[n8n-smart pdf summarizer & voice generator](https://github.com/laiba5/n8n-assests/blob/45a18ec5cdb634dc3de88102b68f3b8476eb82a9/Smart%20PDF%20Summary%20and%20Voice.PNG)


Please reach out to me at [Laiba Zubair](https://www.linkedin.com/in/laiba-zubair-717783239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app) if you need further assistance with you n8n workflows and automations!

## 📊 Basic Information

- **Workflow ID:** 7470
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1266
- **Downloads:** 126
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7470)

## 👤 Author

- **Name:** Laiba
- **Username:** @laibazubair

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **extractFromFile** 
- **webhook** 
- **httpRequest** (×2)
- **code** (×2)
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
