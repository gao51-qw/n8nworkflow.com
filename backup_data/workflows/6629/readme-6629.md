# AI-powered bank statement analysis & transaction categorization

> # How it works

This workflow automatically processes bank statements from various formats and extracts structured transaction data with intelligent categorization using AI.

## Key Steps

1. **File Upload** - Accepts bank statements via webhook upload (PDF, Excel, CSV formats).
2. **Smart Format Detection** - Automatically routes files to appropriate processors (PDF text extraction or spreadsheet parsing).
3. **AI-Powered Extraction** - Uses GPT-4 to extract account details, transactions, and balances from statement data.
4. **Data Processing & Categorization** - Cleans, validates, and automatically categorizes transactions into expense categories.
5. **Database Storage** - Saves processed data to PostgreSQL database for analysis and reporting.
6. **API Response** - Returns structured summary with transaction counts, expense totals, and category breakdowns.

## Set up steps

**Setup time: 8-12 minutes**

1. **Configure OpenAI credentials** - Add your OpenAI API key for AI-powered data extraction.
2. **Set up PostgreSQL database** - Connect your PostgreSQL database and create the required table structure.
3. **Configure webhook endpoint** - The workflow provides a `/upload-statement` endpoint for file uploads.
4. **Customize transaction categories** - Modify the AI prompt to include your preferred expense categories.
5. **Test the workflow** - Upload a sample bank statement to verify the extraction and categorization process.
6. **Set up database table** - Ensure your PostgreSQL database has a `bank_statements` table with appropriate columns.

## Features

- **Multi-format support**: PDF, Excel, CSV bank statements
- **AI-powered extraction**: GPT-4 extracts account details and transactions
- **Automatic categorization**: Expenses categorized as groceries, dining, gas, shopping, utilities, healthcare, entertainment, income, fees, or other
- **Data validation**: Cleans and validates transaction data with error handling
- **Database storage**: PostgreSQL integration for data persistence
- **API responses**: Clean JSON responses with transaction summaries and category breakdowns
- **Smart routing**: Automatic format detection and appropriate processing paths


## 📊 Basic Information

- **Workflow ID:** 6629
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 3463
- **Downloads:** 346
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6629)

## 👤 Author

- **Name:** vinci-king-01
- **Username:** @vinci-king-01

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **code** (×2)
- **if** 
- **extractFromFile** 
- **spreadsheetFile** 
- **openAi** 
- **postgres** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
