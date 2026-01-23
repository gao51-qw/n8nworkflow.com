# AI-powered HR screening automation via Jotform

> ## Who's it for

- HR professionals and recruitment teams handling high application volumes
- Startup founders and hiring managers seeking to scale hiring efficiently
- Companies wanting consistent, objective candidate evaluation
- Teams spending 20+ hours per week on manual resume screening

## What it does

- Receives job applications automatically via Jotform webhook
- Downloads and parses resume PDFs using LlamaParse AI extraction
- Analyzes candidate qualifications with OpenAI GPT-4 (compatibility score, strengths, concerns, technical skills)
- Routes candidates into three categories based on AI score (1-10 scale)
- Sends personalized HTML emails: interview invitations for strong candidates (7-10), status updates for moderate (5-6), respectful rejections for weak matches (1-4)
- Generates detailed HR briefing emails for top candidates with interview questions and focus areas
- Completes full screening process in under 2 minutes per application

## How it works

- Jotform trigger captures new submissions with resume attachments
- HTTP requests fetch submission data and download PDF files
- LlamaParse extracts text from resume PDFs with status checking loop
- OpenAI AI Agent analyzes resume and cover letter, outputs structured JSON assessment
- JavaScript code parses AI output into usable data fields
- Switch node routes candidates to appropriate email path based on score
- Gmail nodes send customized HTML emails to candidates and HR team
- All processing happens automatically without manual intervention

## Set up requirements

- **Jotform account** with API key (form fields: name, email, phone, position, start date, interview preference, cover letter, resume upload)
- **LlamaCloud account** with API key for PDF parsing
- **OpenAI API key** with GPT-4o-mini access
- **Gmail OAuth2** credentials for sending emails
- Estimated setup time: 25-30 minutes
- Cost: ~$0.05-0.10 per application processed

## How to customize

- **Email templates**: Replace all placeholders (company name, HR manager, contact details, interview format, social links)
- **AI evaluation**: Edit AI Agent prompt to match your job requirements and scoring criteria
- **Score thresholds**: Adjust Switch node conditions to change candidate category ranges (default: 7+ strong, 5-6 moderate, &lt;5 weak)
- **Additional features**: Add Google Sheets logging, Slack notifications, calendar booking, or ATS integration
- **Branding**: Update HTML email colors, fonts, and styling to match company brand
- **HR notifications**: Change recipient email from default to your HR manager's address

## 📊 Basic Information

- **Workflow ID:** 9399
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 342
- **Downloads:** 34
- **Created:** 2025/10/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9399)

## 👤 Author

- **Name:** Nitin Dixit
- **Username:** @growthdesignstudio

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **jotFormTrigger** 
- **httpRequest** (×5)
- **if** 
- **wait** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **switch** 
- **gmail** (×4)
- **code** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
