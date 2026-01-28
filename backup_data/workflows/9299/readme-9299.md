# LinkedIn Lead Enrichment & Personalized Cold Outreach with Hunter.io, GPT-4 & Sheets

> Supercharge your sales and marketing efforts with this powerful automation that transforms a list of LinkedIn profiles into a fully enriched, personalized outreach campaign. This workflow is designed for sales teams, growth marketers, and business development professionals looking to scale their lead generation without sacrificing personalization.

It seamlessly integrates LinkedIn scraping, email enrichment with Hunter.io, AI-powered message generation with OpenAI, and data organization in Google Sheets.

## How It Works

Start with Leads: The workflow begins with a list of target LinkedIn profile URLs.



Scrape Profile Data: It automatically scrapes each LinkedIn profile to extract key professional information such as name, title, company, and location. A built-in delay helps manage rate limits.




Find Verified Emails: Using the scraped company and name, the workflow queries ==Hunter.io to find a verified work email address== for the lead.




AI-Powered Personalization: If an email is found, the lead's data is sent to OpenAI (GPT-4), which generates a highly personalized, conversational outreach message based on their role, company, and your value proposition.



Sync to CRM/Sheet: Finally, all the enriched data—including the custom AI message—is neatly organized and saved as a new row in your designated Google Sheet.


~~Stop wasting hours on manual lead research and generic outreach~~. Implement this automated workflow to focus on building relationships and closing deals.

## 📊 Basic Information

- **Workflow ID:** 9299
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 574
- **Downloads:** 57
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9299)

## 👤 Author

- **Name:** Amirul Hakimi
- **Username:** @amirulhaaakimi

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×6)
- **set** 
- **splitOut** 
- **httpRequest** (×2)
- **code** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **noOp** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
