# Track competitor SEO keywords with Decodo + GPT-4.1-mini + Google Sheets

> This workflow automates competitor keyword research using OpenAI LLM and Decodo for intelligent web scraping.

## Who this is for

* SEO specialists, content strategists, and growth marketers who want to automate keyword research and competitive intelligence.

* Marketing analysts managing multiple clients or websites who need consistent SEO tracking without manual data pulls.

* Agencies or automation engineers using Google Sheets as an SEO data dashboard for keyword monitoring and reporting.


## What problem this workflow solves

Tracking competitor keywords manually is slow and inconsistent.

Most SEO tools provide limited API access or lack contextual keyword analysis.

This workflow solves that by:

* Automatically scraping any competitor’s webpage with Decodo.
* Using OpenAI GPT-4.1-mini to interpret keyword intent, density, and semantic focus.
* Storing structured keyword insights directly in Google Sheets for ongoing tracking and trend analysis.

## What this workflow does

1. **Trigger** — Manually start the workflow or schedule it to run periodically.
2. **Input Setup** — Define the website URL and target country (e.g., `https://dev.to`, `france`).
3. **Data Scraping (Decodo)** — Fetch competitor web content and metadata.
4. **Keyword Analysis (OpenAI GPT-4.1-mini)** 

   * Extract primary and secondary keywords.
   * Identify focus topics and semantic entities.
   * Generate a keyword density summary and SEO strength score.
   * Recommend optimization and internal linking opportunities.
5. **Data Structuring** — Clean and convert GPT output into JSON format.
6. **Data Storage (Google Sheets)** — Append structured keyword data to a Google Sheet for long-term tracking.

## Setup

### Prerequisites

If you are new to Decode, please signup on this link [visit.decodo.com](https://visit.decodo.com/dOxzkK)

* n8n account with workflow editor access
* Decodo API credentials
* OpenAI API key
* Google Sheets account connected via OAuth2

Make sure to install the Decodo Community node.

![DecodoCommunityNode.png](fileId:3033)

1. **Create a Google Sheet**

   * Add columns for: `primary_keywords`, `seo_strength_score`, `keyword_density_summary`, etc.
   * Share with your n8n Google account.

2. **Connect Credentials**

   * Add credentials for:

     * **Decodo API credentials** - You need to register, login and obtain the Basic Authentication Token via [Decodo Dashboard](https://dashboard.decodo.com/) 
     * **OpenAI API** (for GPT-4o-mini)
     * **Google Sheets OAuth2**

3. **Configure Input Fields**

   * Edit the “Set Input Fields” node to set your target site and region.

4. **Run the Workflow**

   * Click **Execute Workflow** in n8n.
   * View structured results in your connected Google Sheet.

## How to customize this workflow

* **Track Multiple Competitors**
  → Use a Google Sheet or CSV list of URLs; loop through them using the **Split In Batches** node.

* **Add Language Detection**
  → Add a Gemini or GPT node before keyword analysis to detect content language and adjust prompts.

* **Enhance the SEO Report**
  → Expand the GPT prompt to include backlink insights, metadata optimization, or readability checks.

* **Integrate Visualization**
  → Connect your Google Sheet to **Looker Studio** for SEO performance dashboards.

* **Schedule Auto-Runs**
  → Use the **Cron Node** to run weekly or monthly for competitor keyword refreshes.

## Summary

This workflow automates competitor keyword research using:

* **Decodo** for intelligent web scraping
* **OpenAI GPT-4.1-mini** for keyword and SEO analysis
* **Google Sheets** for live tracking and reporting

It’s a complete AI-powered SEO intelligence pipeline ideal for teams that want actionable insights on keyword gaps, optimization opportunities, and content focus trends, without relying on expensive SEO SaaS tools.


## 📊 Basic Information

- **Workflow ID:** 10002
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 146
- **Downloads:** 14
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10002)

## 👤 Author

- **Name:** Ranjan Dailata
- **Username:** @ranjancse

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleSheets** 
- **manualTrigger** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **set** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×4)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
