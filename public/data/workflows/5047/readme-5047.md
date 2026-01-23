# Ideal customer profile (ICP) generation: AI, Firecrawl, Gemini, Telegram

> # Purpose & Audience
This workflow is designed to save hours of manual research for digital marketers, media buyers, copywriters, and business strategists. It empowers users to quickly understand their target customers’ behaviors, pain points, desires, and communication preferences by leveraging AI-powered web scraping and natural language processing.

Whether you’re crafting ad campaigns, refining audience segments, or creating compelling content, this tool provides a powerful shortcut to uncovering your dream buyer’s profile—directly from the source website and delivered via Telegram.

## How It Works?
1. **Telegram Trigger:**
A user sends a message to the Telegram bot, e.g.,
*“Hey scrape this website https://www.company.com and find me their ICP. You can scrape 2 pages at most.”*

2. **Parameter Extraction:**
An AI model processes the message to extract two key parameters:

- The company URL
- The number of pages to scrape (capped at 3)

3. **Conditional Scraping:**
Based on the number of pages:
- If 1 page, the workflow calls Firecrawl’s /scrape endpoint to scrape that single page.
- If more than 1 page, it calls Firecrawl’s /crawl endpoint to scrape up to the specified number of pages.

4. **Content Retrieval:**
After scraping, the content is fetched and passed to an AI language model.

5. **ICP Generation:**
The AI analyzes the website content and answers nine detailed questions about the dream buyer, such as:
- Where the dream buyer hangs out online and offline
- Their biggest frustrations and challenges
- Their hopes, fears, and preferred communication methods
- The language and phrases they use
- A typical day in their life
- What makes them happy

6. **Output Delivery:**
The generated ICP is sent back to the user via Telegram in a natural, easy-to-understand format.

### Setup Instructions
To get this workflow up and running, you will need the following API credentials:

1. **Telegram Bot API**

- Create a free Telegram bot using @BotFather on Telegram.
- Follow the prompts to create a new bot and get your API token.
- Use this token to create Telegram credentials in n8n.

2. **Firecrawl API**

- Sign up for a free account at https://www.firecrawl.dev/.
- Obtain your API token from the Firecrawl dashboard.
- Create a Header Auth credential in n8n using this token to authenticate your HTTP Request nodes for scraping.

3. **OpenAI or Google Gemini API**

- For AI-powered analysis, you need access to a large language model API.
- You can use OpenAI’s API (free tier available) by signing up at https://platform.openai.com/ and generating an API key.
- Alternatively, use Google Gemini if you have access.
- Create the corresponding credential in n8n and connect it to the AI nodes in the workflow.

## What It Does?
1. Converts a simple Telegram message into structured scraping instructions.
2. Scrapes website content intelligently, respecting user-defined page limits.
3. Uses AI to deeply analyze business websites and generate actionable customer insights.
4. Provides marketers and media buyers with rich, detailed ICPs that can be used for copywriting, ad targeting, audience research, and content creation.
5. Automates a traditionally time-consuming research process into a seamless conversational experience.

## Summary
This workflow enables you to generate a detailed Ideal Customer Profile (ICP) for any company by simply sending a message to a Telegram bot. Using natural conversational language, users provide a company URL and specify how many pages (up to 3) to scrape from the website. The workflow intelligently extracts these parameters, scrapes the website content using Firecrawl’s API, and then leverages an AI language model to analyze the content and produce a comprehensive ICP.

The ICP answers key questions about the company’s dream buyer—helping marketers, media buyers, and copywriters understand their target audience deeply without manual research.


## 📊 Basic Information

- **Workflow ID:** 5047
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 363
- **Downloads:** 36
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5047)

## 👤 Author

- **Name:** Malik Hashir
- **Username:** @malikx

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **telegram** 
- **convertToFile** (×2)
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **if** 
- **wait** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
