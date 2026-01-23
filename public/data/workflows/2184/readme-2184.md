# Validate email format from a Wordpress form and save a contact in Mautic

> When you collect leads from a form, you need to format the incoming data such as the lead's name and also apply a basic validation of the email entered.

Lucky for us, N8N offers all of these features with simple expressions that can easily be applied to data.

This workflow aims to show how you can process your lead data before saving it in Mautic.

## How it Works

1. This workflow receives data from a Wordpress form;
2. applies name formatting and basic validation to the email;
3. Creates the contact in Mautic;
4. If e-mail is invalid, add the lead in Dot Not Contact list.

## Setup Steps

- Set up credentials when you first open the workflow. You'll need a Mautic account.
- You need to configure a form in Wordpress (Elementor, WPForms, etc.) and send it to the N8N Webhook address;
- Now map the fields you need to apply formatting and validation.
- After testing your workflow, swap the Test URL to Production URL in Discourse and activate your workflow



## 📊 Basic Information

- **Workflow ID:** 2184
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1458
- **Downloads:** 145
- **Created:** 2024/3/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2184)

## 👤 Author

- **Name:** Promovaweb
- **Username:** @promovaweb

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **set** 
- **stickyNote** (×4)
- **webhook** 
- **if** 
- **mautic** (×2)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
