## 🧾 CV Anonymization & Reformatting Automation

An advanced N8N workflow to anonymize and reformat resumes for internal or external distribution

### 🔍 Overview
This template **automates the anonymization, structuring, and reformatting of CVs/resumes** using a combination of AI, PDF parsing, and Google Apps Script. It’s ideal for companies or teams that need to showcase their workforce—while ensuring candidate privacy and presenting the information in a standardized format.

### 👥 Who it's for
- HR departments
- Consulting agencies
- Project managers needing anonymized candidate profiles
- Any enterprise team required to share CVs in a consistent, brand-compliant, and privacy-conscious way

### ⚙️ What it does
1. Watches a Folder for new PDFs (CVs)
Extracts Content from the PDF
2.Uses Gemini Flash 2.0 to intelligently structure the resume content
3. Stores the structured data in a Google Sheet
4. Generates a New CV from a customizable template via Google Apps Script
5. Anonymizes Names (e.g. “John Doe” → “J. D.”)
5. (Optional) Sends or downloads the final anonymized version

### 🛠️ Setup Requirements
To use this workflow, you’ll need to configure:

- Your input/output folders
Field mappings (e.g. what to extract)
- A Google Apps Script endpoint for PDF generation
- A Google Sheet acting as your structured data database
- A Gemini API key and access (or any other LLM)

### 💡 Templates are customizable: you can define your own layout as long as the placeholders match your database field names.

### ✨ Customization Ideas
Automatically email the anonymized CV to a recipient
Use conditional logic to switch templates (e.g. for different roles or departments)
Add a second formatting layer for internal vs external audiences