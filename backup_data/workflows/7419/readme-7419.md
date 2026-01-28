# Daily Postgres table backup to GitHub in CSV format

> This workflow automatically backs up all public Postgres tables into a GitHub repository as CSV files every 24 hours.  
It ensures your database snapshots are always up to date updating existing files if data changes, or creating new backups for new tables.  

**How it works:**  
1. **Schedule Trigger** – Runs daily to start the backup process.  
2. **GitHub Integration** – Lists existing files in the target repo to avoid duplicates.  
3. **Postgres Query** – Fetches all table names from the `public` schema.  
4. **Data Extraction** – Selects all rows from each table.  
5. **Convert to CSV** – Saves table data as CSV files.  
6. **Conditional Upload** –  
   - If the table already exists in GitHub → Update the file.  
   - If new → Upload a new file.  

---

### **Postgres Tables Preview**
![postgres table](https://articles.emp0.com/wp-content/uploads/2025/08/backup-postgres-to-github-tables.png)

---

### **GitHub Backup Preview**
![github backup](https://articles.emp0.com/wp-content/uploads/2025/08/backup-postgres-to-github-repo.png)

---

**Use case:**  
Perfect for developers, analysts, or data engineers who want **daily automated backups** of Postgres data without manual exports keeping both history and version control in GitHub.  

**Requirements:**  
- Postgres credentials with read access.  
- GitHub repository (OAuth2 connected in n8n).  


## 📊 Basic Information

- **Workflow ID:** 7419
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 440
- **Downloads:** 44
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7419)

## 👤 Author

- **Name:** Jay Emp0
- **Username:** @jay-emp0

## 🏷️ Categories

- DevOps
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **postgres** (×2)
- **splitInBatches** (×2)
- **code** 
- **convertToFile** 
- **github** (×3)
- **itemLists** 
- **stickyNote** (×5)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
