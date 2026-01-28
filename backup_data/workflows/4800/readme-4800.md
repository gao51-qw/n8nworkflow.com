# Save Mastodon bookmarks to Raindrop automatically

> 
&gt; 🛠️ Note: This workflow uses a custom Mastodon API request. Ensure your server supports bookmark access, and that your access token has the right permissions. OAuth or token-based credentials must be configured.

🧑‍💼 Who is this for?

This workflow is ideal for digital researchers, social media users, and knowledge workers who want to automatically archive Mastodon bookmarks into their Raindrop.io collection for future reference and tagging.

🔧 What problem is this solving?

Mastodon users often bookmark posts they want to read or save for later, but there's no native integration to archive them outside the app. This workflow solves that by syncing bookmarked posts from Mastodon to Raindrop, making them more accessible, organized, and searchable long-term.

⚙️ What this workflow does

- Triggers on schedule (or manually).
- Tracks the latest fetched min_id using workflow static data to avoid duplicates.
- Sends an HTTP GET request to the Mastodon bookmarks API, using bearer token authentication.
- Validates and processes the bookmarks if new entries exist.
- Parses pagination metadata (e.g. min_id) from response headers.
- Splits response array to handle individual bookmarks.
- Filters out entries with missing data.
- Saves each post to Raindrop.io, using its title and URL. Use the card URL if exist.
- Updates the min_id to remember where it left off.

🚀 Setup

- Create a Mastodon access token with access to bookmarks.
- Add a credential in n8n of type HTTP Bearer Auth with your token.
- Create and connect a Raindrop OAuth2 credential.
- Replace {VOTRE SERVEUR MASTODON} with your Mastodon server's base URL.
- (Optional) Adjust the scheduling interval under the "Schedule Trigger" node.
- Make sure the Raindrop collection ID is correct or leave it as default (-1) as this is the index for the ``Unsorted`` collection.

🧪 How to customize this workflow

- To save to a specific Raindrop collection, change the collectionId in both Raindrop nodes.
- You can extend the Code node to pull additional metadata like author, hashtags, or content excerpts.
- Add an Email or Slack node after Raindrop to notify you of saved bookmarks.

## 📊 Basic Information

- **Workflow ID:** 4800
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 179
- **Downloads:** 17
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4800)

## 👤 Author

- **Name:** Aymeric Besset
- **Username:** @valkann

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **code** (×3)
- **httpRequest** 
- **if** (×2)
- **splitOut** 
- **raindrop** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
