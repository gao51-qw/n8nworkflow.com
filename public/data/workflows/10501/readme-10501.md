# Automated student answer sheet evaluation with Gemini AI and Google Workspace

> ## Description:
This workflow automates the entire student exam evaluation process using AI and Google Workspace tools — no manual correction needed!

Teachers simply submit a form with their name and a scanned copy of a student’s answer sheet. The flow then:

Uses Gemini Document Analysis to extract answers from the scanned sheet.

Passes the extracted answers to an AI Evaluation Agent, equipped with the Question Paper and Correct Answer Sheet (connected via Google Docs tools).

The AI cross-checks each student answer, counts correct and incorrect responses, and calculates the total marks.

The results are recorded in two Google Sheets:

A Summary Sheet with overall student performance (Name, Teacher, Total Marks, etc.)

A Detailed Report Sheet logging each question, correct answer, student’s answer, and correctness status.

This workflow turns the tedious task of exam evaluation into a seamless AI-driven automation — ensuring speed, accuracy, and transparency in academic grading.

## Highlights:
✅ AI Document Understanding (Gemini Model)
✅ Intelligent Answer Comparison
✅ Automated Mark Calculation
✅ Real-Time Google Sheets Update
✅ No Code — Fully Built in n8n

## 📊 Basic Information

- **Workflow ID:** 10501
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 188
- **Downloads:** 18
- **Created:** 2025/11/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10501)

## 👤 Author

- **Name:** Abdul Matheen
- **Username:** @matheen

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleDocsTool** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×7)
- **googleSheets** (×2)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
