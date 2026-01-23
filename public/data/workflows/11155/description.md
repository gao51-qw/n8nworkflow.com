**Description:** Automate your grant research with an AI Agent that reads, analyzes, and scores opportunities. 🏛️🤖

This advanced workflow transforms the tedious task of finding business subsidies into an automated intelligence stream. Unlike simple keyword scrapers, it uses an OpenAI Agent (GPT-4o) to read full articles, extract key details (deadlines, budgets), and evaluate their importance for SMEs on a 1-10 scale.

## Key Features:

Intelligent Scoring: The AI assigns an "Importance Score" and "Urgency" level to each subsidy, filtering out noise.

Structured Data Extraction: Converts unstructured news text into clean JSON (Deadlines, Requirements, Agencies).

Smart Alerts: High-scoring subsidies (Score 7+) trigger a priority alert (🚨) sent directly to Chatwork.

State Management: Uses Google Sheets to track history and prevent duplicate notifications.

Organized Layout: Nodes are clearly grouped into sections (Setup, Aggregation, Analysis, Logic) for easy customization.

## How it works:

Aggregate: Collects the latest articles from Google News, J-Net21, and Mirasapo Plus RSS feeds.

Analyze: The AI Agent reads the content to extract fields like applicationDeadline and targetRecipients, while calculating an importance score.

Deduplicate: Checks the URL against a Google Sheet database to ensure only new information is processed.

Filter & Tag: High-value items are automatically tagged as "High Priority".

Notify: Saves data to Google Sheets and sends a formatted message to Chatwork.

## Setup Requirements:

Google Sheets: Create a sheet named Subsidies with the following headers in the first row: subsidyName, targetRecipients, applicationDeadline, budgetAmount, urgency, importanceScore, priorityTag, sourceUrl

## Credentials:

OpenAI: API Key (GPT-4o recommended).

Chatwork: API Token.

Google Sheets: OAuth2 connection.

Configuration: Open the "Sticky Note Setup" section (first node) and enter your Chatwork Room ID, Chatwork API Token, and Google Spreadsheet ID.