# 💾 Backup automation for n8n workflows to Google Drive (daily or manual)

> ### 💾 Backup Automation for n8n Workflows to Google Drive – No Risk, No Stress

#### Hi! I’m Amanda,
I build automation workflows for n8n and Make.  
This ready-to-use workflow is designed to automatically **export and back up all your n8n workflows** to a designated **Google Drive folder**, organized by date.

It’s perfect for agencies, developers, and teams that want to protect their automation assets — without relying on manual exports or risking losing their work.

---

### ✅ What this workflow does

- Fetches **all your existing workflows** from the n8n API  
- Compiles each workflow as a `.json` file  
- Creates a new folder in Google Drive using the current date  
- Uploads each `.json` file to that folder  
- Can be triggered **manually** or **automatically via cron** (date-time node)

---

### ⚙️ How to set it up

1. **Connect your Google Drive** in the “Folder Creation” and “Save to Drive” nodes  
2. **Add your n8n API Key** in the “Search All Workflows” and “Compiles Individual Data” nodes  
3. Define your time zone and execution method:
   - Run manually via the “Manual Trigger” node  
   - Or schedule backups using the “Date & Time” and “Schedule Trigger” nodes  
4. (Optional) Change the parent folder ID in the “Folder Creation in Drive” node to set your destination

Once configured, the workflow will back up your entire workflow list daily — or whenever you run it — and send the files to your Google Drive!

---

### 🧰 Nodes & Tech Used

- `Schedule Trigger` + `Manual Trigger`  
- `Date & Time` – For timestamp folder naming  
- `n8n API` – To list and fetch each workflow  
- `Google Drive` – Folder creation and file upload  
- `Merge`, `Move Binary Data`, `Set` – Workflow compilation and formatting  

---

### 🧑‍💻 Who this is for

- n8n developers who want peace of mind  
- Agencies managing many client automations  
- Anyone worried about losing their workflow work  
- Teams needing version control and backup history

---

### 🛠️ Requirements

- **Google Drive OAuth2 credential**  
- **n8n API Key** (from your account settings)  
- n8n Cloud or self-hosted instance

---

### 🌐 Want to use this workflow?

❤️ Buy workflows: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud with my partner link: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)


## 📊 Basic Information

- **Workflow ID:** 3918
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 627
- **Downloads:** 62
- **Created:** 2025/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3918)

## 👤 Author

- **Name:** Amanda Benks
- **Username:** @amanda

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **moveBinaryData** 
- **dateTime** 
- **scheduleTrigger** 
- **manualTrigger** 
- **stickyNote** (×6)
- **googleDrive** (×2)
- **n8n** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
