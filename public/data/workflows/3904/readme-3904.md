# Search LinkedIn companies, score with AI and add them to Google Sheet CRM

> # Search LinkedIn companies, Score with AI and add them to Google Sheet CRM

**Setup Video: [https://youtube.com/watch?v=m904RNxtF0w&t](https://youtube.com/watch?v=m904RNxtF0w&t)**

### Who is this for?
This template is ideal for sales teams, business development professionals, and marketers looking to build a targeted prospect database with automatic qualification. Perfect for agencies, consultants, and B2B companies wanting to identify and prioritize the most promising potential clients.

### What problem does this workflow solve?
Manually researching companies on LinkedIn, evaluating their fit for your services, and tracking them in your CRM is time-consuming and subjective. This automation streamlines lead generation by automatically finding, scoring, and importing qualified prospects into your database.

### What this workflow does
This workflow automatically searches for companies on LinkedIn based on your criteria, retrieves detailed information about each company, filters them based on quality indicators, uses AI to score how well they match your ideal customer profile, and adds them to your Google Sheet CRM while preventing duplicates.

### Setup
1. Create a Ghost Genius API account and get your API key
2. Configure HTTP Request nodes with Header Auth credentials
3. Create a copy of the provided Google Sheet template
4. Set up your Google Sheet and OpenAI credentials following n8n documentation
5. Customize the "Set Variables" node to match your target audience and scoring criteria

### How to customize this workflow
- Modify search parameters to target different industries, locations, or company sizes
- Adjust the follower count threshold based on your qualification criteria
- Customize the AI scoring system to align with your specific product or service offering
- Add notification nodes to alert you when high-scoring companies are identified

## 📊 Basic Information

- **Workflow ID:** 3904
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 29469
- **Downloads:** 2946
- **Created:** 2025/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3904)

## 👤 Author

- **Name:** Matthieu
- **Username:** @yaznow

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **splitInBatches** 
- **httpRequest** (×2)
- **if** (×2)
- **set** 
- **splitOut** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×7)
- **wait** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
