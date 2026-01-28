# Match resumes to jobs automatically with Gemini AI and Decodo Scraping

> ## Match Resumes to Jobs Automatically with Gemini AI and Decodo Scraping

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

This automation intelligently connects candidate profiles to job opportunities. It takes an intake form with a short summary, resume link, and optional LinkedIn profile, then enriches the data using Decodo and Gemini. The workflow analyzes skills, experience, and role relevance, ranks top matches, and emails a polished HTML report directly to your inbox—saving hours of manual review and matching effort.

## Who’s it for?

This template is designed for recruiters, hiring managers, and talent operations teams who handle large candidate volumes and want faster, more accurate shortlisting. It’s also helpful for job seekers or career coaches who wish to identify high-fit openings automatically using structured AI analysis.

## How it works

1. Receive an intake form containing a candidate’s resume, summary, and LinkedIn URL.
2. Parse and summarize the resume with Gemini for core skills and experience.
3. Enrich the data using Decodo scraping to gather extra profile details.
4. Merge insights and rank job matches from Decodo’s job data.
5. Generate an HTML shortlist and email it automatically through Gmail.

## How to set up

1. Connect credentials for Gmail, Google Gemini, and Decodo.
2. Update the Webhook path and test your form connection.
3. Customize variables such as location or role preferences.
4. Enable **Send as HTML** in the Gmail node for clean reports.
5. Publish as **self-hosted** if community nodes are included.


## 📊 Basic Information

- **Workflow ID:** 9980
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 296
- **Downloads:** 29
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9980)

## 👤 Author

- **Name:** Fahmi Fahreza
- **Username:** @fahmiiireza

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×9)
- **set** 
- **switch** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@decodo/n8n-nodes-decodo.decodoTool** 
- **gmail** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.googleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
