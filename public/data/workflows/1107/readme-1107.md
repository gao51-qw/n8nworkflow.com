# Enrich and manage candidates data in Notion

> This workflow allows you to add candidates’ profile assessments to Notion before an interview.

## Prerequisites
1. Add an input field on your Calendly Invite page where the candidate can enter their LinkedIn URL.
2. Create credentials for your Calendly account. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/calendly/) to learn how to do that.
3. Create credentials for Humantic AI following the steps mentioned [here](https://docs.n8n.io/credentials/humanticAi).
4. Create a page on Notion similar to this [page](https://www.notion.so/n8n/464ee4ca7a5e4252ab21ea018d7450c8?v=d640406f12f24f9ea3509ff45b81a8bb).
5. Create credentials for the Notion node by following the steps in the [documentation](https://docs.n8n.io/credentials/notion/).

![workflow-screenshot](fileId:502)

**Calendly Trigger node:** This node will trigger the workflow when an interview gets scheduled. Make sure to add a field to collect the candidates' LinkedIn URL on your invite page.

**Humantic AI:** This node uses the LinkedIn URL received by the previous node to create a candidate profile in Humantic AI.

**Humantic AI1:** This node will analyze the candidates' profile.


**Notion node:** This node will create a new page in Notion using the information from the previous node.

## 📊 Basic Information

- **Workflow ID:** 1107
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 2005
- **Downloads:** 200
- **Created:** 2021/6/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1107)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **notion** 
- **humanticAi** (×2)
- **calendlyTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
