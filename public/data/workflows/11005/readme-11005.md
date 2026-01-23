# Automatic email notifications for n8n version releases with Gmail

> ## 📢 Monitor n8n releases and get notifications for new versions 🆕

This workflow automatically monitors n8n’s release channels (latest and beta) and sends you email notifications whenever a new version is published. It also reads the version of your current n8n instance, allowing you to integrate automatic updates and ensure you never miss a release.

### Who is this for
This workflow is designed for n8n users who want to stay informed and up to date with new releases and features without manually checking for updates, especially those managing their own instances who need to plan upgrades and review release notes.

### How it works
The workflow performs the following steps:
- **Fetches version information from the npm registry** (latest and beta releases)
- **Identifies only new versions** by deduplication
- **Retrieves release notes from GitHub** for any newly detected version
- **Converts Markdown to HTML** for email template formatting
- **Sends a styled email notification** including the release name, version tag, your current version, and the complete release notes

### Setup
- Configure your n8n instance URL (Set `my_n8n_url`) to detect your current version (optional — can be left blank)
- Connect and authorize the Gmail account used to send emails
- Update the recipient email address in the Gmail node

### Requirements
- A Gmail account for sending emails

### Customization tips
- Adjust the schedule trigger if hourly checks are too frequent
- Modify the release channel (e.g., “latest” or “beta”) if you want to track a different tag
- Change the npm registry link if you want to monitor a different package
- Customize the email template/styling in the Gmail node
- Add additional notification channels (Slack, Discord, etc.) alongside or instead of email
- Extend this workflow to automatically update your n8n instance when a new release becomes available

### Need help?
If you're facing any issues using this workflow, [join the community discussion on the n8n forum.](https://community.n8n.io/t/monitor-n8n-releases-and-get-notifications-for-new-versions/225265)


## 📊 Basic Information

- **Workflow ID:** 11005
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 136
- **Downloads:** 13
- **Created:** 2025/11/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11005)

## 👤 Author

- **Name:** Anan
- **Username:** @mohamed3nan

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **markdown** 
- **removeDuplicates** (×2)
- **set** (×4)
- **stickyNote** (×7)
- **merge** (×2)
- **httpRequest** (×4)
- **gmail** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
