# Automated brand mentions tracker with GPT-4o, Google Sheets, and email

> ![AI Rankings Monitor.png](fileId:1409)
This workflow enables you to automate the daily monitoring of how an AI model (like ChatGPT) responds to specific queries relevant to your market. It identifies mentions of your brand and predefined competitors, logs detailed interactions in Google Sheets, and delivers a comprehensive email report.

### Main Use Cases

*   Monitor how your brand is mentioned by AI in response to relevant user queries.
*   Track mentions of key competitors to understand AI's comparative positioning.
*   Gain insights into AI's current knowledge and portrayal of your brand and market landscape.
*   Automate daily intelligence gathering on AI-driven brand perception.

### How it works

The workflow operates as a scheduled process, organized into these stages:

1.  **Configuration & Scheduling**
    *   Triggers daily (or can be run manually).
    *   Key variables are defined within the workflow: your brand name (e.g., "YourBrandName"), a list of queries to ask the AI, and a list of competitor names to track in responses.
2.  **AI Querying**
    *   For each predefined query, the workflow sends a request to the OpenAI ChatGPT API (via an HTTP Request node).
3.  **Response Analysis**
    *   Each AI response is processed by a Code node to:
        *   Check if your brand name is mentioned (case-insensitive).
        *   Identify if any of the listed competitors are mentioned (case-insensitive).
        *   Extract the core AI response content (limited to 500 characters for brevity in logs/reports).
4.  **Data Logging to Google Sheets**
    *   Detailed results for each query—including timestamp, date, the query itself, query index, your brand name, the AI's response, whether your brand was mentioned, and any errors—are appended to a specified Google Sheet.
5.  **Email Report Generation**
    *   A comprehensive HTML email report is compiled. This report summarizes:
        *   Total queries processed, number of times your brand was mentioned, total competitor mentions, and any errors encountered.
        *   A summary of competitor mentions, listing each competitor and how many times they were mentioned.
        *   A detailed table listing each query, whether your brand was mentioned, and which competitors (if any) were mentioned in the AI's response.
6.  **Automated Reporting**
    *   The generated HTML email report is sent to specified recipients, providing a daily snapshot of AI interactions.

### Summary Flow:

Schedule/Workflow Trigger → Initialize Brand, Queries, Competitors (in Code node) → For each Query: Query ChatGPT API → Process AI Response (Check for Brand & Competitor Mentions) → Log Results to Google Sheets → Generate Consolidated HTML Email Report → Send Email Notification

### Benefits:

*   Fully automated daily monitoring of AI responses concerning your brand and competitors.
*   Provides objective insights into how AI models are representing your brand in user interactions.
*   Delivers actionable competitive intelligence by tracking competitor mentions.
*   Centralized logging in Google Sheets for historical analysis and trend spotting.
*   Easily customizable with your specific brand, queries, competitor list, and reporting recipients.


## 📊 Basic Information

- **Workflow ID:** 4443
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 958
- **Downloads:** 95
- **Created:** 2025/5/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4443)

## 👤 Author

- **Name:** Daniel Shashko
- **Username:** @tomax

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×3)
- **httpRequest** 
- **googleSheets** 
- **emailSend** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
