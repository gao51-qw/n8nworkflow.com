# Automate Twitter posting with GPT-4 content generation & Google Sheets tracking

> ## This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for creating an autonomous social media manager. 
This workflow uses an AI agent to intelligently generate unique, high-quality content, check for duplicates, and post it on a consistent schedule to automate your entire Twitter presence.

## Who's this workflow for?
- Social Media Managers
- Marketing Teams & Agencies
- Startup Founders & Solopreneurs
- Content Creators

## How it works
**1. Runs on a Schedule:** The workflow automatically starts at a set interval (e.g., every 6 hours), ensuring a consistent posting schedule.

**2. AI Generates a New Tweet:** An advanced AI Agent, powered by OpenAI, uses a detailed prompt to craft a new, engaging tweet. The prompt defines the tone, topics, character limits, and hashtags.

**3. Checks for Duplicates:** Before finalizing the tweet, the AI Agent is equipped with a tool to read a Google Sheet containing a log of all previously published posts. This allows it to ensure the new content is always unique.

**4. Posts to Twitter (X):** The final, unique tweet is automatically posted to your connected Twitter account.

**5. Logs the New Post:** After posting, the workflow logs the new tweet back into the Google Sheet, updating the history for the next run. This completes the autonomous loop.

## Setup Instructions
1. Schedule Your Posts: In the Start Workflow (Schedule Trigger) node, set the frequency you want the workflow to run (e.g., every 6 hours).

2. Connect OpenAI:
- Add your OpenAI API key in the OpenAI Chat Model node.
- Customize the prompt in the AI Agent node to match your brand's voice, target keywords, and specific URLs.

3. Configure Google Sheets:
- Connect your Google Sheets account.
- Create a sheet with two columns: Tweet Content and Status.
- In both the Get Data from Google Sheet and Add new Tweet to Google sheet nodes, select your credentials and specify the Document ID and Sheet Name.

4. Connect Twitter (X):
- In the Create Tweet node, connect the Twitter account where you want to post.

5. Activate Workflow:
- Save the workflow and toggle the "Active" switch to ON. Your AI social media manager is now live!

## Key Requirements to Use This Template
Before you start, please ensure you have the following accounts and assets ready:

- An n8n Instance: An active n8n account (Cloud or self-hosted) where you can import and run this workflow.

- OpenAI Account: An active OpenAI account with an API Key. You will need to have billing enabled to use the language models for tweet generation.

- Google Account & Sheet: A Google account and a pre-made Google Sheet. The sheet must have two specific columns: Tweet Content and Status.

- Twitter (X) Developer Account: A Twitter (X) account with an approved Developer profile. You need an App created within the Developer Portal with the necessary permissions (v2 API access with Write scopes) to post tweets automatically.

## Connect with us
- Website: https://www.intuz.com/services
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)



## 📊 Basic Information

- **Workflow ID:** 8010
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 886
- **Downloads:** 88
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8010)

## 👤 Author

- **Name:** Intuz 
- **Username:** @intuz

## 🏷️ Categories

- Social Media
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **twitter** 
- **stickyNote** (×10)
- **googleSheetsTool** 
- **code** 
- **googleSheets** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
