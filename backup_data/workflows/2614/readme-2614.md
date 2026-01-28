# Extract text from PDF and image using Vertex AI (Gemini) into CSV

> ![Cover1024x576.png](fileId:873)

# Case Study

I'm too lazy to record every transaction for my expense tracking. Since all my expenses are digital, I just extract the transactions from bank PDF statements and screenshots into CSV to import into my budgeting software.

[Click here to watch Youtube tutorial](https://www.youtube.com/watch?v=cDqrtSO_rHU)

# What this workflow does

- Upload your PDF or screenshots into Google Drive 
- It then passes the PDF/image to Vertex Gemini to do some A.I. image recognition
- It then sends the transactions as CSV and stores it into another Google Drive folder

# Setup
1. Set up 2 google drive folders. 1 for uploading and 1 for the output.
2. Input your Google Drive crendtials
3. Input your Vertex Gemini credentials

# How to adjust it to your needs
- You can upload other types of documents for information extraction. 
- You can extract any text data from any image or PDF
- You can adjust the A.I. prompt to do different things

## 📊 Basic Information

- **Workflow ID:** 2614
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 31304
- **Downloads:** 3130
- **Created:** 2024/12/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2614)

## 👤 Author

- **Name:** Keith Rumjahn
- **Username:** @rumjahn

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleDriveTrigger** 
- **switch** 
- **googleDrive** (×4)
- **extractFromFile** 
- **httpRequest** 
- **convertToFile** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
