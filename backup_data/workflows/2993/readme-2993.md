# Copy viral reels with Gemini AI

> ### Video Guide

I prepared a detailed guide that shows the whole process of building an AI tool to analyze Instagram Reels using n8n.

[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/v1740390927/Youtube%20Thumbs/Video_21_-_Philipp_Instagram_Blur.png)](https://youtu.be/SQPPM0KLsrM)

[Youtube Link](https://youtu.be/SQPPM0KLsrM)

### Who is this for?
This workflow is ideal for social media analysts, digital marketers, and content creators who want to leverage data-driven insights from their Instagram Reels. It's particularly useful for those looking to automate the analysis of video performance to inform strategy and content creation.

### What problem does this workflow solve?
Analyzing video performance on Instagram can be tedious and time-consuming, requiring multiple steps and data extraction. This workflow automates the process of fetching, analyzing, and recording insights from Instagram Reels, making it simpler for users to track engagement metrics without manual intervention.

### What this workflow does
This workflow integrates several services to analyze Instagram Reels, allowing users to:
- Automatically fetch recent Reels from specified creators.
- Analyze the most-watched videos for insights.
- Store and manage data in Airtable for easy access and reporting.

1. **Initial Trigger**: The process begins with a manual trigger that can later be modified for scheduled automation.
2. **Data Retrieval**: It connects to Airtable to fetch a list of creators and their respective Instagram Reels.
3. **Video Analysis**: It handles the fetching, downloading, and uploading of videos for analysis using an external service, simplifying performance tracking through a structured query process.
4. **Record Management**: It saves relevant metrics and insights into Airtable, ensuring that users can access and organize their video analytics effectively.

### Setup

1. **Create accounts**:
   - Set up Airtable, Edify, n8n, and Gemini accounts.

2. **Prepare triggers and modules**:
   - Replace credentials in each node accordingly.

3. **Configure data flow**:
   - Ensure modules are set to fetch and analyze the correct data fields as outlined in the guide.

4. **Test the workflow**:
   - Run the scenario manually to confirm that data is fetched and analyzed correctly.

## 📊 Basic Information

- **Workflow ID:** 2993
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 13032
- **Downloads:** 1303
- **Created:** 2025/2/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2993)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **wait** 
- **set** (×3)
- **httpRequest** (×5)
- **stickyNote** (×10)
- **sort** 
- **limit** 
- **splitInBatches** 
- **executeWorkflow** 
- **airtable** (×4)
- **scheduleTrigger** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
