# Rss feed news processing and distribution workflow

> ### Who is this for?

This workflow is designed for professionals and teams who need to monitor multiple RSS feeds, filter the latest content, and distribute actionable updates as a Trello comment. Ideal for content managers, marketers, and team leads managing news or content pipelines.

### What problem is this workflow solving?

Manually monitoring RSS feeds and keeping track of the latest content can be time-consuming. This workflow automates the aggregation, filtering, and distribution of news, ensuring that only relevant and timely updates are shared with your team or audience.

### What this workflow does:
1. Aggregates RSS Feeds: Pulls data from up to three RSS feeds simultaneously.
2. Filters Content: Filters articles based on their publication date (default: last 7 days).
3. Organizes and Sorts: Sorts filtered articles by date for clarity.
4. Formats Updates: Transforms news items into Markdown format for better readability.
5. Publishes and Notifies: Posts comments to Trello cards and sends an email to a moderator to check the comment.

### Setup:
1. Connect your RSS feeds by configuring the RSS Read nodes.
2. Link your Trello and Gmail accounts for seamless integration.
3. Adjust the schedule trigger to set how often the workflow should run (e.g., daily, weekly).
4. Test the workflow to ensure all connections and configurations are correct.

### How to customize this workflow to your needs:
- Change the Number of RSS Feeds: Add or remove RSS Read nodes and update the merge configuration accordingly.
- Adjust the Date Filter: Modify the date logic in the “Filter by date” node to include more or fewer days.
- Limit the Number of Articles: Adjust the limit in the “Limit news to x” node.
- Custom Formatting: Update the Transform node to format the news items differently.
- Alternative Notifications: Replace Trello and Gmail with other integrations, such as Slack or Microsoft Teams.

This workflow ensures your team stays informed with minimal effort and delivers content updates in an organized and professional manner.

## 📊 Basic Information

- **Workflow ID:** 2785
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 13655
- **Downloads:** 1365
- **Created:** 2025/1/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2785)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **scheduleTrigger** 
- **rssFeedRead** (×3)
- **set** 
- **filter** 
- **sort** 
- **limit** 
- **code** 
- **trello** 
- **gmail** 
- **merge** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
