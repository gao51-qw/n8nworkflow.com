# Sync companies from Google Sheets to Salesforce with smart duplicate prevention

> ## How it works
Automatically imports company data from Google Sheets into Salesforce while intelligently preventing duplicate accounts. The workflow searches for existing companies, creates new accounts only when needed, and ensures all contact information is properly associated.

Key features:
- Smart duplicate detection by company name matching
- Dual processing paths for new vs existing companies  
- Automatic contact creation and association
- Comprehensive error handling and data validation
- Professional sectional documentation with setup guides

## Set up steps
- Configure Google Sheets API credentials (OAuth 2.0)
- Set up Salesforce Connected App with Account/Contact permissions
- Prepare Google Sheets with proper column headers (Company Name, Email, Phone, Industry)
- Map Salesforce field requirements in workflow nodes
- Test with small dataset before full deployment

**Estimated setup time:** 15-30 minutes  
**Processing time:** 15-45 seconds per company

All detailed configuration steps, troubleshooting guides, and security best practices are included in the comprehensive sticky note documentation within the workflow.

## 📊 Basic Information

- **Workflow ID:** 9053
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 138
- **Downloads:** 13
- **Created:** 2025/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9053)

## 👤 Author

- **Name:** Xavier Tai
- **Username:** @xaviertai

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **manualTrigger** 
- **salesforce** (×3)
- **if** 
- **itemLists** 
- **renameKeys** 
- **set** 
- **googleSheets** 
- **stickyNote** (×5)
- **merge** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
