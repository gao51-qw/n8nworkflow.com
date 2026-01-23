# Analyze email headers for IPs and spoofing

> This n8n workflow is designed to analyze email headers received via a webhook. The workflow splits into two main paths based on the presence of the received and authentication results headers.

In the first path, if received headers are present, the workflow extracts IP addresses from these headers and then queries the IP Quality Score API to gather information about the IP addresses, including fraud score, abuse history, organization, and more. Geolocation data is also obtained from the IP-API API. The workflow collects and aggregates this information for each IP address.

In the second path, if authentication-results headers are present, the workflow extracts SPF, DKIM, and DMARC authentication results. It then evaluates these results and sets fields accordingly (e.g., SPF pass/fail/neutral).

The paths merge their results, and the workflow responds to the original webhook with the aggregated analysis, including IP information and authentication results.

Potential issues during setup include ensuring proper configuration of the webhook calls with header authentication, handling authentication and API keys for the IP Quality Score API, and addressing any discrepancies or errors in the logic nodes, such as handling SPF, DKIM, and DMARC results correctly. Additionally, thorough testing with various email header formats is essential to ensure accurate analysis and response.

## 📊 Basic Information

- **Workflow ID:** 1991
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 5041
- **Downloads:** 504
- **Created:** 2023/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1991)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×8)
- **code** (×7)
- **respondToWebhook** 
- **itemLists** (×3)
- **httpRequest** (×2)
- **set** (×7)
- **switch** (×2)
- **if** (×2)
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 25 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
