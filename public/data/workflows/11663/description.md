### Overview
Stop manually creating folder structures for every new client or project. This workflow provides a simple form where users enter a name, and automatically duplicates your template folder structure in Google Drive—replacing all placeholders with the submitted name.

### What This Workflow Does
1. Displays a form where users enter a name (client, project, event, etc.)
2. Creates a new main folder in Google Drive
3. Calls Google Apps Script to duplicate your entire template structure
4. Replaces all `{{NAME}}` placeholders in files and folder names

### Key Features
- **Simple form interface** — No technical knowledge required to use
- **Recursive duplication** — Copies all subfolders and files
- **Smart placeholders** — Automatically replaces `{{NAME}}` everywhere
- **Production-ready** — Works immediately after setup

### Prerequisites
- Google Drive account with OAuth2 credentials in n8n
- Google Apps Script deployment (code below)
- Template folder in Drive using `{{NAME}}` as placeholder

### Setup

**Step 1: Create your template folder**
```
📁 {{NAME}} - Project Files
├── 📁 01. {{NAME}} - Documents
├── 📁 02. {{NAME}} - Assets
├── 📁 03. Deliverables
└── 📄 {{NAME}} - Brief.gdoc
```

**Step 2: Deploy Apps Script**
1. Go to [script.google.com](https://script.google.com)
2. Create new project → Paste code below
3. Deploy → New deployment → Web app
4. Execute as: `Me` | Access: `Anyone`
5. Copy the deployment URL

**Step 3: Configure workflow**
Replace these placeholders:
- `DESTINATION_PARENT_FOLDER_ID` — Where new folders are created
- `YOUR_APPS_SCRIPT_URL` — URL from Step 2
- `YOUR_TEMPLATE_FOLDER_ID` — Folder to duplicate

**Step 4: Test**
Activate workflow → Open form URL → Submit a name → Check Drive!

---

### Apps Script Code

```javascript
function doPost(e) {
  try {
    var params = e.parameter;
    var templateFolderId = params.templateFolderId;
    var name = params.name;
    var destinationFolderId = params.destinationFolderId;
    
    if (!templateFolderId || !name) {
      return jsonResponse({
        success: false,
        error: 'Missing required parameters: templateFolderId and name are required'
      });
    }
    
    var templateFolder = DriveApp.getFolderById(templateFolderId);
    
    if (destinationFolderId) {
      var destinationFolder = DriveApp.getFolderById(destinationFolderId);
      copyContentsRecursively(templateFolder, destinationFolder, name);
      
      return jsonResponse({
        success: true,
        id: destinationFolder.getId(),
        url: destinationFolder.getUrl(),
        name: destinationFolder.getName(),
        mode: 'copied_to_existing',
        timestamp: new Date().toISOString()
      });
    } else {
      var parentFolder = templateFolder.getParents().next();
      var newFolderName = replacePlaceholders(templateFolder.getName(), name);
      var newFolder = parentFolder.createFolder(newFolderName);
      copyContentsRecursively(templateFolder, newFolder, name);
      
      return jsonResponse({
        success: true,
        id: newFolder.getId(),
        url: newFolder.getUrl(),
        name: newFolder.getName(),
        mode: 'created_new',
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error.toString()
    });
  }
}

function replacePlaceholders(text, name) {
  var result = text;
  result = result.replace(/\{\{NAME\}\}/g, name);
  result = result.replace(/\{\{name\}\}/g, name.toLowerCase());
  result = result.replace(/\{\{Name\}\}/g, name);
  return result;
}

function copyContentsRecursively(sourceFolder, destinationFolder, name) {
  var files = sourceFolder.getFiles();
  while (files.hasNext()) {
    try {
      var file = files.next();
      var newFileName = replacePlaceholders(file.getName(), name);
      file.makeCopy(newFileName, destinationFolder);
      Utilities.sleep(150);
    } catch (error) {
      Logger.log('Error copying file: ' + error.toString());
    }
  }
  
  var subfolders = sourceFolder.getFolders();
  while (subfolders.hasNext()) {
    try {
      var subfolder = subfolders.next();
      var newSubfolderName = replacePlaceholders(subfolder.getName(), name);
      var newSubfolder = destinationFolder.createFolder(newSubfolderName);
      Utilities.sleep(200);
      copyContentsRecursively(subfolder, newSubfolder, name);
    } catch (error) {
      Logger.log('Error copying subfolder: ' + error.toString());
    }
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

### Use Cases
- **Agencies** — Client folder structure on new signup
- **Freelancers** — Project folders from intake form
- **HR Teams** — Employee onboarding folders
- **Schools** — Student portfolio folders
- **Event Planners** — Event documentation folders

### Notes
- Apps Script may take +60 seconds for large structures
- Timeout is set to 5 minutes for complex templates
- Your Google account needs edit access to template and destination folders