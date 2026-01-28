# Monitor school admission updates with web scraping, Gemini AI & email alerts

> This N8N template helps keep track of multiple school websites for admission updates and sends an email notification.

## Good To Know
This template uses all free tier tools like Gemini for LLM, Email alerting, 

## How it works
- For each School Website provided:
	- Get & clean the content through HTTP Request Node
	- Gemini model takes the HTML content and defined prompt that instructs on how to identify if Pre-nursery Admissions for year 2026-207 have announced yet.
	- If LLM response confirms the announcement, trigger an email to the configured address.

## Features
- Scheduled daily checks
- HTTP scraping
- Google Gemini text extraction for admission for Pre-nursery
- Email alerts

## How to use
1. Import workflow. 
2. Provide already created or new Gemini API key within "Are admissions open" node.
2. Setup SMTP account credentials within "Send Email" node, along with From-Email and To-Email.
3. Finally update your list of School and their Admission URLs within "Shortlisted Schools" node.

## Customizing the workflow
1. It can be used for tracking school admissions for any class including Pre-Nursery/ Bal-vatika/ 1st etc. via modifying the prompt.
2. It can be used for tracking any school that has details uploaded on their websites and can be extracted via HTTP request node.


## 📊 Basic Information

- **Workflow ID:** 11691
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 27
- **Downloads:** 2
- **Created:** 2025/12/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11691)

## 👤 Author

- **Name:** Ishita Virmani
- **Username:** @aimasterishita

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **splitInBatches** (×2)
- **code** (×3)
- **emailSend** 
- **if** 
- **httpRequest** 
- **merge** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **stickyNote** (×3)
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
