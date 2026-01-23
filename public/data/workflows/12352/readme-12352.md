# Monitor competitor ad activity via Telegram with BrowserAct and Gemini

> # Monitor competitor ad activity via Telegram using BrowserAct & Gemini

Turn your Telegram bot into a covert marketing intelligence tool. This workflow allows you to send a company name to a bot, which then scrapes active ad campaigns, analyzes the strategy using AI, and delivers a strategic verdict directly to your chat.

## Target Audience
Digital marketers, dropshippers, e-commerce business owners, and ad agencies looking to track competitor activity without manual searching.

## How it works
1. **Receive Command**: The workflow starts when you send a message to your Telegram bot (e.g., "Check ads for Nike" or "Spy on Higgsfield").
2. **Extract Brand**: An **AI Agent** (using Google Gemini) processes the natural language text to extract the specific company or brand name.
3. **Scrape Ad Data**: A **BrowserAct** node executes a background task (using the "Competitor Ad Activity Monitor" template) to search ad libraries (like Facebook or Google) for active campaigns.
4. **Analyze Strategy**: A second **AI Agent** acts as a "Senior Marketing Analyst." It reviews the scraped data to count active ads, identify key hooks, and determine if the competitor is scaling or inactive.
5. **Deliver Report**: The bot sends a formatted HTML scorecard to **Telegram**, including the ad count, best ad copy, and a strategic verdict (e.g., "ADVERTISE NOW" or "WAIT").

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Competitor Ad Activity Monitor** template is saved in your BrowserAct account.
3. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
4. **Activate**: Turn on the workflow.
5. **Test**: Send a company name to your bot to generate a report.

## Requirements
* **BrowserAct** account with the **Competitor Ad Activity Monitor** template.
* **Telegram** account (Bot Token).
* **Google Gemini** account.

## How to customize the workflow
1. **Adjust Analysis Logic**: Modify the system prompt in the **Generate response** agent to change how the "Verdict" is calculated (e.g., prioritize video ads over image ads).
2. **Add More Sources**: Update the BrowserAct template to scrape TikTok Creative Center or LinkedIn Ads.
3. **Change Output**: Replace the Telegram output with a **Slack** or **Discord** node to send reports to a team channel.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Automated Ad Intelligence: How to Outsmart Your Competitors (n8n + BrowserAct)](https://youtu.be/ZV8ERteG_04)



## 📊 Basic Information

- **Workflow ID:** 12352
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1
- **Downloads:** 0
- **Created:** 2026/1/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12352)

## 👤 Author

- **Name:** Madame AI Team | Kai
- **Username:** @madame-ai

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **telegram** (×2)
- **telegramTrigger** 
- **n8n-nodes-browseract.browserAct** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
