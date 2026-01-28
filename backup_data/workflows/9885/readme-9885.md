# Automate Instagram influencer lead collection with Apify, GPT and PostgreSQL

> ![Screen Shot 20251019 at 3.59.42 PM.png](fileId:3015)
This workflow is built for digital marketers, sales professionals, influencer agencies, and entrepreneurs who want to automate Instagram lead generation. If you’re tired of manually searching for profiles, copying email addresses, and updating spreadsheets, this automation will save you hours every week.
It turns your process into a smart system that finds, extracts, and stores leads while you focus on growing your business.

How it works / What it does

This n8n automation completely transforms how you collect Instagram leads using AI and API integrations.

Here’s a simple breakdown of how it works:

- Set your targeting parameters using the Edit Fields node. You can specify your platform (Instagram), field of interest such as “beauty & hair,” and target country like “USA.”

- Generate intelligent search queries with an AI Agent powered by GPT-4o-mini. It automatically creates optimized Google search queries to find relevant Instagram profiles in your chosen niche and location.

- Extract results from Google using Apify’s Google Search Scraper, which collects hundreds of Instagram profile URLs that match your search criteria.

- Fetch detailed Instagram profile data using Apify’s Instagram Scraper. This includes usernames, follower counts, and profile bios where contact information usually appears.

- Use AI to extract emails from the profile biographies with the Information Extractor node powered by GPT-3.5-turbo. It identifies emails even when they are hidden or creatively formatted.

- Store verified leads in a PostgreSQL database. The workflow automatically adds new leads or updates existing ones with fields like username, follower count, email, and niche.

Once everything is set up, the system runs on autopilot and keeps building your database of quality leads around the clock.

How to set up

Follow these steps to get your Instagram Lead Generation Machine running:

1. Import the JSON file into your n8n instance.

2. Add your API credentials:

3. Apify token for the Google and Instagram scrapers

4. OpenAI API key for the AI-powered nodes

5. PostgreSQL credentials for storing leads

6. Open the Edit Fields node and set your platform, field of interest, and target country.

7. Run the workflow manually using the Manual Trigger node to test it.

Once confirmed, replace the manual trigger with a schedule or webhook to run it automatically.
Check your PostgreSQL database to ensure the leads are being saved correctly.

Requirements

Before running the workflow, make sure you have the following:

- An n8n account or instance (self-hosted or n8n Cloud)

- An Apify account for accessing the Google and Instagram scrapers

- OpenAI API access for generating smart search queries and extracting emails

- A PostgreSQL database to store your leads

- Basic understanding of how n8n workflows and nodes operate

How to customize the workflow

This workflow is flexible and can be customized to fit your business goals. Here’s how you can tailor it:

- Change your niche or location by updating the Edit Fields node. You can switch from “beauty influencers in the USA” to “fitness coaches in Canada” in seconds.

- Add more data fields to collect additional information such as engagement rates, bio keywords, or profile categories. Just modify the PostgreSQL node and database schema.

- Connect to your CRM or email system to automatically send introduction emails or add new leads to your marketing pipeline.

- Use different triggers such as a scheduled cron trigger for daily runs or a webhook trigger to start the workflow through an API call.

- Filter higher-quality leads by adding logic to capture only profiles with a minimum number of followers or verified emails.

## 📊 Basic Information

- **Workflow ID:** 9885
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 573
- **Downloads:** 57
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9885)

## 👤 Author

- **Name:** Fayzul Noor
- **Username:** @fayzul-noor

## 🏷️ Categories

- Lead Generation
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **httpRequest** (×2)
- **code** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **splitInBatches** 
- **postgres** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
