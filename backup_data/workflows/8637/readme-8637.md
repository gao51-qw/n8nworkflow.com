# Match CVs to job descriptions with Gemini analysis & email reports

> ## AI-Powered CV Feedback & Fit Score

This workflow uses AI to automatically analyze a candidate’s CV against any job posting. It extracts key skills, requirements, and gaps, then generates a clear fit summary, recommendations, and optimization tips. Candidates also receive a structured email report, helping them improve their CV and focus on the right roles.

**No more guesswork, the workflow delivers objective, AI-powered career insights in minutes.**

## Benefits

•	Automated CV analysis: Instantly compare your CV with any job description.
•	Clear recommendations: Get a fit score (1–10) plus “Apply,” “Consider,” or “Not a fit.”
•	Actionable feedback: See missing skills and concrete optimization tips.
•	Email reports: Candidates receive a professional summary directly in their inbox.

## Target Audience

•	Job seekers 
•	Career coaches and recruiters
•	HR teams evaluating candidate job alignment
•	Tech bootcamps and training programs

## Required APIs
•	Google Gemini API (AI analysis)
•	Email credentials (send candidate reports)

## Easy Customization
•	Fit score logic: Adjust thresholds for “Apply,” “Consider,” and “Not a fit.”
•	Email templates: Personalize branding, tone, or add follow-up resources.
•	Delivery channels: Add Slack, Teams, or WhatsApp nodes for real-time feedback.
•	Language detection: Extend to more languages by adding translation nodes.


## 📊 Basic Information

- **Workflow ID:** 8637
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 549
- **Downloads:** 54
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8637)

## 👤 Author

- **Name:** Mychel Garzon
- **Username:** @mychel-garzon

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **extractFromFile** 
- **set** 
- **httpRequest** 
- **merge** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×6)
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
