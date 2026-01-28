# Respond with file download to incoming HTTP request

> This simple workflow demonstrates how to get an end user's browser to download a file. It makes use of the [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header to set a filename and control the browser behaviour.

![image.png](fileId:709)

A use case could be the download of a PDF file at the end of an application process or to export data from a database without replacing the current page content in the browser.

With this approach, the current page remains open and the file is simply downloaded instead:

![image.png](fileId:710)

The original idea was first present [here](https://community.n8n.io/t/webhook-to-excel-file/11059/24?u=mutedjam) by @dickhoning in the n8n community.

## 📊 Basic Information

- **Workflow ID:** 1920
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 5985
- **Downloads:** 598
- **Created:** 2023/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1920)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **webhook** 
- **httpRequest** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
