# Extract structured candidate data from resumes with GPT AI

> ![Resume Parsing with AI](https://img.youtube.com/vi/2SUPiNmLWdA/maxresdefault.jpg)

## Who is this for?

This workflow is perfect for HR teams, recruiters, and hiring platforms that need to automate the extraction of key candidate details—like name, email, skills, and education—from resume files submitted in various formats.

## What problem does this solve?

Manually reviewing and extracting structured data from resumes is time-consuming and error-prone. This automation eliminates that bottleneck, standardizing candidate data for seamless integration into CRMs, applicant tracking systems, or Google Sheets.

## What this workflow does

This n8n template listens for uploaded resume files, detects their format (PDF, DOC, TXT, CSV, etc.), and automatically extracts the raw text using n8n’s built-in file extraction tools. The extracted text is then parsed using an OpenAI-powered agent that returns structured fields such as:

- Full Name  
- Email Address  
- Skill Keywords  
- Education Details  

Optionally, you can push the structured output to Google Sheets (node included, currently disabled).

## Setup

1. Clone this workflow into your n8n instance.
2. Enable the `When chat message received` trigger if using n8n chat.
3. Provide your OpenAI credentials and enable the LangChain Agent node.
4. (Optional) Connect Google Sheets by authenticating with your Google account and filling in your target document and sheet.

Watch the setup and demo video here:  
🎥 [https://youtu.be/2SUPiNmLWdA](https://youtu.be/2SUPiNmLWdA)

## How to customize

- Modify the OpenAI system message to extract different fields (e.g., phone number, LinkedIn).
- Replace the Google Sheets node with a webhook to push results to your ATS.
- Add filters to limit accepted file types or max file size.

&gt; ⚠️ This template is designed to be secure. It uses credentials stored in the n8n credential manager—no hardcoded secrets required.


## 📊 Basic Information

- **Workflow ID:** 5752
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1584
- **Downloads:** 158
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5752)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **switch** 
- **set** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** 
- **extractFromFile** (×8)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
