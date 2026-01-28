# Automated product health monitor with anomaly detection & AI root cause analysis

> ## Description

This workflow transforms raw SaaS metrics into a fully automated Product Health Monitoring & Incident Management system.

It checks key revenue and usage metrics every day (such as churn MRR and feature adoption), detects anomalies using a statistical baseline, and automatically creates structured incidents when something unusual happens.

When an anomaly is found, the workflow logs it into a central incident database, alerts the product team on Slack and by email, enriches the incident with context and AI-generated root-cause analysis, and produces a daily health report for leadership.

It helps teams move from passive dashboard monitoring to a proactive, automated system that surfaces real issues with clear explanations and recommended next steps.

## Context

Most SaaS teams struggle with consistent product health monitoring:

- Metrics live in dashboards that people rarely check proactively

- Spikes in churn or drops in usage are noticed days later

- There is no unified system to track, investigate, and report on incidents

- Post-mortems rely on memory rather than structured data

- Leadership often receives anecdotal updates instead of reliable daily reporting

This workflow solves that by:

- Tracking core health metrics daily (revenue and usage)

- Detecting anomalies based on recent baselines, not arbitrary thresholds

- Logging all incidents in a consistent format

- Notifying teams only when action is needed

- Generating automated root-cause insights using AI + underlying database context

- Producing a daily “Product Health Report” for decision-makers

The result:

Faster detection, clearer understanding, and better communication across product, growth, and leadership teams.

## Target Users

This template is ideal for:

- Product Managers & Product Owners

- SaaS founders and early-stage teams

- Growth, Analytics, and Revenue Ops teams

- PMO / Operations teams managing product performance

Any organization wanting a lightweight incident monitoring system without building internal tooling

## Technical Requirements

You will need:

- A Postgres / Supabase database containing your product metrics

- Slack credentials for alerts

- Gmail credentials for email notifications

- (Optional) Notion credentials for incident documentation and daily reports

- An OpenAI / Anthropic API key for AI-based root cause analysis

## Workflow Steps
![image.png](fileId:3414)
The workflow is structured into four main sections:

1) Daily Revenue Health

Runs once per day, retrieves recent revenue metrics, identifies unusual spikes in churn MRR, and creates incidents when needed.
If an anomaly is detected, a Slack alert and email notification are sent immediately.

2) Daily Usage Health

Monitors feature usage metrics to detect sudden drops in adoption or engagement.
Incidents are logged with severity, context, and alerts to the product team.

3) Root Cause & Summary

For every open incident, the workflow:

Collects additional context from the database (e.g., churn by country or plan)

Uses AI to generate a clear root cause hypothesis and suggested next steps

Sends a summarized report to Slack and email

Updates the incident status accordingly

4) Daily Product Health Report

Every morning, the workflow compiles all incidents from the previous day into:

- A daily summary email for leadership

- A Notion page for documentation and historical tracking

- This ensures stakeholders have clear visibility into product performance trends.

## Key Features

- Automated anomaly detection across revenue and usage metrics

- Centralized incident logging with metadata and raw context

- Severity scoring based on deviation from historical baselines

- Slack and email alerts for fast response

- AI-generated root cause analysis with recommended actions

- Daily product health reporting for leadership and PM teams

- Optional Notion integration for incident documentation

- System logging for observability and auditability

- Fully modular: you can add more metrics, alert channels, or analysis steps easily

## Expected Output

- When running, the workflow will generate:

- Structured incident records in your database

- Slack alerts for revenue or usage anomalies

- Email notifications with severity, baseline vs actual, and context

- AI-generated root cause summaries

- A daily health report summarizing all incidents

- (Optional) Notion pages for both incidents and daily reports

- System logs recording successful executions

## Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=JWHOyftEetA)


## About me

I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 📊 Basic Information

- **Workflow ID:** 11117
- **Complexity:** advanced
- **Node Count:** 37
- **Views:** 57
- **Downloads:** 5
- **Created:** 2025/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11117)

## 👤 Author

- **Name:** Yassin Zehar
- **Username:** @yassinzehar

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **postgres** (×13)
- **stickyNote** (×5)
- **code** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **slack** (×3)
- **scheduleTrigger** (×4)
- **gmail** (×4)
- **notion** (×2)
- **if** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 37 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
