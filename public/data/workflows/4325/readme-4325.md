# Find, scrape & analyze Twitter posts by name with Bright Data & Gemini

> This n8n workflow template automates the process of collecting and analyzing Twitter (X) posts for any public profile, then generates a clean, AI-powered summary including key metrics, interests, and activity trends.

🚀 **What It Does**
- Accepts a user's full name and date range through a public form.
- Automatically finds the person’s X (formerly Twitter) profile using a Google search.
- Uses Bright Data to retrieve full post data from the X.com profile.
- Extracts key post metrics like views, likes, reposts, hashtags, and mentions.
- Uses Google Gemini (PaLM) to generate a personalized summary: tone, themes, popularity, and sentiments.
- Stores both raw data and the AI summary into a connected Google Sheet for further review or team collaboration.

🛠️ **Step-by-Step Setup**
1. Deploy the public form to collect full name and date range.
2. Build a Google search query using the name to find their X profile.
3. Scrape the search results via Bright Data (Web Unlocker zone).
4. Parse the page content using the HTML node.
5. Use Gemini AI to extract the correct X profile URL.
6. Pull full post data via Bright Data dataset snapshot API.
7. Transform post data into clean structured fields:
date_posted, description, hashtags, likes, views,
quoted_post.date_posted, quoted_post.description,
replies, reposts, quotes, and tagged_users.profile_name.
8. Analyze all posts using Google Gemini for interest detection and persona generation.
9. Save results to a Google Sheet: structured post data + AI-written summary.
10. Show success or fallback messages depending on profile detection or scraping status.

🧠 **How It Works: Workflow Overview**
- Trigger: When user submits form
- Search & Match: Google search → HTML parse → Gemini filters matching X profile
- Data Gathering: Bright Data → Poll for snapshot completion → Fetch post data
- Transformation: Extract and restructure key fields via Code node
- AI Summary: Use Gemini to analyze tone, interests, and trends
- Export: Save results to Google Sheet
- Fallback: Display custom error message if no X profile found

📨 **Final Output**
- A record in your Google Sheet with:
  - Clean post-level data
  - Profile-level engagement summary
  - An AI-written overview including tone, common topics, and post popularity

🔐 **Credentials Used**
- **Bright Data account** (for search & post scraping)
- **Google Gemini (PaLM)** or Gemini Flash via - 
OpenAI/Google Vertex API
- **Google Sheets (OAuth2) account** (for result storage)

**⚠️Community Node Dependency**
This workflow uses a custom community node:
**n8n-nodes-brightdata**
Install it via UI (Settings → Community Nodes → Install).

## 📊 Basic Information

- **Workflow ID:** 4325
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1720
- **Downloads:** 172
- **Created:** 2025/5/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4325)

## 👤 Author

- **Name:** Gleb D
- **Username:** @glebd

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **html** 
- **formTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **form** (×2)
- **if** (×4)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **n8n-nodes-brightdata.brightData** (×4)
- **code** 
- **wait** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
