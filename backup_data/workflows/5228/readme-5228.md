# Generate video from prompt using Vertex AI Veo 3 and upload to Google Drive

> ## Who’s it for
This template is perfect for content creators, AI enthusiasts, marketers, and developers who want to automate the generation of cinematic videos using Google Vertex AI’s Veo 3 model. It’s also ideal for anyone experimenting with generative AI for video using n8n.

![Alt text](https://drive.google.com/thumbnail?id=1pKMTF3Mk-zcX9qYEk6OW2IHwSXSYUmWx&sz=w1000)

## What it does
This workflow:
- Accepts a text prompt and a GCP access token via form.
- Sends the prompt to the Veo 3 (preview model) using Vertex AI’s predictLongRunning endpoint.
- Waits for the video rendering to complete.
- Fetches the final result and converts the base64-encoded video to a file.
- Uploads the resulting .mp4 to your Google Drive.

![Alt text](https://drive.google.com/thumbnail?id=1L9KKkuS0hk5LW9hpGJ_FB9giKYFZpmy4&sz=w1000)
### Output
![Alt text](https://drive.google.com/thumbnail?id=1Biq2vhbzaFLya1ZsF8PhGL1RRta7XkMK&sz=w1000)

## How to set up
1. Enable Vertex AI API in your GCP project:
[https://console.cloud.google.com/marketplace/product/google/aiplatform.googleapis.com](https://console.cloud.google.com/marketplace/product/google/aiplatform.googleapis.com)

2. Authenticate with GCP using Cloud Shell or local terminal:
```
gcloud auth login
gcloud config set project [YOUR_PROJECT_ID]
gcloud auth application-default set-quota-project [YOUR_PROJECT_ID]
gcloud auth print-access-token
```
- Copy the token and use it in the form when running the workflow.
- ⚠️ This token lasts ~1 hour. Regenerate as needed.

3. Connect your Google Drive OAuth2 credentials to allow file upload.

4. Import this workflow into n8n and execute it via form trigger.

## Requirements
- **n8n (v1.94.1+)**
- A **Google Cloud project** with:
  - Vertex AI API enabled
  - Billing enabled
- A way to get **Access Token** ```gcloud auth print-access-token```
- A **Google Drive OAuth2 credential** connected to n8n

## How to customize the workflow
- You can modify the 
  - ```durationSeconds```
  - ```aspectRatio```
  - ```generateAudio```

- in the HTTP node to match your use case.
- Replace the Google Drive upload node with alternatives like Dropbox, S3, or YouTube upload.
- Extend the workflow to add subtitles, audio dubbing, or LINE/Slack alerts.

Step-by-step for each major node:

Prompt Input → Vertex Predict → Wait → Fetch Result → Convert to File → Upload

## Best Practices Followed
- No hardcoded API tokens
- Secure: GCP token is input via form, not stored in workflow
- All nodes are renamed with clear purpose
- All editable config grouped in Set node

## External References
- GCP Veo API Docs:
https://cloud.google.com/vertex-ai/docs/generative-ai/video/overview

## Disclaimer
- This workflow uses official Google Cloud APIs and requires a valid GCP project.
- Access token should be generated securely using gcloud CLI.
- Do not embed tokens in the workflow itself.

### Notes on GCP Access Token
To use the Vertex AI API in n8n securely:
1. Run the following on your local machine or GCP Cloud Shell:
```
gcloud auth login
gcloud config set project your-project-id
gcloud auth print-access-token
```
2. Paste the token in the workflow form field ```YOUR_ACCESS_TOKEN```
 when submitting.
3. **Do not hardcode the token** into HTTP nodes or Set nodes — input it each time or use a secure credential vault.

## 📊 Basic Information

- **Workflow ID:** 5228
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 20727
- **Downloads:** 2072
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5228)

## 👤 Author

- **Name:** Jaruphat J.
- **Username:** @jaruphatj

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **convertToFile** 
- **formTrigger** 
- **googleDrive** 
- **httpRequest** (×2)
- **stickyNote** (×8)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
