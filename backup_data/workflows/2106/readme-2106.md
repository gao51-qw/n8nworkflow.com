# Reach out via email to new form submissions that meet a certain criteria

> # Use case
When collecting new leads via a form, you need to follow up on new submissions. Often, this required a lot of manual work that includes reviewing each submission, checking if they meet your criteria and then outreaching. With this workflow you can do all of that fully automatically and save a lot of your valuable time.
# What this workflow does
This workflow runs every time you're receiving a new submission from an n8n form. It then filters out typical personal emails (such as Gmail, Hotmail, Yahoo etc.) before enriching the submission via Clearbit. It then checks, if the company of the submitter is a B2B company and has more than 499 employees. If it does, it sends an email via Gmail to the user.
# Setup
1. Add the `Clearbit` and `Gmail` credentials
2. Click on `Test Workflow`
3. Enter your own email (which needs to be a business email to work) in the Form
4. Check your email
5. Once you're happy don't forget to activate this workflow
# How to adjust this template
- Replace the form trigger with your form provider of choice (e.g. Typeform, SurveyMonkey, Google Forms etc.)
- Adjust the criteria to your needs via the `If node`
- Adjust the email you're sending in the `Gmail node`

## 📊 Basic Information

- **Workflow ID:** 2106
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 2030
- **Downloads:** 203
- **Created:** 2024/2/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2106)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **formTrigger** 
- **clearbit** (×2)
- **if** 
- **gmail** 
- **stickyNote** (×5)
- **set** 
- **noOp** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
