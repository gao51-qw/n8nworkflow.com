# Extract and store YouTube video comments in Google Sheets

> ### This n8n template demonstrates how to use the tool to crawl comments from a YouTube video and simply get all the results in a linked Google Sheet.

Use cases are many: Whether you're **a YouTube creator** trying to understand your audience, **a marketer** running sample analysis, **a data analyst** compiling engagement metrics, or part of **a growth team** tracking YouTube or social media campaign performance, this workflow helps you extract real, actionable insights from YouTube video comments at scale.

## How It Works
- The workflow starts when you manually click **Test Workflow** or **Execute Workflow** in N8N.
- It reads the list of YouTube video URLs from the **Video URLs** tab in the connected **YouTube – Get Video Comments** Google Sheet. Only the URLs marked with the **Ready** status will be processed.
- The tool loops through each video and sends an HTTP request to the YouTube API to fetch comment data.
- Then, it checks whether the request is successful before continuing.
- If comments are found, they are split and processed.
- Each comment is then inserted in the **Results** tab of the connected **YouTube – Get Video Comments** Google Sheet.
- Once a URL has been finished, its status in the **Video URLs** tab of the **YouTube – Get Video Comments** Google Sheet is updated to **Finished**.

## How To Use
- Download the workflow package. 
- Import the workflow package into your N8N interface.
- Duplicate the [**"YouTube - Get Video Comments"** Google Sheet template](https://docs.google.com/spreadsheets/d/1F5yEhjBWu3fnwgHGLsPLD9_tWRqUnxu4p0DEvUTae1Y/edit?gid=426418282#gid=426418282) into your Google Sheets account.
- Set up **Google Cloud Console** credentials in the following nodes in N8N, ensuring enabled access and suitable rights to Google Sheets and YouTube services:
    + For Google Sheets access, ensure each node is properly connected to the correct tab in your connected Google Sheet template: 
         Node **Google Sheets - Get Video URLs** → connected to the **Video URLs** tab; 
         Node **Google Sheets - Insert/Update Comment** → connected to the **Results** tab; 
         Node **Google Sheets - Update Status** connected to the **Video URLs** tab.
    + For YouTube access: Set up a GET method in Node **HTTP Request - Get Comments**.
- Open the template in your Google Sheets account. In the tab **Video URLs**, fill in the video URLs you want to crawl in **Column B** and update the status for each row in **Column A** to **Ready**.
- Return to the N8N interface and click **Execute Workflow**.
- Check the results in the **Results** tab of the template - the collected comments will appear there.

## Requirements
- Basic setup in Google Cloud Console (OAuth or API Key method enabled) with enabled access to YouTube and Google Sheets.

## How To Customize
- By default, the workflow is manually triggered in N8N. However, you can automate the process by adding a Google Sheets trigger that monitors new entries in your connected **YouTube – Get Video Comments** template and starts the workflow automatically.

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

- **Workflow ID:** 5690
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 6256
- **Downloads:** 625
- **Created:** 2025/7/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5690)

## 👤 Author

- **Name:** Agent Circle
- **Username:** @agentcircle

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **splitOut** 
- **if** (×3)
- **googleSheets** (×4)
- **splitInBatches** 
- **httpRequest** 
- **stickyNote** (×5)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
