# GitHub bounty issue tracker & alert system (Google Sheets + Email/WhatsApp)

> # GitHub Bounty Issue Tracker & Alert System (Google Sheets + Email/WhatsApp)

## Overview
Looking for a way to **track GitHub bounty issues automatically** and get notified in real time? This **GitHub Bounty Tracker workflow** monitors repositories for issues labeled 💎 *Bounty*, logs them in Google Sheets, and sends instant alerts via Email (HTML-styled) or WhatsApp. Perfect for **developers, freelancers, and open-source contributors** who want to discover and claim paid opportunities faster.  

---

## What This Workflow Does

### 🔎 Automated Bounty Discovery
- Searches GitHub hourly for all open issues labeled with “💎 Bounty.”  
- Filters duplicates to avoid re-tracking the same issue.  

### 📢 Smart Notifications
- Sends styled HTML email alerts with GitHub-themed design.  
- WhatsApp Business API integration (optional, disabled by default).  
- Alerts only for bounties created within the last 5 days.  

### 📊 Google Sheets Tracking
- **Sheet1**: Complete bounty list (all tracked issues).  
- **Sheet2**: Recent notification log (for quick reference).  

### 🔄 Status Updates
- Checks every 6 hours for issue changes (open/closed state, new comments).  
- Includes bounty amount, issue details, and direct GitHub links.  

---

## Use Cases

- 👩‍💻 **Freelance developers** hunting for paid open-source work.  
- 🛠 **Development teams** tracking bounty opportunities for their stack.  
- 🌍 **Community managers** monitoring open-source bounty program engagement.  
- 🤝 **Open-source contributors** looking for compensated tasks.  

---

## Requirements

- GitHub Personal Access Token (with repo access).  
- Google Sheets (2 sheets required: Sheet1 = bounties, Sheet2 = notifications).  
- Gmail account (OAuth2 for sending email alerts).  
- WhatsApp Business API credentials (optional).  

---

## Configuration Notes
This workflow supports pagination for large result sets and includes filters to prevent duplicate notifications.  
You can **customize the GitHub search query** in the HTTP Request node to target:  
- Specific repositories  
- Custom labels  
- Team/organization projects  

---

## Frequently Asked Questions (FAQ)

**Q: How often will I get notifications?**  
A: By default, new bounties trigger alerts once an hour. Updates on existing issues (status/comments) are checked every 6 hours.  

**Q: Do I need WhatsApp integration?**  
A: No, it’s optional. Email alerts work out-of-the-box.  

**Q: Can I filter by bounty amount?**  
A: Yes, the workflow extracts bounty details and you can add filters in your Google Sheets or notification logic.  

---

## Why Use This GitHub Bounty Tracker?
Unlike manual searches, this workflow ensures you **never miss a paid GitHub issue**. Whether you’re a **freelancer looking for income, a team seeking funded tasks, or a contributor wanting recognition and rewards**, this system keeps you updated automatically.  


## 📊 Basic Information

- **Workflow ID:** 9088
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 128
- **Downloads:** 12
- **Created:** 2025/9/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9088)

## 👤 Author

- **Name:** Jeffrey W.
- **Username:** @c0d33ngr

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **googleSheets** (×8)
- **httpRequest** (×3)
- **splitOut** 
- **merge** 
- **filter** (×4)
- **whatsApp** 
- **gmail** 
- **html** 
- **stickyNote** (×13)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
