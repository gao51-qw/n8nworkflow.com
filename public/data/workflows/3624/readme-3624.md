# Scrape competitor reviews & generate ad creatives with Bright Data & OpenAI

> ## Scrape Competitor Reviews & Generate Ad Creatives with Bright data and OpenAI

### How the Flow Runs

1. **Fill the Form**
   - Enter the Amazon product URL to analyze competitor reviews.

2. **Trigger Bright Data Scraper**
   - Bright Data scrapes Amazon reviews based on the provided URL.

3. **Wait for Snapshot Completion**
   - Periodically checks Bright Data until the scraping is complete.

4. **Retrieve JSON Data**
   - Collects the scraped review data in JSON format.

5. **Save Reviews to Google Sheets**
   - Automatically appends the scraped reviews to your Google Sheets.

6. **Aggregate Reviews**
   - Consolidates all reviews into a single summary for simpler analysis.

7. **Analyze Reviews with OpenAI LLM**
   - Sends the aggregated reviews to OpenAI (GPT-4o mini) to summarize competitors’ main weaknesses clearly.

8. **Generate Creative Ad Image**
   - OpenAI generates a visually appealing 1080x1080 ad image addressing these identified pain points.

9. **Send Ad Creative via Gmail**
   - Automatically emails the creative and review summary to your media buying team for immediate use in Meta ads.

---

### What You Need

- **Google Sheets:** [Template](https://docs.google.com/spreadsheets/d/1IR-yMQwEFTjbTCSPvVlQ54zQsnG0IRauTjPGoBWmR8U/edit?usp=sharing)
- **Bright Data:** Dataset and API key:
www.brightdata.com
- **OpenAI API Key:** For GPT-4o mini or your preferred LLM
- **Automation Tool:** Ensure it supports HTTP Requests, Wait, Conditional (If), Google Sheets integration, Form Trigger, OpenAI integration, and Gmail integration.

---

### Form Fields to Fill

- **Amazon Product URL:** Enter the competitor’s product URL from Amazon.

---

### Setup Steps

1. **Copy** the provided Google Sheet template.
2. **Import** the JSON workflow into your automation tool.
3. **Update credentials** for Bright Data, Google Sheets, Gmail, and OpenAI.
4. **Test manually** by submitting the form and verifying functionality.
5. **Optional:** Set a schedule for regular workflow execution.

---

### Bright Data Trigger Example

```json
[
  {
    "url": "https://www.amazon.com/example-product"
  }
]

Tips
Frequently update URLs to ensure fresh insights.

Allow more wait time for extensive data scrapes.

Focus on targeted products to optimize cost-efficiency.

Need Help?
Email: Yaron@nofluff.online

Resources:

YouTube:
https://www.youtube.com/@YaronBeen/videos

LinkedIn:
https://www.linkedin.com/in/yaronbeen/

Bright Data Documentation:
https://docs.brightdata.com/introduction

## 📊 Basic Information

- **Workflow ID:** 3624
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 3597
- **Downloads:** 359
- **Created:** 2025/4/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3624)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **httpRequest** (×3)
- **wait** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** 
- **formTrigger** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
