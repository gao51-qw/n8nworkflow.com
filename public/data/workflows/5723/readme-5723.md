# Automate vendor due diligence research with Gemini & Jina AI

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![Screenshot 20250706 at 3.09.17 PM.png](fileId:1685)

## 👥 Who is this for?

This workflow is designed for a variety of professionals who manage vendor relationships and data security. It is especially beneficial for:

- **🛡️ GRC (Governance, Risk, and Compliance) Professionals**: Streamline your risk assessment processes
- **🔒 Information Security Teams**: Quickly evaluate the security posture of third-party vendors
- **📋 Procurement Departments**: Enhance due diligence when onboarding new service providers
- **🚀 Startup Founders**: Efficiently assess vendors without a dedicated security team

This tool is perfect for anyone looking to automate the manual review of vendor websites, policies, and company data. ✨

## 🎯 What problem is this workflow solving?

Manual vendor due diligence is a time-consuming process that can take hours for a single vendor. This workflow automates over **80%** of these manual tasks, which typically include:

- 🔍 Finding and organizing basic vendor information
- 🏢 Researching the company's background
- 📄 Collecting links to key documents like Privacy Policies, Terms of Service, and Trust Pages
- 📖 Manually reviewing each document to extract risk-relevant information
- 📊 Compiling all findings into a formatted report or spreadsheet for record-keeping

By leveraging **Gemini** for structured parsing and web scraping with live internet data, this workflow frees you up to focus on critical analysis and final review. ⚡

## ⚙️ What this workflow does

This end-to-end automated **n8n workflow** performs the following steps:

1. **📝 Intake**: Begins with a simple form to capture the vendor's name, the business use case, and the type of data they will handle
2. **🔎 Background Research**: Gathers essential background information on the company
3. **⚠️ Risk Analysis**: Conducts comprehensive research on various risk-related topics
4. **🔗 URL Extraction**: Finds and validates public URLs for privacy policies, security pages, and trust centers
5. **📈 Risk Assessment**: Generates a structured risk score and a detailed assessment based on the collected content and context
6. **📤 Export**: Exports the final results to a Google Sheet for easy access and record-keeping

## 🚀 Setup

To get started with this workflow, follow these steps:

1. **🔑 Configure Credentials**: Set up your API credentials for Gemini and Jina AI
2. **📊 Connect Google Sheets**: Authenticate your Google Sheets account and configure the the Sheet where you want to store the results
3. **🔗 Download** the Google Sheet template for your assessment ouput from [here](https://docs.google.com/spreadsheets/d/1PCpZ9wMPFvm4vubiPBqw021Lz8JiHUnr-EWl1cdIKYY/edit?usp=sharing)
4. **⚙️ (Optional) Customize Prompts**: Adjust the prompts within the workflow to better suit your specific needs
5. **🎯 (Optional) Align Risk Framework**: Modify the risk questions to align with your organization's internal vendor risk framework


## 📊 Basic Information

- **Workflow ID:** 5723
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 1028
- **Downloads:** 102
- **Created:** 2025/7/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5723)

## 👤 Author

- **Name:** Adnan
- **Username:** @adnan

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **httpRequest** (×3)
- **formTrigger** 
- **wait** (×2)
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **code** (×3)
- **jinaAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **aggregate** 
- **googleSheets** 
- **form** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
