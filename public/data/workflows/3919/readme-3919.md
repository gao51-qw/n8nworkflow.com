# Lead tracking system for HubSpot with automated notifications via Gmail & Slack

> # 🎯 **Project Purpose**

This project automates the process of collecting and managing new leads submitted through a web form. It eliminates the need for manual data entry and ensures that each lead is:

- Properly recorded and time-stamped in a structured format
- Automatically communicated to the sales or support team
- Ready for follow-up, with a reminder system in place

It’s a **lightweight but effective solution** suitable for freelancers, small teams, and growing businesses that want to streamline their lead intake process.

# 🛠️ **Tools & Technologies Used**

- **Google Forms / Web Form** – Frontend for capturing leads
- **Google Sheets** – Central database for storing lead information
- **n8n** – Automation platform that connects and coordinates all services
- **Gmail** – Handles email notifications for new leads
- **Slack** *(optional)* – Provides instant team notifications
- **Date & Time nodes** – Tracks and manages lead response timing
- **Conditional (IF) nodes** – Filters out duplicate and incomplete entries


# 🔄 Workflow Overview

![🔄 Workflow Overview  visual selection 1.png](fileId:1291)


# ✨ **Key Features**

- ✅ No-code integration using n8n
- ✅ Instant alerts via Gmail and/or Slack
- ✅ Google Sheets as an easily accessible backend
- ✅ Modular design — easy to expand with CRM tools (like HubSpot)
- ✅ Clean JSON structure and logic, beginner-friendly


# 📈 **Possible Improvements**

- Add email validation via external API (e.g., NeverBounce, Hunter)
- Integrate with a CRM for deeper automation
- Add lead scoring based on answers
- Include automatic follow-up emails after X days
- Schedule weekly summary reports via email


# 🧑🏻‍💻 Creator Information
Developed by: Adem Tasin
![upworkicon 1.png](fileId:1290) [Adem T.](https://www.upwork.com/freelancers/~01807137bc7526bcb2?mp_source=share)

🌐 Website: [Dataplusminus+-](https://www.dataplusminus.com/)
📧 Email:[dataplusminuss@gmail.com](dataplusminuss@gmail.com)
 💼 LinkedIn: [Adem Tasin](https://www.linkedin.com/in/adem-tasin/)


## 📊 Basic Information

- **Workflow ID:** 3919
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1308
- **Downloads:** 130
- **Created:** 2025/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3919)

## 👤 Author

- **Name:** dataplusminus+-
- **Username:** @dataplusminus

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **slack** 
- **gmail** (×2)
- **hubspot** 
- **if** 
- **noOp** 
- **wait** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
