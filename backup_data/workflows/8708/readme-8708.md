# Register volunteers in SinergiaCRM from form submissions and notify your team

> Automatically register new volunteers in SinergiaCRM when they submit a form, creating or updating contacts and relationships, and sending a confirmation email to your team.

### Who is this workflow for?
This workflow is ideal for nonprofit organizations that manage volunteer registrations and use **SinergiaCRM** as their CRM system. It helps automate the data entry process, ensuring volunteers are quickly added and tracked in the CRM.

### What it does / How it works
- Triggers when a new volunteer submits a form.
- Checks if the volunteer already exists in SinergiaCRM (matched by NIF).
- If found: adds a “volunteer” relationship to the existing contact.
- If not found: creates the contact and then adds the relationship.
- Sends an email notification to your team with the volunteer’s information.

### Requirements
- A working **SinergiaCRM** instance with the following modules enabled:
  - `Contacts`
  - `stic_Contacts_Relationships`
- The field `stic_identification_number_c` must exist and be used to identify contacts by NIF.
- Active Gmail (or other email provider) integration in n8n.
- Valid OAuth credentials for SinergiaCRM and your email provider.

### How to set up
1. Connect your SinergiaCRM account using OAuth in the credentials section.  
2. Update the recipient email address in the Gmail node.  
3. Ensure your CRM contains the field `stic_identification_number_c`.  
4. Optionally adjust the value of `assigned_user_id` to reflect your CRM configuration.

### How to customize the workflow
- Modify the form fields in the **Form Trigger** node to match your registration form.
- Customize the volunteer relationship parameters (e.g. type or assigned user).
- Change the email content in the **Gmail** node to fit your organization’s tone.
- Replace Gmail with another email node (Outlook, SMTP, etc.) if needed.

📌 Category: **CRM & Customer Management**  
📘 [Learn more about SinergiaCRM](https://sinergiacrm.org)


## 📊 Basic Information

- **Workflow ID:** 8708
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 37
- **Downloads:** 3
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8708)

## 👤 Author

- **Name:** Javier Quilez Cabello
- **Username:** @javierquilez

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **n8n-nodes-sinergiacrm.sinergiaCrm** (×4)
- **set** 
- **stickyNote** (×5)
- **merge** 
- **formTrigger** 
- **if** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
