# Email news briefing by keyword from Bright Data with AI summary

> This n8n workflow automatically retrieves recent Reuters news articles related to a user-specified keyword, summarizes the main findings using Google Gemini, formats the output into styled HTML, and sends a clean email report to a specified address.

🚀 **What It Does**
- Collects news data from Bright Data's Reuters dataset.
- Sorts and filters top 10 most recent news articles by publication_date.
- Sends structured news data to Gemini Flash for summarization.
- Converts Gemini's response (in Markdown) into styled HTML.
- Delivers a concise news briefing via email, including clickable source links and topic highlights.

🛠️ **Step-by-Step Setup**
1. User Form: Accepts a keyword from the user via an n8n form trigger.
2. Bright Data API: Posts a discover_new request to Bright Data's Reuters dataset using the keyword.
3. Snapshot Polling: Waits and checks for dataset readiness using the snapshot ID.
4. Data Retrieval: Downloads the news data once the snapshot is complete.
5. Parsing: Filters and sorts the latest 10 articles using a Python Code node.
6. AI Analysis: Google Gemini summarizes the filtered content into one briefing.
7. Markdown → HTML: Converts AI response into styled HTML using Markdown + Code node.
8. Email Delivery: Sends the briefing as an email to a predefined recipient.

🧠 **How It Works**
- Polling Control: Uses Wait and If nodes to handle Bright Data snapshot readiness.
- Date Sorting: Publication dates (ISO 8601 format) are parsed and used for sorting.
- AI Summarization: Gemini condenses multiple articles into one cohesive summary.
- Formatting: Clean HTML with readable styles is generated dynamically before sending.

📨 **Final Output**
The email includes:
- A brief summary of the most important developments
- Date range of the collected news
- Topics covered

🔐 **Credentials Used**
**Bright Data API** (replace YOUR_API_KEY in the HTTP nodes)

**Google Gemini** (Flash) API

**Email SMTP** (configured in Email Send node)

⚠️ **Notes**
- You must replace all **YOUR_API_KEY** placeholders in Bright Data request headers with your actual Bright Data API key.
- You can customize the keyword prompt and output style freely.
- I would recommend to keep the sort = relevance option for best chronological results - sorting by date is handled later.

## 📊 Basic Information

- **Workflow ID:** 4570
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 898
- **Downloads:** 89
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4570)

## 👤 Author

- **Name:** Gleb D
- **Username:** @glebd

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×3)
- **wait** 
- **if** 
- **formTrigger** 
- **stickyNote** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **emailSend** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
