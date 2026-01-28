# Generate sprint review summaries from transcripts with OpenAI and Google Sheets

> ## What this workflow does

This template automates the entire process of documenting **Sprint Reviews in Scrum**:  
1. **Input Collection** – Through a friendly form, users upload the **transcript file** (meeting notes, sprint review transcript, or VTT captions) and specify the sprint name and domain.  
2. **Transcript Parsing** – A Code node formats the transcript into clean [HH:MM:SS] Speaker: text lines, supporting VTT, Zoom, or custom timestamp formats used in Scrum events.  
3. **AI-Driven Summary** – The AI Agent (LangChain + OpenAI) produces a well-structured **AI summarization** in Markdown, including:  
   - A 3–5 bullet Executive Summary of sprint review highlights  
   - A Presentation Recap table (Timestamp | Presenter | Topics)  
   - A list of Action Items with owners (if recognizable from the transcript)  
4. **Preview** – The summary renders as a styled card with custom CSS for easy readability in n8n.  
5. **Archive** – Automatically appends a record to Google Sheets, saving the date, domain, sprint, transcript file name, and the **AI-generated sprint review summary**.  

## Why it’s useful
- **Zero manual summarizing** – AI extracts key insights from transcript files into Markdown you can instantly share with your Scrum team and stakeholders.  
- **Easy setup** – drag-and-drop import, plus form-based input for non-technical users during sprint reviews.  
- **Centralized tracking** – all past sprint summaries live in one spreadsheet for retrospectives, audits, and continuous improvement.  
- **Flexible and extendable** – you can switch to Airtable, Slack, or Notion, or refine the summary template to match your Scrum workflow.  

## Ideal for
- **Scrum Masters** wanting quick sprint review summaries for stakeholders  
- **Agile Coaches** analyzing sprint review transcripts, presentation patterns, and follow-up tasks  
- **Product Owners** keeping a searchable log of sprint outcomes and action items  

## Prerequisites / Credentials
- **OpenAI API Key** — required for the AI Agent node (or any other Agent for summarization)  
- **Google Sheets OAuth2 credentials** — required for saving sprint review data to Sheets  
- (Optional) Ensure LangChain / AI Agent nodes are installed in your n8n instance  

## How to Use This Template
1. Import the workflow JSON into your n8n instance.  
2. Set up credentials:  
   - For the **OpenAI LLM** node, provide your OpenAI API key  
   - In **Google Sheets**, configure OAuth2 and specify your spreadsheet ID (replace YOUR_SHEET_ID)  
3. **Create a new sheet** with the following columns:  
   - Date  
   - Domain  
   - Sprint name  
   - Content  
   - VTT file  
   - Transcript  
4. Enable and run the workflow.  
5. Fill out the form: upload transcript file, enter sprint & domain, click **Create Summary**.  
6. View the AI-generated Markdown sprint review summary in the preview card.  
7. Verify the new entry appears in your Google Sheet with all sprint details.  

## 📊 Basic Information

- **Workflow ID:** 8400
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 78
- **Downloads:** 7
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8400)

## 👤 Author

- **Name:** Arkadiusz
- **Username:** @akadiusz

## 🏷️ Categories

- Project Management
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **code** 
- **@n8n/n8n-nodes-langchain.agent** 
- **form** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
