# Real-time lead enrichment in Slack with Extruct AI in-thread reply

> Automatic lead enrichment in Slack: monitors your Slack channel for new lead emails posted there, extracts each company’s name or domain, sends it to the Extruct API for data enrichment, then posts back a structured Slack card with company name, website, LinkedIn profile, number of employees, industry, recent news, and key contacts.


**Who’s it for:**
Sales teams, SDRs, and marketing ops who capture new lead information in Slack and want instant enrichment without leaving the channel.

---

**How it works:**
When a lead email is posted into your designated Slack channel, the workflow:

1. Monitors for any new message containing a company name or domain.
2. Extracts that company identifier.
3. Sends it to Extruct API for research.
4. Waits for enrichment to complete.
5. Posts back into the same Slack thread a formatted card with:

   * Company name
   * Website
   * LinkedIn profile
   * Number of employees
   * Industry
   * Recent news
   * Key contacts

---

**How to set up:**

1. Sign up for [Extruct AI](https://www.extruct.ai/?utm_source=n8n_workflows&utm_medium=referral&utm_campaign=n8n_slack_enricher)
2. Copy the Extruct table ID
3. Create & install your Slack app
4. Configure n8n credentials & channel
5. Activate & use

---

**Requirements:**

* Extruct account & API token
* Extruct table template
* Slack workspace with permission to install apps

## 📊 Basic Information

- **Workflow ID:** 5901
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 171
- **Downloads:** 17
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5901)

## 👤 Author

- **Name:** Extruct AI
- **Username:** @extruct-ai

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **slackTrigger** 
- **slack** 
- **code** (×2)
- **if** (×2)
- **httpRequest** (×3)
- **wait** 
- **set** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
