This n8n workflow allows you to update user roles in Zammad based on data from an Excel file. The workflow automates role assignments, ensuring efficient and consistent updates.

## Features
- **Excel Integration**: Import user data from an Excel file containing emails and role assignments.
- **Dynamic Updates**: Match Zammad users by email and update their roles.
- **Error Handling**: Continue workflow execution even if some updates fail.
- **Customizable Variables**: Configure Zammad API URL, API key, and Excel file URL.

## Usage
1. **Import the Workflow**: Upload the provided `.json` file into your n8n instance.
2. **Set Variables**:
   - `zammad_base_url`: Your Zammad instance URL.
   - `excel_source_url`: URL of the Excel file containing user data.
3. **Authentication for Zammad**
- Create in the Node "Find Zammad User by email" and "Update User Roles" a Header Auth Authentication
- **Name**: Authorization
- **Value**: Bearer &lt;put here your zammad api token&gt;
4. **Run the Workflow**: Execute the workflow to update user roles based on the Excel data.

## Issues and Suggestions
For issues or suggestions, visit the [GitHub Repository](https://github.com/Sirhexalot/Update-n8n-Zammad-Roles-by-Excel).