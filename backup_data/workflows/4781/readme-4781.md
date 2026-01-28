# Get Malaysia tax ID number (TIN) for multiple business reg num (SSM) or NRIC

> ## BACKGROUND
Malaysia's Inland Revenue (LHDN) provides an API to get the tax id number for a business entity, based on a given Business Registration number (BRN or SSM), or NRIC (MyKad). 

## PROBLEM

However, the API only allows one search at a time.

## SOLUTION

This free workflow lets you do a batch search to get TIN for multiple SSM or NRIC. 

This is useful if you need to prepare your internal DB for e-invoicing

## PRE-REQUISITES

1) Get your connection client id and client secret from myhasil.gov.my website

2) Prepare your Google Sheet containing a list of SSM and NRIC you want to get the TIN

3) Create N8N credential to connect to your google sheet above

## SUPPORT

Questions? Ask alex at halfborg dot com

## 📊 Basic Information

- **Workflow ID:** 4781
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 221
- **Downloads:** 22
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4781)

## 👤 Author

- **Name:** Alex Halfborg
- **Username:** @halfborg

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **httpRequest** (×2)
- **manualTrigger** 
- **wait** (×2)
- **stickyNote** (×4)
- **splitInBatches** 
- **switch** 
- **if** 
- **set** (×3)
- **code** 
- **googleSheets** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
