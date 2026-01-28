# Automate n8n updates with version checking and Portainer webhook

> 🔄 Purpose of the Workflow:
The Update-N8N workflow is designed to automatically trigger a (Portainer) webhook to update an N8N container, but only if a new version of N8N is available.

⚙️ Detailed Workflow Steps:
🕒 Scheduled Trigger
The workflow runs every 16 hours at minute 8 using a schedule trigger node.

🌐 Fetch Latest N8N Version
It sends an HTTP GET request to https://registry.npmjs.org/n8n/latest to retrieve the latest published N8N version from the npm registry.

📈 Get Currently Running Local Version
Another HTTP GET request is sent to https://127.0.0.1/metrics (likely the Prometheus metrics endpoint of the local N8N instance) to extract the currently installed N8N version.

🧠 Version Comparison
The workflow compares the local version (parsed from metrics) with the latest available version.

📬 Trigger Portainer Webhook
If the versions do not match (i.e., an update is available), a POST request is sent to a webhook URL, which might be a Portainer webhook that redeploys or updates the N8N container/stack. 

✅ Key Benefits:
No manual checks or updates needed.

Triggers only when a new version is available.

Integrates seamlessly with Portainer via webhook.

Secure configuration, e.g., disallowing unauthorized TLS certs for external requests.

## 📊 Basic Information

- **Workflow ID:** 7061
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 266
- **Downloads:** 26
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7061)

## 👤 Author

- **Name:** Dominic Spatz
- **Username:** @dominic

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **httpRequest** (×3)
- **scheduleTrigger** 
- **if** 
- **code** 
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
