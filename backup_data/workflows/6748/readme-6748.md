# Generate tailored resumes, cover letters & interview prep from LinkedIn jobs with AI

> # 🔧 How It Works
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



## 📊 Basic Information

- **Workflow ID:** 6748
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 2969
- **Downloads:** 296
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6748)

## 👤 Author

- **Name:** jun shou
- **Username:** @pureleow

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@brightdata/n8n-nodes-brightdata.brightData** (×2)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **executeWorkflow** (×2)
- **googleDocs** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
