# Auto-publish social videos to 9 platforms via Google Sheets and Blotato

> ![Workflow Screenshot](https://www.dr-firas.com/auto-post-rs.png)

# Auto-Publish Social Videos to 9 Platforms via Google Sheets and Blotato

## Who is this workflow for?

This workflow is ideal for marketers, content creators, virtual assistants, and automation specialists managing multi-platform video content. It’s especially useful for teams who want to centralize publishing via a spreadsheet and automate social distribution in one shot.

## What problem does this workflow solve?

Manually posting videos to multiple social platforms is tedious and time-consuming. This workflow allows you to streamline video distribution using **Blotato’s API** — no more switching between platforms or re-uploading the same video multiple times.

## What this workflow does

This automation reads video metadata (URL, caption, title) from a **Google Sheet**, uploads the video to Blotato, and automatically publishes it to **Instagram, YouTube, TikTok, Facebook, LinkedIn, Threads, Twitter (X), Pinterest, and Bluesky**.

It also updates the sheet to reflect the publishing status (`STATUS = DONE`), ensuring that your data remains clean and trackable.

## Setup

1. **Set up your Google Sheet** with the required columns: `PROMPT`, `DESCRIPTION`, `URL VIDEO`, `Titre`, `row_number`, and `STATUS`.
2. Add your **Blotato API key** in the headers of the `Upload Video` and `Post to X` nodes.
3. Replace the platform-specific IDs in the `Assign Social Media IDs` node (Instagram ID, Facebook Page ID, etc.).
4. Set the schedule in the `Schedule Trigger` node to define when the publishing happens.

&gt; ⚠️ **Disclaimer:** This workflow uses Community Nodes. These are only available on self-hosted n8n instances.


## How to customize this workflow

- Add logic to skip rows already marked as `DONE`.
- Expand to more platforms supported by Blotato.
- Use a webhook or Telegram trigger instead of the scheduler for more interactivity.
- Modify content per platform if needed (caption formatting, hashtags, etc.).

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Workflow-n8n-d-Auto-Post-sur-les-r-seaux-sociaux-1d33d6550fd980b7b43ac417e9a06a9b?pvs=4)

## Demo Video

🎥 Watch the full tutorial here: [YouTube Demo](https://youtu.be/ChcyNE1kw8Q)

## 📊 Basic Information

- **Workflow ID:** 3522
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 11921
- **Downloads:** 1192
- **Created:** 2025/4/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3522)

## 👤 Author

- **Name:** Dr. Firas
- **Username:** @drfiras

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **googleSheets** (×2)
- **httpRequest** (×10)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
