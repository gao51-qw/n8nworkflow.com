
# Automating Company Data Enrichment and HubSpot Integration

## Use Case

This automation enriches company data based on email domain and LinkedIn profile, calculates an ICP (Ideal Customer Profile) score, and updates the corresponding company record in HubSpot. It’s ideal for onboarding, qualification, and CRM enrichment.

## What This Automation Does

### Input Parameters

- **Contact email**: Used to derive the company domain.
- **Company domain**: Primary web domain of the company.
- **Company LinkedIn** *(optional)*: LinkedIn URL for enrichment accuracy.
- **Airtop Profile (connected to LinkedIn)**: An authenticated [Airtop Profile](https://portal.airtop.ai/browser-profiles).

### What It Outputs

- Full company profile (name, tagline, website, headquarters)
- Employee count
- ICP score based on AI/tech profile, scale, agency type, and location
- Updates/creates record in HubSpot with all enriched attributes

## How It Works

1. **Input Validation**: Filters out non-corporate domains like Gmail, Yahoo, or .edu.
2. **Enrichment Trigger**: Launches Airtop workflows to extract and analyze data from LinkedIn and calculate the ICP score.
3. **Data Mapping**: Compiles structured fields including:
   - Overview, location (city, state, country)
   - Company website and domain
   - LinkedIn URL, employee count
   - ICP score
4. **HubSpot Sync**: Sends all the enriched fields to the designated HubSpot object for upsertion.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. [Airtop Profile](https://portal.airtop.ai/browser-profiles) with active LinkedIn authentication
3. HubSpot integration enabled for object updates

## Next Steps

- **Use in Webforms**: Trigger this on signup to auto-populate CRM records.
- **Enrich Manually Entered Contacts**: Use with list-based workflows for batch enrichment.
- **Sync to Other CRMs**: Replace HubSpot step with Salesforce, Pipedrive, etc. for flexible integration.

Read more about [comapny data enrichment](https://www.airtop.ai/automations/enrich-company-data-n8n)