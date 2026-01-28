# Add a note to Pipedrive's contact once PR is added on GitHub

> This workflow automatically adds a note of the PR from GitHub to the Pipedrive contact if their GitHub email matches a Person in Pipedrive.

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)
- GitHub account and [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/)

## How it works
1. GitHub Trigger node activates the workflow when a GitHub user adds a PR.
2. HTTP Request node gets the user's data and sends it further.
3. Pipedrive node searches the same email that GitHub user has in Pipedrive.
4. IF node checks whether a person with the same email exists in Pipedrive.
5. In case there's such a person in Pipedrive, the Pipedrive node creates a note within the person's profile.


## 📊 Basic Information

- **Workflow ID:** 1789
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1034
- **Downloads:** 103
- **Created:** 2022/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1789)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **httpRequest** 
- **pipedrive** (×2)
- **if** 
- **noOp** 
- **githubTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
