For every release on GitHub this workflow will create an issue on GitLab.

1. Copy workflow to your n8n
2. Fill in missing fields (credentials & repo names)

Based on Cron node to be able to track github repos you're not a member of (as you won't be able to create a webhook).
If you do own the repo, you could replace Cron & GH node with a GitHub Trigger.