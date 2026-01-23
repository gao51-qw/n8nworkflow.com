# Send AI-enhanced economic calendar alerts to Telegram with Gemini-2.0-Flash

> # Stay ahead of the markets with this fully automated n8n workflow that delivers real-time, AI-formatted economic calendar updates directly to your Telegram channel or group. 

Powered by the Economic Events Calendar API via RapidAPI, this workflow is perfect for traders, investors, and financial community managers who want timely notifications about high- and medium-impact global economic events—no coding required.

## Key Features
- **Automated Alerts:** Receive upcoming economic calendar updates for the next 3 days (customizable window) straight to Telegram.
- **AI-Enhanced Formatting:** Economic news are grouped by date and importance, with clear, emoji-rich summaries for maximum readability and engagement.
- **Flexible Scheduling:** Default update interval is every 3 days, adjustable to daily or any custom frequency.
- **Customizable Date Range:** Easily set the window for economic event coverage (e.g., today to 7 days ahead).
- **No Coding Needed:** Simple setup—just plug in your API keys and Telegram credentials.

## How to Set Up
**++Step 1:++ Get Your RapidAPI Key & Subscribe to the Economic Calendar Endpoint**
1. Visit RapidAPI (https://rapidapi.com/) and sign up for a free account (free plan includes limited requests per month).
2. After registering, click your profile icon in the top-right corner and select "User Settings".
3. From the left menu, choose "Applications".
4. Click on "default app" and copy your API Key.
5. Paste this key inside the workflow node labeled "Set API Key for RapidAPI & Dates" under the "x-rapidapi-key" field.

**++Step 2:++ Connect Google Gemini (or OpenAI) Model**
Add your Gemini API credentials in n8n for advanced AI formatting and structuring of economic updates.

**++Step 3:++ Set Up Your Telegram Bot**
1. Create a bot with @BotFather, get your API token, and add it to n8n’s Telegram credentials.
2. Obtain your Telegram chat or group ID (use @RawDataBot for this).

**++Step 4:++ Customize Date Range (Optional)**
By default, the workflow fetches economic calendar updates for the next 3 days, but you can adjust it to any custom window (e.g., today to 7 days ahead).

**++Step 5:++ Activate the Workflow**
1. Schedule how often you want news updates (default: every 3 days; can be as frequent as daily).
2. The workflow will automatically fetch, format, and send the latest economic calendar updates to your Telegram.

## Who Is This For?
- Retail and professional traders
- Financial influencers and Telegram group admins
- Community managers seeking hands-off, real-time macroeconomic alerts

## Why Choose This Workflow?
1. Save Time: No more manual economic calendar checks.
2. Stay Informed: Instantly know about key market-moving events.
3. Easy Integration: Works out-of-the-box with n8n and Telegram.

**Get started today and never miss a critical economic event again!**

## 📊 Basic Information

- **Workflow ID:** 5450
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 143
- **Downloads:** 14
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5450)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **scheduleTrigger** 
- **telegram** 
- **set** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
