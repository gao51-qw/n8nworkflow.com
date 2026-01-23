# Find domain-based Gmail addresses for outreach with EmailListVerify & Google Sheet

> ## Who is this template for?
This template is designed for link building. When you reach out to some small blogs it is common for the owner to have an address like DomainName@gmail.com.

This workflow will find such emails for you. 

## What problem does this workflow solve?
Get from a list of domain names to a list of email addresses. This is perfect to prepare a cold outreach campaign for link building.

This workflow allows you to find email addresses with any extension. I recommend searching for Gmail as a starting Point. But you can also use workflow to check for other email providers.

**Pro-tip:** Check the email provider used in the geography you target:
- Lapost.net for France
- Seznam.cz for Czechia

## What this workflow does
This workflow will:
- Generate email candidates based on the domain name and root you are providing
- Check if those email addresses are valid using EmailListVerify

##Requirement
This template uses:
- Google Sheet to handle input and output data
- EmailListVerify to discover email (from $0.05 per email)

## Setup (10 minutes)
**1:** Make a copy of the [GoogleSheet template](https://docs.google.com/spreadsheets/d/1r4DZ4GnqKzivmIhRdv1D35fvS_Mg-VTKgbuZS-7H-HY/edit?usp=sharing)
**2:** In "[Input] pattern" sheet write the email extension you want to check. Gmail is a no-brainer. Depending on the location you target, you might want to include local email providers like laposte.net for France.
**3:** In "[Input] domain" put the domain for which you want to find email addresses. 
**4:** Add your [EmailListVerify API key](https://app.emaillistverify.com/api?utm_source=n8n&utm_medium=referral&utm_campaign=GmaimFinder) to setting to the 3rd step
**5:** Update Google Sheet node to point to your copy of the template
**6:** Trigger the workflow

## 📊 Basic Information

- **Workflow ID:** 10068
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/10/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10068)

## 👤 Author

- **Name:** EmailListVerify
- **Username:** @emaillistverify

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheets** (×3)
- **merge** (×2)
- **httpRequest** 
- **code** 
- **stickyNote** (×6)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
