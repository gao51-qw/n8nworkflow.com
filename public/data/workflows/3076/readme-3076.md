# 🦜✨Use OpenAI to transcribe audio + summarize with AI + save to Google Drive

> # Automate Audio Transcription, AI Summarization, and Google Drive Storage

## Who is this for?  
**Content Teams**, **Researchers**, and **Administrators** who need to automatically process voice memos, meeting recordings, or interview audio into structured, searchable documents.

## What problem does this solve?  
Eliminates manual transcription work by automatically converting audio files into organized text documents with AI analysis, while maintaining human oversight through approval workflows.

## What this workflow does  
1. **Smart Audio Processing**:  
   - Triggers when new .m4a files appear in Google Drive  
   - Uses OpenAI's Whisper for accurate transcription  
   - Implements dual-format reporting (JSON + Markdown)  

2. **Human Oversight (optional)**:  
   - Requires email approval before processing  
   - 45-minute response window with escalation options  

3. **AI-Powered Analysis**:  
   - Generates structured JSON reports with:  
     - Key points & action items  
     - Sentiment analysis  
     - Technical terminology glossary  
   - Creates Markdown versions for easy reading  

4. **Document Management**:  
   - Stores raw transcripts + reports in Google Drive  
   - Automatic file naming with timestamps  
   - Sends completion alerts via Email/Telegram  

Workflow visualization showing audio file processing path

## Setup  
1. **Credentials Needed**:  
   - Google Drive API access  
   - OpenAI API key (GPT-4o-mini)  
   - Gmail & Telegram integrations  

2. **Configuration**:  
   - Set your Google Drive folder ID in 3 nodes  
   - Update email addresses in Gmail nodes  
   - Customize approval timeout in "Gmail User for Approval"  

3. **Customization Points**:  
   - File extension filters (.m4a)  
   - AI report templates and prompts  
   - Notification channels (Email/Telegram)  

## How to customize  
- **Approval Process**: Add SMS/Teams notifications via additional nodes  
- **File Types**: Modify filter node for .mp3/.wav support  
- **Analysis Depth**: Adjust GPT-4 prompts in "Summarize to JSON" nodes  
- **Storage**: Connect to Notion/Airtable instead of Google Drive  


## 📊 Basic Information

- **Workflow ID:** 3076
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 22698
- **Downloads:** 2269
- **Created:** 2025/3/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3076)

## 👤 Author

- **Name:** Joseph LePage
- **Username:** @joe

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **gmail** (×2)
- **stickyNote** (×8)
- **set** (×5)
- **@n8n/n8n-nodes-langchain.openAi** (×5)
- **filter** 
- **limit** 
- **googleDrive** (×7)
- **telegram** 
- **merge** 
- **manualTrigger** 
- **googleDriveTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
