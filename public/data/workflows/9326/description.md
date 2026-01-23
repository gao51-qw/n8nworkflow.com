## 🧾 Image Extraction Pipeline (Google Drive + VLM Run + n8n)

### ⚙️ What This Workflow Does

This workflow automates the process of extracting images from uploaded documents in Google Drive using the **VLM Run Execute Agent**, then downloads and saves those extracted images into a designated Drive folder.

### 🧩 Requirements
- **Google Drive OAuth2 credentials**  
- **VLM Run API credentials** with Execute Agent access  
- A reachable **n8n Webhook URL** (e.g., `/image-extract-via-agent`)  

### ⚡Quick Setup

1. Configure Google Drive OAuth2 and create  upload folder and folder for saving extracted images.
2. Install the verified [VLM Run node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun) by searching for **VLM Run** in the node list, then click **Install**. Once installed, you can start using it in your workflows.
3. Add VLM Run [API credentials](https://app.vlm.run/dashboard) for document parsing.

### ⚙️ How It Works

1. **Monitor Uploads** – The workflow watches a specific Google Drive folder for new file uploads (e.g., receipts, reports, or PDFs).  
2. **Download File** – When a file is created, it’s automatically downloaded in binary form.  
3. **Extract Images (VLM Run)** – The file is sent to the **VLM Run Execute Agent**, which analyzes the document and extracts image URLs via its callback.  
4. **Receive Image Links (Webhook)** – The workflow’s Webhook node listens for the agent’s response containing extracted image URLs.  
5. **Split & Download** – The `Split Out` node processes each extracted link, and the `HTTP Request` node downloads each image.  
6. **Save Image** – Finally, each image is uploaded to your chosen **Google Drive folder** for storage or further processing.


### 💡Why Use This Workflow

Manual image extraction from PDFs and scanned files is repetitive and error-prone.
This pipeline automates it using VLM Run, a vision-language AI service that:

- Understands document layout and structure
- Handles multi-page and mixed-content files
- Extracts accurate image data with minimal setup. For example- the output contains URLs to extracted images

```json
{
  "image_urls": [
    "https://vlm.run/api/files/img1.jpg",
    "https://vlm.run/api/files/img2.jpg"
  ]
}
```

- Works with both images and PDFs

### 🧠 Perfect For
- Extracting photos or receipts from multi-page PDFs  
- Archiving embedded images from reports or invoices  
- Preparing image datasets for labeling or ML model training  


### 🛠️ How to Customize

- You can extend this workflow by:
- Adding naming conventions or folder structures based on upload type
- Integrating Slack/Email notifications when extraction completes
- Including metadata logging (file name, timestamp, source) into Google Sheets or a database
- Chaining with classification or OCR workflows using VLM Run’s other agents


### ⚠️ Community Node Disclaimer

This workflow uses community nodes (VLM Run) that may need additional permissions and custom setup.


