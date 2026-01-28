# Automating LinkedIn Profile Discovery with Verification

## Use Case

Accurately identifying and verifying a person’s LinkedIn profile is essential for prospecting, recruiting, or contact enrichment. This automation ensures high accuracy by combining search logic with optional profile validation.

## What This Automation Does

This automation locates and verifies a LinkedIn profile using the following inputs:

- **Person_info**: Any identifying information about the person (e.g., name, company, email).
- **Airtop_profile**: Your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn, used for verifying the profile.

## How It Works

1. Extracts a likely LinkedIn URL by performing a Google search using the provided person info.
2. Validates the result (if Airtop Profile is provided):
   - Visits the LinkedIn profile.
   - Verifies match by checking the content (e.g., experience, role) against the person info.
3. Returns a verified LinkedIn profile URL or "NA" if not found or not valid.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys)
2. Optional but recommended: an [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.

## Next Steps

- **Combine with Email Lookup**: Use email-to-profile tools upstream to gather inputs.
- **CRM Integration**: Automatically append LinkedIn profiles to contact records.
- **Automate Outreach**: Use the verified URLs for personalized LinkedIn engagement workflows.

Read more about how [find and verify Linkedin profiles](https://www.airtop.ai/automations/discover-and-verify-linkedin-profile-n8n)
