# Automate PDF image extraction & analysis with GPT-4o and Google Drive

> **Use Case**

Manually extracting images from PDF files for analysis is often slow and inefficient. Many users resort to taking screenshots of each page, uploading them to an AI tool like OpenAI for image analysis, and then manually copying the insights into a document. This manual process is time-consuming and prone to errors.

This workflow streamlines the entire process by automatically extracting images from a PDF, analyzing them using the GPT-4o model, and saving the results in seconds—eliminating the need for manual effort.

**What This Workflow Does**

Extracts all images from the uploaded PDF file automatically
The workflow scans each page of the PDF and identifies embedded images without manual intervention.

Uses the GPT-4o model to analyze each extracted image

Each image is processed through GPT-4o to generate descriptive insights, summaries, or context-specific analysis depending on the use case.

Saves the analysis results to a .txt file, including image URLs
The final output is a plain text file containing both the image URLs (e.g., hosted on cloud storage) and the corresponding GPT-4o analysis, ready for further use or sharing.

**Setup**

1.Set up your credentials when you first open the workflow. You’ll need accounts for OpenAI, Convert API, and Google Drive.

2.Convert API does not rate-limit your API, sometimes you may receive 503 service unavailable error.

Nevertheless, it doesn’t mean that you cannot convert your file. It simply means that you should retry the conversion in a few seconds.

3.Upload a PDF with images to Google Drive.

4.Remove unnecessary parts and retrieve image-related information.

5.Integrate image and image analysis information together.

6.Analyze each image using the OPENAI GPT-4o model.

7.Retrieve all image analysis content and image URL

8.Integrate multiple image URLs and analysis content

9.Output content to a .txt file.

Template was created in n8n v1.83.2

**How to Customize**

Replace the manual trigger with a Google Drive trigger or other automation triggers

Change the image analysis model (e.g., switch or fine-tune GPT-4o)

Send the results to other platforms (e.g., Slack, Telegram, LINE, etc.) instead of saving to a .txt file



## 📊 Basic Information

- **Workflow ID:** 3567
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 8433
- **Downloads:** 843
- **Created:** 2025/4/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3567)

## 👤 Author

- **Name:** merfy
- **Username:** @merfylee

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×3)
- **googleDrive** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 
- **splitOut** 
- **code** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
