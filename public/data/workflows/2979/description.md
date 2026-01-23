# 🗂️ Bulk File Upload to Google Drive with Folder Management

## How it works
1. User submits files and target folder name via form
2. Workflow checks if folder exists in Drive
3. Creates folder if needed or uses existing one
4. Processes and uploads all files maintaining structure

## Set up steps (Est. 10-15 mins)
1. Set up Google Drive credentials in n8n
2. Replace parent folder ID in search query with your Drive folder ID
3. Configure form node with:
   - Multiple file upload field
   - Folder name text field
4. Test workflow with sample files

💡 Detailed configuration steps and patterns are documented in sticky notes within the workflow.

Perfect for:
- Bulk file organization
- Automated Drive folder management
- File upload automation
- Maintaining consistent file structures
