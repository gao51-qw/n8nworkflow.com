# Summarize documents, images & spreadsheets with Gemma 3 on Ollama

> ![Add a heading.png](fileId:1876)
[Tutorial Video](https://www.youtube.com/watch?v=6f7715tnqjs)

🚀 Overview
Transform your file management with this intelligent workflow that automatically processes and summarizes any file dropped into a monitored folder. Using local AI powered by Ollama, this workflow provides instant insights for images, documents, and data files.
✨ Key Features

🔄 Automatic Processing: Monitors a folder and processes files instantly upon detection
🎯 Multi-Format Support: Handles images (JPG, PNG), documents (PDF), and data files (CSV, XLS)
🤖 AI-Powered Analysis: Uses Ollama's Gemma 3 model for intelligent content understanding
📝 Smart Summaries: Generates concise, informative summaries tailored to each file type
💾 Organized Output: Saves all summaries as text files with descriptive naming

🛠️ What It Does

Image Analysis: Describes visual content and identifies key elements in photos and graphics
Document Summarization: Extracts and summarizes text from PDF documents
Data Insights: Analyzes spreadsheet data and provides structural insights

📋 Prerequisites

Ollama Installation: Download and install Ollama on your system
Model Setup: Pull the Gemma 3 model with ollama pull gemma3:4b
Service Running: Ensure Ollama is running with ollama serve
Credentials: Configure Ollama API credentials in n8n

🔧 Setup Instructions

Clone this workflow to your n8n instance
Update the folder path in the "Local File Trigger" node to your desired monitoring directory
Configure Ollama credentials for all three AI model nodes
Test the workflow by dropping a sample file into your monitored folder

📊 Supported File Types
TypeExtensionsProcessingImages.jpg, .pngAI vision analysis and descriptionDocuments.pdfText extraction and summarizationData Files.csv, .xlsData structure analysis and insights
🎯 Perfect For

Content Creators: Quickly understand and catalog image collections
Researchers: Summarize academic papers and research documents
Data Analysts: Get instant insights into dataset structures
Knowledge Workers: Organize and understand file collections efficiently

🔒 Privacy & Security

100% Local Processing: All AI processing happens on your machine
No Cloud Dependencies: Files never leave your system
Private & Secure: Complete control over your data and processing

🚦 Getting Started
Simply drop any supported file into your monitored folder and watch as the workflow automatically:

Detects the file type
Processes the content appropriately
Generates an intelligent summary
Saves the result as a text file

Your intelligent file assistant is ready to help you understand and organize your digital content!

## 📊 Basic Information

- **Workflow ID:** 5858
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 580
- **Downloads:** 58
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5858)

## 👤 Author

- **Name:** Rish
- **Username:** @b2brish

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×10)
- **readWriteFile** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOllama** (×3)
- **localFileTrigger** 
- **switch** 
- **extractFromFile** (×3)
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
