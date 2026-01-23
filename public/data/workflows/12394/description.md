# GitLab Wrapped Generator

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