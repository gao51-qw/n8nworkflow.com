# Backup workflows to Git repository on Gitea

> #### **Overview**
This workflow automates the backup of all workflows from your system to a **Git repository hosted on Gitea**. It runs on a **scheduled trigger**, fetching, encoding, and committing workflow data, ensuring seamless version control and disaster recovery.

📌 **Quick Setup:** Just update three global variables and configure authentication—no manual exports needed!

---

### **How It Works (Quick Glance)**
1️⃣ **Scheduled Execution** → Runs automatically at defined intervals.
2️⃣ **Fetch Workflows** → Uses the API to retrieve all workflows.
3️⃣ **Process Workflows** → Converts workflow data into a **Git-friendly format**.
4️⃣ **Commit & Push to Git** → Saves workflows in a Gitea repository.

---

### **Setup Steps** (⚡ Takes ~5 min)

#### **1️⃣ Set Global Variables**
Go to the **Globals** section in the workflow and update:
- **`repo.url`** → `https://your-gitea-instance.com` *(Replace with your actual Gitea URL)*
- **`repo.name`** → `workflows` *(Repository name where backups will be stored)*
- **`repo.owner`** → `octoleo` *(Gitea account that owns the repository)*

📌 **These three variables define where the workflows are stored.**

#### **2️⃣ Configure Gitea Authentication**
- **Go to your Gitea account** → Generate a **Personal Access Token**
- In the **credential manager**, create a **new Gitea Token** with:
- **Name:** `Authorization`
- **Value:** `Bearer YOUR_PERSONAL_ACCESS_TOKEN`

📌 **Ensure there is a space after `Bearer` before the token!**

#### **3️⃣ Link Credentials to Git Nodes**
Attach the Gitea credentials to these three Git nodes:
- **GetGitea** → Retrieves existing repository data
- **PutGitea** → Updates workflows
- **PostGitea** → Adds new workflows

#### **4️⃣ Link Credentials for API Requests**
- **Add API authentication** in the node that fetches all workflows.

#### **5️⃣ Test & Activate**
- **Run the workflow manually** to confirm backups work.
- Enable the **schedule trigger** for automation.

📌 **The workflow automatically checks for changes before committing updates.**

---

### **Why Use This Workflow?**
✅ **Automated Backups** → No manual exports needed.
✅ **Version Control** → Easily track workflow changes.
✅ **Simple Setup** → Just configure globals & credentials.
✅ **Secure** → Uses token-based authentication.

---

### **Next Steps**
💬 Have questions? **Reach out on the forum!** 🚀

## 📊 Basic Information

- **Workflow ID:** 2820
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1658
- **Downloads:** 165
- **Created:** 2025/1/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2820)

## 👤 Author

- **Name:** Octoleo
- **Username:** @octoleo

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **set** (×3)
- **n8n** 
- **scheduleTrigger** 
- **stickyNote** (×7)
- **code** (×2)
- **if** (×2)
- **httpRequest** (×3)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
