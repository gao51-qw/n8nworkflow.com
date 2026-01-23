# Detect duplicate form submissions & send AI responses with Jotform and Gemini

> # Duplicate Submission Detection & Auto Response for Jotform

## Who's it for

Form managers, SaaS platforms, event organizers, recruitment teams, and any organization using Jotform who need automatic duplicate prevention with intelligent, personalized email responses without manual intervention.

## What it does

This workflow automatically detects duplicate form submissions by email address, prevents duplicate entries in your database, and triggers intelligent email responses. When a new submission arrives, the system checks against all previous submissions. If a match is found, it deletes the duplicate and sends a friendly notification. If it's a new submission, it sends a professional welcome confirmation.

The entire process happens in seconds with no manual work required. AI-generated emails adapt to your form type and industry, making responses feel personalized and relevant.

👉 **[Get the JotForm from here](https://www.jotform.com/?partner=roshanramanidev)**

## How it works

**Step-by-step:**
1. Form submission triggers the workflow
2. System extracts email and contact information
3. Fetches all previous submissions from Jotform
4. Filters for active submissions matching the email
5. Counts matching submissions to determine if duplicate
6. If duplicate: Deletes the submission, generates rejection email, sends to submitter
7. If new: Generates welcome confirmation email, sends to submitter

## Requirements

- Jotform form and account
- Jotform API Key
- n8n instance (self-hosted or cloud)
- Google Gemini API (for email generation)
- Gmail account with OAuth2 setup
- Basic form field mapping knowledge

## How to set up

**Complete setup instructions are included in the workflow sticky notes:**
1. Get your Jotform API Key from Account Settings
2. Enable Google Gemini API in Google Cloud Console
3. Configure Gmail OAuth2 authentication
4. Add all credentials to n8n
5. Import workflow and map your form fields
6. Test with a sample submission
7. Activate and deploy

Detailed step-by-step guide is in the workflow documentation.

## How to customize the workflow

**Personalize emails for your industry:**
Edit the AI prompts in both "Generate Welcome Email" and "Compose Rejection Email" nodes to match your business type, tone, and specific requirements. The AI will adapt responses based on your instructions.

**Map your form fields:**
Update field IDs in filtering nodes to match your actual Jotform structure. Different forms may have email in different field positions.

**Add admin notifications:**
Duplicate the email nodes to send alerts to your team whenever duplicates are detected.

**Modify approval workflow:**
Change next steps timeline, add additional verification requirements, or customize follow-up sequences based on your business process.

## Template features

- Instant duplicate detection by email
- Automatic duplicate removal
- AI-powered, personalized email responses
- Token-efficient prompts for cost savings
- Professional HTML email formatting
- Mobile-responsive designs
- Works with any form type or industry
- Fully customizable for your use case
- Complete setup documentation included

---

## 📊 Basic Information

- **Workflow ID:** 9506
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 62
- **Downloads:** 6
- **Created:** 2025/10/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9506)

## 👤 Author

- **Name:** Roshan Ramani
- **Username:** @rawsun007

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **jotFormTrigger** 
- **set** 
- **httpRequest** (×2)
- **splitOut** 
- **filter** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **gmail** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
