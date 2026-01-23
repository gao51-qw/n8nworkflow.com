# Automate Google OAuth2 credential creation in n8n

> 
## Overview: Automate Your Google OAuth2 Credential Creation

This workflow template streamlines the process of creating and naming individual Google OAuth2  credentials for multiple Google services within n8n. By automating tasks typically done manually, it saves significant time and reduces the risk of errors.

## Who Is This For?

This template is perfect for:  
- Marketers who frequently use Google Docs, Google Sheets, Google Slides, and Google Drive for document automation.  
- Developers or technical users who manage numerous integrations and need to minimize credential creation overhead.  
- Teams or solo users with multiple Google accounts who want to eliminate repetitive Google OAuth2 credential creation tasks.

### Prerequisite Knowledge

• Basic familiarity with n8n, including how to configure nodes and connect services.  
• A Google OAuth JSON file (client ID, client secret, etc.) already set up in your Google Cloud Console.  
• An understanding of Google services (Docs, Sheets, Slides, Drive, Gmail, Calendar, Contacts and others) and which you may need for your use cases

## What Problem Does It Solve?

Manually creating and naming separate OAuth2 credentials for each Google service can be time-consuming and prone to errors. For instance, if you manage 16 Google accounts, you might need to create 112 credentials manually. This workflow automates that process by using your Google OAuth JSON file and email address, generating uniquely named OAuth2 credentials for each Google service in just a single run per account.


## Key Features

1. **Manual Trigger** – Start the workflow on demand to generate new credentials.  
2. **Set Node for Google OAuth Details** – Store your client ID, client secret, and other JSON info securely in one place.  
3. **Automated Naming Convention** – Use your Google email address to create distinct names for each credential, simplifying organization.  
4. **Array of Google Services** – Customize which services to create credentials for, such as Docs, Sheets, Slides, Drive, Gmail, Calendar, or Contacts.  
5. **Batch Credential Creation** – Split the array of Google services and automatically create separate OAuth2 credentials for each.  
6. **Seamless OAuth2 Integration** – Effortlessly authenticate all generated credentials within n8n.

## How to Set Up

1. **Insert Your JSON Details** – Paste your Google OAuth 2.0 JSON data into the “Google JSON” node.  
2. **Add Your Google Email Address** – Specify your email address in the “Google Email” node to personalize the naming convention.  
3. **Configure n8n Account Credentials** – In the “n8n Create Credentials” node, select or add proper credentials (e.g., n8n API credentials).  
4. **Execute the Workflow** – Run the workflow to automatically generate individual OAuth2 credentials.  
5. **Finalize in n8n** – Visit your n8n Credentials dashboard to complete the OAuth sign-in for each newly created credential.

## Customization Options

- **Modify the Services Array** – Easily add or remove Google products based on your workspace needs by editing the array in the “Services” node.  
- **Adjust Naming Logic** – Tailor the credential naming convention in the “n8n Create Credentials” node to match your organization’s style or best practices.  
- **Set Role-Based Access** – In n8n, control who can view and use these automatically generated credentials by adjusting user permissions.

## Time-Saving Example

I initially had 16 Google accounts, requiring 112 credentials if done manually. With this workflow, I needed just one run per account—saving around two hours of repetitive data entry. Yes, I spent three hours building and documenting this, but it pays off quickly for anyone managing multiple accounts or large teams.

## 📊 Basic Information

- **Workflow ID:** 2909
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 2237
- **Downloads:** 223
- **Created:** 2025/2/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2909)

## 👤 Author

- **Name:** Jordan Haisley
- **Username:** @jordan

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×3)
- **splitOut** 
- **n8n** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
