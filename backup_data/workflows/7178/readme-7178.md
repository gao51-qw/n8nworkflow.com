# Template for Google Drive and Google Docs with clear structure and purpose

> ![Automate Image Transfer from Google Drive to Google Docs with Resizing.png](fileId:2120)



**Description**

This n8n workflow automates the process of retrieving images from a specific Google Drive folder, resizing them, and inserting them into a Google Docs document.
It ensures images are processed in numeric order, automatically resized to fit the document, and uploaded in batches to prevent timeouts.

This template is designed for content creators, documentation teams, and businesses who need to automatically insert images (e.g., product photos, reports, or scanned documents) into Google Docs with minimal manual effort.

**How it works**

1. Retrieves image files from a Google Drive folder.
2. Filters and sorts files based on numeric order in the filename.
3. Generates direct image URIs and resizes them automatically (width & height).
4. Inserts the resized images into the target Google Docs document via API.
5. Uses a batch loop to avoid timeouts and ensure all images are uploaded successfully.

**Requirements / Pre-conditions**

1. An n8n instance (self-hosted or cloud).
2. Connected Google Drive credential in n8n.
3. Connected Google Docs credential in n8n.
4. A target Google Drive folder containing supported image files.
5. A Google Docs document ready to receive the images.
6. Supported formats: PNG, JPG, JPEG, GIF, WEBP.
Error handling: If a file is not an image or exceeds Google Docs API limits, the workflow will skip it and continue processing the rest.

**Setup Steps**

1. Google Drive Credential
Connect your Google Drive account in n8n to grant access to the folder containing the images.
2. Google Docs Credential
Connect your Google Docs account to allow image insertion into the document.
3. Folder & File Filter
In the Search File node, replace the placeholder {{YOUR_FOLDER_ID}} with your Google Drive folder ID.
4. Google Docs Document ID
In the Insert Image (HTTP Request) node, replace {{YOUR_DOCUMENT_ID}} with your target Google Docs document ID.
(Make sure you rename this node to something descriptive, e.g., Insert Image to Google Doc.)
5. Batch Loop
The workflow includes a batch processing loop to prevent timeout errors when dealing with large sets of images. You can adjust the batch size if needed.
6. Run the workflow
Execute the workflow, and images will be automatically retrieved, resized, and inserted into the document.

**Customization**

- Resize Dimensions: Adjust the width/height in the Image Resize node to fit your document’s style.
- Ordering Logic: Modify the sorting step if you want alphabetical or upload-date order instead of numeric order.
- Error Notifications: Add an email or Slack node to notify you when an image fails to insert.
- Image Placement: By default, images are appended. You can adjust the insert logic (e.g., after specific headings).

## 📊 Basic Information

- **Workflow ID:** 7178
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 503
- **Downloads:** 50
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7178)

## 👤 Author

- **Name:** Garri
- **Username:** @garri

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **stickyNote** (×5)
- **googleDrive** (×2)
- **code** (×2)
- **httpRequest** 
- **wait** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
