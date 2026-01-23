# Personalized email outreach with LinkedIn & Crunchbase data and Gemini AI review

> AI-Enriched Cold Outreach: Research → Draft → QA → Write-back
============================================================

What this template does
-----------------------
Automates cold email drafting from a lead list by:
1. Enriching each lead with LinkedIn profile, LinkedIn company, and Crunchbase data  
2. Generating a personalized subject + body with Gemini  
3. Auto-reviewing with a Judge agent and writing back only APPROVED drafts to your Data Table  

Highlights
-----------
- Hands-off enrichment via RapidAPI; raw JSON stored back on each row  
- Two-agent pattern: **Creative Outreach Agent (draft)** + **Outreach Email Judge (QA)**  
- Structured outputs guaranteed by LangChain Structured Output Parsers  
- Data Table–native: reads “unprocessed” rows, writes results to the same row  
- Async polling with Wait nodes for scraper task results  

How it works (flow)
-------------------
1. **Trigger:** Manual (replace with Cron if needed)  
2. **Fetch leads:** Data Table “Get row(s)” filters rows where `email_subject` is empty (pending)  
3. **Loop:** Split in Batches iterates rows  
4. **Enrichment (runs in parallel):**
   - **LinkedIn profile:** HTTP (`company_url`) → Wait → Results → Data Table update → `linkedin_profile_scrape`  
   - **LinkedIn company:** HTTP (`company_url`) → Wait → Results → Data Table update → `linkedin_company_scrape`  
   - **Crunchbase company:** HTTP (`url_search`) → Wait → Results → Data Table update → `crunchbase_company_scrape`  
   *(All calls use host `cold-outreach-enrichment-scraper` with a RapidAPI key.)*  
5. **Draft (Gemini):** “Agent One” composes a concise, personalized email using row fields + enrichment + ABOUT ME block.  
   - Structured Output Parser enforces:  
     ```json
     {
       "email_subject": "text",
       "email_content": "text"
     }
     ```  
6. **Prep for QA:** “Email Context” maps `email_subject`, `email_content`, and `email` for the judge.  
7. **QA (Judge):** “Judge Agent” returns `APPROVED` or `REVISE` (brief feedback allowed).  
8. **Route:**
   - If `APPROVED` → Data Table “Update row(s)” writes `email_subject` + `email_body` (a.k.a. `email_content`) back to the row.  
   - If `REVISE` → Skipped; loop continues.  

Required setup
---------------
**Data Table:** “email_linkedin_list” (or your own) with at least:  
- `email`, `First_name`, `Last_name`, `Title`, `Location`, `Company_Name`, `Company_site`,  
  `Linkedin_URL`, `company_linkedin` (if used), `Crunchbase_URL`,  
  `email_subject`, `email_body`,  
  `linkedin_profile_scrape`, `linkedin_company_scrape`, `crunchbase_company_scrape` (string fields for JSON).  

**Credentials:**  
- RapidAPI key for `cold-outreach-enrichment-scraper` *(store securely as credential, not hardcoded)*  
- Google Gemini (PaLM) API configured in the Google Gemini Chat Model node  

**ABOUT ME block:**  
Replace the sample persona (James / CEO / Company Sample / AI Automations) with your own.

Nodes used
-----------
- **Data Table**
- **HTTP Request:**  
- **AI Agent:**
- **Google Gemini Chat Model**  
- **Split in Batches:** Main Loop  
- **Set:** RapidAPI-Key

Customization ideas
------------------- 
- **Process flags:** Add `email_generated_at` or `processed` boolean to prevent reprocessing.  
- **Human-in-the-loop:** Send drafts to Slack/Email for spot check before write-back.  
- **Delivery:** After approval, optionally email the draft to the sender for review.  

Quotas & costs
---------------
- RapidAPI: Multiple calls per row (three tasks + result polls).  
- Gemini: Token usage for generator + judge per row.  
Tune batch size and schedule accordingly.  

Privacy & compliance
--------------------
You are scraping and storing person/company data.  
Ensure lawful basis, respect ToS, and minimize stored data.  

## 📊 Basic Information

- **Workflow ID:** 9814
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 2460
- **Downloads:** 246
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9814)

## 👤 Author

- **Name:** Johnny Rafael
- **Username:** @johnnyrafael

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **splitInBatches** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **manualTrigger** 
- **dataTable** (×6)
- **stickyNote** (×6)
- **executeWorkflowTrigger** 
- **httpRequest** (×6)
- **wait** (×3)
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
