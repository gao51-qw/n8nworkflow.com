# Automated Instagram reels posting using Google Drive, Cloudinary & Sheets

> ## Who is this for?

This workflow is ideal for social media managers, content creators, marketing teams, and automation enthusiasts looking to streamline their Instagram Reels posting from Google Drive using n8n, Google Sheets, and Cloudinary.

## What problem is this workflow solving? / Use case

Manually downloading video files, uploading to third-party platforms, and posting to Instagram Reels is time-consuming. This workflow automates the whole process, ensuring timely, consistent content delivery and reducing manual errors.

## What this workflow does

- Automatically fetches scheduled Reel content from Google Sheets ([Sample link](https://docs.google.com/spreadsheets/d/1TjZL_eWbs01DdRYs8pJNDr5UMXzYe8u311o6rVUwjdg/edit?usp=sharing))
- Downloads video files from Google Drive folders
- Uploads videos to Cloudinary for hosting
- Posts the videos as Instagram Reels with custom captions
- Updates the Google Sheet to mark content as posted

## Setup

- Prepare a Google Drive folder set to public sharing for your videos
- Create a Cloudinary account and configure upload presets
- Connect an Instagram Business account (linked to a Facebook Page)
- Set up a Google Sheet with video post details: `Video Name`, `Type`, `Caption`, `Status`
- Configure the workflow schedule in n8n

## How to customize this workflow to your needs

- Adjust the schedule for desired posting frequency
- Add fields to your sheet for custom tags or content variations
- Change the Cloudinary or Instagram settings for different media types
- Integrate additional steps for error handling or approval workflows

## 📊 Basic Information

- **Workflow ID:** 6217
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1569
- **Downloads:** 156
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6217)

## 👤 Author

- **Name:** Henry
- **Username:** @henry

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **stickyNote** (×4)
- **set** 
- **httpRequest** (×4)
- **wait** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
