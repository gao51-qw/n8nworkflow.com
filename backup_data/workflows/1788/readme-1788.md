# Add a new lead to Pipedrive once GitHub repo is forked

> This workflow automatically adds a new lead to Pipedrive once someone forks your GitHub repository. 

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)
- GitHub account and [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/)

## How it works
1. GitHub Trigger node starts the workflow once someone forks your GitHub repository.
2. HTTP Request node gets user's data from GitHub and sends it further.
3. Pipedrive node searches forkee's data in Pipedrive by email.
4. IF node decides whether to create a new person in Pipedrive in case contact doesn't exist yet or update an existing contact in Pipedrive.
5. In case there's no contact existing yet, the Pipedrive node creates a lead and adds a note with GitHub URL.


## 📊 Basic Information

- **Workflow ID:** 1788
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1052
- **Downloads:** 105
- **Created:** 2022/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1788)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **if** 
- **set** 
- **pipedrive** (×4)
- **githubTrigger** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
