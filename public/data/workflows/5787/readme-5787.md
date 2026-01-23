# From Google Drive to Instagram, TikTok & YouTube with AI descriptions & Airtable tracking

> ## Description

![Captura de pantalla 20250708 a las 18.45.22.png](fileId:1713)

This automation template is designed for content creators, social media managers, and influencers who want to streamline their video publishing workflow. It automatically detects new videos uploaded to a specific Google Drive folder, generates AI-powered descriptions based on video audio content, and simultaneously publishes them across Instagram, TikTok, and YouTube while tracking everything in Airtable.

***Note: This workflow uses upload-post.com API (free trial no credit card required) for multi-platform video distribution and requires API tokens for each service. The AI-generated descriptions are created using OpenAI's transcription and chat models to analyze video audio content.***

## Who Is This For?
- **Content Creators & Influencers:** Automatically publish your videos across all major social platforms without manual work.
- **Social Media Managers:** Maintain consistent posting schedules across multiple platforms with AI-generated, platform-optimized descriptions.
- **Marketing Teams:** Scale video content distribution with automated workflows that include tracking and status monitoring.
- **Video Producers:** Focus on creating content while the system handles the tedious task of multi-platform publishing and description generation.

## What Problem Does This Workflow Solve?
Publishing the same video content across Instagram, TikTok, and YouTube is time-consuming and repetitive. You need to manually upload each video, write unique descriptions, and track publication status. This workflow addresses these challenges by:
- **Automated Video Distribution:** Detects new videos in Google Drive and automatically uploads them to all three platforms simultaneously.
- **AI-Powered Content Generation:** Uses OpenAI to transcribe video audio and generate engaging, platform-appropriate descriptions automatically.
- **Centralized Tracking:** Maintains detailed records in Airtable including upload status, URLs, and metadata for each platform.
- **Error Monitoring:** Provides real-time error notifications via Telegram to ensure you're always aware of any issues.

## How It Works
1. **Video Upload Detection:** The workflow monitors a specific Google Drive folder for new video uploads using automated triggers.
2. **Content Analysis:** Downloads the video, extracts audio, and uses OpenAI to transcribe and generate compelling descriptions.
3. **Airtable Integration:** Creates and updates records to track video metadata, descriptions, and publication status.
4. **Multi-Platform Publishing:** Simultaneously uploads the video to Instagram, TikTok, and YouTube using the upload-post.com API.
5. **Status Tracking:** Updates Airtable records with publication status and platform-specific URLs for each successful upload.

## Setup
1. **Google Drive Configuration:** 
   - Set up the Google Drive trigger to monitor your specific folder
   - Configure OAuth2 credentials for Google Drive access
2. **OpenAI Integration:** Add your OpenAI API key to enable audio transcription and description generation
3. **Airtable Setup:** 
   - Create an Airtable base with fields for Video Name, Description, Platform Status, URLs, and Upload Date
   - Add your Airtable API token and configure base/table IDs in the "Set Variables" node
4. **Upload-Post.com Account:** 
   - Create an account at upload-post.com to get your API token
   - Configure the token in the HTTP request nodes for each platform
   - Set your user ID in the variables section
5. **Platform Accounts:** Ensure your Instagram, TikTok, and YouTube accounts are connected to upload-post.com
6. **Error Notifications:** (Optional) Configure Telegram bot credentials for error notifications

## Requirements
- **Accounts:** Google Drive, OpenAI, Airtable, upload-post.com, Telegram (optional)
- **API Keys & Credentials:** Google Drive OAuth2, OpenAI API Key, Airtable API Token, upload-post.com API Token
- **Platform Setup:** Instagram, TikTok, and YouTube accounts connected to upload-post.com

Transform your video publishing workflow from hours of manual work to a fully automated system that handles everything from content analysis to multi-platform distribution and tracking.

## 📊 Basic Information

- **Workflow ID:** 5787
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 14065
- **Downloads:** 1406
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5787)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **set** (×5)
- **googleDriveTrigger** 
- **googleDrive** 
- **airtable** (×5)
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

This workflow contains 25 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
