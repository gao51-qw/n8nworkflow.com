# Deploy workflows from Google Drive to n8n instance

> Automatically deploy n8n workflows by simply dropping JSON files into a Google Drive folder—this template watches for new exports, cleans and imports them into your n8n instance, applies a tag, and then archives the processed files.

### Who is this template for?  
This workflow template is designed for n8n power users, and automation specialists who need a simple, reliable way to bulk‑deploy or version‑control n8n workflows via Google Drive. It’s perfect if you:  
- Manage multiple n8n instances (staging, production, etc.)  
- Want an easy “drop‑in” approach to publish new or updated workflows  
- Prefer storing/exporting JSON in Drive rather than editing in the UI  

---

### Use case
Manually importing `.json` exports into n8n is slow and error‑prone. With this template you can:  
- Keep your workflows in a shared Drive folder (version control friendly)  
- Automatically sanitize each file so only supported settings go through  
- Tag deployed workflows consistently for easy filtering  
- Move processed files to a “Deployed” folder for clear change tracking  

---

### How it works
1. **Watch “ToDeploy” folder** in Google Drive for new `.json` files  
2. **Download & parse** each file into a JSON object  
3. **Clean payload**: strip out everything except the allowed `executionOrder` (and timezone if you choose)  
4. **POST** the cleaned workflow to your n8n instance via `/api/v1/workflows`  
5. **PUT** a predefined tag onto the newly created workflow  
6. **Move file** to your “Deployed” folder when import succeeds, or capture the workflow name & error if it fails  

---

### Setup instructions

**1.** In Google Drive create a **ToDeploy** folder and a **Deployed** folder
+ Update "**Google Drive Trigger -ToDeploy folder**" to your ToDeploy folder
+ Update "**Move JSON file to Deployed folder**" to you Deployed folder


**2.** Create a **n8n API key**:
+Go to Settings &gt; n8n API
+Select Create an API key
+Copy API Key

**3.** In "**Get Existing Workflow Tags**" node: 
Create n8n API Authentication
**Authentication:** Predefined Credential Type
**Credential Type:** n8n API

Create new credential:
+Paste in API key
+Baseurl: https://SUBDOMAIN.YOURDOMAINNAME.com/api/v1/

**4.** Add n8n API authentication to: 
+ "**Create n8n Workflow**" node
+ "**Set Workflow Tag**" node


**5.** Add your N8N instance URL to the **N8N_Instance_URL** variable in "**Set n8n URL variable**" node.

**6.** Run **"1. Get Workflow Tags"** flow and copy the ID of your chosen tag.

**7.** In "**Set n8n API URL & Tag ID variables**" node:
+ Add the Workflow Tag ID to the **N8N_Instance_Tag** variable
+ Add your N8N instance URL to the **N8N_Instance_URL** variable


**8.** Set workflow to Active

---

### How to adjust it to your needs 
 - **Use different tags**: run **Get Existing Workflow Tags** on start‑up to refresh available tags, or hard‑code multiple tags in the **Set Workflow Tag** node.  
- **Add notifications**: connect the error branch to Slack or Email nodes so you get alerted if an import fails.  
- **Swap Drive for another storage**: replace Google Drive nodes with Dropbox, S3, or GitHub triggers if you prefer a different source for your JSON files.

## 📊 Basic Information

- **Workflow ID:** 3568
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 464
- **Downloads:** 46
- **Created:** 2025/4/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3568)

## 👤 Author

- **Name:** Jason Guest
- **Username:** @jpguest

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **httpRequest** (×3)
- **stickyNote** (×9)
- **manualTrigger** 
- **extractFromFile** 
- **code** (×2)
- **set** (×2)
- **googleDrive** (×2)
- **googleDriveTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
