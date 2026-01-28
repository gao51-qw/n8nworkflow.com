# Employee attrition risk detection & HR alerts using Azure OpenAI GPT-4o-mini & Gmail

> ## Description 
Automatically ingests new employee data, extracts relevant signals, scores attrition risk, and notifies HR/managers with structured insights and recommended actions. Built on Azure OpenAI Chat with Structured Output Parser and true/false routing for escalation.

## What This Template Does 
- Trigger for new data: Starts when a new profile, survey, or report file is added.
- Download & extract: Retrieves the file and converts PDFs/text into analyzable content.
- Analyze signals: Uses Azure OpenAI Chat to interpret sentiment, workload, performance notes, feedback, and changes (role, compensation, manager, location).
- Structured parsing: Maps to fields like risk_score, risk_level, key_drivers, recommended_interventions, escalation_required.
- Logic routing: Applies thresholds (e.g., risk_score ≥ 0.7) and flags for urgent follow-up.
- Email alerts: Drafts and sends tailored notifications to HR/manager with action steps.

## Key Signals Considered 
- Sentiment & language: Negative tone, burnout cues, disengagement in feedback.
- Activity trends: Drop in participation, delayed responses, meeting absenteeism.
- Performance & goals: Recent rating changes, missed OKRs, quality issues.
- Role & compensation: Lateral moves, pay gaps vs. market, stalled progression.
- Managerial context: Team churn, conflict mentions, low recognition frequency.

## Features 
- Azure OpenAI Chat: Interprets unstructured text into consistent risk fields.
- Structured Output Parser: Guarantees schema for downstream decisions.
- Conditional Logic (true/false): Threshold checks for escalation.
- Memory: Maintains context across multiple files per employee for trend-aware scoring.
- Calculate avg span: Computes tenure or recency metrics used in risk scoring.
- Email Composer & Sender: Generates and dispatches HR-ready alerts.

## Requirements 
- n8n instance with access to employee data sources (Drive, Inbox, HR folder).
- Extract From PDF configured for clean text output.
- Azure OpenAI credentials (e.g., GPT‑4o‑mini) connected to Chat Model.
- Email service (Gmail/SMTP) set in n8n Credentials.
- Parser schema aligned to your People Analytics fields (risk_score, drivers, actions).

## 📊 Basic Information

- **Workflow ID:** 9309
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 146
- **Downloads:** 14
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9309)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleDriveTrigger** 
- **googleDrive** 
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **code** 
- **gmail** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
