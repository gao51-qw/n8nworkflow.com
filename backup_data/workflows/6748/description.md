# 🔧 How It Works
**This n8n workflow leverages an agentic AI solution, where multiple AI agents collaborate to process and generate tailored job application assets.

## ✅ Features
Agent-based AI Coordination: Utilizes multiple AI agents working in sequence to analyze the job description and generate results.

### Outputs:

A customized cover letter

An optimized resume (CV)

A list of interview preparation questions

Automated Delivery: The final outputs are created as Google Docs and stored in your connected Google Drive folder.

## 🧾 Input Requirement
Simply provide a LinkedIn job URL as the input.
Example: https://www.linkedin.com/jobs/view/4184156975

# ⚙️ Setup Instructions
To deploy and run this workflow, you'll need to configure the following credentials:

Google Cloud Platform (GCP)

Enable the Google Drive API

Set up OAuth credentials for n8n integration

OpenAI API Key

Needed for generating the content (cover letter, CV, and questions)

BrightData (formerly Luminati)

Used to scrape and extract job details from the LinkedIn job link

⚠️ Setup requires moderate technical familiarity with APIs and OAuth. A step-by-step configuration guide is recommended for beginners.

