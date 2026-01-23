This workflow restores all n8n instance workflows from GitHub backups using the n8n API node. It complements the [Backup Your Workflows to GitHub](https://n8n.io/workflows/2652-backup-your-workflows-to-github/) template by allowing users to seamlessly restore previously saved workflows.

## How It Works
The workflow fetches workflows stored in a GitHub repository and imports them into your n8n instance. 

## Setup Instructions
To configure the workflow, update the `Globals` node with the following values:

- **repo.owner** – Your GitHub username
- **repo.name** – The name of your GitHub repository storing the workflows
- **repo.path** – The folder path within the repository where workflows are stored

For example, if your GitHub username is `john-doe`, your repository is named `n8n-backups`, and workflows are stored in a `workflows/` folder, you would set:

- `repo.owner` → `john-doe`
- `repo.name` → `n8n-backups`
- `repo.path` → `workflows/`

### Required Credentials
- **GitHub API** – Access to your repository  
- **n8n API** – To import workflows into your n8n instance  

## Who Is This For?
This template is ideal for users who want to restore their workflows from GitHub backups, ensuring easy migration and recovery in case of data loss.

---

Check out my other templates:  
👉 [My n8n Templates](https://n8n.io/creators/bangank36/)
