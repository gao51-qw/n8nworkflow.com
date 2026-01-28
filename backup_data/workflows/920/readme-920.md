# Generate, retrieve and download a report using the SecurityScorecard

> This workflow allows you to generate, retrieve and download a report using the SecurityScorecard node.

![workflow-screenshot](fileId:400)

**SecurityScorecard node:** This node generates a full scorecard report. Based on your use-case, you can generate other type of report.

**SecurityScorecard1 node:** This node fetches the latest report from SecurirtScoredcard. Toggle ***Return All*** to `true` to return all the reports.

**SecurityScorecard2 node:** This node downloads the report that got fetched from the previous node. 

Based on your use-case, you can either store this report in Dropbox, Google Drive etc. or email it using the Gmail node, Send Email node or the Microsoft Outlook node.

You can replace the Strat node with the Cron node to trigger the workflow on a regurlar interval.


## 📊 Basic Information

- **Workflow ID:** 920
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 1904
- **Downloads:** 190
- **Created:** 2021/2/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/920)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **manualTrigger** 
- **securityScorecard** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
