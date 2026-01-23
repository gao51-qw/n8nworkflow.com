## Workflow Overview

This workflow automatically fetches the latest "Ask HN: Who is hiring?" posts from Hacker News, extracts individual job listings, cleans the raw text, converts them into structured job listings using Google Gemini AI, and saves them into Airtable.

## Components

It’s a full end-to-end automation system combining:

* **Algolia API** for HN data
* **Text cleaning**
* **Gemini AI (via LangChain)** for parsing job descriptions
* **Structured JSON extraction**
* **Airtable integration** to store the final data

## 🎯 Use Cases

* Automatically build a job board from HN posts
* Track startup hiring trends
* Feed remote job alerts into a CRM or Slack
* Enrich a hiring intelligence database

## 🔧 Nodes & Services Used

* HTTP Request (Algolia + Firebase API)
* SplitOut, Set, Filter, Function, Limit
* Google Gemini (via LangChain integration)
* Output Parser Structured
* Airtable (API token required)

## 📌 Credentials Required

* Google Gemini (PaLM/Gemini API)
* Airtable Personal Access Token
* Algolia Application ID & API Key (via Header Auth)

## 📦 Tags

hacker-news, jobs, airtable, ai, gemini, automation, hn, langchain, workflow

## Screenshots

![Screen Shot 20250521 at 5.56.21 PM.png](fileId:1352)
