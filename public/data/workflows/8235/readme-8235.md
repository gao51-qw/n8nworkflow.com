# Compare LinkedIn profiles against job descriptions with Groq AI & GhostGenius

> Recruiter Mirror is a proof‑of‑concept ATS analysis tool for SDRs/BDRs. Compare your LinkedIn or CV to job descriptions and get recruiter‑ready insights.

By comparing candidate profiles against job descriptions, it highlights strengths, flags missing keywords, and generates actionable optimization tips. Designed as a practical proof of concept for breaking into tech sales, it shows how automation and AI prompts can turn LinkedIn into a recruiter‑ready magnet.


Got it ✅ — based on your workflow (Webhook → LinkedIn CV/JD fetch → GhostGenius API → n8n parsing/transform → Groq LLM → Output to Webhook), here’s a clear **list of tools & APIs required** to set up your **Recruiter Mirror (Proof of Concept)** project:

---

## 🔧 Tools & APIs Required

### 1. **n8n (Automation Platform)**
- Either **n8n Cloud** or **self‑hosted n8n** instance.  
- Used to orchestrate the workflow, manage nodes, and handle credentials securely.  

### 2. **Webhook Node (Form Intake)**
- Captures LinkedIn profile (`LinkedIn_CV`) and job posting (`LinkedIn_JD`) links submitted by the user.  
- Acts as the starting point for the workflow.  

### 3. **GhostGenius API**  
- Endpoints Used:  
  - `/v2/profile` → Scrapes and returns structured **CV/LinkedIn data**.  
  - `/v2/job` → Scrapes and returns structured **job description data**.  
- **Auth**: Requires valid credentials (e.g., API key / header auth).  

### 4. **Groq LLM API (via n8n node)**  
- Model Used: `moonshotai/kimi-k2-instruct` (via **Groq Chat Model node**).  
- Purpose: Runs the **ATS Recruiter Check**, comparing CV JSON vs JD JSON, then outputs a structured JSON per the ATS schema.  
- **Auth**: Groq account + saved API credentials in n8n.  

### 5. **Code Node (JavaScript Transformation)**  
- Parses Groq’s JSON output safely (`JSON.parse`).  
- Generates clean, recruiter‑ready **HTML summaries** with structured sections:  
  - Status  
  - Reasoning  
  - Recommendation  
  - Matched keywords / Missing keywords  
  - Optimization tips  

### 6. **n8n Native Nodes**  
- **Set & Aggregate Nodes** → Rebuild structured CV & JD objects.  
- **Merge Node** → Combine CV data with job description for comparison.  
- **If Node** → Validates LinkedIn URL before processing (fallback to error messaging).  
- **Respond to Webhook Node** → Sends back the final recruiter‑ready insights in JSON (or HTML).  

---

⚠️ **Important Notes**  
- **Credentials**: Store API keys & auth headers securely inside n8n Credentials Manager (never hardcode inside nodes).  
- **Proof of Concept**: This workflow demonstrates feasibility but is **not production‑ready** (scraping stability, LinkedIn terms of use, and API limits should be considered before real deployments).  


## 📊 Basic Information

- **Workflow ID:** 8235
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 169
- **Downloads:** 16
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8235)

## 👤 Author

- **Name:** Stephan Koning
- **Username:** @reklaim

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **httpRequest** (×2)
- **webhook** 
- **set** (×3)
- **aggregate** (×2)
- **merge** 
- **respondToWebhook** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **code** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
