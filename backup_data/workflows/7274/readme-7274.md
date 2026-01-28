# Simplify medical lab reports with Ollama AI and email delivery system

> This automated n8n workflow streamlines the process of receiving, processing, and delivering patient-friendly lab reports with precautionary advice.

## 🏆 **Minimal But Complete Design:**

### **Node Flow:**
1. **📧 Email Trigger** → Monitors inbox for lab reports
2. **📄 PDF Extract** → Processes attachments & extracts content 
3. **🤖 AI Simplify** → Converts medical jargon to simple language
4. **✨ Format Response** → Creates beautiful patient-friendly layout
5. **📤 Send Report** → Delivers simplified report via email

## 🚀 **Key Features:**

### **✅ Automatic Processing:**
- Monitors email for lab report PDFs
- Extracts content from attachments
- No manual intervention needed

### **✅ AI-Powered Simplification:**
- Converts complex medical terms to plain English
- Explains what each test result means
- Adds ✅/⚠️ indicators for normal/abnormal results

### **✅ Patient-Friendly Output:**
- Professional HTML email formatting
- Clear sections: Summary, Results, Precautions
- Includes next steps and follow-up advice

### **✅ Built-in Safety:**
- Always includes medical disclaimers
- Encourages consulting healthcare providers
- Handles edge cases with fallbacks

## 🛠️ **Setup Requirements:**

### **APIs Needed:**
- **IMAP Email** (Gmail, Outlook, etc.)
- **Ollama AI Model** (Local medical AI)
- **SMTP Email** (Sending service)

### **Quick Configuration:**
1. Import the JSON into n8n
2. Set up email credentials (IMAP + SMTP)
3. Configure Ollama medical model
4. Test with a sample lab report

## 📋 **Sample Output:**
```
🩺 Your Lab Report - Simplified

✅ CHOLESTEROL: 180 mg/dL - Normal! 
   Good job maintaining healthy levels.

⚠️ BLOOD SUGAR: 126 mg/dL - Slightly high
   Normal is under 100. Consider reducing sugar intake.

🔬 VITAMIN D: 25 ng/mL - Low
   You may need supplements. Ask your doctor.

📋 PRECAUTIONS:
• Eat more fruits and vegetables
• Exercise 30 minutes daily  
• Schedule follow-up in 3 months
• Watch for: excessive thirst, fatigue


## 📊 Basic Information

- **Workflow ID:** 7274
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 355
- **Downloads:** 35
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7274)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **emailReadImap** 
- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **emailSend** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
