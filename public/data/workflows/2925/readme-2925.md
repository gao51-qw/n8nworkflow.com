# Send email if server has upgradable packages

> This workflow automates the routine check for upgradable packages on your Ubuntu server, ensuring you stay updated with the latest software patches and security improvements. By running a daily script, it efficiently monitors any available package upgrades and promptly notifies you via email, saving you time and enhancing your server’s security.

How It Works:
- **Daily Monitoring**: The workflow is configured to execute a script daily that connects to your Ubuntu server and checks for any upgradable packages.
- **Email Notification**: If any upgradable packages are detected during the check, the workflow triggers an alert mechanism that automatically sends you a notification email detailing the available updates.

Set Up Steps:
- **SSH Credentials**: Provide the SSH login credentials for your Ubuntu server. This will allow the workflow to securely connect and perform checks for software updates.
- **SMTP Credentials**: Provide SMTP login details for your email account. These credentials are used to configure the email notifications system, enabling it to send alerts about the upgradable packages.

Benefits:
- **Timeliness**: Receive prompt updates on critical software upgrades to maintain the optimal performance and security of your server.
- **Automation**: Reduces the need for manual checks, allowing you to focus on other critical tasks with peace of mind.
- **Customizable**: Easily adjust the checking frequency or update the notification settings according to your preferences.

## 📊 Basic Information

- **Workflow ID:** 2925
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 11694
- **Downloads:** 1169
- **Created:** 2025/2/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2925)

## 👤 Author

- **Name:** Hostinger
- **Username:** @hostinger

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **ssh** 
- **emailSend** 
- **scheduleTrigger** 
- **code** 
- **if** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
