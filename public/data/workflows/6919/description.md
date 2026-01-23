
This powerful n8n workflow helps you automatically re-engage cold leads by summarizing their past emails and generating personalized outreach with OpenAI. It pulls in contacts from Google Sheets, fetches their prior communication from Outlook, and then uses an AI agent to analyze, strategize, and write a draft re-engagement message — all automatically.

---

## ⚙️ What the Workflow Does

1. **📄 Get Contacts from Google Sheets**  
   - Pulls a list of contacts and their email addresses from a Google Sheet.

2. **📥 Search Emails from Outlook**  
   - For each contact, fetches all emails received from that address since January 1, 2025.

3. **📊 Aggregate Emails**  
   - Merges relevant email fields (`subject`, `body`, `createdDateTime`) into a single string for analysis.

4. **🧠 Use OpenAI to Analyze and Draft Response**  
   - AI Agent summarizes the lead’s communication history.
   - Suggests how to re-engage them in bullet points.
   - Writes a personalized draft email to re-initiate the conversation.

5. **📝 Save to Google Sheets**  
   - Appends or updates the original row with:
     - Summary of communication
     - Re-engagement ideas
     - Suggested subject line
     - Suggested email body

6. **📤 Create Draft Email in Outlook**  
   - Creates a draft email in your Microsoft Outlook account using the subject and body provided by OpenAI.
   - The email is not sent automatically — giving you a chance to review and personalize further.

---

## 🧰 What You'll Need

- **🔐 Google Sheets API connection**  
  - OAuth2 credential setup in n8n  
  - Make a copy of this [sample sheet](https://docs.google.com/spreadsheets/d/1rQD493GNtTWms6GF0Wracu9Yrm0AR0jxwaWdv8eJbUM)

- **🔐 Microsoft Outlook OAuth2 connection**  
  - Connected inbox with access to historical messages

- **🔐 OpenAI API Key**  
  - Add your OpenAI key in the `OpenAI Chat Model` node  
  - Recommended model: `gpt-4o-mini` or higher

---

## 👨‍💼 Built By

**Robert Breen**  
Automation Consultant | n8n Expert | Data Strategist  

🔗 Website: [https://ynteractive.com](https://ynteractive.com)  
📧 Email: [robert@ynteractive.com](mailto:robert@ynteractive.com)  
💼 LinkedIn: [https://www.linkedin.com/in/robert-breen-29429625/](https://www.linkedin.com/in/robert-breen-29429625/)

---

## 🏷 Tags

`openai` `outlook` `email reengagement` `lead nurturing` `automation` `google sheets` `ai email` `gpt-4o` `crm` `sales automation`
