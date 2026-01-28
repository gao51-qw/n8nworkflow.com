# Receive and analyze emails with rules in Sublime Security

> 
This n8n workflow provides a comprehensive automation solution for processing email attachments, specifically targeting enhanced security protocols for organizations that use platforms like Outlook. It starts with the IMAP node, which is set to ingest emails and identify those with .eml attachments.

Once an email with an attachment is ingested, the workflow progresses to a conditional operation where it checks for the presence of attachments. If an attachment is found, the binary data is moved and converted to JSON format, preparing it for further analysis. This meticulous approach to detecting attachments is crucial for maintaining a robust security posture, allowing for the proactive identification and handling of potentially malicious content.

In the subsequent stage, the workflow leverages the capabilities of Sublime Security by analyzing the email attachment. The binary file is scrutinized for threats, and upon detection, the information is split to matched and unmatched data. This process not only speeds up the threat detection mechanism but also ensures compatibility with other systems, such as Slack, resulting in a smooth and efficient workflow. This automation emphasizes operational efficiency with minimal user involvement, enhancing the organization's defense against cyber threats.

The final phase of the workflow involves preparing the output for a Slack report. Whether a threat is detected or not, n8n ensures that stakeholders are immediately informed by dispatching comprehensive reports or notifications to Slack channels. This promotes a culture of transparency and prompt action within the team.

## 📊 Basic Information

- **Workflow ID:** 1976
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 2198
- **Downloads:** 219
- **Created:** 2023/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1976)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **emailReadImap** 
- **moveBinaryData** 
- **if** 
- **code** 
- **manualTrigger** 
- **slack** (×2)
- **set** 
- **httpRequest** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
