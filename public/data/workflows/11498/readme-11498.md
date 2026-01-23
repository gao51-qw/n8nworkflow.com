# Validate and score email addresses with ZeroBounce AI

> ## ZeroBounce Email Validation and Scoring

This template uses the [ZeroBounce](https://www.zerobounce.net) node to validate and score email addresses. It is designed to first check if an email is deliverable and then uses A.I. Scoring to assess the sender's deliverability confidence.

This is an example template to demonstrate ways to use the ZeroBounce node and how to manipulate the data with core n8n nodes.

A ZeroBounce API key is needed to use this template. Generate one [here](https://www.zerobounce.net/members/API).


![ZeroBounce Logo](https://raw.githubusercontent.com/zerobounce/n8n-nodes-zerobounce/main/icons/zerobounce-logo.svg)


### 1. Email Validation
The **`Validate email`** node sends the email address to the ZeroBounce API to determine its status (e.g., **`'valid', 'invalid', 'spam trap'`**).
* **Function:** Checks the email address against ZeroBounce's Email Validation API


### 2. A.I. Scoring
For emails confirmed as valid, the workflow proceeds to the **`Score email`** node.
* **Function:** Applies ZeroBounce's proprietary A.I. model to assess the quality of the email, returning a numerical score (**0 to 10**).


### 3. Output
The workflow concludes with the **`Filter by score` Switch Node**, which uses the ZeroBounce score to categorize the email into three confidence tiers:
* **High Score:** Indicates high confidence in deliverability and is ready for immediate campaigns.
* **Medium Score:** Suggests moderate risk; these might be suitable for re-engagement or specialized campaigns.
* **Low Score:** Indicates high risk, even if the status was technically `valid`. These should be suppressed to protect sender reputation.

## 📊 Basic Information

- **Workflow ID:** 11498
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 44
- **Downloads:** 4
- **Created:** 2025/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11498)

## 👤 Author

- **Name:** ZeroBounce
- **Username:** @zerobounce

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×9)
- **@zerobounce/n8n-nodes-zerobounce.zeroBounce** (×4)
- **noOp** (×5)
- **merge** (×3)
- **switch** (×3)
- **splitOut** 
- **set** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
