# Daily Reddit posts digest to Gmail

> **This n8n workflow automatically scrapes the latest posts from a specified Reddit subreddit every day at 9 AM and sends a neatly formatted HTML email summary to your inbox. It highlights new community posts, including post details like title, author, flair, upvotes, comments, and a brief preview — making it ideal for content curators, community managers, or Reddit enthusiasts who want daily updates.**

## How It Works
Trigger: The schedule node runs the workflow once every 24 hours at 9:00 AM.

Reddit Scrape: A request is made to the desired subreddit (defined in the HTTP Request node) to pull post data.

Filter & Format: JavaScript code filters posts created in the last 24 hours and transforms the data into structured summaries.

Email Composition: A dynamic HTML email is generated summarizing the post details. If no new posts are found, a fallback message is displayed.

Email Delivery: Gmail node sends the email with subject, content, and timestamp.

## Use Cases
✅ Stay informed about the latest subreddit activity.

✅ Automate daily newsletters for Reddit topics.

✅ Monitor niche communities for engagement trends.

## Requirements
Reddit subreddit link (set in the HTTP Request node).

Gmail account with OAuth2 credentials set up in n8n.

User-Agent string customized for your Reddit scraping.

Adjust schedule as per your preferred timezone.

Google Sheet Setup (Not required for this workflow)
No sheet integration is involved here.

## Customizing the Workflow
You can personalize this workflow by:

Replacing the User-Agent value with a meaningful identifier to avoid Reddit rate-limiting.

Updating the subreddit URL in the HTTP Request node.

Changing the Gmail recipient address in the Send Gmail node.

Tweaking the HTML email styling in the Prepare Email Content node.

Adjusting schedule time/frequency in the Trigger node.



## 📊 Basic Information

- **Workflow ID:** 5804
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 283
- **Downloads:** 28
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5804)

## 👤 Author

- **Name:** Agentick AI
- **Username:** @arpanjain29

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×2)
- **gmail** 
- **stickyNote** (×2)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
