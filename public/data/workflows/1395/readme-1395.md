# Collects images from web search results and send to Google Sheets

> This workflow collects images from web search results on a specific query, analyzes the image for labels, formats the text, and adds the information in Google Sheets.

![workflow-screenshot](fileId:590)

- **HTTP Request node** gets images from the web.
- **AWS Rekognition node** analyzes the images (in this case, it detects text in an image).
- **Set node** sets the values necessary for the data set.
- **Function node** transforms the text detected in the image to lower case.
- **Google Sheets node** adds the image information to a sheet that serves as data set.

## 📊 Basic Information

- **Workflow ID:** 1395
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 3547
- **Downloads:** 354
- **Created:** 2022/1/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1395)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **awsRekognition** 
- **httpRequest** (×2)
- **set** 
- **function** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
