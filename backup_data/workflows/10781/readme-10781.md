# Scheduled auto-replies to targeted tweets using X (Twitter) API

> ## What it does

This workflow automates your X (Twitter) engagement by acting as an auto-responder. It runs on a schedule, searches for new tweets based on a specific query (like a hashtag, keyword, or mention), and automatically sends a reply.

## How it works

1.  **Schedule Trigger:** Runs the workflow automatically at your chosen interval (e.g., every 15 minutes).
2.  **Search Tweets (HTTP):** Uses the X (Twitter) API v2 to find recent tweets matching your search query.
3.  **Error & Success Handling:**
    * If the search is successful, it proceeds to prepare a reply.
    * It includes error handling for common issues like **Rate Limits** or if **No Tweets** are found.
4.  **Send Reply (HTTP):** Posts the reply to the tweet.
5.  **Duplicate Check:** Includes logic to check if a reply has already been sent to avoid spamming.

## How to set up

1.  **Credentials:** You must have an X (Twitter) Developer Account (v2). Add your credentials to n8n.
2.  **Search Node:** In the "Search Tweets" node, update the `query` parameter with your own search terms (e.g., `#n8n` or `from:username`).
3.  **Reply Node:** In the "Prepare Reply" node, customize the text you want to send.
4.  **Activate:** Set your desired schedule in the "Schedule Trigger" node and activate the workflow.

## Requirements

* An active n8n instance.
* An X (Twitter) Developer Account with Elevated (v2) access.
* X (Twitter) API v2 credentials.

## How to customize the workflow

* **Change Schedule:** Modify the "Schedule Trigger" to run more or less frequently.
* **Dynamic Replies:** Enhance the "Prepare Reply" node with an AI node (like OpenAI) to generate unique replies instead of static text.
* **Add Filters:** Add an "IF" node after "Search Tweets" to filter out tweets you don't want to reply to.

## 📊 Basic Information

- **Workflow ID:** 10781
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 124
- **Downloads:** 12
- **Created:** 2025/11/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10781)

## 👤 Author

- **Name:** Masaki Go
- **Username:** @pippi

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** (×6)
- **if** (×4)
- **httpRequest** (×2)
- **code** (×2)
- **scheduleTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
