# Stock fundamental analysis & AI-powered reports with Mistral and AlphaVantage

> # Fundamental Analysis, Stock Analysis, and AI Integration in the Fundamental Analysis Tool



---

## Overview of the Tool

The **Fundamental Analysis Tool** is an automated workflow designed to evaluate a stock’s fundamentals using financial data and AI-driven insights. Built in the n8n automation platform, it:

1. **Collects** financial data for a user-specified stock from AlphaVantage.
2. **Processes** and structures this data for analysis.
3. **Analyzes** the data using the Mistral AI model to provide expert-level insights.
4. **Generates** a visually appealing HTML report with charts and delivers it via email.

The tool is triggered by a form where users input a **stock symbol** (e.g., "NVDA" for NVIDIA) and their **email address**. From there, it follows a three-stage process: **data retrieval**, **data processing**, and **AI analysis with report generation**.

---

## 1. Fundamental Analysis: The Foundation

Fundamental analysis involves evaluating a company’s intrinsic value by examining its financial health, competitive position, and market environment. This tool performs fundamental analysis by:

### Data Retrieval

- **Data Types**: Six types of data are retrieved via HTTP requests:
  - **Overview**: General company details (e.g., sector, industry, market cap).
  - **Income Statement**: Revenue, net income, and profitability metrics.
  - **Balance Sheet**: Assets, liabilities, and equity.
  - **Cash Flow**: Operating, investing, and financing cash flows.
  - **Earnings Calendar**: Upcoming earnings events.
  - **Earnings**: Historical earnings data (annual and quarterly).

### Key Metrics Analyzed
The tool structures this data into **8 categories** critical to fundamental analysis, as defined in the "Code1" node:
1. **Economic Moats & Competitive Advantage**: Assesses sustainable advantages (e.g., R&D spending, gross profit).
2. **Financial Health & Profitability**: Examines ROE, debt levels, and dividend yield.
3. **Valuation & Market Sentiment**: Evaluates P/E ratio, PEG ratio, and book value.
4. **Management & Capital Allocation**: Reviews market cap justification and cash allocation (e.g., R&D, buybacks).
5. **Industry & Risk Exposure**: Analyzes revenue cyclicality and geopolitical risks.
6. **Key Metrics to Probe**: Investigates net income trends and gross margins.
7. **Red Flags**: Identifies risks like inventory issues or stock dilution.
8. **Final Checklist**: Summarizes pricing power and risk/reward potential.

These categories cover the core pillars of fundamental analysis, ensuring a holistic evaluation of the stock’s intrinsic value and risks.

---

## 2. Stock Analysis: Tailored Insights

The tool performs stock-specific analysis by focusing on the user-provided **stock symbol**. Here’s how it tailors the process:

### Input and Customization
- **Form Submission**: Users enter a stock symbol (e.g., "NVDA") and email via the "On Form Submission" node.
- **Dynamic Data Fetching**: The "Set Variables" node passes the stock symbol to the API calls, ensuring the analysis is specific to the chosen stock.

### Processing for Relevance
- **Data Filtering**: The workflow limits historical data to the **last 5 years** (via the "Limit" node), focusing on recent trends.
- **Merging and Cleaning**: The "Merge" and "Code2" nodes combine and refine the data, removing irrelevant fields (e.g., quarterly reports) and aggregating annual reports for consistency.

### Output
- The final report is titled with the stock’s name (e.g., "Fundamental Analysis - NVIDIA"), ensuring the analysis is clearly tied to the user’s chosen stock.

This stock-specific approach makes the tool practical for investors analyzing individual companies rather than broad market trends.

---

## 3. AI Integration: Expert-Level Insights

The integration of **AI** (via the Mistral model or others) is what sets this tool apart, automating complex analysis and report generation. Here’s how AI is woven into the workflow:

### Data Preparation for AI
- **Structuring**: The "Code1" node organizes the raw data into a JSON schema aligned with the eight fundamental analysis categories. 
- This structured data is fed into the AI for analysis.

### AI Analysis
- **Node**: "Basic LLM Chain" uses the **Mistral AI model**.
- **Prompt**: The AI is instructed to act as an "expert financial advisor with 50 years of experience" and answer specific questions for each category, such as:
  - *Economic Moats*: "What sustainable competitive advantages protect the company’s margins?"
  - *Financial Health*: "Is ROE driven by leverage or true profitability?"
  - *Red Flags*: "Are supply chain issues a concern?"
- **Output**: The AI generates a JSON response with detailed insights, e.g.:
  ```json
  {
    "Economic Moats & Competitive Advantage": "NVIDIA’s leadership in GPU technology and strong R&D investment...",
    "Financial Health & Profitability": "ROE of 25% is exceptional, driven by profitability rather than leverage...",
    ...
  }
  ```
- **Validation**: An "Auto-fixing Output Parser" ensures the output adheres to the expected JSON schema, retrying if necessary.

### Report Enhancement
- **HTML Generation**: The "HTML" node creates an initial report with placeholders for the AI’s insights and Google Charts for visualizations (e.g., ROE trends, revenue growth).
- **AI-Driven Refinement**: The "Basic LLM Chain1" node uses Mistral again to enhance the HTML, adding:
  - Styled tables (e.g., financial ratios).
  - Charts (e.g., bar charts for valuation, line charts for revenue).
  - Visual indicators (e.g., ✅ for positive trends, ⚠️ for risks).
  - Mobile-responsive design with modern fonts (Inter or Roboto).

This dual AI approach—one for analysis, one for presentation—ensures the output is both insightful and user-friendly.


---


## Strengths and Limitations

### Strengths
- **Comprehensive**: Covers all key aspects of fundamental analysis.
- **AI-Powered**: Automates expert-level insights and report design.
- **User-Friendly**: Delivers an interactive, visual report via email.

### Limitations
- **Data Dependency**: Relies on public data, so data quality and timeliness matter.
- **AI Constraints**: Insights depend on AI’s capabilities; it may miss nuanced human judgment.
- **Disclaimer**: The tool notes it’s not investment advice, so users should consult advisors.

---


## 📊 Basic Information

- **Workflow ID:** 5710
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 391
- **Downloads:** 39
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5710)

## 👤 Author

- **Name:** Sebastian/OptiLever
- **Username:** @lewxiangang

## 🏷️ Categories

- Crypto Trading
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **set** 
- **httpRequest** (×6)
- **merge** (×3)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **code** (×2)
- **splitOut** (×2)
- **limit** 
- **aggregate** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **html** (×2)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
