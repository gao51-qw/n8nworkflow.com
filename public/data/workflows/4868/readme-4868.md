# Extract invoice data from Google Drive to Sheets with Mistral OCR and Gemini

> Extract data from any PDF or image invoice dropped in Google Drive directly into Google Sheets – powered by AI OCR. Free, fully modifiable n8n workflow. Optional add-ons for pro features.

🚀 What this template does

Stop typing invoice data by hand. Drop a PDF or phone-snapshot into your Invoices Inbox folder in Google Drive and this n8n workflow will:





Auto-OCR the document with the Mistral OCR API



Match any fields you list in Row 1 of your Google Sheet (totally schema-agnostic)



Append a clean, structured row – every time

Works with both PDFs and images, in any language supported by Mistral.

Template JSON included, ready to import into self-hosted or n8n Cloud

👀 Who’s this for?





Freelancers & agencies processing client invoices



Small finance teams on Google Workspace



Anyone self-hosting n8n who wants an AI OCR flow without glue-code

No coding skills required – but flow tweaking is possible for power users.

🛠 Upcoming PRO Add-Ons
I am also working on PRO add-ons for this template: 

Add-On #1 – Error Handling & Alerts (ships Jul 2025)• Flags missing fields, branches to Email/Slack notification; prevents silent failures



Add-On #2 – Auto-Currency Converter (ships Jul 2025)• Detects invoice currency symbol/code → converts Total into your base currency via a free FX API



Add-On #3 – VAT / GST Breakdown (ships Jul 2025)• Extracts VAT number, net, tax rate, tax amount, gross – ready for EU/UK/AU filings

To pre-order these please see: https://ysqander.gumroad.com/l/N8N-AI-Workflow-Invoice-Data-Extraction-LITE


## 📊 Basic Information

- **Workflow ID:** 4868
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 13126
- **Downloads:** 1312
- **Created:** 2025/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4868)

## 👤 Author

- **Name:** Ysqander
- **Username:** @ysqander

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **googleDriveTrigger** 
- **googleDrive** (×2)
- **merge** 
- **googleSheets** (×3)
- **httpRequest** (×6)
- **code** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **if** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
