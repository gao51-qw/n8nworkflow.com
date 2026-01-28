# Extract and store text from chat images using AWS S3

> This workflow extracts text from images sent in a Telegram chat and uploads the images to AWS S3.

![workflow-screenshot](fileId:588)

- **Telegram Trigger node** triggers the workflow when an image is sent in a Telegram channel.
- **AWS S3 node** uploads the sent image to an S3 bucket.
- **AWS Textract node** extracts text from the image.
- **Airtable node** adds the extracted text and image information to a table. 

## 📊 Basic Information

- **Workflow ID:** 1393
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 4623
- **Downloads:** 462
- **Created:** 2022/1/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1393)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **awsTextract** 
- **telegramTrigger** 
- **airtable** 
- **awsS3** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
