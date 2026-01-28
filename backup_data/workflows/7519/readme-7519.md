# Extract & summarize LinkedIn profiles with Bright Data, Google Gemini & Supabase

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

### Overview

This workflow connects to LinkedIn via automation nodes and enriches profile data using AI to generate insights such as professional summary, skills highlights, and potential interest areas. All parsed information will be persisted on Supabase for further analysis and reporting purposes.

### Who this is for?

This workflow is for recruiters, HR tech builders, data analysts, and growth teams who want to:

- Automate LinkedIn data collection

- Enrich raw profile/job data with AI

- Store structured insights for dashboards, CRMs, or analytics

### Good to know

At time of writing, each data enrichment request to Gemini costs ~$0.002–$0.004 USD depending on model. See [Gemini Pricing](Gemini Pricing) for updated info.

The Gemini enrichment model is geo-restricted. If you encounter "model not found," it may not be available in your country.

Scraping via Bright Data carries cost depending on volume. See [Bright Data Pricing](Bright Data Pricing).

### What problem is this workflow solving?

Manually extracting insights from LinkedIn is:

- Slow → Recruiters spend hours on profile research

- Unstructured → Scraping only gives raw HTML/text

- Incomplete → No standardized skills or trend insights

This workflow provides a repeatable pipeline that converts raw LinkedIn data into structured, enriched insights stored in Supabase for immediate use.

### What this workflow does

- Webhook by default but it could be updated to trigger manually or it could be scheduled as well

- Scrape LinkedIn data via Bright Data API

- Clean and normalize profile or job post data

- AI Enrichment with Gemini → extract skills, roles, industries, seniority, career paths

- Store results in Supabase for querying, dashboards, or API access

### Setup

#### Accounts required:

- [Bright Data](https://get.brightdata.com/5blibaeyszij ) (LinkedIn scraping API)

- Gemini API key (for AI enrichment)

- Supabase project (for structured storage)

- n8n instance (self-hosted or cloud)

#### Nodes in the workflow:

- Manual Trigger (replace with webhook or cron if needed)

- Bright Data Node (Bright Data API call)

- Gemini Node (LLM enrichment)

- Supabase Node (insert structured records)

#### Supabase DB Setup

Please create a project on Supabase and use the following script for the creation of a new table and indexes for persisting the LinkedIn data extract or mining information.

```
CREATE TABLE linkedin_data_mining (
    id BIGSERIAL PRIMARY KEY,  -- Auto-generated unique ID
    loggedin_user TEXT NOT NULL,

    -- LinkedIn profile identity fields
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    title TEXT NOT NULL,
    full_name TEXT GENERATED ALWAYS AS (first_name || ' ' || last_name) STORED,
    
    skills JSONB NOT NULL,
    basic_profile JSONB NOT NULL,
    emerging_roles JSONB NOT NULL,
    markdown_content JSONB NOT NULL,
    summary JSONB NOT NULL,
    
    -- Audit fields
    created_by TEXT NOT NULL,
    created_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_by TEXT NULL,
    updated_date TIMESTAMP WITH TIME ZONE NULL
);

-- Indexes for performance
CREATE INDEX idx_linkedin_data_mining_full_name ON linkedin_data_mining(full_name);
CREATE INDEX idx_linkedin_data_mining_first_name ON linkedin_data_mining(first_name);
CREATE INDEX idx_linkedin_data_mining_last_name ON linkedin_data_mining(last_name);
CREATE INDEX idx_linkedin_data_mining_skills ON linkedin_data_mining USING GIN (skills);
CREATE INDEX idx_linkedin_data_mining_basic_profile ON linkedin_data_mining USING GIN (basic_profile);
CREATE INDEX idx_linkedin_data_mining_emerging_roles ON linkedin_data_mining USING GIN (emerging_roles);
CREATE INDEX idx_linkedin_data_mining_markdown_content ON linkedin_data_mining USING GIN (markdown_content);
CREATE INDEX idx_linkedin_data_mining_summary ON linkedin_data_mining USING GIN (summary);
```

#### Connections:

Configure your API credentials for Bright Data, Gemini, and Supabase inside n8n’s credentials manager.

### How to customize this workflow to your needs

- **Triggers**: Replace manual trigger with webhook → scrape & enrich on demand (e.g., when a lead form is submitted).

- **Prompts**: Adjust Gemini prompts to extract attributes like seniority, technologies, career transitions, or hiring signals.

- **Destinations**: Store enriched data in Supabase, or send to Google Sheets, Slack, or HubSpot for immediate team use.

### Connect with Me

**Email**: ranjancse@gmail.com

**LinkedIn**: https://www.linkedin.com/in/ranjan-dailata/

**Get Bright Data**: [Bright Data](https://get.brightdata.com/5blibaeyszij ) (Supports free workflows with a small commission)

#LinkedInAutomation #n8n #WebScraping #DataAutomation #BrightData #GeminiAI #Supabase #AIEnrichment #RecruitmentTech #HRTech #SalesAutomation #MarketIntelligence #DataPipeline #WorkflowAutomation #OpenSourceAutomation

## 📊 Basic Information

- **Workflow ID:** 7519
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 89
- **Downloads:** 8
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7519)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **@brightdata/n8n-nodes-brightdata.brightData** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×5)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×5)
- **supabase** (×3)
- **merge** 
- **aggregate** 
- **webhook** 
- **respondToWebhook** (×4)
- **stopAndError** 
- **if** (×3)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
