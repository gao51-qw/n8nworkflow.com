# AI resume screening with Gmail, GPT-4o & Google Sheets - automated hiring pipeline

> # AI Resume Screening with GPT-4o & Google Drive - Automated Hiring Pipeline

## How it works

Transform your hiring process with this intelligent automation that screens resumes in minutes, not hours. The workflow monitors your Gmail inbox, processes resume attachments using AI analysis, and delivers structured candidate evaluations to a centralized Google Sheets dashboard.

**Key workflow steps:**
1. **Email Detection** - Monitors Gmail for resume attachments (PDF, DOCX, TXT)
2. **File Processing** - Uploads to Google Drive and extracts text content
3. **AI Analysis** - GPT-4o evaluates candidates against job requirements
4. **Data Extraction** - Pulls contact info and key qualifications automatically
5. **Results Logging** - Saves structured analysis to Google Sheets for team review

## Set up steps

**Total setup time: 15-20 minutes**

### Required Credentials (5 minutes)
- Gmail account with OAuth2 access
- Google Drive API credentials
- Google Sheets API access
- OpenAI API key for GPT-4o

### Configuration Steps (10 minutes)
1. **Connect Gmail trigger** - Authorize email monitoring
2. **Set up Google Drive folder** - Choose destination for resume files
3. **Create tracking spreadsheet** - Copy the provided Google Sheets template
4. **Add OpenAI credentials** - Insert your API key for AI analysis
5. **Customize job description** - Update the role requirements in the "Job Description" node

### Optional Customization (5 minutes)
- Modify AI scoring criteria in the recruiter prompt
- Adjust candidate information extraction fields
- Customize Google Sheets column mapping

**No coding required** - All configuration happens through the n8n interface using pre-built nodes and simple dropdown selections.

## Template Features

**Smart File Handling**
- Supports PDF, Word documents, and plain text resumes
- Automatic format conversion and text extraction
- Intelligent routing based on file type

**AI-Powered Analysis**
- GPT-4o evaluation against job requirements
- Structured scoring with strengths/weaknesses breakdown
- Risk and opportunity assessment for each candidate
- Actionable next-steps recommendations

**Seamless Integration**
- Direct Gmail inbox monitoring
- Automatic Google Drive file organization
- Real-time Google Sheets dashboard updates
- Clean data extraction for CRM integration

**Professional Output**
- Standardized candidate scoring (1-10 scale)
- Detailed justification for each evaluation
- Contact information extraction
- Resume quality validation

Perfect for HR teams, recruiting agencies, and growing companies looking to streamline their hiring pipeline with intelligent automation.

## 📊 Basic Information

- **Workflow ID:** 9046
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 450
- **Downloads:** 45
- **Created:** 2025/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9046)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **googleDrive** (×4)
- **switch** 
- **extractFromFile** (×2)
- **httpRequest** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **googleSheets** 
- **gmailTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
