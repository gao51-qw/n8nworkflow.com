## AI Lead Enrichment & Notification System

### This n8n template automates the lead enrichment process for your business. Once a lead fills out a form, the workflow scrapes their website, provides a summary of their business, and logs everything into a CRM before notifying your team on Slack.

**Some use cases:** "Speed-to-Lead" optimization, lead enrichment, automated prospect research.

### How it works
1. **Ingestion:** A lead submits their details (Name, Email, Website) via a form.
2. **Intelligent scraping:** The workflow scrapes the provided URL.
3. **AI Analysis:** OpenAI's model (GPT-4o) analyzes the extracted data and determines whether there is enough info or if the workflow needs to scrape the "About Us" page.
4. **CRM Sync:** The CRM (Airtable) is updated with the enriched data.
5. **Notification:** An instant Slack notification is sent to the team channel.

### How to use the workflow
1. **Configure the form:** Open the trigger form and input the required fields.
2. **Setup OpenAI:** Ensure that your credentials are connected.
3. **Database mapping:** Ensure your Airtable base has the following columns: *Name*, *Website*, *AI Insight*, *Email*, and *Date*.
4. **Slack setup:** Specify the desired Slack channel for notifications.
5. **Test it out!** Open the form, enter sample data (with a real website), and watch the system enrich the lead for you.

### Requirements
* **OpenAI API Key** (For analyzing website content and generating summaries)
* **Airtable** (For CRM and logging)
* **Slack** (For team notifications)