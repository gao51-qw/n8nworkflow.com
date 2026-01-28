# Auto-moderate Instagram comments with Perspective API & Slack alerts

> Automatically detects and hides hate speech/toxic comments, alerts your team, and logs flagged content for review.

### Workflow Overview
- **Trigger**: A Schedule node runs every 15 minutes to poll for new comments (Instagram doesn't natively push notifications easily, so polling is used). You could replace this with a Webhook if you set up Instagram webhooks via Graph API.
- **Scan Comments**: Uses Instagram Graph API (via HTTP Request) to fetch recent posts and their comments. Assumes you have an Instagram Business Account and a valid access token (from Facebook Developer Portal).
- **Detect Toxicity**: For each comment, it sends the text to Google's Perspective API (a free toxicity detection API; sign up at https://perspectiveapi.com/ for an API key). Threshold for "toxic" is set to &gt;0.7 toxicity score (configurable).
- **Auto-Hide Offensive Ones**: If toxic, uses Instagram API to hide the comment.
- **Alert Team**: Sends a Slack notification (or email; configurable) with details.
- **Store Evidence**: Appends the toxic comment details (text, user, score, timestamp) to a Google Sheet for auditing.
- **Error Handling**: Basic error node to notify if API calls fail.
- **Business Value Alignment**: This automates protection, reducing manual moderation and building trust.

### Prerequisites:
  - n8n installed (self-hosted or cloud).
  - Instagram Graph API access token (set in n8n credentials or as environment variable).
  - Perspective API key (free tier available).
  - Slack webhook or email credentials.
  - Google Sheets API credentials (for storage).

### How to Import
1. In n8n, go to the workflows list.
2. Click "Import from JSON" (or paste into a new workflow).
3. Update placeholders:
   - Replace `YOUR_INSTAGRAM_ACCESS_TOKEN` with your token.
   - Replace `YOUR_PERSPECTIVE_API_KEY` with your key.
   - Set up credentials for HTTP Request (Instagram), Slack, and Google Sheets.
   - Adjust `YOUR_INSTAGRAM_BUSINESS_ACCOUNT_ID` and `YOUR_MEDIA_ID` (or make it dynamic).
4. Test and activate.

If you encounter issues (e.g., API rate limits), adjust the schedule or add waits.

### Notes on Customization
- **Looping**: The "Loop Over Comments" uses SplitInBatches to process comments one by one, avoiding API rate limits.
- **Toxicity API**: I used Perspective API as it's reliable and free for low volume. If you prefer another (e.g., Hugging Face), swap the HTTP Request body.
- **Instagram API**: This fetches comments for the first recent post (simplified). To handle multiple posts, add another loop.
- **Alerts**: Slack is used; change to Email node if preferred.
- **Storage**: Google Sheets for simplicity; could be swapped for MongoDB or Airtable.
- **Sticky Notes**: Three notes explain phases – they won't affect execution but help in the UI.
- **Testing**: Start with test data. Instagram API requires app review for production.



## 📊 Basic Information

- **Workflow ID:** 10319
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 162
- **Downloads:** 16
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10319)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Social Media
- AI Summarization

## 🔗 Nodes Used

- **cron** 
- **httpRequest** (×4)
- **if** 
- **slack** 
- **googleSheets** 
- **set** 
- **splitInBatches** 
- **webhook** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
