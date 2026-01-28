# Upload carousel of images to Tiktok and Instagram  with upload-post.com

> # Image Carousel Publisher for Instagram and TikTok

## Description
This automation template is designed for content creators, digital marketers, and social media managers looking to streamline their image carousel posting workflow. It automates the process of uploading multiple images as carousels to Instagram and slideshows to TikTok, making your visual content management more efficient across platforms.

### Who Is This For?
- **Content Creators & Influencers:** Simplify posting image collections and focus more on creating visual content.
- **Digital Marketers:** Ensure consistent carousel posts across multiple platforms with minimal manual effort.
- **Social Media Managers:** Automate repetitive image uploading tasks and maintain visual engagement.

### What Problem Does This Workflow Solve?
Manually uploading image carousels to different platforms can be time-consuming and inconsistent. This workflow addresses these challenges by:
- **Automating Multi-Image Uploads:** Processes multiple images and prepares them for platform-specific formats.
- **Supporting Cross-Platform Publishing:** Simultaneously posts your image carousels to Instagram and TikTok slideshows.
- **Maintaining Visual Consistency:** Ensures your visual stories remain consistent across platforms.
- **Streamlining Batch Processing:** Handles the technical complexity of multi-image uploads with a single workflow trigger.

### How It Works
1. **Image Selection:** Trigger the workflow with your selected images.
2. **Image Processing:** The workflow automatically processes and prepares your images for both platforms.
3. **Content Distribution:** Uploads the images as a carousel to Instagram and as a slideshow to TikTok.
4. **Platform Optimization:** Formats the uploads according to each platform's requirements.

### Setup
1. **API Token Generation:**
   - Visit [upload-post.com](https://upload-post.com) and create an account
   - Navigate to the API settings section
   - Generate a new API token
   - Copy the token for use in the next steps

2. **Platform Configuration:**
   - In the "Upload to Instagram" node:
     - Paste your API token in the designated field
     - Configure your Instagram account settings
     - Set your preferred posting parameters
   
   - In the "Upload to TikTok" node:
     - Add the same API token
     - Set up your TikTok account credentials
     - Adjust posting preferences

3. **Content Parameters Setup:**
   - Rename the "HTTP Request" node to "Social Media Upload Request"
   - Configure your account information:
     - Username
     - Account ID
     - Content title format
     - Posting schedule (if applicable)

4. **Image Source Configuration:**
   - Set up your image source directory
   - Configure image format requirements
   - Test with sample images before going live

### About upload-post.com
Upload-post.com is a third-party service that acts as a bridge between your workflow and social media platforms. It provides:
- Secure API endpoints for multi-platform posting
- Image format validation and optimization
- Queue management for scheduled posts
- Analytics and posting status tracking
- Cross-platform compatibility handling

### Requirements
- **Accounts:** upload-post.com account with access to Instagram and TikTok publishing.
- **API Keys:** Upload-post.com API token.
- **Images:** Properly formatted images that meet Instagram and TikTok specifications:
  - Instagram: Up to 10 images per carousel, 1:1 to 4:5 aspect ratio
  - TikTok: Compatible with slideshow format, 9:16 aspect ratio recommended

Use this template to enhance your visual storytelling, maintain consistency across social platforms, and engage your audience with compelling image carousels and slideshows.

## 📊 Basic Information

- **Workflow ID:** 3524
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 5164
- **Downloads:** 516
- **Created:** 2025/4/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3524)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** (×4)
- **stickyNote** 
- **merge** 
- **code** (×3)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
