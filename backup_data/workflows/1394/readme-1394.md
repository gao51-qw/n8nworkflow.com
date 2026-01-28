# Transcribe audio files from Cloud Storage

> This workflow transcribes audio files stored in AWS S3 and stores the information in Google Sheets.

![workflow-screenshot](fileId:592)

- **Google Drive Trigger node** triggers the workflow when a new file is uploaded in Google Drive.
- **AWS S3 1 node** uploads the new file to an S3 bucket.
- **AWS S3 2 node** gets the file from the S3 bucket.
- **AWS Transcribe 1 node** creates a transciption job for the respective audio file.
- **Wait node** waits for the transcription job from the previous node to be complete before proceeding with the workflow (necessary in case the service is busy or the file to be transcribed is large, delaying the workflow).
- **AWS Transcribe 2 node** gets the information of the transcription job.
- **Set node** sets the necessary values to be included in the data set.
- **Google Sheets node** adds the transcription information to a sheet that serves as data set.

## 📊 Basic Information

- **Workflow ID:** 1394
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 10492
- **Downloads:** 1049
- **Created:** 2022/1/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1394)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** 
- **awsTranscribe** (×2)
- **awsS3** (×2)
- **set** 
- **googleDriveTrigger** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
