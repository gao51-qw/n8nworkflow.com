# Automated daily AI news digest: scrape, categorize & save to Google Sheets

> This workflow is designed to automatically process AI news emails, extract and summarize articles, categorize them, and store the results in a structured Google Sheet for daily tracking and insights.

This automated workflow processes a daily AI newsletter from AlphaSignal, extracting individual articles, summarizing them, categorizing them, and saving the results to a Google Sheet.

---

###  Key Features

#### 1. ✅ **Fully Automated Daily News Pipeline**

No manual work is required — the workflow runs autonomously every time a new email arrives. This eliminates repetitive human tasks such as opening, reading, and summarizing newsletters.

#### 2. ✅ **Cross-AI Model Integration**

It combines multiple AI systems:

* **Google Gemini** and **OpenAI GPT-5 Mini** for natural language processing and categorization.
* **Scrapegraph AI** for external web scraping and summarization.

This multi-model approach enhances accuracy and flexibility.

#### 3. ✅ **Accurate Content Structuring**

The workflow transforms unstructured email text into **clean, structured JSON data**, ensuring reliability and easy export or reuse.

#### 4. ✅ **Multi-Language Support**

The summaries are generated **in Italian**, which is ideal for local or internal reporting, while the metadata and logic remain in English — enabling global adaptability.

#### 5. ✅ **Scalable and Extensible**

New newsletters, categories, or destinations (like Notion, Slack, or a database) can be added easily without changing the core logic.

#### 6. ✅ **Centralized Knowledge Repository**

By appending to Google Sheets, the team can:

* Track daily AI developments at a glance.
* Filter or visualize trends across categories.
* Use the dataset for further analysis or content creation.

#### 7. ✅ **Error-Resilient and Maintainable**

The **JSON validation** and **loop-based design** ensure that if a single article fails, the rest continue to process smoothly.

---

### How it Works

1.  **Email Trigger & Processing:** The workflow is automatically triggered when a new email arrives from `news@alphasignal.ai`. It retrieves the full email content and converts its HTML body into clean Markdown format for easier parsing.

2.  **Article Extraction & Scraping:** A LangChain Agent, powered by Google Gemini, analyzes the newsletter's Markdown text. Its task is to identify and split the content into individual articles. For each article it finds, it outputs a JSON object containing the title, URL, and an initial summary. Crucially, the agent uses the "Scrape" tool to visit each article's URL and generate a more accurate summary in Italian based on the full page content.

3.  **Data Preparation & Categorization:** The JSON output from the previous step is validated and split into individual data items (one per article). Each article is then processed in a loop:
    *   **Categorization:** An OpenAI model analyzes the article's title and summary, assigning it to the most relevant pre-defined category (e.g., "LLM & Foundation Models," "AI Automation & WF").
    *   **URL Shortening:** The article's link is sent to the CleanURI API to generate a shortened URL.

4.  **Data Storage:** Finally, for each article, a new row is appended to a specified Google Sheet. The row includes the current date, the article's title, the shortened link, the Italian summary, and its assigned category.
---


### Set up Steps

To implement this workflow, you need to configure the following credentials and nodes in n8n:

1.  **Email Credentials:** Set up a Gmail OAuth2 credential (named "Gmail account" in the workflow) to allow n8n to access and read emails from the specified inbox.

2.  **AI Model APIs:**
    *   **Google Gemini:** Configure the "Google Gemini(PaLM)" credential with a valid API key to power the initial article extraction and scraping agent.
    *   **OpenAI:** Configure the "OpenAi account (Eure)" credential with a valid API key to power the article categorization step.

3.  **Scraping Tool:** Set up the [ScrapegraphAI account credential](https://dashboard.scrapegraphai.com/?via=n3witalia) with its required API key to enable the agent to access and scrape content from the article URLs.

4.  **Google Sheets Destination:** Configure the "Google Sheets account" credential via OAuth2. You must also specify the exact Google Sheet ID and sheet name (tab) where the processed article data will be stored.

5.  **Activation:** Once all credentials are tested and correctly configured, the workflow can be activated. It will then run automatically upon receiving a new newsletter from the specified sender.

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 📊 Basic Information

- **Workflow ID:** 10952
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 205
- **Downloads:** 20
- **Created:** 2025/11/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10952)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **n8n-nodes-scrapegraphai.scrapegraphAiTool** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **gmail** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **httpRequest** 
- **googleSheets** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
