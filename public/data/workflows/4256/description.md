# Automating LinkedIn Enrichment and ICP Scoring

## Use Case

This automation enriches a person’s data using LinkedIn and calculates an Ideal Customer Profile (ICP) score based on their professional presence. It is particularly useful for lead qualification, contact research, and targeted outreach.

## What This Automation Does

The automation processes the following input parameters:

- **Person Name**: Full name of the individual.
- **Work Email**: Business email address to validate corporate identity.
- **Airtop Profile (connected to Linkedin)**: A [LinkedIn-authenticated Airtop Profile](https://portal.airtop.ai/browser-profiles) for enrichment.

## How It Works

1. **Email Filtering**: Checks if the email is corporate (excludes free and personal domains).
2. **LinkedIn Profile Discovery**: Searches and verifies the correct LinkedIn URL using Airtop.
3. **Data Enrichment**: Extracts professional details from the LinkedIn profile.
4. **ICP Scoring**: Calculates an ICP score based on extracted data and profile context.
5. **Merge Outputs**: Consolidates enriched profile data and ICP results into a single output.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.

## Next Steps

- **Combine with CRM Integration**: Push enriched and scored data into CRMs like HubSpot or Salesforce.
- **Batch Processing**: Automate for lists of leads using Airtop + n8n or Airtop SDK.
- **Scoring Customization**: Adjust scoring logic to reflect your ideal customer attributes more precisely.

Read more about [data enrichment and ICP scoring](https://www.airtop.ai/automations/extract-person-data-and-calculate-icp-n8n)