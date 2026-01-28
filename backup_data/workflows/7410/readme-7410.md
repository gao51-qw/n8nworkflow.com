# Complete B2B sales pipeline: Apollo lead gen, Mailgun outreach & AI reply management

> # ✉️ AI-Powered 3-Step B2B Pipeline — Lead Gen → Cold Outreach → AI Drafted Email Management

Automate your outbound workflow from **prospecting** to **AI-generated reply drafts** in Gmail — all fully integrated with your database.  
Ideal for SDRs, founders, and growth agencies who want **speed, personalization, and control** without losing human review.

![image.png](fileId:2108)
📌 **Example:** From a verified lead list to a qualified opportunity — fully tracked, classified, and pre-drafted with this automation.

---

## 🚀 What This Workflow Does

### **Step 1 — Lead Generation**
- Import leads from Apollo.
- Enrich and verify emails.
- Store results in Supabase/Postgres,

### **Step 2 — Cold Outreach**
- Send 3 step personalized sequences via Mailgun/SendGrid.
- Track delivery, opens, replies, and bounces directly in your DB.

### **Step 3 — Email Management (AI Drafts)**
- Process only incoming Gmail messages from contacts in your DB.
- Generate personalized reply drafts, label threads, update lead status, and alert your team via Slack/Telegram.

---

## 🔗 Integrated Services
- **Database:** Supabase/Postgres  
- **Outbound Email:** Mailgun / SendGrid  
- **Inbound Email & Drafts:** Gmail (OAuth2)  
- **AI Models:** OpenAI / Anthropic (JSON mode for classification + drafting)  
- **Alerts:** Slack / Telegram (optional)  

---

## 💼 What You Get
- Detailed setup guide  
- Fully connected 3-step pipeline in n8n  
- Ready-to-use database schema  
- Pre-built AI prompts for intent classification and professional replies  

---

## 📥 Perfect For
- SDR teams doing targeted outbound  
- Agencies managing multiple client campaigns  
- Founders building scalable outbound systems  
- Sales ops needing a no-risk, review-first reply process  

---

## 💡 Why You’ll Love It
This isn’t just another outreach template — it’s a **full sales engine**.  
From **verified leads** to **AI-drafted replies**, every action is logged, tracked, and controlled for maximum conversions without sacrificing oversight.


## 📊 Basic Information

- **Workflow ID:** 7410
- **Complexity:** advanced
- **Node Count:** 116
- **Views:** 273
- **Downloads:** 27
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7410)

## 👤 Author

- **Name:** Paul
- **Username:** @diagopl

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **limit** (×5)
- **merge** 
- **code** (×7)
- **switch** (×4)
- **splitInBatches** (×6)
- **wait** (×6)
- **scheduleTrigger** (×4)
- **if** (×4)
- **mailgun** (×6)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×20)
- **noOp** (×5)
- **supabase** (×12)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **sort** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **set** (×4)
- **filter** (×2)
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **postgres** (×3)
- **compareDatasets** 
- **telegramTrigger** 
- **@apify/n8n-nodes-apify.apify** 
- **gmailTrigger** 
- **gmail** (×2)
- **gmailTool** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 116 nodes with 81 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
