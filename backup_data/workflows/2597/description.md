This n8n workflow allows you to reset all user roles in Zammad to specified default roles. It ensures consistency in role management across your Zammad instance.

## Features
- Retrieve all active users from Zammad.
- Update each user's roles to predefined default role IDs.
- Exclude specific users by their IDs from the update process.
- Simple configuration for default roles and excluded users.

## Usage
1. **Import the Workflow**: Upload the provided `.json` file into your n8n instance.
2. **Configure Variables**:
   - `zammad_base_url`: Your Zammad instance URL.
   - `zammad_api_key`: Your Zammad API key.
   - `default_roles`: List of default role IDs to apply to all users.
   - `exclude_zammad_users_by_id`: List of user IDs to exclude from the update.
3. **Run the Workflow**: Execute the workflow to update roles automatically.

## Issues and Suggestions
For issues or suggestions, visit the [GitHub Repository](https://github.com/Sirhexalot/n8n-Update-all-Zammad-Roles-to-default-values).