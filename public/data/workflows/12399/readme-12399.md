# Email reports on expiring Microsoft Entra ID app secrets and certificates with Microsoft Graph

> 
## Monitor expiring EntraID application secrets and notify responsible

Stay ahead of credential expirations by automatically detecting Entra ID application client secrets and certificates that are about to expire, and sending a neatly formatted email report.

### What this workflow solves

Expired client secrets and certificates are a common cause of unexpected outages and failed integrations. Manually checking expiration dates across many Entra ID applications is tedious and easy to miss. This workflow automates the discovery and reporting of credentials that will expire within a configurable time window.

### Key features

-   Fetches all **Microsoft Entra ID applications** along with:
    
    -   **Client secrets** (`passwordCredentials`)
        
    -   **Certificates** (`keyCredentials`)
        
-   Splits credentials into individual entries for easier processing
    
-   Filters credentials expiring **within the next _N_ days** (configurable)
    
-   Normalizes results into a consistent structure including:
    
    -   Application name
        
    -   App ID
        
    -   Credential type (Client Secret / Certificate)
        
    -   Credential name + ID
        
    -   Days remaining until expiration
        
-   Generates an **HTML table report**, sorted by application name
    
-   Sends an email **only when expiring items are found** (otherwise does nothing)
    

### How it works

1. Fetches all Entra ID applications and their credential metadata via Microsoft Graph  
2. Separates client secrets and certificates into individual entries  
3. Filters entries that expire within the configured time window  
4. Builds a normalized list of expiring items with days remaining  
5. Emails an HTML table report (only if results exist)    

### Setup requirements

-   **Microsoft Entra ID app registration** with Microsoft Graph **Application permissions**:
    
    -   `Application.Read.All`
        
-   In n8n:
    
    -   Create **Microsoft Graph OAuth2** credentials (Client Credentials flow recommended)
        
    -   Assign those credentials to the **Get EntraID Applications and Secrets** HTTP Request node
        
-   Update the **Set Variables** node:
    
    -   `notificationEmail`: where to send the report
        
    -   `daysBeforeExpiry`: alert window in days (e.g., 14)
        

### Notes

-   The email table highlights soon-to-expire credentials more prominently (based on remaining days).
    
-   For automation, replace the manual trigger with a **Schedule Trigger** (e.g., daily/weekly).
    
-   The workflow accesses **metadata only** (names/IDs/expiry), not secret values.

## 📊 Basic Information

- **Workflow ID:** 12399
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 117
- **Downloads:** 11
- **Created:** 2026/1/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12399)

## 👤 Author

- **Name:** Alexander Schnabl
- **Username:** @alexschnabl

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **splitOut** (×3)
- **set** (×3)
- **merge** 
- **filter** (×2)
- **httpRequest** 
- **aggregate** 
- **if** 
- **noOp** 
- **html** 
- **emailSend** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
