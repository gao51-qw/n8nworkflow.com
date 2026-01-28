## Description
Automatically extract a structured skill matrix from PDF resumes in a Google Drive folder and store results in Google Sheets. Uses Azure OpenAI (GPT-4o-mini) to analyze predefined tech stacks and filters for relevant proficiency. Fast, consistent insights ready for review. 🔍📊

## What This Template Does
- Fetches all resumes from a designated Google Drive folder (“Resume_store”). 🗂️
- Downloads each resume file securely via Google Drive API. ⬇️
- Extracts text from PDF files for analysis. 📄➡️📝
- Analyzes skills with Azure OpenAI (GPT-4o-mini), rating 1–5 and estimating years. 🤖
- Parses and filters to include only skills with proficiency &gt; 2, then updates Google Sheets (“Resume store” → “Sheet2”). ✅

## Key Benefits
- Saves hours on manual resume screening. ⏱️
- Produces a consistent, structured skill matrix. 📐
- Focuses on intermediate to expert skills for faster shortlisting. 🎯
- Centralizes candidate data in Google Sheets for easy sharing. 🗃️

## Features
- Predefined tech stack focus: React, Node.js, Angular, Python, Java, SQL, Docker, Kubernetes, AWS, Azure, GCP, HTML, CSS, JavaScript. 🧰
- Proficiency scoring (1–5) and estimated years of experience. 📈
- PDF-to-text extraction for robust parsing. 🧾
- JSON parsing with error handling for invalid outputs. 🛡️
- Manual Trigger to run on demand. ▶️

## Requirements
- n8n instance (cloud or self-hosted).
- Google Drive access with credentials to the “Resume_store” folder.
- Google Sheets access to the “Resume store” spreadsheet and “Sheet2” tab.
- Azure OpenAI with GPT-4o-mini deployed and connected via secure credentials.
- PDF text extraction enabled within n8n.

## Target Audience
- HR and Talent Acquisition teams. 👥
- Recruiters and staffing agencies. 🧑‍💼
- Operations teams managing hiring pipelines. 🧭
- Tech hiring managers seeking consistent skill insights. 💡

## Step-by-Step Setup Instructions 
- Place candidate resumes (PDF) into Google Drive → “Resume_store”.
- In n8n, add Google Drive and Google Sheets credentials and authorize access.
- In n8n, add Azure OpenAI credentials (GPT-4o-mini deployment).
- Import the workflow, assign credentials to each node, and confirm folder/sheet names.
- Run the Manual Trigger to execute the flow and verify data in “Resume store” → “Sheet2”.
