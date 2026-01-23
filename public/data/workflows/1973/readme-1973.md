# Analyze CrowdStrike detections - Search for IOCs in VirusTotal - Create a ticket in Jira, and post a message in Slack

> This n8n workflow automates the handling of security detections from CrowdStrike, streamlining incident response and notification processes. The workflow is triggered daily at midnight by the Schedule Trigger node.

It begins by fetching recent security detections from CrowdStrike using an HTTP Request node. The response is then split into individual detections for further processing. Each detection is enriched by querying the CrowdStrike API for detailed information using another HTTP Request node. The workflow then processes these detections sequentially using the Split In Batches node.

Next, it looks up behavioral information associated with each detection in VirusTotal using two HTTP Request nodes. One node queries VirusTotal based on SHA256 values, and the other based on IOC (Indicator of Compromise) values. The workflow includes a 1-second pause using the Wait node to prevent rate limiting when making requests to the VirusTotal API.

Subsequently, the workflow sets fields with relevant details from both CrowdStrike and VirusTotal, including detection links, confidence scores, filenames, usernames, and more. These details are concatenated using an Item Lists node for each detection. The final step involves creating Jira issues for each detection, including summaries with CrowdStrike alert severity and hostnames, as well as descriptions that incorporate information from CrowdStrike and VirusTotal. Information about this issue is then sent via a Slack message to a Slack user.

Potential issues during setup might include configuring the Schedule Trigger node to trigger at the correct time zone and handling potential rate limiting from the VirusTotal API, which could lead to throttled requests. Additionally, the note about a possible typo in the URL for the Virustotal nodes should be addressed to ensure correct API calls. The Jira node may need to be replaced with the latest version for compatibility. Properly configuring API credentials and handling errors that may occur during API requests are essential for a smooth workflow operation. Careful testing with sample data is recommended to validate the workflow's functionality and ensure it aligns with your organization's security incident response processes.

## 📊 Basic Information

- **Workflow ID:** 1973
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 5518
- **Downloads:** 551
- **Created:** 2023/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1973)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **scheduleTrigger** 
- **itemLists** (×3)
- **httpRequest** (×4)
- **splitInBatches** 
- **set** 
- **jira** 
- **slack** 
- **stickyNote** (×5)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
