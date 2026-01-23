# Process resumes from Google Drive to ClickUp using GPT-4o and Google Sheets

> ## Description
Process new resumes from Google Drive, extract structured candidate data with AI, save to Google Sheets, and auto-create a ClickUp hiring task. Gain a centralized, searchable candidate database and instant task kickoff—no manual data entry. 🚀

## What This Template Does
- Watches a Google Drive folder for new resume PDFs and triggers the workflow. 📂
- Downloads the file and converts the PDF to clean, readable text. 📄
- Analyzes resume text with an AI Resume Analyzer to extract structured candidate info (name, email, phone, experience, skills, education). 🤖
- Cleans and validates the AI JSON output for reliability. 🧹
- Appends or updates a candidate row in Google Sheets and creates a ClickUp hiring task. ✅

## Key Benefits
- Save hours with end-to-end, hands-off resume processing. ⏱️
- Never miss a candidate—every upload triggers automatically. 🔔
- Keep a single source of truth in Sheets, always up-to-date. 📊
- Kickstart hiring instantly with auto-created ClickUp tasks. 🗂
- Works with varied resume formats using AI extraction. 🧠

## Features
- Google Drive “Watch for New Resumes” trigger (every minute). ⏲
- PDF-to-text extraction optimized for text-based PDFs. 📘
- AI-powered resume parsing into standardized JSON fields. 🧩
- JSON cleanup and validation for safe storage. 🧰
- Google Sheets append-or-update for a central candidate database. 📑
- ClickUp task creation with candidate-specific titles and assignment. 🎯

## Requirements
- n8n instance (cloud or self-hosted); recommended n8n version 1.106.3 or higher. 🔧
- Google Drive access to a dedicated resumes folder (PDF resumes recommended). 📂
- Google Sheets credential with edit access to the candidate database sheet. 📈
- ClickUp workspace/project access to create tasks for hiring. 📌
- AI service credentials for the Resume Analyzer step (add in n8n Credentials). 🤖

## Target Audience
- HR and Talent Acquisition teams needing faster screening. 👥
- Recruiters and staffing agencies handling high volumes. 🏢
- Startups and ops teams standardizing candidate intake. 🚀
- No-code/low-code builders automating hiring workflows. 🧩

## Step-by-Step Setup Instructions
- Connect Google Drive, Google Sheets, ClickUp, and your AI service in n8n Credentials. 🔐
- Set the Google Drive “watched” folder (e.g., Resume_store). 📁
- Import the workflow, assign credentials to all nodes, and map your Sheets columns. 🗂️
- Adjust the ClickUp task details (title pattern, assignee, list). 📝
- Run once with a sample PDF to test, then enable scheduling (every 1 minute). ▶️
- Optionally rename the email/task nodes for clarity (e.g., “Create Hiring Task in ClickUp”). ✍️

## 📊 Basic Information

- **Workflow ID:** 8529
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 189
- **Downloads:** 18
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8529)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **googleDrive** 
- **extractFromFile** 
- **code** 
- **googleDriveTrigger** 
- **clickUp** 
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
