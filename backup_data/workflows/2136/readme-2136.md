# Verify & enrich form leads with Hunter and Clearbit then add them to Pipedrive

> ## Use case
When collecting leads via an online form, you often need to manually add those new leads into your Pipedrive CRM. This not only takes a lot of time but is also error-prone. This workflow automates this tedious work for you.
## What this workflow does
1. The workflow is triggered each time a form is submitted in n8n.
2. It validates the email address using Hunter.io.
3. If the email is valid, the workflow checks for an existing person with that email in Pipedrive.
4. If no existing person is found, it utilizes Clearbit to enrich the person's information.
5. It then verifies if the person's organization already exists in Pipedrive, creating a new organization if necessary.
6. The workflow then registers the person in Pipedrive.
7. Lastly, it creates a lead in Pipedrive using information from the person and organization.
## Setup
This workflow is very quick to set up.
1. Add your **Hunter.io**, **Clearbit** and **Pipedrive** credentials 
2. Click the test workflow button
3. Activate the workflow and use the form trigger production URL to collect your leads in a smart way 
## How to adjust it to your needs
- Exchange the n8n form trigger with your form of choice (Typeform, Google Forms, SurveyMonkey...)
- Add a filter criteria to only add new leads if they match certain requirements
- Remove the email check with Hunter.io if you don't own this tool and expect new form submission to have a correct email anyways
- Add ways to handle invalid emails or existing Persons

## 📊 Basic Information

- **Workflow ID:** 2136
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 1335
- **Downloads:** 133
- **Created:** 2024/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2136)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×2)
- **formTrigger** 
- **if** (×3)
- **noOp** (×2)
- **hunter** 
- **clearbit** 
- **pipedrive** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
