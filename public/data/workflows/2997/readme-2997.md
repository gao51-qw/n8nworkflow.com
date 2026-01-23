# Automated AI image tagging and writing keywords into image (via community node)

> # Welcome to my Automated Image Metadata Tagging Workflow!

**DISCLAIMER: This workflow only works with self-hosted n8n instances! You have to install the [n8n-nodes-exif-data Community Node](https://www.npmjs.com/package/n8n-nodes-exif-data)!**

This workflow automatically analyzes the image content with the help of AI and writes it directly back into the image file as keywords.
(https://n8n.io/workflows/2995).**

![Screenshot 20250224 201346.png](fileId:964)

## This workflow has the following steps:

1. Google Drive trigger (scan for new files added in a specific folder)
2. Download the added image file
3. Analyse the content of the image
4. Merge Metadata and image file
5. Write the Keywords into the Metadata (dc:subject/keywords) and create new image file
6. Update the original file in the Google Drive folder

## The following accesses are required for the workflow:
- **You have to install the [n8n-nodes-exif-data Community Node](https://www.npmjs.com/package/n8n-nodes-exif-data)**
- Google Drive: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)

You can contact me via LinkedIn, if you have any questions: https://www.linkedin.com/in/friedemann-schuetz

## 📊 Basic Information

- **Workflow ID:** 2997
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1574
- **Downloads:** 157
- **Created:** 2025/2/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2997)

## 👤 Author

- **Name:** Friedemann Schuetz
- **Username:** @freddy-schuetz

## 🏷️ Categories

- File Management
- AI Summarization

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 
- **n8n-nodes-exif-data.exifData** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
