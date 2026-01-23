# Automated weekly project cost reports with MySQL and Outlook HTML emails

> ## Automated Weekly Project Cost Reports with MySQL and Outlook HTML Emails

## 🧠 Use Case

Need to keep your finance or operations team updated on missing project costs?  
This practical **automated report workflow** does the job without AI — and saves hours weekly.

- Runs on a **weekly schedule**
- Queries your **MySQL** database for projects missing cost data
- Filters by `budgeted_project_cost IS NULL`
- Generates a clean **HTML email report**
- Sends it through **Microsoft Outlook** to relevant teams

## 🚀 How It Works

1. **Schedule Trigger** – Runs every Monday at 8 AM
2. **MySQL Node** – Connects and runs SQL to fetch project data missing `budgeted_project_cost`
3. **Switch Node** – Routes logic based on `cost_center` (e.g., Retail, Service, Projects)
4. **Outlook Nodes** – Sends formatted HTML emails; each node handles a specific group
5. **Dynamic Content** – Inject values using mustache tags like `{{ $json.project_name }}`

## 🔧 Setup Instructions

1. **MySQL Setup**:
   - Ensure the MySQL node is connected using a valid credential set:
     - Hostname/IP
     - Port (default: 3306)
     - Database name
     - Username with SELECT permissions
     - Password
   - Query Example:
     ```sql
     SELECT project_name, cost_center FROM tabProject 
     WHERE status = 'Open' AND project_type = 'External' AND budgeted_project_cost IS NULL;
     ```

2. **Outlook Configuration**:
   - Connect your Microsoft Outlook node using OAuth2 credentials.
   - Rename each Outlook node clearly (e.g., `Send Email - Retail`, `Send Email - Service`).

3. **Switch Node**:
   - Modify cost center values as needed to match your organization (e.g., `'Retail'`, `'Service'`, `'Projects'`).

4. **HTML Email Formatting**:
   - Customize the HTML message body using inline styles and mustache syntax.
   - Sample:
     ```html
     <h3>Missing Budgeted Cost Report</h3>
     <ul>
       <li>Project: {{ $json.project_name }}</li>
       <li>Cost Center: {{ $json.cost_center }}</li>
     </ul>
     ```

5. **Recipients**:
   - Replace `amjid@amjidali.com` with the actual email addresses of the concerned teams.


## 📘 Read More

👉 [Why Simple Workflows Work](https://syncbricks.com/why-simple-n8n-workflows-often-deliver-more-value-than-complex-ones/)  

## 📺 Demo & Tutorial

🎥 Watch the video walkthrough:  
[https://youtube.com/@syncbricks](https://youtube.com/@syncbricks)

---

## 👤 About the Creator

**Amjid Ali**  
🌐 [amjidali.com](https://amjidali.com)  
📘 [n8n Book](https://lms.syncbricks.com/books/n8n/)  
🎓 [Learn n8n](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)

&gt; “Start simple, scale smart. Even basic workflows like this can save your team hours!” — *Amjid Ali*

## 📊 Basic Information

- **Workflow ID:** 3453
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1829
- **Downloads:** 182
- **Created:** 2025/4/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3453)

## 👤 Author

- **Name:** Amjid Ali
- **Username:** @amjid

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **mySql** 
- **scheduleTrigger** 
- **switch** 
- **microsoftOutlook** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
