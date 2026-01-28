# Generate your GitLab year-in-review wrapped report automatically

> # GitLab Wrapped Generator

  ✨ **Automatically generate your personalized GitLab Wrapped**, a stunning year-in-review of your contributions, activity, and stats.

  Powered by [gitlab-wrapped](https://gitlab.com/michaelangelorivera/gitlab-wrapped) by [@michaelangelorivera](https://gitlab.com/michaelangelorivera).


  ## 🚀 How it works

 1. **Forks** the gitlab-wrapped project (or finds your existing fork)
  2. **Configures** CI/CD environment variables
  3. **Triggers** the GitLab pipeline
  4. **Monitors** until completion (polls every 2 minutes)

  🎉 **Your wrapped will be available at:**
  `https://YOUR-USERNAME.gitlab.io/gitlab-wrapped`

  ---

  ## ⚙️ Setup

  1. **Create a GitLab PAT** with these scopes:
     - `api`
     - `read_repository`
     - `write_repository`

  2. **Fill out the form:**
     - Your GitLab username
     - Your PAT token
     - GitLab instance URL *(defaults to gitlab.com)*
     - Year *(defaults to 2025)*

  3. **Submit & relax!** ☕
     The workflow handles everything automatically.

  ---


  💡 Works with **GitLab.com** and **self-hosted instances**

  📅 Generate wrapped reports for **any past year**

## 📊 Basic Information

- **Workflow ID:** 12394
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 91
- **Downloads:** 9
- **Created:** 2026/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12394)

## 👤 Author

- **Name:** Jannik Lehmann
- **Username:** @jnnklhmnn

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **wait** 
- **httpRequest** (×8)
- **if** (×2)
- **merge** 
- **code** 
- **noOp** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
