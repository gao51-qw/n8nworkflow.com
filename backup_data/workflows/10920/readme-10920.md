# Weekly Google Analytics report with GPT-4o analysis & email delivery

> ## Overview

The workflow automatically gathers **weekly user and page view metrics**. It then **uses AI to analyze, compare, and compile a summary report**. Finally, it **sends the report** to the manager's email.

## How it works

### Get Data from GA
Automatically **retrieve data from Google Analytics (GA) for the two most recent weeks**.
**Compare the data and calculate the variances** between the two weeks.

### Generate Report
Automatically **analyze the data and generate reports using Artificial Intelligence (AI)**.
**Generate charts** to visualize the data.
**Export the report to PDF**.

### Send Report
**Send the report via email to the manager.**

## Set up steps

### Google cloud account
Create the [credentials](https://console.cloud.google.com/apis/credentials) and replace them in the workflow.
Please [enable](https://console.cloud.google.com/apis/dashboard) the following APIs:
- Gmail API
- Google Analytics Admin API
- Google Analytics Data API

### HTML to PDF account
You need to install node HTML to PDF.
Get [API key](https://pdfmunk.com/) and replace in the workflow.



## 📊 Basic Information

- **Workflow ID:** 10920
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 233
- **Downloads:** 23
- **Created:** 2025/11/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10920)

## 👤 Author

- **Name:** Satoshi
- **Username:** @satoshi

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×7)
- **scheduleTrigger** 
- **gmail** 
- **code** (×5)
- **googleAnalytics** (×2)
- **merge** 
- **n8n-nodes-htmlcsstopdf.htmlcsstopdf** 
- **html** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
