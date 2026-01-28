# Find and verify Linkedin profile with Airtop

> # Automating LinkedIn Profile Discovery with Verification

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


## 📊 Basic Information

- **Workflow ID:** 4257
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 670
- **Downloads:** 67
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4257)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **executeWorkflowTrigger** 
- **airtop** (×2)
- **set** 
- **stickyNote** (×3)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
