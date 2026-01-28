# Automate HR candidate shortlisting with Sheets, Gmail, ClickUp & Calendly

> ## 📝 Description
This n8n workflow automates the candidate shortlisting process by integrating Google Sheets, Gmail, ClickUp, and Calendly. It fetches candidate records, filters high-scoring profiles, sends personalized advancement emails, and creates screening tasks for your HR team—all with a single manual trigger.

## 🚀 What It Does

**Fetch All Candidate Records**
- Retrieves complete candidate data (names, scores, contact info, summaries) from the ‘Resume store’ Google Sheet (Sheet2).
- Efficiently loads all rows for batch analysis.

**Filter High-Score Candidates**
- Applies a threshold filter (default: score &gt; 70) to identify strong-fit candidates.
- Only qualified profiles advance; threshold is customizable per role.

**Send Congratulations Email**
- Sends personalized emails to qualified candidates using Gmail.
- Includes a dynamic Calendly scheduling link for interview booking.
- Maintains a positive candidate experience with professional messaging.

**Create Screening Task in ClickUp**
- Automatically generates screening tasks for each qualified candidate in ClickUp.
- Assigns tasks to a designated team member and organizes them in specified project folders.
- Ensures accountability and seamless follow-up.

## 📈 Key Benefits
- Speed: Instantly advances qualified candidates—no manual sorting.
- Consistency: Standardized criteria and communications for every role.
- Organization: Auto-creates ClickUp tasks so nothing slips through.
- Experience: Timely, professional communication enhances candidate journey.
- Efficiency: Reduces HR workload and error risk.

## ⚙️ Customization & Integration
- Score Threshold: Set to 70 by default; adjust for different roles or seniority.
- Email Template: Editable subject, body, and CTA (Calendly link).
- ClickUp Integration: Uses configurable Team, Space, Folder, List, and Assignee IDs.
- Systems Supported: Google Sheets (data), Gmail (email), ClickUp (tasks), Calendly (scheduling).
- 🔧 Setup Requirements
- n8n instance (self-hosted or cloud).
- Google Sheets access for ‘Resume store’ (Sheet2).
- Gmail credentials for candidate notifications.
- ClickUp API token and IDs for task creation.
- Calendly link for interview scheduling.

## 👥 Target Audience
- HR teams, recruiters, staffing agencies.
- Operations managing high-volume candidate pipelines.
- Startups/SMBs seeking standardized hiring automation.

## 🛠️ Maintenance Tips
- Update email templates seasonally.
- Review scoring thresholds monthly.
- Monitor ClickUp task completion rates.
- Ensure Calendly links remain active.

## 📋 Step-by-Step Usage
- Connect Google Sheets, Gmail, and ClickUp credentials in n8n.
- Import the workflow; configure threshold, email, and ClickUp settings.
- Edit the email node with your Calendly link and branding.
- Trigger “Execute workflow” after new candidate scores are added.
- Review logs and results for successful candidate progression.

## 📊 Basic Information

- **Workflow ID:** 8528
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 172
- **Downloads:** 17
- **Created:** 2025/9/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8528)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **if** 
- **gmail** 
- **clickUp** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
