# Find high-quality remote jobs with OpenAI, Decodo, and Google Sheets

> ##  What this workflow does

This workflow automates the discovery, evaluation, and notification of job opportunities based on a candidate’s professional profile.

It fetches remote job listings, compares each role against a structured candidate profile stored in Google Sheets, and uses AI to evaluate real alignment in terms of skills, seniority, salary, industry, and role complexity.

Only the most relevant opportunities are kept, stored in Google Sheets, and delivered via email as a Top 5 shortlist.

[Decodo – Web Scraper for n8n](https://visit.decodo.com/raqXGD)



## How to configure (quick setup)

1. Define the candidate profile in Google Sheets (skills, salary expectations, preferences).
![image.png](fileId:3866)

2. Configure credentials (Google Sheets, Gmail, decodo, AI provider).

3. Set the matching threshold (e.g. skill match ≥ 90%).

4. Run the workflow manually or on a schedule.

### Output

Structured job match results in Google Sheets

Automated email with the Top 5 best-matched job opportunities

![image.png](fileId:3867)

## 📊 Basic Information

- **Workflow ID:** 12304
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 30
- **Downloads:** 3
- **Created:** 2025/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12304)

## 👤 Author

- **Name:** Kevin Meneses 
- **Username:** @pythonia-kevin

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×10)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **@decodo/n8n-nodes-decodo.decodo** 
- **code** (×6)
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
