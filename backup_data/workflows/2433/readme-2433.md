# Daily podcast summary

> **What this workflow does**
- Downloads the daily top podcasts of a selected genre
- Summarizes the content of each podcast in a few paragraphs
- Sends the summaries and the direct link to each podcast in a formatted email

**Setup**
 1. Create a free API key on Taddy here: https://taddy.org/signup/developers
 2. Input your user number and API key into the `TaddyTopDaily` node in the header parameters X-USER-ID and X-API-KEY respectively.
 3. Create access credentials for your Gmail as described here: https://developers.google.com/workspace/guides/create-credentials. Use the credentials from your *client_secret.json* in the `Gmail` node.
 4. In the `Genre` node, set the genre of podcasts you want a summary for. Valid values are: TECHNOLOGY, NEWS, ARTS, COMEDY, SPORTS, FICTION, etc. Look at api.taddy.org for the full list (they will be displayed in the help docs as PODCASTSERIES_TECHNOLOGY, PODCASTSERIES_NEWS, etc.)
 5. Enter your email address in the `Gmail` node.
 6. Change the schedule time for sending email from `Schedule` to whichever time you want to receive the email.

## Test:
- Hit Test Workflow.
- Check your email for the results.

*That's it! It should take less than 5 minutes total.*

## 📊 Basic Information

- **Workflow ID:** 2433
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 15757
- **Downloads:** 1575
- **Created:** 2024/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2433)

## 👤 Author

- **Name:** Jay Hartley
- **Username:** @jay

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **gmail** 
- **httpRequest** (×6)
- **set** (×2)
- **splitOut** 
- **code** 
- **html** 
- **stickyNote** (×5)
- **openAi** 
- **scheduleTrigger** 
- **wait** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
