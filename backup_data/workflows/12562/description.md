## **Who this is for**
B2B companies, including:
- Founders
- Marketing and sales professionals
- Recruiters involved in people search and B2B outreach

With this workflow:
- No more manual list building
- No time spent researching what each company does
- No manual CRM work — all found data is saved to a spreadsheet automatically

## **What it does**
This workflow helps you quickly **build a list of prospects for outreach** using the **LeadIQ** provider.
It collects:
- Full name
- LinkedIn profile
- Company website and description
- Emails (when available in the LeadIQ database)
You can start contacting people via LinkedIn manually right away.

You simply **provide a natural language prompt**, for example:
*“Founder at a software engineering firm, 11–50 employees, based in New York, using AI technologies.”*

The embedded AI agent transforms your input into a GraphQL query, which is then used to pull leads from the database.

📹 Video walkthrough: [Click Here](https://vimeo.com/1151100805)


**Benefits:**
- LeadIQ is an affordable database, with a cost per lead of approximately $0.03–$0.05 USD, depending on your plan and volume
- No credit card or paid plan is required to start using the LeadIQ API — just sign up and access the API
- The API includes 50 free credits, which is enough to test the workflow
- The workflow enriches company details from the open web (company description, HQ address)
- No need to manually configure filters — use a simple natural language prompt
- All data is saved automatically to Airtable CRM (using their standard CRM template from the template library)

⚠️ **Important:**
This workflow is not ideal if email addresses are the only data you need, as LeadIQ does not always provide emails. It works best when you need:
- A curated list of people based on specific criteria
- Their LinkedIn profiles
- Automated saving of leads to a database
You can later enrich email data using other paid databases by pulling records from Airtable.

## How to customize the workflow
1. Sign up for **LeadIQ**: https://leadiq.com
- Obtain the API string called “**Secret Base64 API key**”
2. Add the API key to all **HTTP** nodes:
- Method: POST
- URL: https://api.leadiq.com/graphql
- Enable “**Send Headers**” and add:

```
Authorization: Basic &lt;your API string here&gt;
Content-Type: application/json
```
3. Sign up for Airtable
- Find the template:
*Left panel → Templates & apps → Marketing → “Sales CRM”*
4. In Airtable, generate an API key:
- Builder Hub → Developers → Personal access token
- Add your Sales CRM database to the token scope
5. Set the correct base and sheet in all Airtable nodes
6. Use the Code node called “Manage number of leads” to control how many records are pulled from the database
- Default value: 1 (to save LeadIQ credits)
- To change it, edit:
```
input.limit = 1;
```
Replace 1 with the desired number of leads

7. Launch the workflow using the “Open Chat” trigger node
- Enter a prompt containing the criteria below

**Prompt structure:**

📌 **Contact-level criteria (optional)**
- **Job titles**: “Founder”
- **Roles**: “Entrepreneurship”, “Business Development”, “Information Technology”, “Legal”, “Accounting”, etc.
- **Seniority**: Executive, VP, Director, Manager, Senior Individual Contributor, Other
- **Location (city and country only)**: “New York, United States”

📌 **Company-level criteria (optional)**
- **Employee count range**:
“1–10”, “50–200”, or terms like “small startup”, “SMB”, “mid-market”, “enterprise”
- **Industry**:
“Business Consulting and Services”, “IT Services and IT Consulting”, etc.
- **Technologies**:
“AI”, “HubSpot” (may not always work if the database has limited overlap)
-  **Revenue range (in millions USD)**:
“0–1M”, “1–10M”, etc. (availability may vary)

The workflow includes **two AI agents** that map your natural language input to the closest existing database filters, so you can write prompts in your own words.

## Email enrichment note
The lower part of the workflow (“**Enrichment: Search Data & Email**”) attempts to pull emails from the LeadIQ database for existing leads.
Not every lead has an email available, so this step is **optional and limited**.

## Workflow updates 
I will continue to add new functionality and improve this workflow, including:

- Additional enrichment sources
- New lead databases
- Email sending infrastructure

The latest version will always be available on my [Patreon](https://www.patreon.com/growspireagency)