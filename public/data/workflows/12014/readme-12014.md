# Automate job search & resume matching with LinkedIn, Gemini AI & Google Sheets

> ## Description

This workflow helps you find and evaluate job opportunities automatically, without spending hours searching and comparing roles. It uses your resume to look for relevant jobs on LinkedIn, checks how well each role matches your profile, and organises everything neatly in Google Sheets so you can focus on applying to the best opportunities.

## How it works

On a schedule, the workflow downloads your resume from Google Drive and analyses it to understand your skills and experience. Based on this, it creates LinkedIn job searches and pulls in recent job listings. Each job is then reviewed using AI to compare the job description with your resume, produce a match score, suggest resume improvements, and generate a tailored cover letter. All results are saved to Google Sheets, and you’re notified by email when the run finishes.

## How to use

1. Make a copy of the Google Sheets template and keep it for your own job tracking.  
2. Upload your resume (PDF) to Google Drive.  
3. Connect your Google Drive, Google Sheets, Gmail, and AI credentials in n8n.  
4. Update the **Config** node with your preferences (remote work, Easy Apply, job limit).  
5. Paste your copied Google Sheet IDs into the workflow.  
6. Turn on the Schedule Trigger and activate the workflow.

## Requirements

- Google Drive account for storing your resume  
- Google Sheets account for tracking results  
- Gmail account for notifications  
- AI model access (Google Gemini or similar)  
- n8n (cloud or self-hosted)

## Customising this workflow

You can easily adapt this workflow to suit your goals. Change the job limits, locations, or remote preferences in the **Config** node. Update the AI prompts to target different roles or industries, or extend the workflow to send results to tools like Notion, a CRM, or your own application tracker.

## Good to know

This workflow is designed to help you screen and prepare for jobs, not to apply automatically. Match scores are a guide, not a guarantee, so it’s always worth reviewing roles manually. Also, since LinkedIn pages can change over time, you may occasionally need to update HTML selectors to keep things running smoothly.


## 📊 Basic Information

- **Workflow ID:** 12014
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 564
- **Downloads:** 56
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12014)

## 👤 Author

- **Name:** Dinakar Selvakumar
- **Username:** @jamesdinakar

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **googleDrive** 
- **extractFromFile** 
- **code** (×3)
- **httpRequest** (×2)
- **html** (×2)
- **splitOut** 
- **splitInBatches** 
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **gmail** 
- **scheduleTrigger** 
- **set** (×3)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
