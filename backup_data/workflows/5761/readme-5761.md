# Gmail to Slack: AI-scored Upwork job alerts with OpenRouter

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Overview
When applying for freelance jobs on Upwork, minutes matter. The first quality application is more often than not the one that's ultimately selected. 

Subscribers to Upwork's Freelancer Plus receive email job alerts, but filters are very limited. As a result, it takes a lot of time to manually go through each email and determine if each job fits your criteria.

This workflow scans your Gmail every few minutes, finds all Upwork job alerts, scores them based on your profile/preferences, and sends a Slack channel message for jobs that are strong potential matches.

## How it works
1. Scans Gmail for Upwork job alerts every few minutes
2. Extracts all available job data from each email
3. Scores the job based on profile information and criteria you provide
4. Sends a Slack notification for all jobs that meet a given score threshold

## Disclaimers
1. This workflow polls Gmail for new messages every 10 minutes. A workflow execution will be used each time, regardless of whether the Gmail scan finds anything. You may want to adjust this frequency based on the amount of workflow executions you want to use.
2. The AI matching process is based only on the information included in the email body (job title, description snippet and metadata). It is against Upwork's Terms of Service to scrape a full job posting. Despite this, the quality of the results in our testing is high for most use cases.

## Required Setup
1. Subscribe to Upwork's Freelancer Plus plan to enable job alerts ($19.99/mo at the time of this posting)
2. Create **Gmail** and **Open Router** (or an LLM provider of your choice) credentials and select them in the Gmail / LLM Model nodes
3. Create a Slack app that has at least the `chat:write.public` and `channels:read` scopes, install it into your workspace, and use your apps **OAuth Token** to create a **Slack API** credential in n8n
4. **IMPORTANT**: In the "Opportuntity Scorer" node, replace the text in between the &lt;my_profile&gt; tags with your freelancer bio. For best results, include as much detail as possible about your skillset, experience, tool familiarity, and job preferences.
5. Update the filter with your notification threshold preference(s) and update the Slack channel to send notifications to in the last Slack node

If you have any questions or feedback about this workflow, or would like me to build custom workflows for your business, email me at n8n@paperjam.agency.



## 📊 Basic Information

- **Workflow ID:** 5761
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 801
- **Downloads:** 80
- **Created:** 2025/7/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5761)

## 👤 Author

- **Name:** James Francis
- **Username:** @paperjam

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **markdown** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **gmail** 
- **gmailTrigger** 
- **slack** 
- **set** 
- **stickyNote** (×4)
- **filter** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
