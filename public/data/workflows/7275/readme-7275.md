# Convert radiology images to patient-friendly reports with GPT-4 Vision & PDF email

> This automated n8n workflow transforms uploaded radiology images into professional, patient-friendly PDF reports. It uses AI-powered image analysis to interpret medical scans, simplify technical terms, and produce clear explanations. The reports are formatted, converted to PDF, stored in a database, and sent directly to patients via email, ensuring both accuracy and accessibility.

## 🏥 **Workflow Overview:**

**Simple Process Flow:**
1. **Upload Image** → 2. **AI Analysis** → 3. **Generate Report** → 4. **Send to Patient**

## 🔧 **How It Works:**

1. **Webhook Trigger** - Receives image uploads via POST request
2. **Extract Image Data** - Processes patient info and image data
3. **AI Image Analysis** - Uses GPT-4 Vision to analyze the radiology image
4. **Process Analysis** - Structures the AI response into readable sections
5. **Generate PDF Report** - Creates a beautiful HTML report
6. **Convert to PDF** - Converts HTML to downloadable PDF
7. **Save to Database** - Logs all reports in Google Sheets
8. **Email Patient** - Sends the report via email
9. **Return Response** - Confirms successful processing

## 📊 **Key Features:**

- **AI-Powered Analysis** using GPT-4 Vision
- **Patient-Friendly Language** (no medical jargon)
- **Professional PDF Reports** with clear sections
- **Email Delivery** with report attachment
- **Database Logging** for record keeping
- **Simple Webhook Interface** for easy integration

## 🚀 **Usage Example:**

Send POST request to webhook with:
```json
{
  "patient_name": "John Smith",
  "patient_id": "P12345",
  "scan_type": "X-Ray",
  "body_part": "Chest",
  "image_url": "https://example.com/xray.jpg",
  "doctor_name": "Dr. Johnson",
  "patient_email": "john@email.com"
}
```

## ⚙️ **Required Setup:**

1. **OpenAI API** - For GPT-4 Vision image analysis
2. **PDF Conversion Service** - HTML to PDF converter
3. **Gmail Account** - For sending reports
4. **Google Sheets** - For logging reports
5. **Replace** `YOUR_REPORTS_SHEET_ID` with your actual sheet ID

Want a tailored workflow for your business? Our experts can craft it quickly [Contact our team](https://www.oneclickitsolution.com/contact-us/)



## 📊 Basic Information

- **Workflow ID:** 7275
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 556
- **Downloads:** 55
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7275)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **code** (×4)
- **httpRequest** (×2)
- **googleSheets** 
- **gmail** 
- **stickyNote** (×2)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
