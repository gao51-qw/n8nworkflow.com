# Web security scanner for OWASP compliance with Markdown reports

> **How the n8n OWASP Scanner Works & How to Set It Up**

**How It Works (Simple Flow):**
- **1. Input**: Enter target URL + endpoint (e.g., `https://example.com`, `/login`)
- **2. Scan**: This workflow executes 5 parallel HTTP tests (Headers, Cookies, CORS, HTTPS, Methods)
- **3. Analyze**: Pure JS logic checks OWASP ASVS (Application Security Verification Standard) rules (no external tools)
- **4. Merge**: Combines all findings into one Markdown report
- **5. Output**: Auto-generates + downloads `scan-2025-11-16_210900.md`** (example filename)
- **6. Email:** (Optional) Forward the report to an email address using Gmail.

---

**Setup in 3 Steps (2 Minutes)**

1. **Import Workflow**
   - Copy the full JSON (from "Export Final Workflow")
   - In n8n → **Workflows** → **Import from JSON** → Paste → Import

2. **(Optional) Connect your Gmail credentials**
   - In the last node to auto-email the report

3. **Click Execute the workflow** 
   - Enter a URL in the new window, then click 'submit'.

*You can alternatively download or receive the Markdown report directly from the Markdown to File node* 

---
  
*(Supports any HTTP/HTTPS endpoint. Works in n8n Cloud or self-hosted.)*

## 📊 Basic Information

- **Workflow ID:** 10898
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 563
- **Downloads:** 56
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10898)

## 👤 Author

- **Name:** Sean Birmingham
- **Username:** @knute

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **gmail** 
- **formTrigger** 
- **merge** 
- **code** (×7)
- **httpRequest** (×5)
- **set** (×3)
- **if** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
