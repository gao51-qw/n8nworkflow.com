# n8n enterprise AI security firewall — guardrails for secure agents

> # 🛡️ n8n Guardrails: Risk Ranking

This workflow provides a complete testing rig for evaluating text against **seven essential AI guardrails** used in production systems.  
It helps you detect jailbreak attempts, PII exposure, NSFW content, secret key leaks, malicious URLs, topical misalignment, and keyword violations.  
Use the included **Google Sheet or CSV** to batch-test multiple inputs instantly.

---

## ## How It Works (Internal Workflow Overview)

### **1. Load Input Rows**
The workflow reads each test entry (Guardrail_Type + Input_Text) from a Google Sheet or CSV.

### **2. Route to the Correct Guardrail**
A Switch node sends the text to the appropriate guardrail:
- Jailbreak  
- PII  
- Secret Keys  
- NSFW  
- URLs  
- Topical Alignment  
- Keywords  

### **3. AI Guardrail Evaluation**
Each guardrail uses **Google Gemini** to return:
- Pass / Fail  
- Confidence score  
- Reasoning  
- Extracted PII, URLs, or entities (when relevant)

### **4. Optional Sanitization Layer**
Three sanitizers demonstrate how to *clean* unsafe text:
- PII Sanitization  
- Secret Key Sanitization  
- URL Sanitization  

### **5. Review Results**
Each guardrail node outputs clean JSON, making debugging fast and transparent.

---

## ## How to Set Up

### **1. Load the Test Dataset**
Use either:
- The included CSV file  
- The linked Google Sheet  

Update only:
- **Document ID**  
- **Sheet name**

---

### **2. Add Google Sheets Credentials**
Create an OAuth2 credential → paste the Google JSON → connect your account.

---

### **3. Add Google Gemini Credential**
Go to **Credentials → Google Gemini (PaLM API)** →  
Paste your API key → attach it to all Guardrail nodes.

---

### **4. Review Sticky Notes**
They visually explain:
- What each guardrail checks  
- Why the check is important  
- Risk scoring and impact  

---

### **5. Run the Workflow**
Click **Execute Workflow** and inspect:
- Each guardrail node’s output  
- The full execution data  

---

## ## Requirements
- n8n (latest version recommended)  
- Google Gemini API key  
- Google Sheets API access  
- Test dataset: *n8n Guardrails test data.csv*  

---

## ## Test Data Included

The included dataset allows instant testing:
- Jailbreak prompts  
- PII samples  
- API key leaks  
- NSFW text  
- Malicious URL examples  
- Off-topic content  
- Keyword triggers  

---

## ## Template Metadata

**Template Author:** Sandeep Patharkar  
**Category:** AI Safety / Agent Security  
**Difficulty:** Intermediate  
**Estimated Setup Time:** 10–15 minutes  
**Tags:** Guardrails, AI Agents, Safety, Enterprise  

---

## ## Connect With Me

**Author:** Sandeep Patharkar**  
🔗 **LinkedIn:** https://www.linkedin.com/in/sandeeppatharkar  
🏠 **Skool AIC+:** https://www.skool.com/aic-plus


## 📊 Basic Information

- **Workflow ID:** 11025
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11025)

## 👤 Author

- **Name:** Sandeep Patharkar | www.FastTrackAiMastery.com
- **Username:** @sandy4v

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×15)
- **@n8n/n8n-nodes-langchain.guardrails** (×10)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheets** 
- **switch** 
- **set** (×3)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
