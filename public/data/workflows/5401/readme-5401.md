# Automate GoDaddy Subdomain Management via Email Requests

> This n8n workflow automates subdomain creation and deletion on GoDaddy using their API, triggered via email requests. This empowers developers to manage subdomains directly without involving DevOps for minor tasks.

### Good to know

- Ensure GoDaddy API credentials are securely configured to avoid unauthorized access.  
- Email parsing accuracy depends on the consistency of request formats.

### How it works

- Detect new email requests using the `Start Workflow (GET Request)` node.  
- Use the `Extract Data from Email` node to parse relevant details (e.g., subdomain name, action type).  
- Validate the action type with the `Validate Action Type` node to proceed with create (`true`) or delete (`false`).  
- If `true`, the `Create Subdomain` node sends a POST request to GoDaddy’s API to create the subdomain.  
- If `false`, the `Delete Subdomain` node sends a DELETE request to remove the subdomain.  
- The `Send Email Response` node notifies the requester of the action’s success or failure.

### How to use

- Import the workflow into n8n and configure the nodes with your GoDaddy API and email credentials.  
- Test with sample email requests to ensure proper parsing and API calls.

### Requirements

- GoDaddy API credentials  
- Email service (e.g., SMTP or API) for notifications  

### Customising this workflow

- Adjust the `Extract Data from Email` node to match your email format or add additional validation steps for security.


## 📊 Basic Information

- **Workflow ID:** 5401
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 191
- **Downloads:** 19
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5401)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **httpRequest** (×2)
- **stickyNote** 
- **emailReadImap** 
- **code** 
- **if** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
