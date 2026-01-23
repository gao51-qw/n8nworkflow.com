# Suspicious login detection

> This n8n workflow is designed for security monitoring and incident response when suspicious login events are detected. It can be initiated either manually from within the n8n UI for testing or automatically triggered by a webhook when a new login event occurs.

The workflow first extracts relevant data from the incoming webhook payload, including the IP address, user agent, timestamp, URL, and user ID. It then splits into three parallel processing paths.

In the first path, it queries GreyNoise's Community API to retrieve information about the investigated IP address. Depending on the classification and trust level received from GreyNoise, the alert is given a High, Medium, or Low priority. This priority is assigned based on the best practices documentation from GreyNoise on how to apply their data to analysis. Once a priority is assigned, a message is sent to a Slack channel to notify users about the alert.

The second path involves fetching geolocation data about the IP address using IP-API's Geolocation API and merging it with data from the UserParser node. This data is then combined with the data obtained from GreyNoise.

In the third path, the UserParser node queries the Userparser IP address and user agent lookup API to obtain information about the user's IP and user agent. This data is merged with the IP-API data and GreyNoise data.

The workflow then checks if the IP address is considered an unknown threat by examining both the noise and riot fields from GreyNoise. If it is considered an unknown threat, the workflow proceeds to retrieve the last 10 login records for the same user from a Postgres database.

If there are any discrepancies in the login information, indicating a new location or device/browser, the user is informed via email.

Potential issues when setting up this workflow include ensuring that credentials are correctly entered for GreyNoise and UserParser nodes, and addressing any discrepancies in the data sources that could lead to false positives or negatives in threat detection. Additionally, the usage of hardcoded API keys should be replaced with credentials for security and flexibility. Thorough testing and validation with sample data are crucial to ensure the workflow performs as expected and aligns with security incident response procedures.

## 📊 Basic Information

- **Workflow ID:** 1993
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 7157
- **Downloads:** 715
- **Created:** 2023/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1993)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **set** (×4)
- **webhook** 
- **if** (×6)
- **postgres** (×2)
- **httpRequest** (×5)
- **merge** (×2)
- **noOp** (×6)
- **html** 
- **gmail** 
- **slack** 
- **switch** (×2)
- **stickyNote** (×10)
- **manualTrigger** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
