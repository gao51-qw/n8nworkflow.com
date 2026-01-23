# ✨ AI Text Summarizer with Google Sheets Logging

Summarize large blocks of text into concise outputs using the [Text Summarizer AI API](https://rapidapi.com/PrineshPatel/api/text-summarizer-ai) and automatically log results in Google Sheets. This automation is ideal for content creators, marketers, researchers, and teams who need efficient summarization and record-keeping—without writing a single line of code.

---

## 🚀 Features

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Web Form Trigger**     | Collects title, content, mode (Paragraph/Bullet), and length preferences.  |
| **API Integration**      | Sends content to [Text Summarizer AI API](https://rapidapi.com/PrineshPatel/api/text-summarizer-ai) via RapidAPI.              |
| **Conditional Logic**    | Routes success and error cases appropriately.                               |
| **Google Sheets Logging**| Stores summaries or error messages into Google Sheets.                      |
| **Error Handling**       | Captures failed summaries and ensures no data is lost.                      |

---

## 🧠 Problem Solved

Manually summarizing long-form content is time-consuming and repetitive. Storing this output in structured logs (like Google Sheets) adds an extra layer of manual effort.

This workflow solves that by:

- 🔁 Automating AI-driven summarization using [Text Summarizer AI API](https://rapidapi.com/PrineshPatel/api/text-summarizer-ai).
- 📊 Storing results (or fallback errors) directly into a Google Sheet.
- ✅ Ensuring no request goes unlogged—even on API failure.

---

## 🎯 Use Cases

- 📝 **Blog Writers**: Quickly convert articles into summaries for social captions.
- 📚 **Students**: Break down textbook or lecture content.
- 🧠 **Knowledge Management**: Turn raw meeting notes into concise summaries.
- 📢 **SEO Teams**: Use bullet-point output for schema markup or meta descriptions.

---

## 🧩 Nodes in the Flow

| Node Name            | Purpose                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **On form submission** | Captures user input via form (title, content, mode, length).           |
| **Mapping**            | Formats input to match [Text Summarizer AI API](https://rapidapi.com/PrineshPatel/api/text-summarizer-ai) specs. |
| **HTTP Request**       | Sends POST request to the summarization API on [RapidAPI](https://rapidapi.com/PrineshPatel/api/text-summarizer-ai). |
| **If**                 | Validates whether a `summary` was returned.                            |
| **Wait**               | Adds short delay before writing to spreadsheet (success).              |
| **Google Sheets**      | Appends summary data to Google Sheet.                                  |
| **Wait1**              | Adds delay for error handling path.                                    |
| **Google Sheets1**     | Logs failure with an “Error occurred” message.                         |

---

## ✅ Benefits

- 🧠 **AI-Powered**: Uses [Text Summarizer AI API](https://rapidapi.com/PrineshPatel/api/text-summarizer-ai) for fast and contextual summaries.
- 📁 **Organized Logs**: Google Sheets integration ensures easy tracking and auditing.
- 🔐 **Reliable**: Captures all submissions, including failed ones.
- 🧩 **Customizable**: Easily adapt inputs or connect to other tools like Notion, Slack, or Airtable.

---

## 🛠️ Requirements

- ✅ n8n account (Cloud or Self-Hosted)
- ✅ Access to [Text Summarizer AI API](https://rapidapi.com/PrineshPatel/api/text-summarizer-ai)
- ✅ Google account (for Sheets integration)
- 🔑 API key from RapidAPI (used in the HTTP Request node)

---

## 🔄 Workflow Overview

1. User submits text and preferences (mode, length) via a form.
2. Workflow triggers and transforms the input.
3. Formatted data is sent to the [Text Summarizer AI API](https://rapidapi.com/PrineshPatel/api/text-summarizer-ai).
4. If a valid summary is returned:
   - Log it into Google Sheets.
5. If the API fails:
   - Log the error message instead.

---

## 📥 Import Instructions

- Open n8n and import the workflow JSON.
- Replace the `x-rapidapi-key` in the HTTP node with your personal RapidAPI key.
- Configure your Google Sheets credentials.
- Deploy and test. ✅

---

## 🔗 Suggested Extensions

- 🟢 Notion database logging  
- 🟣 Slack/Discord notification for each summary  
- 🔵 CSV download or Airtable sync  
 

---

## 🏷 Tags

`ai` `summarization` `text-processing` `rapidapi` `google-sheets` `automation` `markdown` `n8n` `Text Summarizer AI API`
___
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!
