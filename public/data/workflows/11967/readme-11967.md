# Review GitHub pull requests and label them using OpenAI GPT-4o-mini and Slack

> ## Automate GitHub pull request reviews and labeling using OpenAI


This workflow automates the first line of code review for your development team. By leveraging OpenAI, it analyzes pull request diffs, assigns descriptive labels based on change size and category, posts summary comments back to GitHub, and keeps your team informed via Slack.


## Who’s it for?


- **DevOps Engineers** looking to standardize PR triage.
- **Team Leads** who want to provide instant feedback to developers.
- **Open Source Maintainers** managing high volumes of contributions.
- **Development Teams** aiming to reduce manual overhead in code reviews.


## How it works / What it does


1.  **Trigger:** The workflow starts via a **GitHub PR Webhook** when a pull request is opened or synchronized.
2.  **Data Gathering:** It extracts PR metadata and uses the **GitHub Node** and **HTTP Request Node** to fetch a list of changed files and the raw code diff.
3.  **Analysis:** A **Code Node** categorizes the changes (e.g., size labels like `size/S` or `size/L`).
4.  **AI Review:** The **AI Agent** (powered by **OpenAI**) analyzes the code diff to generate a quality score, summary, and specific strengths/concerns.
5.  **Action:**
    - The **GitHub Node** updates the PR with relevant labels.
    - An automated review comment is posted to the PR discussion.
    - A summary is sent to a **Slack** channel.
6.  **Reporting:** All review data is logged into **Google Sheets** for long-term tracking and analytics.


## Requirements


- **GitHub Account:** OAuth credentials with repository access.
- **OpenAI API Key:** For the Chat Model (recommends GPT-4o-mini or higher).
- **Slack Workspace:** A bot token to post to the `#code-reviews` channel.
- **Google Sheets:** A spreadsheet with headers matching the PR metadata.


## How to set up


1.  **GitHub Webhook:** Configure your GitHub repository to send "Pull request" events to the Webhook URL provided by this workflow.
2.  **Credentials:** Authenticate your GitHub, OpenAI, Slack, and Google Sheets accounts in their respective nodes.
3.  **Google Sheets:** Select your target Spreadsheet and Sheet name in the "Log to Sheets" node.
4.  **Slack:** Ensure the Slack bot is invited to the channel specified in the "Notify Slack" node.


## How to customize


- **AI Prompt:** Modify the "System Message" in the **AI Code Reviewer** node to reflect your team's specific coding standards or preferred review tone.
- **Labeling Logic:** Edit the "Analyze File Changes" node to add custom labels based on file paths (e.g., `frontend`, `documentation`).
- **Review Logic:** Add an **If Node** after the AI analysis to only auto-approve PRs with a quality score higher than 90.

## 📊 Basic Information

- **Workflow ID:** 11967
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 32
- **Downloads:** 3
- **Created:** 2025/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11967)

## 👤 Author

- **Name:** yu-ya
- **Username:** @yyuyayamanaka

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×6)
- **webhook** 
- **filter** 
- **code** (×3)
- **github** (×3)
- **httpRequest** 
- **merge** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **slack** 
- **aggregate** 
- **googleSheets** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
