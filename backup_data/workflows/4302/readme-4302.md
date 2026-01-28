# Airtable base backups to S3

> This workflow exports every table in a base as its own CSV, saves the files in a time-stamped folder in Amazon S3, pings you on Slack, and optionally prunes older copies. You get an automated weekly backup that is easy to inspect or re-import as needed. You can easily swap the S3 node for the storage provider of your choice.

++How it works++

Weekly Backup
- Schedule trigger fires weekly
- Sets and formats the week ex. [2025-W12]
- Create a folder in S3 bucket with the week
- Loops through all tables in Airtable base creating CSVs and uploading to the new path
- Slack message is sent on completion

Monthly Prune
- Schedule trigger fires weekly
- Sets a cut-off date 4 weeks in the past
- Lists folders in S3
- Deletes all folders &gt; 4 weeks old

++Setup Steps++

1. Clone workflow
2. Swap credentials for Airtable, AWS, and Slack
	- Ensure AWS credential has appropriate IAM policy to manage bucket & objects
3. Set workflow to "Active" 



## 📊 Basic Information

- **Workflow ID:** 4302
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 371
- **Downloads:** 37
- **Created:** 2025/5/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4302)

## 👤 Author

- **Name:** Autonomous Work
- **Username:** @autonomouswork

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **airtable** (×2)
- **splitInBatches** 
- **set** (×3)
- **convertToFile** 
- **awsS3** (×4)
- **scheduleTrigger** (×2)
- **if** 
- **slack** 
- **noOp** 
- **stickyNote** (×2)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
