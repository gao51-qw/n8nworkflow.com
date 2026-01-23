# AI-powered lead generation with Apollo, LinkedIn research & 4-step personalized emails

> ## Overview

This workflow finds potential customers, gathers detailed info about them and their companies, and then uses AI to research them in detail and write personalized messages for LinkedIn and a series of four cold emails. All this data is organized in Google Sheets for easy tracking and use.
## Use Case

This tool is perfect for **salespeople, marketers, and business owners**. It saves you a lot of time by automating lead finding, research, and email writing. This helps you send many personalized messages quickly, leading to more replies and better sales.
## How It Works

You start by telling the workflow who you want to reach (e.g., "Marketing Agencies," "New York," "COOs"). The workflow then uses **scrapers** (from Apify) to find these people on Apollo.io and LinkedIn, collecting their contact details and company information.

Next, an **AI analyzes all this data**. It creates a detailed report on each company, including what they do, their strengths, recent news, and possible challenges they face. This report helps the AI then write a friendly **LinkedIn message opener** and a **4-part hyper-personalised cold email series** specifically for each person. These emails cover problems you can solve, success stories, and a clear next step. Finally, all the prospect details and generated messages are saved neatly in your Google Sheets.

## How to Set It Up

1.  **Scrapers:** Go to **Apify**, get your API Token from "API & Integrations," and put it into the scraper nodes in the workflow.
2.  **Google Sheets:** Copy the provided **Google Sheet template**. Then, add your email addresses to the "Assign Sender Email" node so the workflow can choose who sends the emails.
3.  **AI (OpenAI):** Add your **OpenAI API Key**. In the "About You" node, fill in information about *your company* and *your skills* so the AI can write super relevant messages.
4.  **Test:** Run the workflow using the "Enter Target Audience" form. You can set how often it runs. If you need help, check the [detailed guide](https://drive.google.com/file/d/1m76gYhNqPUdRMBtlXlDgMrF1z2T3rf8u/view) or email `info.gainflow@gmail.com`.

## 📊 Basic Information

- **Workflow ID:** 6101
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 193
- **Downloads:** 19
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6101)

## 👤 Author

- **Name:** Gain FLow AI
- **Username:** @gain-flow

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **set** (×4)
- **code** (×5)
- **filter** 
- **googleSheets** (×4)
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **scheduleTrigger** 
- **if** 
- **splitInBatches** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
