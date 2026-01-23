# Instagram carousel posts from Google Drive via Cloudinary with Telegram alerts

> ## **Overview**

This n8n workflow automates the creation and publishing of Instagram carousel posts by downloading images from Google Drive, uploading them to Cloudinary for hosting, and publishing them as a coordinated carousel post via Facebook Graph API.

### This workflow is perfect for social media managers and content creators who need to publish coordinated multi-image posts from cloud-stored assets with minimal manual intervention.

## Key Features

#### Multi-Image Processing: 
Handles multiple images for carousel posts automatically
#### Cloud Image Hosting: 
Uses Cloudinary for reliable image hosting and delivery
#### Instagram API Integration: 
Creates and publishes carousel posts via Facebook Graph API
#### Google Drive Integration: 
Downloads images directly from Google Drive links
#### Telegram Notifications: 
Sends success notifications after post publication
#### Error Handling: 
Continues workflow execution even if individual images fail
Technical Workflow

#### Data Preparation: 
Structures input data with image links and post content
#### Batch Processing: 
Loops through multiple image URLs from Google Drive
#### Image Download: 
Downloads each image from Google Drive
#### Cloud Upload: 
Uploads images to Cloudinary for public hosting
#### Media Creation: 
Creates Instagram media objects for each image
#### ID Collection: 
Collects all media IDs for carousel creation
#### Carousel Assembly: 
Creates carousel post with all images and caption
#### Publication: 
Publishes the complete carousel to Instagram
Notification: Sends Telegram confirmation message

## Prerequisites

Facebook Graph API credentials with Instagram Business permissions
Google Drive API access for image downloads
Cloudinary Account for image hosting
Instagram Business Account connected to Facebook
Telegram Bot for notifications

## Input Data Structure
The workflow expects data with these fields:

#### instagram_content: 
Caption text for the post
#### Instagram Account ID: 
Target Instagram business account
#### pose_X_drive_fotolink: 
Google Drive links for carousel images
#### Image metadata for processing

## Configuration Options
#### Wait Times: 
20s between carousel creation and 15s before publishing for API rate limits
#### Image Processing: 
Automatic upload to Cloudinary with preset configurations
#### Error Handling: 
Individual image failures won't stop the entire carousel creation
Batch Processing: Processes all images simultaneously for efficiency



## 📊 Basic Information

- **Workflow ID:** 7601
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 912
- **Downloads:** 91
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7601)

## 👤 Author

- **Name:** Robert Schröder
- **Username:** @saits

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **code** 
- **googleDrive** 
- **httpRequest** 
- **set** (×2)
- **splitInBatches** 
- **telegram** 
- **facebookGraphApi** (×3)
- **manualTrigger** 
- **wait** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
