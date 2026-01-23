# Verify emails & enrich new form leads and save them to HubSpot

> ## Use case
When collecting leads via a form you're typically facing a few problems: 
- Often end up with a bunch of leads who don't have a valid email address
- You want to know as much about the new lead as possible but also want to keep the form short
- After forms are submitted you have to walk over the submissions and see which you want to add to your CRM

This workflow helps you to fix all those problems.
## What this workflow does
The workflow checks every new form submission and verifies the email using Hunter.io. If the email is valid, it then tries to enrich the person using Clearbit and saves the new lead into your Hubspot CRM.
# Setup
1. Add you **Hunter**, **Clearbit** and **Hubspot** credentials
2. Click the Test Workflow button, enter your email and check your Hubspot
3. Activate the workflow and use the form trigger production URL to collect your leads in a smart way 
# How to adjust it to your needs
- Change the form to the form you need in your use case (e.g. Typeform, Google Forms, SurveyMonkey etc.)
- Add criteria before an account is added to your CRM. This could for example be the size of company, industry etc. You can find some inspiration in our other template [Reach out via Email to new form submissions that meet a certain criteria](https://n8n.io/workflows/2106-reach-out-via-email-to-new-form-submissions-that-meet-a-certain-criteria)
- Add more data sources to save the new lead in

## 📊 Basic Information

- **Workflow ID:** 2116
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3432
- **Downloads:** 343
- **Created:** 2024/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2116)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **formTrigger** 
- **hunter** 
- **if** 
- **stickyNote** (×4)
- **clearbit** (×2)
- **hubspot** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
