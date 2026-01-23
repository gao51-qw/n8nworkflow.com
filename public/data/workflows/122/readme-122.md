# Report phishing websites to Steam and CloudFlare

> Webhook to report through Mailgun phishing websites to Steam and CloudFlare (if the domain is on CloudFlare)

You have to set the Credentials for webhook and Mailgun.

You have to set the email from for Mailgun.

This assumes it is running in n8n's Docker image where bind-tools is not readily available but installable. 

## 📊 Basic Information

- **Workflow ID:** 122
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1698
- **Downloads:** 169
- **Created:** 2019/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/122)

## 👤 Author

- **Name:** chaufnet
- **Username:** @chauffer

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **webhook** 
- **executeCommand** (×3)
- **if** (×3)
- **mailgun** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
