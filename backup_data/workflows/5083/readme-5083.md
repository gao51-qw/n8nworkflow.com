# Medical records automation with Mistral OCR & Google Sheets

> 
This plug-and-play n8n workflow automates medical record digitization using Mistral’s OCR API and stores clean, structured data in Google Sheets. Whether you run a clinic or healthtech product, this no-code solution simplifies data entry from scanned or uploaded medical documents.

📌 Works seamlessly on both self-hosted and cloud-based n8n environments.
👥 Who is this for?
Hospitals and private clinics
Healthtech platforms & startups
Medical admin and document processing teams
Clinical researchers and labs
😓 What problem does it solve?
❌ Manual entry from printed forms
❌ Unstructured, scattered records
❌ Errors in data transcription
❌ Inconsistent document storage
✅ This automation brings consistency, structure, and speed to the way you handle medical documents.

✅ What this workflow does
Captures uploaded documents through a public form
Uploads file to Mistral for OCR processing
Extracts clean text from each page (PDF or image)
Parses patient fields (Name, DOB, Diagnosis, Medications, etc.)
Saves records into a structured Google Sheet
🛠️ Setup Instructions
Step 1: Google Sheet Prep

Create a Google Sheet with these columns (case-sensitive):

Name, Date of Birth, Patient ID, Date of Visit, Referring Physician, 
Department, Symptoms, Blood Pressure, Heart Rate, Temperature, 
Lab Results, Diagnosis, Medications, Next Appointment, Notes
Step 2: Mistral API Access

Sign up at Mistral AI
Get your API key
Ensure your plan supports file upload & OCR endpoints
Step 3: Google OAuth Credentials (Self-hosted or Cloud)

Go to n8n → Settings → Credentials, and add:

Google Sheets OAuth2
Scopes needed:
https://www.googleapis.com/auth/spreadsheets
Step 4: Import Workflow

Go to Workflows &gt; Import from File
Upload your JSON file
Replace:
Google Sheet document ID in the "Google Sheets" node
Your Mistral API key in HTTP Header Auth
Step 5: (Optional) Make Form Public

In Cloud-based n8n:

You can expose the form as a public page
Otherwise, connect it to your website form via webhook
🧩 Customization Tips
Extract More Fields

Update the "Data cleaning" node and extend the list of fields:

const fields = ["Name", "Diagnosis", "Medications", "Symptoms", ...];
Add EHR or Database Integration

After Google Sheets, chain your custom system:

PostgreSQL
Airtable
Supabase
MongoDB
Change Output Format

Want JSON or Markdown output for internal tools?
Use the Set or Code node before the final output step.

🧪 Troubleshooting
Issue	Fix
File upload fails	Check Mistral API key and file type
Google Sheets not updating	Verify credentials and document ID
No data parsed	Check OCR quality; verify field labels in document
Workflow not triggering	Ensure webhook or form is configured correctly
🌐 Self-Hosted vs Cloud Comparison
Feature	Self-Hosted	n8n Cloud
Public Form Access	Manual setup	Built-in
OAuth App Config	Required	Pre-configured
Storage Limits	Depends on server	Included with plan
Scalability	Fully customizable	Scales automatically
📣 Getting Support
n8n Docs
Mistral API Docs
n8n Community
Or reach out to: David Olusola (dimejicole21@gmail.com)
🌟 Like this template?
Give it a star in the template library and help other no-code builders discover it.

"Turn scanned documents into structured data with zero code."

## 📊 Basic Information

- **Workflow ID:** 5083
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 2053
- **Downloads:** 205
- **Created:** 2025/6/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5083)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×3)
- **googleSheets** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
