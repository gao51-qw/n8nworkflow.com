# Download and compress folder from S3 to ZIP file

> 
This workflow downloads all files from a specific folder in a S3 Bucket and compresses them so you can download it via n8n or do further processings.

Fill in your **Credentials and Settings** in the Nodes marked with _"*"_.

Might serve well as Blueprint or as manual Download for S3 Folders. 

Since I found it rather tricky to compress all binary files into one zip file I figured might it be an interesting Template. 

**Hint:**
This is the expression to get every binary key to compress them dynamically. 
```{{ Object.keys($binary).join(',') }}```
(used in the "Compress"-Node)

![Image](https://cloud.let-the-work-flow.com/logo-64.png)
Enjoy the Workflow! ❤️ 
https://let-the-work-flow.com
Workflow Automation & Development

## 📊 Basic Information

- **Workflow ID:** 2451
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1617
- **Downloads:** 161
- **Created:** 2024/10/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2451)

## 👤 Author

- **Name:** Marcel Claus-Ahrens
- **Username:** @geckse

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **awsS3** (×2)
- **aggregate** 
- **stickyNote** 
- **compression** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
