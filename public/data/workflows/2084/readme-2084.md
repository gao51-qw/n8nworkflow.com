# Creators hub: Generate dynamic SVG stats with daily updates

> ![Preview](https://live.staticflickr.com/65535/53513730214_d47a8002cf_o.png)
# n8n Creators Template: Creator Profile Stats Updater

This n8n workflow template is designed to automate the process of updating a creator's profile statistics, including total workflows, complex workflows, approved workflows, pending workflows, total nodes, and total views. It utilizes various nodes to fetch data, process it, and update a SVG file hosted on GitHub to reflect the latest stats.

## Workflow Overview

1. **Schedule Trigger**: Triggers the workflow execution at specified intervals.
2. **Config**: Sets up configuration details like creator username, colors for text, icons, border, and card.
3. **Get Workflows**: Fetches workflows associated with the creator from the n8n API.
4. **Workflows Data**: Processes the fetched data to calculate various statistics.
5. **Get User**: Fetches user details from the n8n API.
6. **Download Image**: Downloads the creator's profile image.
7. **Extract From File**: Extracts binary data from the downloaded image file.
8. **SVG**: Generates an SVG file with updated stats and visual representation.
9. **GitHub**: Commits the updated SVG file to the specified GitHub repository.
10. **Final**: Prepares the final data set for further processing or output.
11. **Sticky Note**: Provides a visual note or reminder within the workflow editor.

## Embed & Live Preview

Since it's a .SVG format you can host it anywhere. treat it like normal image so you can embed it with any site, forum, page that support posting images. here's example code for markdown:

```markdown
[![n8n Creator Profile](https://raw.githubusercontent.com/Automations-Project/n8n-templates/main/n8n-team.svg)](https://n8n.io/creators/n8n-team)
```
Here's the result
[![n8n Creator Profile](https://raw.githubusercontent.com/Automations-Project/n8n-templates/main/n8n-team.svg)](https://n8n.io/creators/n8n-team)
Or served through CDN & Cache
[![n8n Creator Profile](https://cdn.statically.io/gh/Automations-Project/n8n-templates/main/n8n-team.svg)](https://n8n.io/creators/n8n-team)

## Setup Instructions

1. **GitHub Credentials**: Ensure you have GitHub credentials set up in your n8n instance to allow the workflow to commit changes to your repository.
3. **Configure Trigger**: Adjust the `Schedule Trigger` node to set the desired execution intervals for the workflow.
4. **Set Configuration**: Customize the `Config` node with your GitHub username and preferred aesthetic options for the SVG.
5. **Deploy Workflow**: Import the workflow into your n8n instance and deploy it.

## Customization Options

* **Text and Icon Colors**: Customize the colors used in the SVG by modifying the respective fields in the `Config` node.
* **Profile Image Size**: Adjust the image size in the `Download Image` node URL if needed.
* **Commit Messages**: Modify the commit messages in the GitHub nodes to suit your version control conventions [I've used $now funaction to include current time in message which will gives allways a diffrent commit value].

## Requirements

* n8n (Self-hosted or Cloud version compatible with 2024 releases and up)
* GitHub account and repository
* Basic understanding of n8n workflow configuration

## Support and Contributions

For support, please refer to the [n8n community forum](https://community.n8n.io) or the [official n8n documentation](https://docs.n8n.io). Contributions to the template can be made you're allowed to reuse this workflow and reshare with edit (like new design/colors etc..) under your name.

## 📊 Basic Information

- **Workflow ID:** 2084
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1670
- **Downloads:** 167
- **Created:** 2024/2/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2084)

## 👤 Author

- **Name:** Nskha
- **Username:** @nskha

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **stickyNote** 
- **set** (×4)
- **httpRequest** (×3)
- **extractFromFile** 
- **scheduleTrigger** 
- **aggregate** 
- **github** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
