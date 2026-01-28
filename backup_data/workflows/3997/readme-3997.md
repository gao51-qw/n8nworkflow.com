# GitLab merge request review & risk analysis with Claude/GPT AI

> ## Trigger

The workflow runs when a GitLab Merge Request (MR) is created or updated.

## Extract & Analyze

It retrieves the code diff and sends it to Claude AI or GPT-4o for risk assessment and issue detection.

## Generate Report

AI produces a structured summary with:
- Risk levels
- Identified issues
- Recommendations
- Test cases

## Notify Developers

The report is:
- Emailed to developers and QA teams
- Posted as a comment on the GitLab MR

## Setup Guide

### Connect GitLab
- Add GitLab API credentials
- Select repositories to track

### Configure AI Analysis
- Enter Anthropic (Claude) or OpenAI (GPT-4o) API key

### Set Up Notifications
- Add Gmail credentials
- Update the email distribution list

### Test & Automate
- Create a test MR to verify analysis and email delivery

## Key Benefits

- **Automated Code Review** – AI-driven risk assessment and recommendations
- **Security & Compliance** – Identifies vulnerabilities before code is merged
- **Integration with GitLab CI/CD** – Works within existing DevOps workflows
- **Improved Collaboration** – Keeps developers and QA teams informed

---

**Developed by Quantana**, an AI-powered automation and software development company.


## 📊 Basic Information

- **Workflow ID:** 3997
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 10891
- **Downloads:** 1089
- **Created:** 2025/5/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3997)

## 👤 Author

- **Name:** Vishal Kumar
- **Username:** @vishalquantana

## 🏷️ Categories

- DevOps
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×2)
- **code** 
- **if** 
- **merge** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×2)
- **stickyNote** (×9)
- **gitlabTrigger** (×3)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
