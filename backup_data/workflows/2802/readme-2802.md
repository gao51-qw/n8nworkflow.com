# Automatically import your Meta Threads posts into Notion

> ## Who is this for?
This template is designed for social media managers, content creators, data analysts, and anyone who wants to automatically save and analyze their Meta Threads posts in Notion.

It’s particularly useful for:

- Building a personal archive of your Threads content.
- Training AI models using your social media data.
- Tracking your online presence and engagement.

## What this workflow does
This workflow uses the Meta Threads API to automatically retrieve your posts and import them into a Notion database.

It retrieves the post content, date, and time, and stores them in designated properties within your Notion database.

## Setup
1. Get Threads Access Token and ID: Obtain a long-lived access token and your Threads ID from the Meta Threads developer platform. This token auto-refreshes, ensuring uninterrupted workflow operation.

2. Configure Credentials and Date Range: In the “Set Credentials” node (using edit fields), enter your token and ID. 

Set the since and until parameters in the “Set Date Range” node to specify the post import period.

3. Connect to Notion and Create a Database: Connect to your Notion workspace and create a database with these properties (customize with the “Create Properties” node):

a. Title: Threads post URL (Notion entry title).

b. Threads ID: Unique post ID (prevents duplicate imports).

c. Username: Post author (for future multi-account/source management).

d. Post Date: Original post date.

e. Source (Multi-Select): “Threads” tag (for future multi-platform import and filtering).

f. Created: Import date and time.

g. Import Check (Optional): For use with a separate post-categorization workflow.

![image.png](fileId:917)

## 📊 Basic Information

- **Workflow ID:** 2802
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 2878
- **Downloads:** 287
- **Created:** 2025/1/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2802)

## 👤 Author

- **Name:** Geekaz / Kazen
- **Username:** @geekaz

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** (×6)
- **function** (×3)
- **splitInBatches** 
- **noOp** 
- **code** (×3)
- **notion** (×2)
- **switch** 
- **merge** 
- **stickyNote** (×8)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
