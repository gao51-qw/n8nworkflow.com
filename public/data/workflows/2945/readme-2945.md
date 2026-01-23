# Fetch keyword from Google Sheet and classify them using AI

> ## Who is this template for

This template is for marketers, SEO specialists, or content managers who need to analyze keywords to identify which ones contain references to a specific area or topic, in this case – IT software, services, tools, or apps.

## Use case

Automating the process of scanning a large list of keywords to determine if they reference known IT products or services (like ServiceNow, Salesforce, etc.), and updating a Google Sheet with this classification. This helps in categorizing keywords for targeted SEO campaigns, content creation, or market analysis.

## How this workflow works

1. Fetches keyword data from a Google Sheet
2. Processes keywords in batches to prevent rate limiting
3. Uses an AI agent (OpenAI) to analyze each keyword and determine if it contains a reference to an IT service/software
4. Updates the original Google Sheet with the results in a "Service?" column
5. Continues processing until all keywords are analyzed

## Set up steps

1. Connect your Google Sheets account credentials
2. Set the Google Sheet document ID (currently using "Copy of Sheet1 1")
3. Configure the OpenAI API credentials for the AI agent
4. Adjust the batch size (currently 6) if needed based on your API rate limits
5. Ensure the Google Sheet has the required columns: "Number", "Keyword", and "Service?"

![Screenshot 20250219 at 13.07.11.png](fileId:958)

The AI agent's prompt is highly customizable to match different identification needs. For example, instead of looking for IT software/services, you could modify the prompt to identify:

- Industry-specific terms (healthcare, finance, education)
- Geographic references (cities, countries, regions)
- Product categories (electronics, clothing, food)
- Competitor brand mentions

Here's how you could modify the prompt for different use cases:

```
Copy
// For identifying educational content keywords
"Check the keyword I provided and define if this keyword relates to educational content, courses, or learning materials and return yes or no."

// For identifying local service keywords
"Check the keyword I provided and determine if it contains location-specific terms (city names, neighborhoods, regions) that suggest local service intent and return yes or no."

// For identifying competitor mentions
"Check the keyword I provided and determine if it mentions any of our competitors (CompetitorA, CompetitorB, CompetitorC) and return yes or no."
```

## 📊 Basic Information

- **Workflow ID:** 2945
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 3229
- **Downloads:** 322
- **Created:** 2025/2/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2945)

## 👤 Author

- **Name:** Polina Medvedieva
- **Username:** @polina-n8n

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×2)
- **splitInBatches** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
