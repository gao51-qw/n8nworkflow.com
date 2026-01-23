## Daily n8n Workflow Backup
Automatically backs up all workflows to Google Drive daily.

### How it works
1. Triggers daily at 11 PM (or manually on demand)
2. Creates a timestamped backup folder in Google Drive
3. Fetches all workflows from your n8n instance
4. Converts each workflow to a JSON file
5. Uploads files to the backup folder
6. Automatically deletes old backup folders to save storage

### Setup steps
1. Ensure your n8n instance has API access enabled
2. Connect your Google Drive account (OAuth2)
3. Create a Google Drive folder for backups and copy its **Folder ID**
4. **Important:** Open the 'Cleanup Old Backups' node and paste that Folder ID into the code