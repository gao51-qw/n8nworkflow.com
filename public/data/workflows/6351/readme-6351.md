# Client onboarding automation: Tally Forms to Google Drive, Notion & Slack

> 📝 Automation: Instantly Onboard New Clients from Tally Form to Notion, Google Drive & Slack
This automation streamlines the client onboarding process by integrating Tally, Notion, Google Drive, and Slack. When a potential client submits a Tally form, the automation is triggered via a webhook, automatically handling all onboarding steps without manual intervention.

⚙️ How It Works – Step-by-Step
Form Submission Triggered
A new Tally form submission is received via a webhook.

Client Data Extraction
The automation extracts essential client details from the form, including:

-Name

-Email

-Project Type

-Budget

Google Drive Folder Creation
A dedicated Google Drive folder is generated using the client’s name and project type for storing onboarding assets.

Notion Database Entry Creation
A new item is added to a specified Notion database, storing:

Client information

Project scope

Folder link

Slack Team Notification
A Slack message is sent to your designated team channel containing all onboarding details, ensuring the team is informed instantly.

✅ Pre-Conditions / Requirements
A published Tally form collecting client data.

A connected Google Drive account with folder creation permissions.

An existing Notion database with columns for name, email, budget, etc.

A Slack workspace with an active bot/token integrated with the automation tool.

🛠️ Notion Database Structure
Your Notion database should include at least the following fields:

-Name (Text)

-Email (Email)

-Project Type (Select)

-Budget (Select)

-Onboarding Folder Link (URL)

🧩 Customization Guidance
You can modify the Google Drive folder naming convention to include a timestamp or custom ID.

Adjust Slack message formatting to include project-specific tags or mention specific team members.

Extend the Notion entry to include more fields like project deadline or contact notes.



## 📊 Basic Information

- **Workflow ID:** 6351
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 547
- **Downloads:** 54
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6351)

## 👤 Author

- **Name:** Muhammad Ahmad
- **Username:** @muhammadahmad33

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **googleDrive** 
- **notion** 
- **set** 
- **slack** 
- **webhook** 
- **merge** 
- **stickyNote** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
