# Automate LinkedIn comment replies with GPT-3.5 & track in Google Sheets

> ## How it works
This workflow automates LinkedIn community engagement by monitoring post comments, filtering new ones, generating AI-powered replies, and posting responses directly on LinkedIn. It also logs all interactions into Google Sheets for tracking and analytics.

## Step-by-step

**Trigger & Fetch**

- A Schedule Trigger runs the workflow every 10 minutes.

- The workflow fetches the latest comments on a specific LinkedIn post using LinkedIn’s API with token-based authentication.

**Filter for New Comments**

- Retrieves the timestamp of the last processed comment from Google Sheets.

- Filters out previously handled comments, ensuring only fresh interactions are processed.

**AI-Powered Reply Generation**

- Sends the new comment to OpenAI GPT-3.5 Turbo with a structured prompt.

- AI generates a professional, concise, and engaging LinkedIn-appropriate reply (max 2–3 sentences).

**Post Back to LinkedIn**

- Automatically posts the AI-generated reply under the original comment thread.

- Maintains consistent formatting and actor identity.

**Data Logging**

- Appends the original comment, AI response, and metadata into Google Sheets.

- Enables tracking, review, and future engagement analysis.

## Benefits

- Saves time by automating LinkedIn comment replies.

- Ensures responses are timely, professional, and on-brand.

- Maintains authentic engagement without manual effort.

- Prevents duplicate replies by filtering with timestamps.

- Creates a structured log in Google Sheets for auditing and analytics.

## 📊 Basic Information

- **Workflow ID:** 7806
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 817
- **Downloads:** 81
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7806)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **set** 
- **if** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×5)
- **scheduleTrigger** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
