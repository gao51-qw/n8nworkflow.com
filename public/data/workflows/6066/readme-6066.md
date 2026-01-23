# Analyze and summarize Google Reviews with SerpAPI, GPT-4 and Google Sheets

> ## Try It Out!
This n8n template helps you analyze Google Maps reviews for a list of restaurants, summarize them with AI, and identify optimization opportunities—all in one automated workflow.
Whether you're managing multiple locations, helping local restaurants improve their digital presence, or conducting a competitor analysis, this workflow helps you extract insights from dozens of reviews in minutes.

  How It Works?
- Start with a pre-filled list of restaurants in Google Sheets.
- The workflow uses SerpAPI to scrape Google Maps reviews for each listing.
- Reviews with content are passed to ChatGPT for summarization.
- Empty or failed reviews are logged in a separate tab for easy follow-up.
- Results are stored back in your Google Sheet for analysis or sharing

How To Use
- Customize the input list in Google Sheets with your own restaurants.
- Update the OpenAI prompt if you want a different style of summary.
- You can trigger this manually or swap in a schedule, webhook, or other event.

Requirements
- A SerpAPI account to fetch reviews
- An OpenAI account for ChatGPT summarization
- Access to Google Sheets and n8n

Who Is It For? 
- This is helpful for people looking to analyze a large batch of Google reviews in a short amount of time. Additionally, it can be used to compare restaurants and see where each can be optimized. 


How To Set-Up? 
- Use a SerpAPI endpoint to include in the HTTP request node. Refer to this n8n documentation for more help! https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi/. 

Happy Automating! 

## 📊 Basic Information

- **Workflow ID:** 6066
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 646
- **Downloads:** 64
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6066)

## 👤 Author

- **Name:** keisha kalra
- **Username:** @keisha

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 
- **code** 
- **googleSheets** (×3)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
