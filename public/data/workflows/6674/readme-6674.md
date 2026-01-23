# Publish HTML content with GitHub Gist and HTML preview

> ## 📌 Who’s it for

This subworkflow is designed for **developers, AI engineers, or automation builders who generate dynamic HTML content in their workflows** (e.g. reports, dashboards, emails) and want a simple way to host and share it via a clean URL, without spinning up infrastructure or uploading to a CMS.

It’s **especially useful when combined with AI agents that generate HTML** content as part of a larger automated pipeline.

## ⚙️ What it does

This subworkflow:

1. Accepts raw HTML content as input.
2. Creates a new **GitHub Gist** with that content.
3. Returns the shareable Gist URL, which can then be sent via Slack, Telegram, email, etc.

The result is a lightweight, fast, and free way to publish AI-generated HTML (such as reports, articles, or formatted data outputs) to the web.

## 🛠️ How to set it up

1. Add this subworkflow to any parent workflow where HTML is generated.
2. Pass in a string of valid HTML via the `html` input parameter.
3. Configure the GitHub credentials in the HTTP node using an [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `gist` scope.

## ✅ Requirements

- GitHub account and personal access token with `gist` permissions

## 🔧 How to customize

- Change the filename (`report.html`) if your use case needs a different format or extension.
- Add metadata to the Gist (e.g., description, tags).


## 📊 Basic Information

- **Workflow ID:** 6674
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 145
- **Downloads:** 14
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6674)

## 👤 Author

- **Name:** Open Paws
- **Username:** @openpaws

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **httpRequest** 
- **executeWorkflowTrigger** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
