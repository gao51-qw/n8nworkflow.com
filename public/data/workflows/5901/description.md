Automatic lead enrichment in Slack: monitors your Slack channel for new lead emails posted there, extracts each company’s name or domain, sends it to the Extruct API for data enrichment, then posts back a structured Slack card with company name, website, LinkedIn profile, number of employees, industry, recent news, and key contacts.


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