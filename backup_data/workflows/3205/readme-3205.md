# Monitor data breaches in real-time with Have I Been Pwned

> [![changelog](https://xqus.relezy.com/haveibeenpwnedcom-breaches/badge.svg)](https://xqus.relezy.com/haveibeenpwnedcom-breaches)

## Who is this for?
- Security professionals
- Developers
- Individuals interested in data breach awareness

## Use Case
- Automated monitoring for new breaches
- Proactive identity protection
- Demonstration of simple cache mechanism

## What this workflow does
- Checks the Have I Been Pwned API every 15 minutes for the latest breaches.
- Compares new breach data against previously notified breaches.
- Demonstrates a simple cache mechanism to track previously seen breaches.

## How the Cache Functionality Works
- **Read from Cache**: Retrieves the last known breach from `cache.json` to avoid redundant alerts for the same breach.
- **Compare Against Current Breach**: The workflow checks if the latest fetched breach differs from the cached one.
- **Update the Cache**: If a new breach is detected, it updates `cache.json` with the latest breach data.

## Setup instructions
1. The endpoint used in this workflow does *not* require an API key.
2. Add your desired alert mechanism in the red box attached to the `New breach` node.

## How to customize this workflow to your needs
- **Modify Notification Settings**: Tailor where alerts are sent (email, Slack, etc.). Add the desired node after the `New breach` node. This node contains all the data from the breach so it is eaisily available.
You can choose from a variety of n8n nodes to send alerts when a new breach is detected. Below are a few common options you might consider adding after the New breach node:

1. **Email Node**
What it does: Sends an email notification to one or more recipients.
Use case: Great for simple alerts to your inbox or a team distribution list.
Customization: You can include breach details in the subject or body of the email, using data from the New breach node.
2. **Slack Node**
What it does: Sends a message to a Slack channel or user.
Use case: Perfect for real-time alerts to your team in Slack.
Customization: You can post breach details directly in a channel or DM. You can also format the message (bold, code blocks, etc.).
3. **Microsoft Teams Node**
What it does: Sends a message to a Teams channel.
Use case: For organizations that use Microsoft Teams for communication.
Customization: Similar to Slack, you can customize the message content and include all relevant breach information.
4. **Discord Node**
What it does: Sends an alert message to a Discord channel.
Use case: Useful for teams or communities that coordinate via Discord.
Customization: Add formatted messages with breach details for easy viewing.
5. **Telegram Node**
What it does: Sends messages to a Telegram chat or group.
Use case: Good for mobile notifications and fast alerts.
Customization: You can include breach summaries or detailed information, and even use bots to automate this.
6. **Webhook Node** (as a sender)
What it does: Sends breach data to another service via a webhook.
Use case: If you have an external system or app that handles alerts, you can push the data directly to it.
Customization: Send JSON payloads with detailed breach information to trigger actions in other systems.
7. **SMS Nodes** (like Twilio)
What it does: Sends an SMS notification to one or more phone numbers.
Use case: For urgent alerts that need to be seen immediately.
Customization: Keep messages concise, including key breach details like the time, type of breach, and affected system.
- **Adjust Check Frequency**: Change the interval in the Schedule Trigger node (e.g., hourly or daily).

## 📊 Basic Information

- **Workflow ID:** 3205
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 11439
- **Downloads:** 1143
- **Created:** 2025/3/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3205)

## 👤 Author

- **Name:** Audun
- **Username:** @xqus

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **convertToFile** (×2)
- **splitOut** 
- **scheduleTrigger** 
- **stickyNote** (×6)
- **httpRequest** 
- **readWriteFile** (×3)
- **extractFromFile** 
- **if** (×2)
- **set** (×3)
- **noOp** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
