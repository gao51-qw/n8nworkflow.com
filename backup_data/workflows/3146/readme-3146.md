# Download TikTok videos without watermarks and upload to Google Drive

> ## Who is this for?
Content creators, social media managers, digital marketers, and researchers who need to **download** original **TikTok videos without watermarks** for analysis, repurposing, or archiving purposes.

## What problem does this workflow solve?
Downloading TikTok videos without watermarks typically requires using questionable third-party websites that may have limitations, ads, or privacy concerns. This workflow provides a clean, automated solution that can be integrated into your own systems and processes.

## What this workflow does
This workflow automates the process of downloading TikTok videos without watermarks in three simple steps:

1. **Fetch the TikTok video page** by providing the video URL
2. **Extract the raw video URL** from the page's HTML data
3. **Download the original video file** without watermark
4. **(Optional) Upload to Google Drive** with public sharing link generation

The workflow uses web scraping techniques to extract the original video source directly from TikTok's own servers, maintaining the highest possible quality without any added watermarks or branding.

## Setup (Est. time: 5-10 minutes)
Before getting started, you'll need:
- [n8n installation](https://n8n.partnerlinks.io/n8nTTVideoGenTemplate)
- The URL of a TikTok you want to download
- (Optional) Google Drive API enabled in Google Cloud Console with OAuth Client ID and Client Secret credentials if you want to use the upload feature

## How to customize this workflow to your needs
- Replace the example TikTok URL with your desired video links
- Modify the file naming convention for downloaded videos
- Integrate with other nodes to process videos after downloading
- Create a webhook to trigger the workflow from external applications
- Set up a schedule to regularly download videos from specific accounts

This workflow can be extended to support various use cases like trending content analysis, competitor research, creating compilation videos, or building a content library for inspiration. It provides a foundation that can be customized to fit into larger automated workflows for content creation and social media management.

## 📊 Basic Information

- **Workflow ID:** 3146
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 22342
- **Downloads:** 2234
- **Created:** 2025/3/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3146)

## 👤 Author

- **Name:** Cameron Wills
- **Username:** @camerondwills

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **code** 
- **stickyNote** (×4)
- **googleDrive** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
