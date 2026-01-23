# Score LinkedIn profiles against your ICP with Airtop

> # Scoring LinkedIn Profiles Against Your ICP
## Use Case
This automation scores individual LinkedIn profiles against your Ideal Customer Profile (ICP) based on interest in AI, technical depth, and seniority level. It's ideal for prioritizing leads and understanding how well a person fits your ICP criteria.

## What This Automation Does
Given a LinkedIn profile and an Airtop profile, it:
- Extracts relevant data from the person's profile
- Determines levels of AI interest, seniority, and technical depth
- Calculates an ICP score based on weighted criteria
- Returns the full enriched profile with the score

## Input parameters:
- **LinkedIn Profile URL** (e.g., `https://linkedin.com/in/janedoe`)
- **Airtop Profile** connected to LinkedIn
- **ICP scoring method** in the Airtop node prompt

## Output fields in JSON format:
- Full name, job title, employer, company LinkedIn URL, location, number of connections and followers, about section content and more
- Calculated ICP Score (out of 100)

## How It Works
1. **Form Trigger or Workflow Trigger**: Accepts input from either a form or another workflow.
2. **Parameter Assignment**: Ensures proper variable names for downstream nodes.
3. **Airtop Enrichment Tool**: Extracts and scores the person based on a detailed prompt.
4. **Scoring**: Uses this point system:
   - AI Interest: beginner (5), intermediate (10), advanced (25), expert (35)
   - Technical Depth: basic (5), intermediate (15), advanced (25), expert (35)
   - Seniority Level: junior (5), mid-level (15), senior (25), executive (30)
5. **Output Formatting**: Cleans and returns the result as JSON.

## Setup Requirements
1. IMPORTANT: Enter your ICP scoring method in the prompt field of the Airtop node 
2. [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to LinkedIn.
3. Airtop API credentials configured in n8n.
4. Optional: a front-end form to collect profile URLs and trigger the automation.

## Next Steps
- **Embed in CRM**: Trigger this automation on new leads to auto-score them.
- **Batch Process Leads**: Run it over a list of profile URLs for segmentation.
- **Customize Scoring**: Adjust point weights based on your sales priorities.

Read more about [Scoring LinkedIn Profiles Against Your ICP](https://www.airtop.ai/automations/icp-scoring-of-a-person-linkedin-profile-n8n)


## 📊 Basic Information

- **Workflow ID:** 4205
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 382
- **Downloads:** 38
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4205)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **airtop** 
- **formTrigger** 
- **executeWorkflowTrigger** 
- **set** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
