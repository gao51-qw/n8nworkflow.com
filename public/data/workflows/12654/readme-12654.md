# Scrape Trustpilot reviews 📊 with ScrapegraphAI and OpenAI Reputation analysis

> This workflow automates the **collection, analysis, and reporting of Trustpilot reviews** for a specific company, transforming unstructured customer feedback into **structured insights and actionable intelligence**.

---

### Key Advantages

#### 1. ✅ End-to-End Automation

The entire process—from scraping reviews to delivering a polished management report—is fully automated, eliminating manual data collection and analysis .

#### 2. ✅ Structured Insights from Unstructured Data

The workflow transforms raw, unstructured review text into structured fields and standardized sentiment categories, making analysis reliable and repeatable.

#### 3. ✅ Company-Level Reputation Intelligence

Instead of focusing on individual products, the analysis evaluates the **overall brand, service quality, customer experience, and operational performance**, which is critical for leadership and strategic teams.

#### 4. ✅ Action-Oriented Outputs

The AI-generated report goes beyond summaries by:

* Identifying reputational risks
* Highlighting improvement opportunities
* Proposing concrete actions with priorities, effort estimates, and KPIs

#### 5. ✅ Visual & Executive-Friendly Reporting

Automatic sentiment charts and structured executive summaries make insights immediately understandable for non-technical stakeholders.

#### 6. ✅ Scalable and Configurable

* Easily adaptable to different companies or review volumes
* Page limits and batching protect against rate limits and excessive API usage

#### 7. ✅ Cross-Team Value

The output is tailored for multiple internal teams:

* Management
* Marketing
* Customer Support
* Operations
* Product & UX

---

### Ideal Use Cases

* Brand reputation monitoring
* Voice-of-the-customer programs
* Executive reporting
* Customer experience optimization
* Competitive benchmarking (by reusing the workflow across brands)

---

### **How It Works**

This workflow automates the complete process of scraping Trustpilot reviews, extracting structured data, analyzing sentiment, and generating comprehensive reports. The workflow follows this sequence:

1. **Trigger & Configuration**: The workflow starts with a manual trigger, allowing users to set the target company URL and the number of review pages to scrape.

2. **Review Scraping**: An HTTP request node fetches review pages from Trustpilot with pagination support, extracting review links from the HTML content.

3. **Review Processing**: The workflow processes individual review pages in batches (limited to 5 reviews per execution for efficiency). Each review page is converted to clean markdown using ScrapegraphAI.

4. **Data Extraction**: An information extractor using OpenAI's GPT-4.1-mini model parses the markdown to extract structured review data including author, rating, date, title, text, review count, and country.

5. **Sentiment Analysis**: Another OpenAI model performs sentiment classification on each review text, categorizing it as Positive, Neutral, or Negative.

6. **Data Aggregation**: Processed reviews are collected and compiled into a structured dataset.

7. **Analytics & Visualization**:
   - A pie chart is generated showing sentiment distribution
   - A comprehensive reputation analysis report is created using an AI agent that evaluates company-level insights, recurring themes, and provides actionable recommendations

8. **Reporting & Delivery**: The analysis is converted to HTML format and sent via email, providing stakeholders with immediate insights into customer feedback and company reputation.

## **Set Up Steps**

To configure and run this workflow:

1. **Credential Setup**:
   - Configure OpenAI API credentials for the chat models and information extraction
   - Set up ScrapegraphAI credentials for webpage-to-markdown conversion
   - Configure Gmail OAuth2 credentials for email notifications

2. **Company Configuration**:
   - In the "Set Parameters" node, update `company_id` to the target Trustpilot company URL 
   - Adjust `max_page` to control how many review pages to scrape

3. **Review Processing Limits**:
   - The "Limit" node restricts processing to 5 reviews per execution to manage API costs and processing time
   - Adjust this value based on your needs and OpenAI usage limits

4. **Email Configuration**:
   - Update the "Send a message" node with the recipient email address
   - Customize the email subject and content as needed

5. **Analysis Customization**:
   - Modify the prompt in the "Company Reputation Analyst" node to tailor the report format
   - Adjust sentiment analysis categories if different classification is needed

6. **Execution**:
   - Click "Test workflow" to execute the manual trigger
   - Monitor execution in the n8n editor to ensure all API calls succeed
   - Check the configured email inbox for the generated report

**Note**: Be mindful of API rate limits and costs associated with OpenAI and ScrapegraphAI services when processing large numbers of reviews. The workflow includes a 5-second delay between paginated requests to comply with Trustpilot's terms of service.


---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 12654
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12654)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **splitOut** 
- **manualTrigger** 
- **stickyNote** (×7)
- **set** (×2)
- **httpRequest** (×2)
- **html** 
- **n8n-nodes-scrapegraphai.scrapegraphAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **limit** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **code** (×2)
- **gmail** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
