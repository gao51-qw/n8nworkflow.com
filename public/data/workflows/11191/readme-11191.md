# Automate weekly timesheet reporting with Salesforce, OpenAI and Gmail

> # Weekly Timesheet Report + Pending Submissions Workflow

## Overview
This workflow automates the entire weekly timesheet reporting cycle by integrating Salesforce, OpenAI, Gmail, and n8n. It retrieves employee timesheets for the previous week, identifies which were submitted or not, summarizes all line-item activities using OpenAI, and delivers a consolidated, manager-ready summary that mirrors the final email output.

The workflow eliminates manual checking, reduces repeated follow-ups, and ensures leadership receives an accurate, structured, and consistent weekly report.

---

## Workflow Structure

### **Data Source: Salesforce DBT Timesheet App**
This workflow requires the **Digital Biz Tech – Simple Timesheet** managed package to be installed in Salesforce.

**Install the Timesheet App:**
[https://appexchange.salesforce.com/appxListingDetail?listingId=a077704c-2e99-4653-8bde-d32e1fafd8c6](https://appexchange.salesforce.com/appxListingDetail?listingId=a077704c-2e99-4653-8bde-d32e1fafd8c6)

**The workflow retrieves:**

- `dbt__Timesheet__c` — weekly timesheet records  
- `dbt__Timesheet_Line_Item__c` — project and activity entries  
- `dbt__Employee__c` — employee reference and metadata  
- Billable, non-billable, and absence hour details  
- Attendance information  

These combined objects form the complete dataset used for both submitted and pending sections.

### **Trigger**
Weekly **n8n Schedule Trigger** — runs once every week.

### **Submitted Path**
Retrieve submitted timesheets → Fetch line items → Convert to HTML → OpenAI summary → Merge with employee details.

### **Pending Path**
Identify “New” timesheets → Fetch employee details → Generate pending submission list.

### **Final Output**
Merge both paths → Build formatted report → Gmail sends weekly email to managers.

---

## Detailed Node-by-Node Explanation

### **1. Schedule Trigger**
Runs weekly without manual intervention and targets the previous full week.

### **2. Timesheet – Salesforce GetAll**
Fetches all `dbt__Timesheet__c` records matching:
**Timesheet for &lt;week-start&gt; to &lt;week-end&gt;**

Extracted fields include:

- Employee reference  
- Status  
- Billable, non-billable, absence hours  
- Total hours  
- Reporting period  

Feeds both processing paths.

---

# Processing Path A — Submitted Timesheets

### **3. Filter Submitted**
Filters timesheets where `dbt__Status__c == "Submitted"`.

### **4. Loop Through Each Submitted Record**
Each employee’s timesheet is processed individually.

### **5. Retrieve Line Items**
Fetches all `dbt__Timesheet_Line_Item__c` entries:

- Project / Client  
- Activity  
- Duration  
- Work description  
- Billable category  

### **6. Convert Line Items to HTML (Code Node)**
Transforms line items into well-structured HTML tables for clean LLM input.

### **7. OpenAI — Weekly Activity Summary**
OpenAI receives the HTML + Employee ID and returns a **4-point activity summary** avoiding:

- Hours  
- Dates  
- Repeated or irrelevant metadata  

### **8. Fetch Employee Details**
Retrieves employee name, email, and additional fields if needed.

### **9. Merge Employee + Summary**
Combines:

- Timesheet data  
- Employee details  
- OpenAI summary  

Creates a unified object.

### **10. Prepare Submitted Section (Code Node)**
Produces the formatted block used in the final email:

```
Employee: Name  
Period: Start → End  
Status: Submitted  
Total Hours: ...  

Timesheet Line Items Breakdown:
 - summary point  
 - summary point  
 - summary point  
 - summary point  
```

---

# Processing Path B — Not Submitted Timesheets

### **11. Identify Not Submitted**
Timesheets still in `dbt__Status__c == "New"` are flagged.

### **12. Retrieve Employee Information**
Fetches employee name and email.

### **13. Merge Pending Information**
Maps each missing submission with its reporting period.

### **14. Prepare Pending Reporting Block**
Creates formatted pending entries:

```
TIMESHEET NOT SUBMITTED
Employee Name
Email: user@example.com
```

---

# Final Assembly & Report Delivery

### **15. Merge Submitted + Pending Sections**
Combines all processed data.

### **16. Create Final Email (Code Node)**
Builds:

- Subject  
- HTML body  
- Section headers  
- Manager recipient group  

Matches the final email layout.

### **17. Send Email via Gmail**
Automatically delivers the weekly summary to managers via Gmail OAuth.

No manual involvement required.

---

## What Managers Receive Each Week

```
👤 Employee: Name
📅 Period: Start Date → End Date
📌 Status: Submitted
🕒 Total Hours: XX hrs
- Billable: XX hrs
- Non-Billable: XX hrs
- Absence: XX hrs
Weekly Requirement Met: ✔️ / ❌

📂 Timesheet Line Items Breakdown:
• Summary point 1
• Summary point 2
• Summary point 3
• Summary point 4
==========================================================
🟥 TIMESHEET NOT SUBMITTED 🟥
Employee Name
📧 Email: user@example.com
```

---

## Data Flow Summary

```
Salesforce
 → Filter Submitted / Not Submitted
      ↳ Submitted → Line Items → HTML → OpenAI Summary → Merge
      ↳ Not Submitted → Employee Lookup → Merge
 → Code Node formats unified report
 → Gmail sends professional weekly summary
```

---

## Technologies & Integrations

| System     | Purpose                         | Authentication |
|------------|----------------------------------|----------------|
| Salesforce | Timesheets, Employees, Timesheet Line Items | Salesforce OAuth |
| OpenAI     | Weekly activity summarization     | API Key |
| Gmail      | Automated email delivery          | Gmail OAuth |
| n8n        | Workflow automation & scheduling  | Native |

---

## Agent System Prompt Summary
&gt; You are an AI assistant that extracts and summarizes weekly timesheet line items. Produce a clean, structured summary of work done for each employee. Focus only on project activities, tasks, accomplishments, and notable positives or negatives. Follow a strict JSON-only output format with four short points and no extra text or symbols.

---

## Key Features
- AI-driven extraction: Converts raw line items into clean weekly summaries.
- Strict formatting: Always returns controlled 4-point JSON summaries.
- Error-tolerant: Works even when timesheet entries are incomplete or messy.
- Seamless integration: Works smoothly with Salesforce, n8n, Gmail, or OpenAI.

---



## Setup Checklist

1. Install DBT Timesheet App from Salesforce AppExchange  
2. Configure Salesforce OAuth  
3. Configure Gmail OAuth  
4. Set OpenAI model for summarization  
5. Update manager recipient list  
6. Activate the weekly schedule  

---

## Summary
This unified workflow delivers a complete, automated weekly reporting system that:

- Eliminates manual timesheet checking  
- Identifies missing submissions instantly  
- Generates high-quality AI summaries  
- Improves visibility into employee productivity  
- Ensures accurate billable/non-billable tracking  
- Automates end-to-end weekly reporting  

---

## Need Help or More Workflows?

We can integrate this into your environment, tune the agent prompt, or extend it for more automation.

We can also help you set it up for free — from connecting credentials to deployment.

Contact: [shilpa.raju@digitalbiz.tech](mailto:shilpa.raju@digitalbiz.tech)  
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)   
You can also DM us on LinkedIn for any help.


## 📊 Basic Information

- **Workflow ID:** 11191
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 24
- **Downloads:** 2
- **Created:** 2025/11/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11191)

## 👤 Author

- **Name:** DIGITAL BIZ TECH
- **Username:** @dbt

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **salesforce** (×4)
- **gmail** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** (×4)
- **scheduleTrigger** 
- **stickyNote** (×6)
- **code** (×4)
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
