# HubSpot contact AI enrichment

> This n8n template auto-enriches brand-new HubSpot contacts with company details. Each day it finds contacts created in the last 24 hours (skipping free email domains), researches the company from the contact’s email domain, and writes back clean fields—no manual lookup needed.

Perfect for GTM teams that want better segmentation and faster personalization from day one.

---

## How it works

* A **daily schedule trigger** starts the workflow.
* **HubSpot: Get recently created/updated contacts** pulls the newest records.
* A **filter** keeps only contacts:

  * created **within the last 24 hours**
  * whose email domain **doesn’t contain `gmail.com`** (adjust as needed).
* An **AI research agent (Gemini + SerpAPI)**:

  * extracts the company domain from the contact’s email
  * searches the web and returns **structured JSON**:

    * `company_name`, `industry`, `headquarters_city`, `headquarters_country`, `employee_count`, `website`, `linkedin`, `description`
* **HubSpot: Add company info** updates the contact with the enriched fields.

---

## How to use

1. **Connect HubSpot** on both HubSpot nodes (OAuth2).
2. **Connect SerpAPI** (paste your API key).
3. **Connect Google Gemini** (Google AI Studio API key).
4. (Optional) Edit the **agent prompt** to fetch more/different fields.
5. (Optional) Tweak the **filter** to include/exclude other domains.
6. **Activate** the workflow to run daily.

---

## Requirements

* **HubSpot** (OAuth2) for reading/updating contacts
* **SerpAPI** for web search results
* **Google Gemini** for company profiling and structured output

---

## Notes & customization

* **Free domains:** Add more exclusions (e.g., `yahoo.com`, `outlook.com`) to reduce false positives.
* **Confidence gating:** Require website + LinkedIn before writing to HubSpot, or route low-confidence results for manual review.
* **Field mapping:** Extend the update step with additional properties (e.g., industry tags, HQ timezone).
* **Frequency:** Switch the trigger to hourly for faster enrichment on high-volume inbound.
* **Data hygiene:** Normalize employee count ranges and country names to your CRM picklists.

## 📊 Basic Information

- **Workflow ID:** 8969
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1145
- **Downloads:** 114
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8969)

## 👤 Author

- **Name:** Miha
- **Username:** @miha

## 🏷️ Categories

- Lead Generation
- AI RAG

## 🔗 Nodes Used

- **hubspot** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **filter** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×4)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
