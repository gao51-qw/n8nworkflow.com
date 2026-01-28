# Automate Incident Management with PagerDuty, Port AI, Jira & Slack

> Complete incident workflow from detection through resolution to post-mortem, with full organizational context from Port's catalog. This template handles both incident triggered and resolved events from PagerDuty, automatically creating Jira tickets with context, notifying teams via Slack, calculating MTTR, and using Port AI Agents to schedule post-mortem meetings and create documentation.

## How it works
The n8n workflow orchestrates the following steps:

**On Incident Triggered:**
- PagerDuty webhook — Receives incident events from PagerDuty via POST request.
- Event routing — Routes to triggered or resolved flow based on event type.
- Port context enrichment — Uses Port's n8n node to query your software catalog for service context, on-call engineers, recent deployments, runbooks, and past incidents.
- AI severity assessment — OpenAI assesses severity based on Port context and recommends investigation actions.
- Escalation routing — Critical incidents automatically escalate to leadership Slack channel.
- Jira ticket creation — Creates incident ticket with full context, investigation checklist, and recommended actions.
- Team notification — Notifies the team's Slack channel with incident details and resources.

**On Incident Resolved:**
- Port context extraction — Gets post-incident context from Port including stakeholders and documentation spaces.
- MTTR calculation — Calculates mean time to resolution from incident timestamps.
- Post-mortem generation — AI generates a structured post-mortem template with timeline.
- Port AI Agent scheduling — Triggers Port AI Agent to schedule post-mortem meeting, invite stakeholders, and create documentation.
- Resolution notification — Notifies team with MTTR, post-mortem document link, and meeting details.
- Metrics logging — Logs MTTR metrics back to Port for service reliability tracking.

## Setup
- [ ] Register for free on [Port.io](https://www.port.io)
- [ ] Configure Port with services, on-call schedules, and deployment history
- [ ] Set up Port AI agents for post-mortem scheduling
- [ ] Connect PagerDuty webhook for incident events
- [ ] Configure Jira project for incident tickets (use project key 'INC' or customize)
- [ ] Set up Slack channels for alerts (#incidents and #leadership-alerts)
- [ ] Add OpenAI credentials for severity assessment
- [ ] Test with a sample incident event
- [ ] You should be good to go!

## Prerequisites
- You have a Port account and have completed the onboarding process.
- Port's integrations are configured (GitHub, Jira, PagerDuty if available).
- You have a working n8n instance (Cloud or self-hosted) with Port's n8n custom node installed.
- PagerDuty account with webhook capabilities.
- Jira Cloud account with appropriate project permissions.
- Slack workspace with bot permissions to post messages.
- OpenAI API key for severity assessment and post-mortem generation.


⚠️ This template is intended for Self-Hosted instances only.


## 📊 Basic Information

- **Workflow ID:** 11610
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 21
- **Downloads:** 2
- **Created:** 2025/12/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11610)

## 👤 Author

- **Name:** Port IO
- **Username:** @portio

## 🏷️ Categories

- DevOps
- AI RAG

## 🔗 Nodes Used

- **webhook** 
- **switch** 
- **CUSTOM.portIo** (×7)
- **openAi** (×2)
- **if** 
- **slack** (×4)
- **jira** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
