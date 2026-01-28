# Send a file from S3 to AWS Textract

> This workflow shows how to download an image file from S3 and pass it on to Textract for text extraction.

![](https://docs.n8n.io/assets/img/workflow.51d5f2fc.png)

The workflow uses two nodes:
- **AWS S3**: This node will download a receipt file from S3
- **AWS Textract**: This node connects to Aamazon's Textract service to extract text from the receipt file

## 📊 Basic Information

- **Workflow ID:** 1282
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 2679
- **Downloads:** 267
- **Created:** 2021/10/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1282)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **awsTextract** 
- **awsS3** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
