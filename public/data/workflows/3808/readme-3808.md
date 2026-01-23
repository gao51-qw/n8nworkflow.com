# YouTube to WhatsApp sales automation with WordPress, FluentCRM and Whinta

> # 🚀 **WhatsApp Automation Template**  
## Designed & Developed by Infridet Solutions Private Limited  

---

# **🔧 Objective:**  
Automate your lead nurturing and sales process from YouTube/Instagram → Landing Page → CRM → Email → WhatsApp → Sales → Deal Closure using tools like:  

- 🌐 **WordPress** (Landing Page + Fluent Forms)  
- 🧾 **Google Sheets** (Backup Log)  
- 📩 **FluentCRM** (Lead Tagging + Email Sequences)  
- 💬 **Whinta.com** (WhatsApp Messaging API)  
- ⚙️ **N8N** (Workflow Automation Engine)  

---

# **🧩 System Flow Overview:**

1. **Lead Source**: YouTube or Instagram CTA  
2. **Landing Page**: Built on WordPress with a story-driven design  
3. **Form Capture**: Fluent Forms with dynamic input fields  
4. **Data Sync**:
   - Backup to Google Sheets  
   - Push lead to FluentCRM and tag as `New Lead`  
5. **Email Sequence**:
   - Warm-up emails (1 to 5)  
   - Introduce offer or service  
6. **WhatsApp Outreach**:
   - Send personalized message via Whinta  
   - Triggered 1 hour after form fill or last email  
7. **Sales Follow-Up**:
   - Sales team handles replies manually  
   - CRM tag updated to `Customer` upon closing  

---

# **📁 Folder Structure (Optional Git/Zip File):**
```
📦 WhatsApp-Automation-Infridet/
│
├── whatsapp-automation-n8n.json      # N8N Flowchart Import File
├── email-templates.docx              # Warm-up Email Scripts
├── whinta-api-integration.pdf        # API Documentation
├── crm-tagging-notes.txt             # CRM Tag Setup Details
└── readme.md                         # This Instruction File
```

---

# **🛠️ Required Integrations & Setup**

### ✅ **Fluent Forms (WordPress)**  
- Embed form with Name, Email, Phone  
- Enable webhook to N8N: `/lead-capture`  

### ✅ **Google Sheets**  
- Use `n8n-nodes-base.googleSheets` node  
- Capture name, email, phone, source, timestamp  

### ✅ **FluentCRM**  
- REST API enabled  
- Push contact and assign tag `New Lead`  
- Setup Email Automation via tag trigger  

### ✅ **SMTP Email (Optional)**  
- Use Gmail SMTP or Brevo  
- Trigger email on form submission  

### ✅ **Whinta.com (WhatsApp API)**  
- Send POST request  
- Payload includes `phone`, `message`, `sender_id`  
- Customize message with personalization  

---

# **💬 Sample WhatsApp Message:**
```plaintext
Hey {{name}}, Gyan here from Account Craft 👋  
I saw your form submission – would you like help in starting your YouTube journey this week?  
Let me know. I'm just one text away. ✅  
```

---

# **📧 Sample Email (Warmup Day 1):**
&gt; **Subject**: Welcome to Account Craft 🚀  
&gt; **Body**:  
&gt; Hi {{name}},  
&gt;  
&gt; I’m Gyan from Account Craft. Thanks for joining us!  
&gt; Here’s what’s coming next: exclusive videos, personalized tips, and real support to get your YouTube channel earning.  
&gt;  
&gt; Let’s go!  
&gt; – Gyan

---

# **🔁 CRM Tag Updates:**
| Action            | Tag Assigned     |
|-------------------|------------------|
| On form fill      | `New Lead`       |
| After WhatsApp    | `Engaged`        |
| After sale closed | `Customer`       |

---

# **📌 Final Output:**
Once completed, the system will:
- Log all leads into a database  
- Automatically send emails and WhatsApp messages  
- Notify your sales team  
- Update lead status without manual entry  

---

&gt; *Automation Template Designed & Deployed by*  
&gt; **Infridet Solutions Private Limited**  
&gt; _Smart Integrations. Seamless Business._  
&gt; 🌐 www.infridetsolutions.com | 📞 +91-8853354829  


## 📊 Basic Information

- **Workflow ID:** 3808
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1000
- **Downloads:** 100
- **Created:** 2025/5/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3808)

## 👤 Author

- **Name:** GYANENDRA DWIVEDI
- **Username:** @gyandwivedi

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** 
- **httpRequest** (×3)
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
