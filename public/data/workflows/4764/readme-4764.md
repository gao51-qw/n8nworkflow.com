# 🌐 Firecrawl website content extractor

> # 🌐 Firecrawl Website Content Extractor (n8n Workflow)

This n8n automation workflow uses **Firecrawl API** to extract structured data (e.g., quotes and authors) from web pages — such as [Quotes to Scrape](https://quotes.toscrape.com/) — and handles retries in case of delayed extraction.

---

## 🔁 Workflow Overview

### 🎯 Purpose:
- Crawl and extract **structured web data** using Firecrawl
- Wait for asynchronous scraping to complete
- Retrieve and validate results
- Support retries if content is not ready

---

## 🔧 Step-by-Step Node Breakdown

### 1. 🧪 **Manual Trigger**
- Node: `When clicking ‘Test workflow’`
- Used to **manually test** or execute the workflow during setup or debugging.

---

### 2. 📤 **Firecrawl Extract API Request**
- Node: `Extract`
- Sends a `POST` request to `https://api.firecrawl.dev/v1/extract`
- Payload includes:
  - `urls`: List of pages to crawl (`https://quotes.toscrape.com/*`)
  - `prompt`: "Extract all quotes and their corresponding authors from the website."
  - `schema`: JSON schema defining expected structure (`quotes[]`, each with `text` and `author`)

&gt; 📌 Uses an **HTTP Header Auth** credential for Firecrawl API

---

### 3. ⏱️ **Wait for 30 Seconds**
- Node: `30 Secs`
- Gives Firecrawl time to finish processing in the background
- Prevents hitting the API before results are ready

---

### 4. 📥 **Get Results**
- Node: `Get Results`
- Performs a `GET` request to the status URL using `{{ $('Extract').item.json.id }}` to retrieve extraction results.

---

### 5. ✅❌ **Condition Check**
- Node: `If`
- Checks if the `data` array is empty (i.e., no results yet)
- If **data is empty**:
  - Waits **10 more seconds** and retries
- If **data is available**:
  - Passes data to the next step (e.g., processing or storage)

---

### 6. 🔁 **Retry Delay**
- Node: `10 Seconds`
- Waits briefly before sending another `GET` request to Firecrawl

---

### 7. 🛠️ **Edit Fields (Optional Output Formatting)**
- Node: `Edit Fields`
- Placeholder to structure or format the extracted results (quotes and authors)

---

## 🧾 Sticky Note: Firecrawl Setup Guide

Included as an embedded reference:
- 🔗 [10% Firecrawl Discount](https://firecrawl.link/nateherk)
- 🧰 Instructions to:
  - Add Firecrawl API credentials in **n8n**
  - Use Firecrawl Community Node for **self-hosted** instances
  - Set up the schema and prompt for targeted data extraction

---

## ✅ Key Features

- 🔌 API-based crawling with schema-structured output
- ⏱️ Smart waiting + retry mechanism
- 🧠 AI prompt integration for intelligent data parsing
- ⚙️ Flexible for different URLs, prompts, and schemas

---

## 📦 Sample Output Schema

```json
{
  "quotes": [
    {
      "text": "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
      "author": "Albert Einstein"
    },
    {
      "text": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      "author": "J.K. Rowling"
    }
  ]
}


## 📊 Basic Information

- **Workflow ID:** 4764
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 674
- **Downloads:** 67
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4764)

## 👤 Author

- **Name:** Aashit Sharma
- **Username:** @aashitsharma

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **if** 
- **wait** (×2)
- **stickyNote** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
