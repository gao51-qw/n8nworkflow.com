# Recognize invoices / receipts from Google Drive and put them into Google Sheets

> This workflow allows you to recognize a folder with receipts or invoices (make sure your files are in .pdf, .png, or .jpg format). The workflow can be triggered via the "Test workflow" button, and it also monitors the folder for new files, automatically recognizing them.

## Video Demo
https://youtu.be/mGPt7fqGQD8

### 1. n8n import glitch
After import, the trigger node "When clicking 'Test workflow'" might be disconnected. You need to connect it via 2 arrows to "Google Sheets1" and "Google Drive" nodes. So, the workflow has 2 triggers - via button, and via Google Sheets "new file" event - both of these triggers should be connected to 2 nodes.
Here is how it should look like: https://ocr.oakpdf.com/n8n_fix.png


### 2. Set up RapidAPI HTTP auth key
Create new "HTTP header" n8n credential and paste your RapidAPI key from https://rapidapi.com/restyler/api/receipt-and-invoice-ocr-api  into it. https://ocr.oakpdf.com/n8n_api_key.png

Make sure "HTTP Request" node uses this credential.

### 3. Set up your Google Auth
You need a Google connection to work with your Google Sheets and Google Drive accounts: https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/#finish-your-n8n-credential

### 4. Set up Google Sheets
Copy this Google Sheets document: https://docs.google.com/spreadsheets/d/1G0w-OMdFRrtvzOLPpfFJpsBVNqJ9cfRLMKCVWfrTQBg/edit?usp=sharing

## Custom document formats and advanced usage
Email: contact@scrapeninja.net 
Linkedin: https://www.linkedin.com/in/anthony-sidashin/


## 📊 Basic Information

- **Workflow ID:** 2389
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 9711
- **Downloads:** 971
- **Created:** 2024/8/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2389)

## 👤 Author

- **Name:** Anthony
- **Username:** @scrapeninja

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** 
- **httpRequest** 
- **code** 
- **googleDriveTrigger** 
- **googleDrive** (×2)
- **merge** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
