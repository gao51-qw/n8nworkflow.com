# Generate AI-powered interview briefs from resumes using Google Sheets & GPT-4o

> ## Description
This workflow automates the creation of comprehensive interviewer brief packs by extracting candidate resume data and generating professional HTML interview preparation materials. It saves recruiters time by consolidating candidate information, analyzing resumes, and producing clean, styled reports that are instantly delivered via email.

**What This Template Does**

 1️⃣ Manual Trigger – Starts the workflow manually when needed
 2️⃣ Google Sheets – Retrieves candidate details (name, email, resume link)
 3️⃣ Google Drive – Downloads candidate resume (PDF) from the provided link
 4️⃣ PDF Extraction – Converts resume PDF into text for AI analysis
 5️⃣ Code Node – Merges resume text with candidate metadata from the sheet
 6️⃣ AI Brief Generation – GPT-4o-mini creates an HTML interviewer brief including:
- Candidate summary and background
- Job fit analysis with visual indicators
- Risk areas and concerns
- Targeted 5–7 interview questions
- Clean corporate HTML formatting

7️⃣ Azure OpenAI – Provides GPT-4o-mini model backend for AI analysis
 8️⃣ Gmail – Sends the generated brief pack to the recruitment team

**Prerequisites**
- Google Sheets with candidate data & resume links
- Google Drive API credentials (for resume downloads)
- n8n instance (self-hosted or cloud)
- Azure OpenAI API (GPT-4o-mini) for brief generation
- Gmail API credentials for distribution

**Step-by-Step Setup**
- Connect Google Sheets node to fetch candidate info.
- Use Google Drive Download node to pull resume PDFs.
- Extract text with PDF Text Extraction node.
- Merge extracted resume text + metadata with a Code node.
- Pass merged data to LangChain LLM node for AI brief creation.
- Style output with clean HTML + embedded CSS.
- Deliver final interviewer brief pack via Gmail node.

**Customization Ideas**
- Store completed briefs in Notion or ClickUp for recruiter access.
- Add Slack/Teams notifications when briefs are ready.
- Extend AI analysis to include competency scoring.
- Enable bulk processing for multiple candidates at once.

**Key Benefits**

 ✅ Standardized interviewer prep materials
 ✅ Saves hours of manual resume analysis
 ✅ AI-generated targeted interview questions
 ✅ Clean, responsive, print-friendly HTML format
 ✅ Automatic email distribution to hiring teams

**Perfect For**
- Recruitment teams needing consistent interviewer packs
- Hiring managers preparing for candidate discussions
- Agencies managing multiple candidate pipelines
- HR leaders standardizing interview quality


## 📊 Basic Information

- **Workflow ID:** 8514
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 40
- **Downloads:** 4
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8514)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **gmail** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **manualTrigger** 
- **googleDrive** 
- **extractFromFile** 
- **code** 
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
