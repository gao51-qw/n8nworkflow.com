
## Overview
Streamline your entire client onboarding process with a single workflow. When a new client submits the intake form, this automation creates a Monday.com item, generates a complete Google Drive folder structure from your template, updates the Monday item with the folder link, and sends a personalized welcome email—all automatically.

## What This Workflow Does
1. Displays a professional intake form (client name, email, project type)
2. Creates a new item in your Monday.com board with all details
3. Generates a Google Drive folder for the client
4. Duplicates your template folder structure using Apps Script
5. Updates the Monday.com item with the Google Drive folder link
6. Sends a welcome email to the client with folder access

## Key Features
- **End-to-end automation** — From form submission to welcome email
- **CRM integration** — All client data captured in Monday.com
- **Organized file storage** — Consistent folder structure for every client
- **Professional onboarding** — Clients receive immediate welcome email with resources
- **Fully customizable** — Add more form fields, notifications, or integrations

## Prerequisites
- Monday.com account with API credentials
- Google Drive account with OAuth2 credentials
- Gmail account with OAuth2 credentials
- Google Apps Script deployment (code below)
- Template folder in Google Drive with `{{NAME}}` placeholders

## Setup

### Step 1: Get your Monday.com IDs
1. Open your Monday.com board
2. Board ID: Check the URL → `monday.com/boards/BOARD_ID`
3. Group ID: Use Monday API Explorer or browser dev tools
4. Column IDs: Found in column settings or via API

### Step 2: Create your Drive template folder
```
📁 {{NAME}} - Client Files
├── 📁 01. Contracts & Agreements
├── 📁 02. {{NAME}} - Assets
├── 📁 03. Deliverables
├── 📁 04. Communications
└── 📄 {{NAME}} - Project Brief.gdoc
```

### Step 3: Deploy Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Create new project → Paste code below
3. Deploy → New deployment → Web app
4. Execute as: `Me` | Access: `Anyone`
5. Copy the deployment URL

### Step 4: Configure the workflow
Replace these placeholders:
- `YOUR_BOARD_ID` — Monday.com board ID
- `YOUR_GROUP_ID` — Monday.com group ID
- `DESTINATION_PARENT_FOLDER_ID` — Drive folder for new client folders
- `YOUR_APPS_SCRIPT_URL` — Apps Script deployment URL
- `YOUR_TEMPLATE_FOLDER_ID` — Template folder to duplicate

### Step 5: Connect credentials
- Monday.com API credentials
- Google Drive OAuth2
- Gmail OAuth2

---

## Apps Script Code

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

## Use Cases
- **Agencies** — Automate client onboarding with CRM tracking
- **Freelancers** — Professional intake process for new projects
- **Consulting firms** — Standardized client setup workflow
- **Creative studios** — Organize assets and deliverables from day one
- **Service businesses** — Streamline customer setup and communication

## Customization Ideas
- Add more form fields: phone, company size, budget, deadline
- Add Slack notification to alert your team
- Create tasks in Monday.com sub-items
- Add to Google Calendar for kickoff meeting
- Integrate with invoicing (Stripe, QuickBooks)

## Notes
- Apps Script may take 30-60 seconds for large folder structures
- Monday.com column IDs must match your board's actual columns
- The welcome email can be customized with your branding
- Test with a single client before full deployment