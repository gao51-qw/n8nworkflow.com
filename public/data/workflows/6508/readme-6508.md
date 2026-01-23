# CYBERPULSE AI RedOps: Role-based LinkedIn profile discovery with Google OSINT

> ## Description:
Automates public profile discovery for CISO, CEO, and other key roles using Google Programmable Search. Extracts LinkedIn profile links, names, and timestamps to a structured Google Sheet for OSINT, exposure analysis, or Red Team prep.

## Who’s It For:
Red Teams planning phishing simulations

OSINT investigators and social engineers

Cybersecurity trainers mapping exposure risk

## How It Works

This workflow simulates role-based OSINT (Open Source Intelligence) by performing automated LinkedIn discovery using Google Search. Here's a breakdown:

1. **Trigger**: 
   - Can run manually or via Cron for daily/weekly scraping tasks.

2. **Load Roles to Target**: 
   - Reads role-based search queries (e.g., `"CISO site:linkedin.com/in/"`) from a pre-filled input list or Google Sheet.

3. **Query Google Custom Search API**: 
   - Sends requests to the Programmable Search Engine using secure API credentials (CSE ID + API Key).
   - Each query returns up to 10 LinkedIn profile results.

4. **Parse and Extract**:  
   - Captures full name, title snippet, LinkedIn URL, and description using JSON response parsing.

5. **Output**:  
   - Logs results to a structured Google Sheet for review or later enrichment.
   - Sheet columns include: `role`, `name`, `snippet`, `url`, `timestamp`

Optional enhancements can include:
- Entity tagging by organization
- Filtering by location or keyword
- Lead scoring based on search terms
- Search query editing
- 
## Requirements:
Google Programmable Search Engine (API key + CX ID)

Google Sheets credentials

## File Templates:
RedOps_SocialGraph_Log_Template.xlsx

name	linkedin	team	status	module	timestamp
John Doe	https://linkedin.com/in/johndoe	GRC	active	Social_Graph_Builder	2025-07-27T12:00:00Z

## Customization Tips:
Update queries (CISO, CEO, VP IT, etc.)

Filter results by region or org using site filters

Extend to track Twitter or GitHub links

## Setup Instructions

1. Set up a Google Programmable Search Engine (CSE) at https://programmablesearchengine.google.com/
2. Restrict it to search only `linkedin.com/in/`
3. Copy your **CSE ID** and generate a **Google API Key** from https://console.cloud.google.com/apis/credentials
4. In n8n, use the HTTP Request node:
   - Select `Use Authentication: Yes`
   - Store your API Key and CSE ID in n8n credentials (not in query parameters)
5. Configure pagination to extract multiple results
6. Optional: Append results to Google Sheets or another storage system

## Ethics Note:
This tool uses public Google Search results. It is meant for educational or internal red teaming only. Do not use for scraping or unauthorized targeting.

🔗 Part of the CYBERPULSE AI RedOps Suite
🌐 https://cyberpulsesolutions.com
📧 info@cyberpulsesolutions.com

## 📊 Basic Information

- **Workflow ID:** 6508
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 138
- **Downloads:** 13
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6508)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **splitInBatches** 
- **httpRequest** 
- **googleSheets** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
