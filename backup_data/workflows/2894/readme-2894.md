# Upload to Instagram, TikTok & YouTube from Google Drive

> ## Description
This automation template is designed for content creators, digital marketers, and social media managers looking to simplify their video posting workflow. It automates the process of generating engaging video descriptions and uploading content to both Instagram and TikTok, making your social media management more efficient and error-free.

### Who Is This For?
- **Content Creators & Influencers:** Streamline your video uploads and focus more on creating content.
- **Digital Marketers:** Ensure consistent posting across multiple platforms with minimal manual intervention.
- **Social Media Managers:** Automate repetitive tasks and maintain a steady online presence.

### What Problem Does This Workflow Solve?
Manually creating descriptions and uploading videos to different platforms can be time-consuming and error-prone. This workflow addresses these challenges by:
- **Automating Video Uploads:** Monitors a designated Google Drive folder for new videos.
- **Generating Descriptions:** Uses OpenAI to transcribe video audio and generate engaging, customized social media descriptions.
- **Ensuring Multi-Platform Consistency:** Simultaneously posts your video with the generated description to Instagram and TikTok.
- **Error Notifications:** Optional Telegram integration sends alerts in case of issues, ensuring smooth operations.

### How It Works
1. **Video Upload:** Place your video in the designated Google Drive folder.
2. **Description Generation:** The automation triggers OpenAI to transcribe your video’s audio and generate a captivating description.
3. **Content Distribution:** Automatically uploads the video and description to both Instagram and TikTok.
4. **Error Handling:** Sends Telegram notifications if any issues arise during the process.

### Setup
1. Generate an API token at [social media API upload-post](https://upload-post.com) and configure it in both the Upload to TikTok and Upload to Instagram nodes.
2. **Google Cloud Project:** Create a project in Google Cloud Platform, enable the Google Drive API, and generate the necessary OAuth credentials to connect to your Google Drive account.
3. Set up your Google Drive folder in the Google Drive Trigger node.
4. Customize the OpenAI prompt in the Generate Social Description node to match your brand’s tone.
5. (Optional) Configure Telegram credentials for error notifications.

### Requirements
- **Accounts:** upload-post.com, Google Drive, and (optionally) Telegram.
- **API Keys & Credentials:** Upload-post.com API token, OpenAI API key, and (optional) Telegram bot token.
- **Google Cloud:** A project with the Google Drive API enabled and valid OAuth credentials.

Use this template to enhance your productivity, maintain consistency across your social media channels, and engage your audience with high-quality video content.


## 📊 Basic Information

- **Workflow ID:** 2894
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 45676
- **Downloads:** 4567
- **Created:** 2025/2/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2894)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **errorTrigger** 
- **telegram** 
- **if** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **writeBinaryFile** 
- **readBinaryFile** (×3)
- **httpRequest** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
