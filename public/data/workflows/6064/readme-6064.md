# Enrich company profiles with Explorium MCP and Claude AI for GTM research

> # 🕵️ Company Research Agent (n8n + Explorium + LLM)

This n8n workflow automates company research by combining Explorium’s MCP server, web scraping tools, and an AI agent. Results are written to a Google Sheet for easy use in GTM, product analysis, or competitive research.

---

## 🚀 What It Does

Given a list of company domains or names, this workflow will:

1. Look up company information using:
   - 🧠 **LLM Agent** to guide the research
   - 🔎 **Explorium MCP Server** for firmographic & tech signals
   - 🌐 Website content and SerpAPI scraping (optional)
2. Extract key commercial details (see below)
3. Format the output in a consistent JSON structure
4. Update a connected **Google Sheet** with the enriched results

---

## 🧩 Extracted Fields

Each company is enriched with:

- `domain`
- `linkedinUrl`
- `has_free_trial`
- `cheapest_plan`
- `has_enterprise_plan`
- `last_case_study_link`
- `market` (e.g., B2B or B2C)
- `integrations` (e.g., Slack, Hubspot, MySQL)
- `enrichment_status`

---

## 📥 Input Sheet Format

| input       |
|-------------|
| Explorium     |
| n8n         |
| Apple |
| ...         |

---

## 📤 Output Sheet Format

| domain       | linkedinUrl                      | has_free_trial | cheapest_plan | has_enterprise_plan | last_case_study_link       | market | integrations                                       | enrichment_status |
|--------------|----------------------------------|----------------|----------------|----------------------|-----------------------------|--------|---------------------------------------------------|-------------------|
| Explorium.ai  | https://linkedin.com/company/... | TRUE           | 69             | TRUE                 | https://www.explorium.com     | B2B    | ["HubSpot", "Zapier", "Salesforce", ...]          | done              |
| n8n.io       | https://linkedin.com/company/... | TRUE           | 20             | TRUE                 | https://n8n.io/case-studies | B2B    | ["Slack", "Gmail", "MySQL", "Google Sheets", ...] | done              |

---

## 🛠️ Tools Used

- **n8n** (Automation platform)
- **Explorium MCP Server** – rich company enrichment via API
- **Anthropic Claude or OpenAI** – used by the AI researcher
- **Google Sheets** – stores output data
- **Structured Output Parser** – ensures clean, predictable JSON formatting

---

## 📦 How to Set It Up

1. Add your company domains or names to the input sheet
2. Configure your MCP and SerpAPI credentials in n8n
3. Run the workflow using the `Test Workflow` trigger
4. Watch the sheet populate with results

You can adapt the system to output different formats or fields depending on your team's research goals.

---

## 📌 Use Cases

- Competitive landscape analysis
- Lead intelligence for outbound campaigns
- Feature benchmarking (e.g., who offers enterprise or free trial)
- VC/investment research

---

## 🧠 Notes

- This agent is easily customizable. Adjust the LLM prompt or Output Parser to extract different properties.
- Explorium MCP is leveraged as the **core enrichment engine**, ensuring signal accuracy and freshness.


## 📊 Basic Information

- **Workflow ID:** 6064
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 427
- **Downloads:** 42
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6064)

## 👤 Author

- **Name:** Itamar
- **Username:** @itamar

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 
- **googleSheets** (×2)
- **merge** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
