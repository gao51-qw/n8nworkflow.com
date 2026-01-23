# Sync new subscribers from Google Sheets to MailerLite without duplicates

> # This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate the syncing of new subscribers from Google Sheets to MailerLite. It intelligently identifies and adds only new contacts, preventing duplicates and ensuring your email lists are clean and accurate.


## Who's this workflow for?
- Marketing Teams
- Email Marketers
- Small Business Owners
- Community Managers


## How it works

**1. Read from Google Sheets:** The workflow begins by reading all contact rows from your designated Google Sheet.

**2. Check for Existing Subscribers:** For each contact, it performs a search in MailerLite to check if a subscriber with that email address already exists.

**3. Handle Duplicates:** If the subscriber is found in MailerLite, the workflow stops processing that specific contact, preventing any duplicates from being created.

**4. Create New Subscribers:** If the contact is not found, the workflow proceeds to create a new subscriber in MailerLite, using all the details from the Google Sheet (like name, company, and country) and assigns them to the specified group.


## Setup Instructions
**1. Google Sheets Setup:**
- Connect your Google Sheets account to n8n.
- Create a sheet with the required columns: Email, first_name, last_name, Company, Country, and group_id.
- In the Get row(s) in sheet node, select your credentials and specify the Document ID and Sheet Name.

**2. MailerLite Setup:**
- Connect your MailerLite account to n8n using your API key.
- In both the Get a subscriber and Create subscriber... nodes, select your MailerLite credentials.
- Make sure the group_id values in your Google Sheet correspond to valid Group IDs in your MailerLite account.

**3. Activate Workflow:**
- Save the workflow and click "Execute workflow" to run the sync whenever you need to update your subscriber list.


## Connect with us
- Website: https://www.intuz.com/services
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz



## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)



## 📊 Basic Information

- **Workflow ID:** 7681
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 91
- **Downloads:** 9
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7681)

## 👤 Author

- **Name:** Intuz 
- **Username:** @intuz

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** 
- **mailerLite** 
- **httpRequest** 
- **manualTrigger** 
- **stickyNote** (×6)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
