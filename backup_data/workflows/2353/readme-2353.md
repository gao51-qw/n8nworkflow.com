# Send Slack notifications when a new release is published for public GitHub repos

> This workflow checks a configured list of Github repositories daily to see if a new release has been published.

### How it works:
- Workflow has a daily trigger
- `RepoConfig` node is a JSON array that defines a list of repositories to check releases for
- For each of the configured repos it fetches the latest release
- If the release was published within the last 24 hours it is output
- The release is sent as a Slack message showing the repo name, release name and link


### Setup
- Update the JSON in the RepoConfig node to the Github repos you wish to get notifications for
- Setup your Slack connection (or replace with your choice of notification)


## 📊 Basic Information

- **Workflow ID:** 2353
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1770
- **Downloads:** 177
- **Created:** 2024/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2353)

## 👤 Author

- **Name:** Damian Karzon
- **Username:** @dkarzon

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **httpRequest** 
- **scheduleTrigger** 
- **code** 
- **stickyNote** (×2)
- **if** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
