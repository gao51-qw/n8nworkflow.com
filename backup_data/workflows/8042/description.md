## How it works
- Triggers manually or on schedule (03:00 daily by default)  
- Fetches workflows tagged `backup-workflows` via n8n API  
- Normalizes workflow names and applies `[client: NAME]` tag convention  
- Prepares JSON in the same structure as an n8n UI export  
- Checks GitLab repository:  
  - Create new file if missing  
  - Update file if content differs  
  - Skip if unchanged  
- Logs results with recap (created, updated, unchanged, total)  

## Set up steps
- Configure your GitLab credentials in n8n  
- Create a repository and branch for workflow backups  
- Set global variables (owner, project, branch, backup path)  
- Tag workflows to include with `backup-workflows`  
- Run manually once to test, then enable the schedule  