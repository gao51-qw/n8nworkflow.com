# Automated SEO SERP analysis with Decodo & Google Gemini

> ## What Problem Does It Solve?
- SEO professionals and marketers spend hours manually searching keywords to analyze competitor content.
- Copying and pasting SERP results into spreadsheets is tedious and prone to formatting errors.
- Analyzing "why" a page ranks requires significant mental effort and time for every single keyword.
- This workflow solves these by:
  - Automatically fetching live Google search results for a list of keywords.
  - Using AI to instantly analyze the top ranking pages for Intent, Strengths, and Weaknesses.
  - Delivering a consolidated, strategic SEO report directly to your email inbox.

## How to Configure It
- API Setup:
  - Connect your Decodo credentials (for  scraping Google results).-
  - Connect your Google Gemini credentials (for the AI analysis).
  - Connect your Gmail account (to send the final report).
 - Keyword Input:
   - Open the "Edit Fields" node and replace the placeholder items (keyword_1, etc.) with the actual search terms you want to track.
- Email Recipient:
  - Update the "Send a message" node with your email address.

## How It Works
- The workflow triggers manually (or can be scheduled).
- It loops through your defined list of keywords one by one.
- Decodo performs a real-time Google search for each term and extracts organic results.
- A JavaScript node cleans the data, removing ads and irrelevant snippets.
- The AI Agent acts as an expert SEO analyst, processing the top results to generate a concise audit.
- Finally, the workflow compiles all insights into a single email report and sends it to you.

## Customization Ideas
- Change the output: Save the analysis to a Google Sheet or Notion database instead of Email.
- Adjust the AI Persona: Modify the system prompt to focus on specific metrics (e.g., content gaps or backlink opportunities).
- Automate the Input: Connect a Google Sheet to dynamically pull new keywords every week.
- Schedule It: Replace the Manual Trigger with a Cron node to run this report automatically every Monday morning.

If you need any help [Get in Touch](https://www.linkedin.com/in/abdallaelshikh0/)

  
  
 

## 📊 Basic Information

- **Workflow ID:** 11436
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 16
- **Downloads:** 1
- **Created:** 2025/12/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11436)

## 👤 Author

- **Name:** Abdullah Alshiekh
- **Username:** @abdullah01

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **code** (×3)
- **splitInBatches** 
- **@decodo/n8n-nodes-decodo.decodo** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **gmail** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
