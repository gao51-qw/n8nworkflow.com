## 🧾 What this workflow does

This workflow turns YouTube video links into ready-to-edit newsletter drafts using Dumpling AI and GPT-4o. It reads new video URLs from a Google Sheet, extracts their transcripts, summarizes them into email-friendly content, and logs the finished draft back into the same sheet. An email notification is also sent to alert the user once each draft is created.

---

## 👤 Who is this for

- Newsletter writers or marketers repurposing video content  
- YouTube creators building email follow-ups from videos  
- Agencies or VAs batching social → email content  
- Automation users streamlining content workflows

---

## ⚙️ How to set up

### ✅ Requirements
- **Google Sheet** with the following columns:  
  - `link` — YouTube video URL  
  - `blog post` — for saving the generated newsletter draft  
- Active accounts for:  
  - Dumpling AI (API for YouTube transcripts)  
  - OpenAI GPT-4 or GPT-4o  
  - Google Sheets  
  - Gmail (OAuth2 credential)

---

### 🔧 Setup steps

1. **Connect all credentials** using n8n's Credential Manager:
   - Google Sheets (OAuth2)
   - Dumpling AI (via HTTP Header Auth)
   - OpenAI
   - Gmail

2. **Update the sheet ID and tab name** in both Google Sheets nodes.

3. **Customize the GPT-4o prompt** (optional):
   - Located in the “GPT-4o: Write Newsletter Draft from Transcript” node
   - You can edit tone, structure, and audience targeting in the system message

4. **Verify email recipient** in the Gmail node and update if needed.

---

## 🧠 How it works

1. The workflow is triggered manually or on schedule.
2. It pulls YouTube links without drafts from the sheet.
3. Each video’s transcript is fetched using Dumpling AI.
4. GPT-4o summarizes the transcript into a clean, friendly newsletter format.
5. The draft is written back to the same row in Google Sheets.
6. An email is sent to notify the user that the draft is ready.

---

## 🛠️ Customization ideas

- Send finished drafts to Notion or Airtable instead of Sheets  
- Generate social media posts from the same transcript  
- Add automatic review steps using GPT scoring or editing  
- Trigger this on new form submissions or YouTube uploads instead

---

This is a fast, AI-powered way to turn long-form video content into clean, polished newsletters — ready to share or schedule with minimal editing.
