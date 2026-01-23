# Upload binary images to X (Twitter) from Google Drive or AI sources

> This workflow lets you post images to X (Twitter) by uploading binary image files obtained from any source, not just Google Drive. Whether you’re fetching images stored on Google Drive or working with AI image generation models that output images directly as binary files, you can integrate these binary files seamlessly into your n8n workflow. Simply download or receive the image as binary data, then pass it as the file parameter in the media upload node to X’s API. This flexible approach lets you automate posts with images generated on-demand by AI, pulled from cloud storage, or anywhere else you can access as binary data—giving you full control to design powerful, no-code social media automations that combine AI creativity with native X posting, all within n8n.

## How to Setup
1. Create Google Drive credentials (if you are using Google Drive for downloading binary files). If you are using any AI model, just connect your download file node before the "Upload Media" node.
2. Create OAuth 1 credentials by following the guide in the sticky notes. (Required: Consumer Key, Consumer Secret)
3. Create OAuth 2 credentials for the native X node within n8n. (Required: Client ID, Client Secret)

## Key Features
- Only native n8n nodes—no external code or scripts needed. 
- Fully no-code: Uses only native, prebuilt n8n nodes visualized in an easy workflow.
- Supports binary image files: Directly uploads any binary image data from Google Drive or AI generation nodes.
- OAuth2 and OAuth1 ready: Straightforward setup for secure authentication with Google Drive and X.

## 📊 Basic Information

- **Workflow ID:** 6340
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 127
- **Downloads:** 12
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6340)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **twitter** 
- **manualTrigger** 
- **googleDrive** 
- **httpRequest** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
