# Track brand reputation with Gemini AI & Google News sentiment analysis to email

> ## Create a powerful brand/company monitoring system that fetches news headlines, performs AI-powered sentiment analysis, and delivers witty, easy-to-read reports via email.

This workflow turns brand mentions into a lively “personality analysis” — making your reports not only insightful but also fun to read. Perfect for teams that want to stay informed and entertained.

## How it works
++Data Collection++: A Google Sheets table captures brand name and recipient email which triggers the workflow.

++News Aggregation++: The RSS Read node fetches recent news headlines from Google News based on the specified brand or company keyword.

++Content Processing++: News headlines are aggregated and formatted for AI analysis.

++AI Analysis++: Gemini 2.5 Flash model plays the role of a brand analyst, writing reports as if the brand were a character in a story. It highlights strengths, quirks, and challenges in a witty, narrative-driven style — while still providing sentiment scores and action points.

++Report Generation++: JavaScript code structures the AI response into well-formatted HTML paragraphs for a smooth email reading experience.

++Automated Delivery++: Gmail integration sends the analysis report directly to the specified email address.

## How to use

1. First, create a google sheets document with 
sheet name="page1", A1 cell name="keyword" and 
B1 cell name="email".
2. The system will read the keyword & email data when a new row data is entered.
3. Paste the url of your google sheets document into the first trigger node. Select trigger on "row added" in the node.
4. Enter your credentials to connect Gemini PaLM API account in the "message a model" node of Google.
5. Enter your credentials to connect Gmail account in the "send a message" node.

The workflow automatically runs when new row is detected. Recipients receive comprehensive sentiment analysis reports within minutes!

## Requirements

-Google Sheets URL
-Google Gemini API credentials for AI analysis
-Gmail API credentials for email delivery


## 📊 Basic Information

- **Workflow ID:** 8776
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 315
- **Downloads:** 31
- **Created:** 2025/9/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8776)

## 👤 Author

- **Name:** ermanatalay
- **Username:** @erman

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **rssFeedRead** 
- **set** 
- **limit** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **aggregate** 
- **gmail** 
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
