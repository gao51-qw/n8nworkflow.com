# Scheduled multi-photo Facebook posts with Cloudinary from Windows directory

> 📘 Multi-Photo Facebook Post (Windows Directory) – How to Use
✅ Requirements
To run this automation, make sure you have the following:

✅ n8n installed on your local Windows machine

✅ Cloudinary or any other file hosting service for uploading image files

✅ Facebook Page Access Token with the required permissions (pages_manage_posts, pages_read_engagement, pages_show_list, etc.)

🚀 How to Use
Import the provided n8n workflow template into your n8n instance.

Verify the image directory path – ensure that the images you want to post are stored in a local folder (e.g. E:\Autopost-media\YourPage\Images).

Check the caption and hashtag files – this includes:

description.txt (for the post message)

hashtag.txt (for additional tags)

Set your Facebook credentials – insert your Facebook Page Access Token in the designated credential field in the workflow.

⚙️ How It Works (Workflow Logic)
Read Text Files

The workflow reads description.txt and hashtag.txt from the local directory.

These are combined to form the message body for the Facebook post.

Select Images to Post

The Limit node defines how many images to post per run (e.g. 3 images).

Selected image files are uploaded to a file server (like Cloudinary) to obtain public URLs.

Post to Facebook (Multi-Photo)

A multi-photo post is created using the uploaded image URLs and the composed message.

Move Posted Images

After the post is successfully published, the original image files are moved to a new folder.

The destination folder is automatically created using the current date (e.g. E:\Autopost-media\YourPage\Images\20250614).

## 📊 Basic Information

- **Workflow ID:** 4929
- **Complexity:** advanced
- **Node Count:** 36
- **Views:** 994
- **Downloads:** 99
- **Created:** 2025/6/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4929)

## 👤 Author

- **Name:** SalmonRK-AI
- **Username:** @salmonrk-ai

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **readWriteFile** (×6)
- **executeCommand** (×2)
- **extractFromFile** (×4)
- **code** (×2)
- **merge** (×5)
- **facebookGraphApi** (×3)
- **set** (×3)
- **wait** (×2)
- **scheduleTrigger** 
- **stickyNote** (×2)
- **if** 
- **splitInBatches** 
- **limit** 
- **aggregate** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 36 nodes with 32 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
