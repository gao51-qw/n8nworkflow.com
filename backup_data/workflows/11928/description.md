This n8n template automatically enriches HubSpot company records using CompanyEnrich and keeps your CRM data up to date without manual work.

This workflow is ideal for RevOps, Sales Ops, and GTM teams who want cleaner CRM data for segmentation, scoring, and outbound workflows.

## Good to know
- Company enrichment is performed by domain, so a valid company domain is required.
- The workflow processes companies in batches to avoid rate limits.
- Enrichment is only applied when the API request is successful.

## How it works
1. A Schedule Trigger runs the workflow on a recurring basis (weekly by default).
2. The workflow fetches recently created or updated companies from HubSpot.
3. The company domain is safely extracted, even if stored in different fields.
4. Each domain is sent to the CompanyEnrich enrichment API.
5. The workflow checks whether the enrichment request was successful.
6. Enriched data is mapped into HubSpot-compatible fields.
7. The corresponding HubSpot company record is updated.
8. The workflow continues looping until all companies are processed.


## How to use
- Configure your HubSpot App Token with company read/write access.
- Add your CompanyEnrich API key as an HTTP credential.
- Adjust the schedule if you want the workflow to run daily or on-demand.
- Make sure your HubSpot companies have a domain set.
- Once active, the workflow will keep your company data enriched automatically.

## Requirements
- HubSpot account with App Token authentication
- CompanyEnrich account and API key
- n8n instance with HTTP and HubSpot nodes enabled

## Customising this workflow
- Change the schedule to run more frequently or trigger via webhook.
- Add filters to enrich only specific company segments or pipelines.
- Map additional enriched fields to custom HubSpot properties.