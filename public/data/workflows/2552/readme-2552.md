# AI powered web scraping with Jina, Google Sheets and OpenAI : the EASY way

> **Purpose of workflow:**
The purpose of this workflow is to automate  scraping of a website, transforming it into a structured format, and loading it directly into a Google Sheets spreadsheet. 

**How it works:**

1. Web Scraping: Uses the Jina AI service to scrape website data and convert it into LLM-friendly text.
2. Information Extraction: Employs an AI node to extract specific book details (title, price, availability, image URL, product URL) from the scraped data.
3. Data Splitting: Splits the extracted information into individual book entries.
4. Google Sheets Integration: Automatically populates a Google Sheets spreadsheet with the structured book data.

**Step by step setup:**

1. Set up Jina AI service:
   - Sign up for a Jina AI account and obtain an API key.


2. Configure the HTTP Request node:
   - Enter the Jina AI URL with the target website.
   - Add the API key to the request headers for authentication.

3. Set up the Information Extractor node:
   - Use Claude AI to generate a JSON schema for data extraction.
   - Upload a screenshot of the target website to Claude AI.
   - Ask Claude AI to suggest a JSON schema for extracting required information.
   - Copy the generated schema into the Information Extractor node.

4. Configure the Split node:
   - Set it up to separate the extracted data into individual book entries.

5. Set up the Google Sheets node:
   - Create a Google Sheets spreadsheet with columns for title, price, availability, image URL, and product URL.
   - Configure the node to map the extracted data to the appropriate columns.


## 📊 Basic Information

- **Workflow ID:** 2552
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 50275
- **Downloads:** 5027
- **Created:** 2024/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2552)

## 👤 Author

- **Name:** Derek Cheung
- **Username:** @derekcheungsa

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **splitOut** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **httpRequest** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
