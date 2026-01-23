# Generate SEO content outlines from SERP analysis with OpenAI and Google Docs

> # Generate SEO content outlines from SERP analysis to Google Docs


## Overview
Stop wasting hours on manual competitor research and content briefing. This workflow automates the creation of data-backed content briefs by analyzing the current top-ranking pages for your specific keyword.


It scrapes the Google Search Engine Results Page (SERP), extracts the content structure (headings H1-H3) from competitor articles, and uses AI to generate a comprehensive article outline based on what is already ranking. The final outline is automatically saved to a Google Doc, streamlining your content production process.


## Who is this for?
- **Content Marketers:** To drastically reduce the time needed to create detailed content briefs.
- **SEO Specialists:** To analyze competitor content structures at scale without manual checking.
- **Bloggers & Writers:** To overcome writer's block and ensure their content covers all necessary topics to rank.


## How it works
1.  **Input:** You enter a "Target Keyword" and "Target Audience" via the built-in n8n Form.
2.  **SERP Scraping:** The workflow uses **Apify** (Google Search Scraper) to fetch the top results for that keyword.
3.  **Filtering:** It automatically removes non-article URLs (such as Amazon product pages, YouTube videos, and PDFs) to ensure only relevant content competitors are analyzed.
4.  **Deep Extraction:** It visits each competitor's URL using **Apify** (Cheerio Scraper) to extract their article metadata and heading structure (H1, H2, H3).
5.  **AI Analysis:** The aggregated data is sent to **OpenAI**, which analyzes common patterns and generates an optimized article outline.
6.  **Output:**
    - A new **Google Doc** is created with the generated outline.
    - The request details are logged in **Google Sheets** for your records.


## Requirements
- **Apify Account:** You will need an Apify account with access to the *Google Search Result Scraper* and *Cheerio Scraper* actors.
- **OpenAI Account:** An API key for OpenAI (GPT-3.5 or GPT-4 recommended).
- **Google Cloud:** Credentials to access Google Docs and Google Sheets.


## How to set up
1.  **Configure Credential:** Connect your Apify, OpenAI, and Google accounts in the respective nodes.
2.  **Workflow Configuration:** Open the `Workflow Configuration` node. You can change the `countryCode` (default is "jp" for Japan) to your target region (e.g., "us", "uk") and adjust `maxResults` if needed.
3.  **Google Sheets Setup:** Create a Google Sheet with a column header named `target_keyword`. Copy the Spreadsheet ID and paste it into the `Store Form Responses` node.
4.  **Run:** Click "Chat" or "Open Form" in the trigger node to start the workflow.


## How to customize
- **Change the AI Model:** In the `AI Content Structure Analysis` node, you can switch between different OpenAI models or adjust the system prompt to change the tone/format of the outline.
- **Adjust Filters:** Modify the `Filter Non-Article URLs` node to exclude specific domains you don't want to analyze (e.g., wikipedia.org).
- **Output Format:** You can modify the `Create Google Doc` node to include more specific data, such as the list of competitor URLs analyzed.![スクリーンショット 20251215 114351.png](fileId:3657)

## 📊 Basic Information

- **Workflow ID:** 11809
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 138
- **Downloads:** 13
- **Created:** 2025/12/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11809)

## 👤 Author

- **Name:** MAMI YAMANE
- **Username:** @miipoco3

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **@apify/n8n-nodes-apify.apify** (×2)
- **filter** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleDocs** 
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
