# Orchestrate security vulnerability remediation with Port, OpenAI, Jira and Slack

> Complete security workflow from vulnerability detection to automated remediation, with severity-based routing and full organizational context from Port's catalog. This template provides end-to-end lifecycle management including automatic Jira ticket creation with appropriate priority, AI-powered remediation planning, and Claude Code-triggered fixes for critical vulnerabilities.

The full guide is available [here](https://docs.port.io/guides/all/remediate-vulnerability-with-n8n-and-port/).

## How it works
The n8n workflow orchestrates the following steps:

- **Webhook trigger**: Receives vulnerability alerts from security scanners (Snyk, Wiz, SonarQube, etc.) via POST request.
- **Port context enrichment**: Uses Port's n8n node to query your software catalog for service metadata, ownership, environment, SLA requirements, and dependencies related to the vulnerability.
- **AI remediation planning**: OpenAI analyzes the vulnerability with Port context and generates a remediation plan, determining if automated fixing is possible.
- **Severity-based routing**: Routes vulnerabilities through different paths based on severity level:
  - **Critical**: Jira ticket (Highest priority) → Check if auto-fixable → Trigger Claude Code fix → Slack alert with fix status
  - **High**: Jira ticket (High priority) → Slack notification to team channel
  - **Medium/Low**: Jira ticket only for tracking
- **Jira integration**: Creates tickets with full context including vulnerability details, affected service information from Port, and AI-generated remediation steps.
- **Claude Code remediation**: For auto-fixable critical vulnerabilities, triggers Claude Code via Port action to create a pull request with the security patch, referencing the Jira ticket.
- **Slack notifications**: Sends contextual alerts to the appropriate team channel (retrieved from Port) with Jira ticket reference and remediation status.

## Prerequisites
- You have a Port account and have completed the onboarding process.
- Services and repositories are cataloged in Port with ownership information.
- Your security scanner (Snyk, Wiz, SonarQube) can send webhooks.
- You have a working n8n instance (Cloud or self-hosted) with Port's n8n custom node installed.
- Jira Cloud account with appropriate project permissions.
- Slack workspace with bot permissions to post messages.
- OpenAI API key for remediation planning.

## Setup
- Register for free on [Port.io](https://www.port.io) if you haven't already.
- Create the Context Retriever Agent in Port following the [guide](https://docs.port.io/guides/all/remediate-vulnerability-with-n8n-and-port/).
- Import the workflow and configure credentials (Port, Jira, Slack, OpenAI, Bearer Auth).
- Select your Jira project in each Jira node (Critical, High, Medium/Low).
- Update `default-organization/repository` with your default repository for Claude Code fixes.
- Point your security scanner webhook to the workflow URL.
- Test with a sample vulnerability payload.

⚠️ This template is intended for Self-Hosted instances only.

## 📊 Basic Information

- **Workflow ID:** 11726
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 5
- **Downloads:** 0
- **Created:** 2025/12/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11726)

## 👤 Author

- **Name:** Port IO
- **Username:** @portio

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **CUSTOM.portApiAi** 
- **openAi** 
- **switch** 
- **jira** (×3)
- **if** 
- **httpRequest** 
- **slack** (×3)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
