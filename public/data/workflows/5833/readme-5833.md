# Automate Instagram carousel posts with Google Sheets, Drive & Cloudinary

> ## Who is this for?

This workflow is ideal for social media managers, content creators, marketers, and small businesses who want to automate Instagram Carousel posts using Google Sheets and Google Drive. It is also suitable for anyone looking to streamline repetitive Instagram publishing tasks with n8n, Cloudinary, and the Instagram Graph API.

## What problem is this workflow solving? / Use case

Managing and publishing Instagram Carousel posts manually can be time-consuming, especially when handling multiple accounts or campaigns. This workflow solves that by automatically fetching scheduled posts from Google Sheets, uploading images from Google Drive to Cloudinary, and publishing them to Instagram, saving time and reducing the risk of errors.

## What this workflow does

This n8n workflow checks a Google Sheet every 5 minutes for new Carousel posts marked as "ToDo." When found, it uploads images from a specified Google Drive folder to Cloudinary, prepares the media on Instagram using the Graph API, and publishes the Carousel post with the given caption.

## Setup

- Prepare a Google Sheet to track posts and image folder URLs.
 Example : https://docs.google.com/spreadsheets/d/1WEUHeQXFMYsWVAW3DykWwpANxxD3DxH-S6c0i06dW1g/edit?usp=sharing
- Upload post images to a dedicated Google Drive folder.
- Set up a Cloudinary account and gather API credentials.
- Obtain Instagram `access_token` and `ig_business_id` for API publishing.
- Configure the n8n workflow with required credentials and your custom intervals.

## How to customize this workflow to your needs

- Adjust the schedule trigger interval to fit your publishing frequency.
- Expand the Google Sheet with additional metadata as required.
- Modify the filter logic to support different content types or statuses.
- Add extra automation steps, such as sending notifications after publishing.


## 📊 Basic Information

- **Workflow ID:** 5833
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 6605
- **Downloads:** 660
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5833)

## 👤 Author

- **Name:** Henry
- **Username:** @henry

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **googleDrive** 
- **googleSheets** (×2)
- **scheduleTrigger** 
- **stickyNote** (×4)
- **httpRequest** (×5)
- **set** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
