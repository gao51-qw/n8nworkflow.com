# Automated repository migration from GitLab groups to Gitea organizations

> **This flow migrates all repositories of a Gitlab group to a Gitea organization by triggering Gitea's integrated migration tool.**

Set up steps:
1. Copy this workflow
2. Create an empty Gitea-organization you want to migrate to. (The flow will skip all projects which have the same name of possibly already existing repos in the target Gitea organization.)
3. Create an access token in your Gitea (https://gitea.example.com/user/settings/applications), set it up as a Header Auth with it's name being "Authorization" and value being "token [your-gitea-token]" and select it for the "Gitea:"-named nodes.
4. Create a Personal access token in Gitlab (https://gitlab.com/-/user_settings/personal_access_tokens), create a Header Auth with name "PRIVATE-TOKEN" and value "[your-gitlab-token]" and select it for the "Gitlab:"-named node. Also keep the value of your Gitlab-token available for step 5.
5. Edit the Set node right after the trigger node and set paste your personal access token in there as well as the names of the Gitlab source group and the Gitea target organization. Use the url-friendly version of their names by simply copy&pasting them from their URLs.
6. Run the flow and enjoy the show :)

## 📊 Basic Information

- **Workflow ID:** 4947
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 136
- **Downloads:** 13
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4947)

## 👤 Author

- **Name:** nepomuc
- **Username:** @nepomuc

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **switch** 
- **stopAndError** 
- **set** 
- **httpRequest** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
