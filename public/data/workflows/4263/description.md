# Automating LinkedIn Company URL Verification

## Use Case

This automation verifies that a given LinkedIn URL actually belongs to a company by comparing the website listed on their LinkedIn page against the expected company domain. It is essential for ensuring data accuracy in lead qualification, enrichment, and CRM updates.

## What This Automation Does

### Input Parameters

- **Company LinkedIn**: The LinkedIn URL to be verified.
- **Company Domain**: The expected domain (e.g., `example.com`) for validation.
- **Airtop Profile (connected to LinkedIn)**: [Airtop Profile](https://portal.airtop.ai/browser-profiles) with LinkedIn authentication.

### Output

- Confirmation whether the LinkedIn page corresponds to the provided domain.
- Returns the verified LinkedIn URL if the match is confirmed.

## How It Works

1. Extracts the website URL from the specified LinkedIn company profile.
2. Compares the extracted URL with the provided company domain.
3. If the domain is contained in the extracted website, the LinkedIn profile is confirmed as valid.
4. Returns the original LinkedIn URL if the match is successful.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. [LinkedIn-authenticated Airtop Profile](https://portal.airtop.ai/browser-profiles)

## Next Steps

- **Use for LinkedIn Discovery Validation**: Ensure correctness after automated LinkedIn page discovery.
- **Combine with CRM Updates**: Prevent incorrect LinkedIn links from being stored in CRM.
- **Automate in Data Pipelines**: Use this as a validation gate before enrichment or scoring steps.
