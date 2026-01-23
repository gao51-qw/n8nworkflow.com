# Scan Confluence pages with the REST API for inactive page owners

> ## Scan Confluence pages for inactive page  owners

This workflow scans selected **Confluence spaces**, resolves page ownership and **filters pages with inactive owners**, helping teams maintain clear ownership and prevent orphaned documentation.

### What it does

-   Scans Confluence pages across selected spaces.
    
-   **Resolves page owners and checks their account status**.
    
-   **Filters pages where the owner is inactive** (`owner.accountStatus !== active`).
    
-   Uses **Confluence REST API v2** to fetch spaces, pages, and user data.
    
-   Resolves page owners efficiently via the **users-bulk API**.
    
-   Produces a consolidated report containing:
    
    -   Page title
        
    -   Owner email
        
    -   Owner account status
        
    -   Last updated date
        
    -   Direct page URL
        
-   Useful for **documentation governance**, ownership audits, and cleanup initiatives.
    

### How it works
    
-   A **Set Variables** node defines:
    
    -   Atlassian domain
        
    -   Space keys to scan
        
-   **Get Spaces (v2)** retrieves matching spaces and extracts their IDs.
    
-   **Get Pages (v2)** fetches all pages from the selected spaces.

-   Unique page `ownerId`s are collected and resolved using **Bulk User Lookup (v2)**.
        
-   Page metadata is **merged with user account data** (`ownerId` ↔ `accountId`).
    
-   Pages are **filtered to include only those with inactive owners**.
    

### Setup

-   Configure the **Set Variables** node:
    
    -   `atlassianDomain` → your Confluence base URL
        
    -   `spaceKeys` → comma-separated list of space keys (e.g. `ENG, HR`)
        
-   Create an **HTTP Basic Auth credential**:
    
    -   Atlassian email + API token
        
    -   Assign it to all HTTP Request nodes
        
-   Optional enhancements:
    
    -   Add pagination if spaces contain many pages.
        
    -   Extend the workflow with email notifications, Slack alerts, or CSV export.
        

### Notes

-   Requires permission to read Confluence spaces, pages, and users.
    
-   Pages are flagged when `owner.accountStatus !== active`.
    
-   Current page fetch limit is **50 items per request**.

## 📊 Basic Information

- **Workflow ID:** 12238
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 5
- **Downloads:** 0
- **Created:** 2025/12/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12238)

## 👤 Author

- **Name:** Alexander Schnabl
- **Username:** @alexschnabl

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×4)
- **httpRequest** (×3)
- **stickyNote** (×6)
- **merge** 
- **filter** (×2)
- **splitOut** (×2)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
