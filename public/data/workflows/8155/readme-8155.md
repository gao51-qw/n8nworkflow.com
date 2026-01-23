# Automate Trump Truth social monitoring with Telegram & Discord alerts

> This n8n workflow monitors Donald Trump’s Truth Social posts and sends alerts to Telegram & Discord on auto-pilot. Stay instantly updated with every new post, repost, or reply without delays. 

The workflow fetches posts, processes and filters for freshness, then sends formatted alerts to Telegram and Discord (X optional) for multi-channel alerts. Perfect for media professionals, financial markets professional, traders, political analysts, social media managers, and enthusiasts who want to keep pulse on Trump’s latest Truth Social activity using fully automated, hands-free alerts.

Note: Complete setup support and guide included with the workflow file.

## Who This Template Is For
- Media Professionals: Journalists and news outlets needing instant coverage of political developments
- Financial Market Professionals: Traders and analysts monitoring Trump's statements that may impact markets
- Political Analysts: Researchers tracking political messaging and communication patterns
- Social Media Managers: Content creators who need to respond quickly to political developments
- News Enthusiasts: Individuals who want immediate updates without constantly checking Truth Social

## How It Works
1. Automated Monitoring System
Schedule Trigger: Runs every 30 seconds (customizable from 5 seconds to longer intervals)
Continuous Operation: Works 24/7 without manual intervention

2. Data Processing & Filtering
Post Extraction: Retrieves all new posts from Trump's Truth Social feed
Content Processing: Parses posts, reposts, and replies into structured data
Duplicate Prevention: Uses Supabase database to track already-sent posts and prevent spam
Freshness Filter: Only sends alerts for genuinely new content

3. Multi-Channel Alert Distribution
Telegram Integration: Sends formatted alerts to your specified Telegram channel or chat
Discord Integration: Simultaneously posts updates to your Discord server/channel
Customizable Formatting: Messages include "JUST IN:" prefix for immediate recognition
Real-time Delivery: Alerts sent within seconds of post detection.

This template transforms manual social media monitoring into a professional, automated alert system that ensures you're always informed of Trump's Truth Social activity across your preferred communication channels.

## 📊 Basic Information

- **Workflow ID:** 8155
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 81
- **Downloads:** 8
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8155)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Content Creation
- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **if** 
- **supabase** (×2)
- **stickyNote** (×7)
- **httpRequest** 
- **code** 
- **telegram** 
- **discord** 
- **limit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
