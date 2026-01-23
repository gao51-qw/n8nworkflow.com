# Qualify Meta ads leads with WhatsApp verification, Gemini AI & Zoho CRM

> ## 🧩 What Problem Does It Solve?
Meta’s ad forms often generate unqualified leads from casual scrollers. This workflow uses WhatsApp and AI to automatically verify, qualify, and prioritize real leads — saving time and boosting sales efficiency.

# 📝 Description
This workflow automates lead qualification for businesses using Meta Ads (Facebook/Instagram Lead Ads) to filter out irrelevant leads. It ensures only confirmed prospects enter your CRM by:

Collecting new Facebook leads

Verifying via WhatsApp confirmation

Classifying responses with AI

Updating CRM status based on intent

When a new Facebook lead arrives:

Lead details are extracted (name/phone/email)

Zoho CRM is checked for existing contacts

WhatsApp confirmation request is sent

AI classifies the response (confirmed/declined/human/invalid)

CRM status is updated automatically

Sales team receives only verified leads
## 🎯 Key Advantages for Meta Ads
✅ Blocks 60%+ irrelevant leads based on WhatsApp non-response
✅ Reduces fake submissions by requiring active confirmation
✅ Prevents CRM bloat through duplicate checking
✅ Identifies hot leads via instant "human_requested" escalation
✅ Saves sales team hours by auto-declining "no" responses

## 🛠️ Features

Facebook Lead Ads integration via Graph API

WhatsApp messaging via Twilio

AI response classification (Gemini)

Zoho CRM synchronization

Duplicate lead prevention

Customizable confirmation flow

Error-resistant JSON parsing

CRM owner assignment

Status-based routing

## 🔧 Requirements

Facebook Access Token with ads_management & leads_retrieval permissions

Twilio Account with WhatsApp-enabled number

Zoho CRM with custom "Status" field

Gemini API Key (or alternative LLM)

n8n credentials configured for:

Twilio (API SID/token)

Zoho CRM (OAuth2)

Google Gemini (or alternative LLM)

## ⚙️ Customization Tips
1-Adjust Classification Criteria
Modify the AI prompt in Classify Response (AI) node
2-Customize CRM Status Values
Update field IDs in Zoho nodes
3-Modify Messaging
Edit WhatsApp templates in Send WhatsApp Confirmation
4-Set Owner Assignment
Replace owner ID in Prepare Owner ID node

## 🧠 Use Case Examples

Real Estate Agencies: Filter speculative inquiries from serious buyers

Medical Clinics: Verify appointment requests before scheduling

SAAS Companies: Qualify free trial sign-ups

Education Providers: Confirm course interest before counselor assignment

Auto Dealerships: Screen test drive requests from tire-kickers

If you need help get in touch on [Linkedin](https://www.linkedin.com/in/abdallaelshikh0/)

## 📊 Basic Information

- **Workflow ID:** 6529
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 1786
- **Downloads:** 178
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6529)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×10)
- **set** (×2)
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** 
- **switch** 
- **zohoCrm** (×3)
- **if** 
- **stickyNote** (×21)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
