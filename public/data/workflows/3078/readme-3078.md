# 5 ways to process images & PDFs with Gemini AI in n8n

> ## How it works

Many users have asked in the support forum about different methods to analyze images and PDF documents with Google Gemini AI in n8n. This workflow answers that question by demonstrating five different approaches:

- Single image with auto binary passthrough - The simplest approach using AI Agent's automatic binary handling
- Multiple images with predefined prompts - For customized analysis with different instructions per image
- Native n8n item-by-item processing - For handling multiple items using n8n's standard workflow paradigm
- PDF analysis via direct API - For document analysis and text extraction
- Image analysis via direct API - For direct control over API parameters
- Each method has advantages depending on your specific use case, data volume, and customization needs.

## Set up steps

**Setup time**: ~5-10 minutes

You'll need:

- A Google Gemini API key
- n8n with HTTP Request and AI Agent nodes
- Important: For the HTTP Request nodes making direct API calls to Gemini (Methods 3, 4, and 5), you'll need to set up Query Authentication with your Gemini API key. Add a parameter named "key" with your API key value in the Query Auth section of these nodes.

I'll updated this if I find better ways. Also let me know if you know other ways. Eager to learn :) 


## 📊 Basic Information

- **Workflow ID:** 3078
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 25174
- **Downloads:** 2517
- **Created:** 2025/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3078)

## 👤 Author

- **Name:** Julian Kaiser
- **Username:** @jksr

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **httpRequest** (×8)
- **splitOut** (×2)
- **extractFromFile** (×3)
- **splitInBatches** 
- **set** (×2)
- **stickyNote** (×6)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
