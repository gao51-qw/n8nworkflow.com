# Automated resume screening & response system with Gemini AI, Gmail and Sheets

> ---

**Use cases are many:** Automate resume screening, candidate scoring, and interview communication in one seamless pipeline. Perfect for HR teams hiring at scale, startups that need quick filtering of applicants, or enterprises like Samsung running multiple roles at once.

---

**Good to know**
At time of writing, each Gemini request is billed per token. See [Gemini Pricing](https://ai.google.dev/pricing) for the latest info.
The workflow automatically sends **acceptance or rejection emails** to candidates — be sure to configure your Gmail account and email templates carefully.

---

**How it works**

* **Form Submission**: Applicants fill out a custom form with their name, email, job role (Executive Assistant, IT Specialist, or Manager), and resume (PDF).
* **Resume Processing**: The PDF resume is extracted into text using the Extract from File node.
* **AI Evaluation**: Gemini-powered AI reviews the resume against the job role and generates:

  1. A **score (0–10)**
  2. A **status (Accepted/Rejected)**
  3. A **personalized email** (acceptance or rejection)
* **Information Extraction**: The AI output is structured into fields: Score, Status, Mail Subject, and Mail Body.
* **Email Sending**: The candidate automatically receives their personalized result via Gmail.
* **Record Keeping**: All candidate details (Name, Job, Score, Status, Email, Email Status) are stored in Google Sheets for tracking.

---

**How to use**

* Share the generated form link with applicants.
* When they submit, the system handles scoring and sends an email instantly.
* HR teams can review all results directly in Google Sheets.

---

**Requirements**

* Google Gemini API key (for resume evaluation)
* Gmail account with OAuth2 (for sending acceptance/rejection emails)
* Google Sheets (for candidate tracking)
* n8n form node (for application collection)

---

**Customising this workflow**

* Add more job positions to the form dropdown.
* Adjust the acceptance threshold (e.g., accept at 8/10 instead of 7/10).
* Modify email templates for a more formal or branded tone.
* Extend the pipeline to trigger a **Calendly invite** for accepted candidates.
* Integrate with **Slack or Teams** to notify HR when a candidate is accepted.

---

## 📊 Basic Information

- **Workflow ID:** 7903
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 533
- **Downloads:** 53
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7903)

## 👤 Author

- **Name:** Rakin Jakaria
- **Username:** @rakinjakaria

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **gmail** 
- **googleSheets** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
