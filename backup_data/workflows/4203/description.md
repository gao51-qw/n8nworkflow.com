# Extracting LinkedIn Profile Information
## Use Case
Manually copying data from LinkedIn profiles is time-consuming and error-prone. This automation helps you extract structured, detailed information from any public LinkedIn profile—enabling fast enrichment, hiring research, or lead scoring.

## What This Automation Does
This automation extracts profile details from a LinkedIn URL using the following input parameters:
- **airtop_profile**: The name of your [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to LinkedIn.
- **linkedin_url**: The URL of the LinkedIn profile you want to extract data from.

## How It Works
1. Starts with a form trigger or via another workflow.
2. Assigns the LinkedIn URL and Airtop profile variables.
3. Opens the LinkedIn profile in a real browser session using Airtop.
4. Uses an AI prompt to extract structured information, including:
   - Name, headline, location
   - Current company and position
   - About section, experience, and education history
   - Skills, certifications, languages, connections, and recommendations
5. Returns structured JSON ready for further use or storage.

## Setup Requirements
1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to LinkedIn (requires one-time login).

## Next Steps
- **Sync with CRM**: Push extracted data into HubSpot, Salesforce, or Airtable for lead enrichment.
- **Combine with Search Automation**: Use with a LinkedIn search scraper to process profiles in bulk.
- **Adapt to Other Platforms**: Customize the prompt to extract structured data from GitHub, Twitter, or company sites.

Read more about the [Extract Linkedin Profile Information](https://www.airtop.ai/automations/extract-linkedin-profile-information-n8n) automation. 
