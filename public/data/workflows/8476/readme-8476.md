# Automate invoice processing with AI data extraction, Google Drive & Sheets

> # 🧾 Automated Invoice Processing - n8n Workflow

## 📖 **Workflow Description**

This n8n workflow automates the complete processing of PDF invoices with AI-powered data extraction. The workflow monitors a Google Drive folder, extracts important invoice data, and automatically organizes files in a structured filing system.

---

## 🎯 **Features**

- **🔍 Automatic monitoring** of a Google Drive folder for new PDF files
- **🤖 AI-powered data extraction** from invoices (customer, amount, date, etc.)
- **📁 Intelligent file sorting** by year and month
- **📝 Automatic renaming** following a consistent schema
- **📊 Central documentation** in Google Sheets

---

## 🔧 **Required Integrations**

### **Required Accounts:**
- Google Drive (with folder permissions)
- Google Sheets (with write permissions)
- Google Gemini API (for AI data extraction)

### **Used n8n Nodes:**
- Google Drive Trigger
- Google Drive (File Operations)
- Google Sheets
- Extract from File (PDF)
- Information Extractor (LangChain)
- Google Gemini Chat Model
- Split in Batches

---

## 📋 **Workflow Steps in Detail**

### **1. Monitoring & Triggering**
- **Google Drive Trigger** monitors a defined input folder
- Automatically starts when new PDF files are detected
- **Split in Batches** enables batch processing of multiple files

### **2. File Processing**
- **GetFile** downloads PDF files from Google Drive
- **ExtractFromPDF** converts PDF content to text
- Supports scanned documents as well

### **3. AI Data Extraction**
The **Information Extractor** node with **Google Gemini** extracts:
- Company name/sender
- Customer name and customer number
- Invoice number and date
- Net and gross amount
- Value-added tax
- Article description
- Month and year (for sorting)

### **4. Automatic Filing**
- **GetYearFolder** searches/creates year folders
- **GetMonthFolder** searches/creates month folders
- **MoveFile** moves invoice to correct folder
- **UpdateFileName** renames file (schema: "Customer Month Year")

### **5. Documentation**
- **AddToOverview** enters all data into Google Sheets table
- Enables central overview and analysis

---

## ⚙️ **Setup Instructions**

### **Step 1: Prepare Google Drive**

Create the following folder structure in Google Drive:

```
📁 [Input Folder] (e.g., "Invoices-Inbox")
📁 [Main Folder] (e.g., "Accounting")
   └── 📁 2024
       ├── 📁 January
       ├── 📁 February
       ├── 📁 March
       └── ... (all months)
   └── 📁 2025
       └── ... (all months)
```

### **Step 2: Create Google Sheets Table**

Create a spreadsheet with the following columns:
- Customer Number
- Customer
- [Company Name] Location
- Invoice Date
- Invoice Number
- VAT
- Net Amount
- Month
- Year

### **Step 3: Configure Workflow**

#### **Configure Google Drive Trigger:**
- Select your input folder as "Folder to Watch"
- Set "Event" to "fileCreated"
- Activate the trigger

#### **Search files and folders:**
- Select the same input folder as filter

#### **Customize Information Extractor:**
- Adapt attribute names to your needs
- Change company name in description
- Adjust system prompt if needed

#### **GetYearFolder & GetMonthFolder:**
- Set the correct folder ID for your main folder
- Check query string for year/month search

#### **AddToOverview:**
- Select your Google Sheets table
- Map columns according to your table

---

## 🔧 **Customization Options**

### **Extend Data Extraction:**
Add more attributes in the Information Extractor node:
```json
{
  "name": "Payment Terms",
  "description": "Days until payment due",
  "required": false
}
```

### **Customize File Naming:**
Change the schema in the UpdateFileName node:
```
"{{ $('Information Extractor').item.json.output.InvoiceNumber }} - {{ $('Information Extractor').item.json.output.Customer }}"
```

### **Change Monitoring Interval:**
In Google Drive Trigger under "Poll Times" select different intervals.

---

## 🚨 **Important Notes**

### **⚠️ Permissions:**
- Google Drive: Full access to configured folders
- Google Sheets: Write permission for target table
- Google Gemini: Valid API key required

### **📝 Data Format:**
- Works with German number formats (comma as decimal separator)
- Date format: YYYY-MM-DD
- Supports various PDF formats

### **🔄 Error Handling:**
- Workflow fails if folders are missing
- Incomplete PDFs may lead to incomplete extractions
- Check logs for troubleshooting

---

## 📊 **Performance & Limitations**

- **Processing time:** 30-60 seconds per invoice
- **Supported formats:** PDF (text and OCR)
- **Batch processing:** Yes, multiple files simultaneously
- **AI accuracy:** ~95% for standardized invoices

---

## 🧪 **Testing**

1. **Run Test:**
   - Upload a test PDF to the input folder
   - Monitor workflow execution in n8n
   - Check results in Google Sheets
   - Verify correct file movement and renaming

2. **Error Diagnosis:**
   - For errors: check n8n logs
   - Consider Google API quotas
   - Validate folder permissions

---

## 📄 **License & Support**

This workflow can be used and customized freely. For configuration questions or issues, check the n8n community or Google API documentation.

**Tip:** Start with a few test invoices before using the workflow in production!

## 📊 Basic Information

- **Workflow ID:** 8476
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 609
- **Downloads:** 60
- **Created:** 2025/9/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8476)

## 👤 Author

- **Name:** Romain
- **Username:** @romi-walker

## 🏷️ Categories

- Invoice Processing
- AI Summarization

## 🔗 Nodes Used

- **googleDrive** (×9)
- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **extractFromFile** 
- **splitInBatches** (×2)
- **googleSheets** 
- **googleDriveTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitOut** (×2)
- **set** (×2)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
