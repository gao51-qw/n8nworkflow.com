# Convert DMARC reports to readable tables with Gmail automation

> **DMARC Reporter**
Gmail and Yahoo send DMARC reports as `.zip` or `.gz` xml attachments that can be hard to read.  This workflow unpacks them on a schedule, turns the data into a simple table, and emails you an easy-to-read report.

![DMARC report](https://sensorpro.co/i/dmarc-report.png)
##### DMARC insights at a glance:
- Confirm that your published policy is correct and consistent.

- Quickly spot unknown or suspicious IPs trying to send as you.
 
- Distinguish between legitimate high-volume senders (e.g. your ESP) and one-off or small-scale abuse.

- Makes it easy to confirm your legitimate servers are authenticating correctly, and to detect spoofed mail that fails DKIM/SPF.

##### Who is this For?
- Email Marketing Team
- Mailchimp, Sensorpro, Omnisend users 
- Compliance Team


##### Customize:
- Adjust the Gmail node to include other DMARC reporters by changing the search parms.
- If not using Gmail you can use any of the n8n email nodes.
- To keep a record, add an Airtable node after the Set node.

## 📊 Basic Information

- **Workflow ID:** 9584
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9584)

## 👤 Author

- **Name:** Cooper
- **Username:** @cooper

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **compression** 
- **extractFromFile** 
- **xml** 
- **set** 
- **gmail** (×2)
- **scheduleTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
