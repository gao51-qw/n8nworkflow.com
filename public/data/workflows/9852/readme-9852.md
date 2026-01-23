# Automated server health check with SSH, Azure GPT-4 analysis & email alerts

> ## **Who’s it for**

This workflow is ideal for sysadmins, DevOps engineers, and IT teams who want to monitor server health automatically and receive instant email notifications if any server goes down. It’s perfect for anyone managing multiple servers or services without setting up a full-fledged monitoring tool.

## **How it works / What it does**

The workflow periodically sends HTTP requests to your server endpoints to check availability and response times. If a server responds with an error code or times out, the workflow automatically sends an email alert with the server details, including the endpoint, status, and timestamp. Multiple servers can be monitored in parallel, ensuring that issues are detected and reported in real time.

## **How to set up**

- Import the workflow template into n8n.
- Replace the credentials with your credentials.
- Configure the Email node with your SMTP credentials stored securely in n8n Credentials.
- Set the Cron node interval to the frequency you want the checks to run (e.g., every 5 minutes).

## **Requirements**

- n8n instance (self-hosted or cloud)
- SMTP email credentials (Gmail, Outlook, or any SMTP server)
- Servers with endpoints accessible by n8n

## 📊 Basic Information

- **Workflow ID:** 9852
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 265
- **Downloads:** 26
- **Created:** 2025/10/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9852)

## 👤 Author

- **Name:** Techno
- **Username:** @techno-dev

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **ssh** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **scheduleTrigger** 
- **emailSend** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
