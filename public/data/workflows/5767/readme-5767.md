# Extract YouTube channel videos to Google Sheets with metadata tracking

> ### This N8N template demonstrates how to use our tool to collect a list of videos from any YouTube channel - including video URLs, titles, descriptions, thumbnail links, publish dates, and more - all saved cleanly into a connected Google Sheet.

Use cases are many: Whether you're **a YouTube content strategist** tracking competitors, **a marketing team** building dashboards from video metadata, or **an automation pro** connecting YouTube to downstream workflows, **researchers and analysts** collecting structured video data at scale, this tool gives you what you need!

## How It Works
- The workflow begins when you click **Execute Workflow** or **Test Workflow** manually in N8N.
- It reads the list of full channel URLs, custom channel URLs or channel IDs from the **Channel URLs** tab in the connected Google Sheet. Only the channels with the **Ready** status will be processed.
- A **Switch** node detects whether the input is a full/custom channel URL, or a raw channel ID, and routes it accordingly.
     + If the input is already a **channel ID**, the tool prepares the data structure before sending it to the YouTube API call in the next step.
     + If the input is a **full channel URL** or a **custom channel URL**, the workflow extracts the **username**, then sends a **HTTP Request** to the YouTube API to retrieve the corresponding Channel ID, and prepares the data structure before continuing.
- Once the valid **Channel ID** is set, the tool sends a request to YouTube API endpoint to retrieve a list of public videos. By default, the number of videos extracted per channel is limited to 10. 
- The API response is checked for success:
     + If successful, the video data is split into individual entries, cleaned, and added to the **Videos** tab in the connected Google Sheet. The original rows' status in the **Channel URLs** tab is marked as **Finished**.
     + If an error occurs, the rows' status in the **Channel URLs** tab is marked as **Error** for later review.

## How To Use
- Download the workflow package.
- Import the workflow package into your N8N interface.
- Duplicate the [**YouTube - Get Channel Videos** Google Sheet template](https://docs.google.com/spreadsheets/d/1GIdiUUx1PtEZXOzSUP3aJkrDaVcJdxCGRmCOT94BytA/edit?gid=426418282#gid=426418282) into your Google Sheets account.
- Set up **Google Cloud Console** credentials in the following nodes in N8N, ensuring enabled access and suitable rights to Google Sheets and YouTube services:
    + For Google Sheets access, ensure each node is properly connected to the correct tab in your connected Google Sheet: 
         Node **Google Sheets - Get Channel URLs** → connected to the **Channel URLs** tab; 
         Node **Google Sheets - Update Data** → connected to the **Videos** tab; 
         Node **Google Sheets - Update Data - Success** → connected to the **Channel URLs** tab; 
         Node **Google Sheets - Update Data - Error** → connected to the **Channel URLs** tab.
    + For YouTube access, set up a GET method to connect to YouTube API in the following nodes:
         Node **HTTP Request - Get Channel ID**;
         Node **HTTP Request - Get Channel Videos**.
- In your connected Google Sheet, enter the full channel URLs, custom channel URLs or channel IDs that you want to crawl and set the rows' status to **Ready**.
- Run the workflow by clicking **Execute Workflow** or **Test Workflow** in N8N.
- View the results in your connected Google Sheet: Successful fetches will update the original rows' status to **Finished** and the videos' information show up in the **Videos** tab. If any URL or ID fails, the rows' status will be marked as **Error**.

## Requirements
- Basic setup in Google Cloud Console (OAuth or API Key method enabled) with enabled access to YouTube and Google Sheets.

## How To Customize
- By default, the workflow is manually triggered in N8N. However, you can automate the process by adding **a Google Sheets trigger** that monitors new entries automatically.
- If you want to fetch more video metadata like durations, or view counts, you can expand the HTTP Request and post-processing nodes to include those.
- The workflow, by default, collects **up to 10 videos per channel**. If you’d like to fetch more, in the connected Google Sheet, simply enter your desired video number limit in **Column C** in the **Channel URLs** tab. The tool will use that value when calling the YouTube API.

## Need Help?
Join our community on different platforms for support, inspiration and tips from others.

Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle

## 📊 Basic Information

- **Workflow ID:** 5767
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 981
- **Downloads:** 98
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5767)

## 👤 Author

- **Name:** Agent Circle
- **Username:** @agentcircle

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **if** 
- **googleSheets** (×4)
- **httpRequest** (×2)
- **set** (×3)
- **stickyNote** (×5)
- **splitOut** 
- **switch** 
- **wait** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
