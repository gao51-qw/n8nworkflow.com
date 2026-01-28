# Phishing analysis - URLScan.io and VirusTotal

> This n8n workflow automates the analysis of email messages received in a Microsoft Outlook inbox to identify indicators of compromise (IOCs), specifically suspicious URLs. It can be triggered manually or scheduled to run daily at midnight.

The workflow begins by retrieving up to 100 read email messages from the Outlook inbox. However, there seems to be a configuration issue as it should retrieve unread messages, not read ones. It then marks these messages as read to avoid processing them again in the future.

The messages are then split into individual items using the Split In Batches node for sequential processing. For each email, the workflow analyzes its content to find URLs, which are considered potential IOCs. If URLs are found, the workflow proceeds to check these URLs for potential threats using two services, URLScan.io and VirusTotal, in parallel.

In the first path, URLScan.io scans each URL, and if there are no errors, the results from URLScan.io and VirusTotal are merged. If there are errors, the workflow waits 1 minute before attempting to retrieve the URLScan results again. The loop then continues for the next email. In the second path, VirusTotal is used to scan the URLs, and the results are retrieved.

Finally, the workflow checks if the data field is not empty, filtering out items where no data was found. It then sends a summarized Slack message to report details about the analyzed email, including the subject, sender, date, URLScan report URL, and VirusTotal verdict for URLs that were reported as malicious.

Potential issues during setup include configuring the Outlook node to retrieve unread messages, resolving a configuration issue in the VirusTotal node, and handling authentication and API keys for both URLScan.io and VirusTotal nodes. Additionally, proper error handling and testing with various email content types and URLs are essential to ensure the workflow accurately identifies IOCs and reports them to the Slack channel.


## 📊 Basic Information

- **Workflow ID:** 1992
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 57717
- **Downloads:** 5771
- **Created:** 2023/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1992)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **slack** 
- **splitInBatches** 
- **microsoftOutlook** (×2)
- **httpRequest** (×2)
- **scheduleTrigger** 
- **code** 
- **urlScanIo** (×2)
- **if** (×2)
- **filter** 
- **stickyNote** (×7)
- **wait** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
