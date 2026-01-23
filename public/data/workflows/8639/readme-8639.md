# Audio to executive brief: Transcribe & analyze with AssemblyAI and GPT-4

> # 🎙️ Audio-to-Insights Workflow (Form Upload + Google Drive Link)

## Description
This workflow enables seamless **speech-to-text transcription, AI-powered summarization, sentiment analysis, and automated email delivery**.  
It supports two different input modes:

- **Form Upload (Local File)**
- **Form Submission (Google Drive Link)**

---

## How it Works
1. **Input**
   - Form 1: Upload an audio file (e.g., .mp3,.wav,.mp4)
   - Form 2: Submit a Google Drive link

2. **File Handling**
   - Local uploads go directly to AssemblyAI.
   - Drive links are parsed → File ID extracted → File fetched → Sent to AssemblyAI.

3. **Transcription**
   - AssemblyAI generates transcript text with punctuation and highlights.
   - Workflow loops with `Wait + If` until transcript status = `completed`.

4. **AI Analysis**
   - Transcript is passed to OpenAI.
   - Generates a structured output including:
     - Executive summary
     - Sentiment label & score
     - Key points
     - Action items
     - Notable quotes
     - Topics

5. **Email Delivery**
   - A formatted email is sent via Gmail with the summary and insights.

---

## Features
- Dual input support: Google Drive OR direct upload
- Handles long-running jobs with `Wait + If` polling
- AI-powered transcript analysis with structured JSON
- Automated sentiment scoring and summary generation
- Professional HTML email reports

---

## Requirements
- AssemblyAI API Key – transcription
- Google Drive OAuth2 – file fetch
- OpenAI API Key – summarization & sentiment analysis
- Gmail OAuth2 – email delivery

---

## How to Use
1. Import this workflow into your n8n instance.
2. Add and configure the required credentials.
3. Update placeholders for:
   - AssemblyAI API Key
   - Google Drive Link
   - Gmail ID
4. Trigger via either form (local file or Google Drive link).
5. 5.For long recordings, split before uploading (10–20 min per chunk, 2–5s overlap).Keep audio consistent (e.g., WAV/MP3, 16 kHz mono if possible).Process chunks sequentially and combine summaries/action items at the end.
---

## Customising this Workflow
- Adjust the OpenAI prompt to fit your reporting style (executive summary, bullet points, etc.).
- Extend email formatting with logos or branding.
- Add Slack, CRM, or Notion integrations for distribution.

---

## Use Cases
- Meeting or lecture transcription with summaries
- Podcast analysis with highlights and quotes
- Business call reviews with action item extraction
- Academic seminar notes emailed automatically


## 📊 Basic Information

- **Workflow ID:** 8639
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 429
- **Downloads:** 42
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8639)

## 👤 Author

- **Name:** Sridevi Edupuganti
- **Username:** @edupuganti

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **wait** 
- **if** 
- **stickyNote** (×8)
- **httpRequest** (×5)
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 
- **noOp** 
- **code** 
- **googleDrive** 
- **formTrigger** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
