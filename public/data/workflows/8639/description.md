# 🎙️ Audio-to-Insights Workflow (Form Upload + Google Drive Link)

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
