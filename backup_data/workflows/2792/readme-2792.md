# Scrape Trustpilot reviews with DeepSeek, analyze sentiment with OpenAI

> ### **Workflow Overview**  
This workflow automates the process of **scraping Trustpilot reviews**, extracting key details, analyzing sentiment, and saving the results to **Google Sheets**. It uses **OpenAI** for sentiment analysis and **HTML parsing** for review extraction.

---

### **How It Works**  

#### **1. Scrape Trustpilot Reviews**   
- **HTTP Request**:  
  - Fetches review pages from Trustpilot (`https://it.trustpilot.com/review/{{company_id}}`).  
  - Paginates through pages (up to `max_page` limit).  
- **HTML Parsing**:  
  - Extracts review URLs using CSS selectors
  - Splits the URLs into individual review links.  

#### **2. Extract Review Details**   
- **Information Extractor**:  
  - Uses DeepSeek to extract structured data from the review:  
    - **Author**: Name of the reviewer.  
    - **Rating**: Numeric rating (1-5).  
    - **Date**: Review date in `YYYY-MM-DD` format.  
    - **Title**: Review title.  
    - **Text**: Full review text.  
    - **Total Reviews**: Number of reviews by the user.  
    - **Country**: Reviewer’s country (2-letter code).  

#### **3. Sentiment Analysis**  
- **Sentiment Analysis Node**:  
  - Uses OpenAI to classify the review text as **Positive**, **Neutral**, or **Negative**.  
  - Example output:  
    ```json  
    {  
      "category": "Positive",  
      "confidence": 0.95  
    }  
    ```  

#### **4. Save to Google Sheets**  
- **Google Sheets Node**:  
  - Appends or updates the extracted data to a Google Sheet 

---

### **Set Up Steps**  

#### **1. Configure Trustpilot Scraping**  
- **Edit Fields1 Node**:  
  - Set `company_id` to the Trustpilot company name 
  - Set `max_page` to limit the number of pages scraped.  

#### **2. Configure Google Sheets**  
- **Google Sheets Node**:  
  - Update the `documentId` with your Google Sheet ID 
  - Ensure the sheet has the required columns (`Id`, `Data`, `Nome`, etc.).  

#### **3. Configure OpenAI**  
- **OpenAI Chat Model Node**:  
  - Add your OpenAI API key.  
- **Sentiment Analysis Node**:  
  - Ensure the `categories` match your desired sentiment labels (`Positive, Neutral, Negative`).  

---

### **Key Components**  
- **Nodes**:  
  - **HTTP Request/HTML**: Scrape and parse Trustpilot reviews.  
  - **Information Extractor**: Extract structured review data using DeepSeek.  
  - **Sentiment Analysis**: Classify review sentiment.  
  - **Google Sheets**: Save and update review data.  
- **Credentials**:  
  - OpenAI API key. 
  - DeepSeek API key.  
  - Google Sheets OAuth2.  

## 📊 Basic Information

- **Workflow ID:** 2792
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 12638
- **Downloads:** 1263
- **Created:** 2025/1/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2792)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **splitOut** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **if** 
- **manualTrigger** 
- **limit** 
- **stickyNote** (×4)
- **set** 
- **httpRequest** (×2)
- **html** (×2)
- **googleSheets** (×3)
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
