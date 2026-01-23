# Daily insight email from Structured Web Data with Firecrawl

> 🔥 Daily Web Scraper & AI Summary with Firecrawl + Email Automation
Need to extract and summarize web content from a site that doesn’t have an API? This workflow runs daily to scrape a web page using Firecrawl, summarize the content with OpenAI, and send it directly to your email — fully automated.

Watch Full Video Step-by-step Tutorial Here:
https://www.youtube.com/@Automatewithmarc

🔧 How It Works
Daily Trigger – Starts the workflow every 24 hours.

Firecrawl Node – Crawls and extracts structured data from any web page you specify.

OpenAI Node (Optional) – Processes and summarizes the raw content using a prompt you control.

Gmail Node – Sends the final summary or content snapshot to your email inbox.

✅ Perfect For
Business analysts tracking daily market or industry news

Researchers and founders automating competitive intelligence

Anyone who wants web data delivered without coding or scraping scripts

🪜 Setup Instructions
Firecrawl API Key – Sign up and insert your key in the credentials.

Update Target URL – Edit the URL in the Firecrawl node to your desired site.

Customize the Prompt – Tailor the OpenAI prompt to extract the insights you want.

Connect Gmail – Add your Gmail credentials and set your recipient email.

🧰 Built With
Firecrawl (Web scraping without code)

OpenAI (For summarizing and insight extraction)

Gmail (Automated notifications)

n8n (Workflow automation engine)



## 📊 Basic Information

- **Workflow ID:** 4654
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 737
- **Downloads:** 73
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4654)

## 👤 Author

- **Name:** Automate With Marc
- **Username:** @marconi

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **wait** (×2)
- **gmail** 
- **set** 
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
