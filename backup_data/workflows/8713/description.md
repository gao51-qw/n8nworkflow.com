An extendable triage workflow that classifies severity, sets components, and posts actionable guidance for support engineers using **n8n + Gemini + Cache Augmented Generation (CAG)**. Designed for **Jira Service Management**, but easily adaptable to **Zendesk**, **Freshdesk**, or **ServiceNow**.  


---

## Description  
Support teams loose valuable time when tickets are misclassified: wrong severity, missing components, unclear scope. Engineers end up re-routing issues and chasing missing info instead of solving real problems.  

This workflow automates triage by combining **domain rules** with **AI-driven classification and guidance**, so engineers receive **better-prepared tickets**.  

It includes:  
✅ Real-time ticket capture via webhook  
✅ AI triage for **severity** and **component**  
✅ **CAG-powered guidance**: 3 next steps + missing info  
✅ Internal **audit comment** with justifications & confidence  
✅ Structured **metrics** for reporting  

---

## ⚙️ How It Works  
This workflow runs in **4 stages**:  

📥 **Entry & Setup**  
- Webhook triggers on ticket creation  
- Loads domain rules (priority policy, components, guidance templates)  
- Sets confidence threshold & triage label  

🧠 **AI Analysis (Gemini + CAG)**  
- Builds structured payload with ticket + domain context  
- Gemini proposes severity, component, guidance, missing info  
- Output normalized for safe automation (valid JSON, conservative confidence)  

🤖 **Update & Audit**  
- Updates fields (priority, component, labels) if confidence ≥ threshold  
- Posts **internal audit comment** with:  
  - 3 next steps  
  - Missing info to request  
  - Justifications + confidence  

📊 **Metrics**  
- Captures applied changes, confidence scores, and API statuses  
- Enables reliability tracking & continuous improvement  

---

## 🌟 Key Features  
- **CAG-powered guidance** → lightning-fast, context-rich next steps  
- **Explainable automation** → transparent audit comments for every decision  
- **Domain-driven rules** → adaptable to any product or support domain  
- **Portable** → swap JSM with **Zendesk, Freshdesk, ServiceNow** via HTTP nodes  

---

### 🔐 Required Credentials

| Tool | Use |
|------|-----|
| Jira Service Management | Ticketing system (API + comments) |
| Google Gemini/Gemma | LLM analysis |
| HTTP Basic Auth | For Jira API requests (bot user) |

⚠️ **Setup tip**: create a dedicated **bot user** in Jira Service Management with an API token.  
This ensures clean audit logs, proper permissions, and avoids mixing automation with human accounts.

---

### 🧰 Customization Tips

- Replace `https://your-jsm-url/...` with your own Jira Service Management domain.  
- Update the credentials with the **bot user’s API token** created above.  
- Swap Jira Service Management nodes with other ticketing systems like **Zendesk**, **Freshdesk**, or **ServiceNow**.  
- Extend the domain schema (`keywords`, `guidance_addons`) to fit your product or support environment.  

---

### 🗂️ Domain Schema

This workflow uses a **domain-driven schema** to guide triage.  
It defines:  
- **Components** → valid areas for classification  
- **Priority policies & rules** → how severity is determined  
- **Keywords** → domain-specific signals (e.g., “API error”, “all users affected”)  
- **Guidance addons** → contextual next steps for engineers  
- **No-workaround phrases** → escalate severity if present  

✨ The **full domain JSON** (with complete keyword & guidance mapping) is included as a sticky note inside the workflow.  

---

## 💡 Use Cases  
- Automated triage for IT & support tickets  
- Incident classification with outage/security detection  
- Contextual guidance for engineers in customer support  
- Faster escalation and routing of critical issues  

---

## 🧠 Who It’s For  
- Support teams running Jira Service Management  
- Platform teams automating internal ticket ops  
- AI consultants prototyping practical triage workflows  
- Builders exploring **CAG today, RAG tomorrow**  

---

## 🚀 Try It Out!  
1. ⚙️ **Import the Workflow** in n8n (cloud or self-hosted).  
2. 🔑 **Add Credentials** (JSM API + Gemini key).  
3. ⚡ **Configure Setup** (confidence threshold, triage label, domain rules).  
4. 🔗 **Connect Webhook** in JSM → `issue_created` → n8n webhook URL.  
5. 🧪 **Test with a Ticket** → see auto-updates + AI audit comment.  
6. 🔄 **Swap the Ticketing System** → adapt HTTP nodes for **Zendesk, Freshdesk, or ServiceNow**.  

---

## 💬 Have Feedback or Ideas? I’d Love to Hear  
This project is open, modular, and evolving. 
If you try it, adapt it, or extend it, I’d love to hear your feedback — let’s improve it together in the n8n builder community. 

📧 [ascuncia.es@gmail.com](mailto:ascuncia.es+n8ncreator@gmail.com) 
🔗[Linkedin](https://www.linkedin.com/in/alejandro-scuncia-60a62348/)
