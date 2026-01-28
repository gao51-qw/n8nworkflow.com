# Automate real estate value updates in YNAB using Rentcast.io with Discord alerts

> ## How it works
Uses the rentcast.io api to get approximate value of real estate. Updates the asset in YNAB. 


## Setup

1. Get [Rentcast.io api key](https://developers.rentcast.io/reference/property-valuation)
2. Get [YNAB API Key](https://api.ynab.com/)
3. Get YNAB `Buget ID` and `Account ID`

This can be done by navigating to your budget in the browser, then extracting ID from the URL 

`https://app.ynab.com/XXXX/accounts/YYYY`
`xxxx` = Budget ID
`yyyy` = Account ID

4. If you don't already have an account to track your property, create a new Unbudgeted tracking asset.

![Screenshot 20250818 at 18.12.16.png](fileId:2138)


Set the veriables in the 'Set Fields' node (Or setup subworkflow if you have multiple properties). 


| Variable| Explination | Example | 
| --- | --- | --- | 
|rentcast_api | api key for rentcast | |
| ynab_api | apk key for ynab | | 
| address | Exact address.  Its recomended to look it up in rentcast first since they use non standard values like 'srt' , 'ave', ect... |1600 Pennsylvania Ave NW, Washington, DC 20500 | 
| propertyType | one of 'Single Family', 'Condo', 'Apartment', see [api docs](https://developers.rentcast.io/reference/property-valuation) for all options | Single Family | 
| bedrooms | Number of bedrooms (whole number) | 3 |  
| bathrooms | Number of bathrooms, while fractions (2.5) are probably supported, they haven't been tested | 2 | 
| squareFootage | Total square feet | 1500 |  
| ynab_budget | Budget ID (derive from URL) |xxxx|  
| ynab_account | Account ID (derive from URL ) | yyyy |  

![Screenshot 20250818 at 18.11.30.png](fileId:2139)

## 📊 Basic Information

- **Workflow ID:** 7560
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 181
- **Downloads:** 18
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7560)

## 👤 Author

- **Name:** spencer owen
- **Username:** @spuder

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **noOp** 
- **set** (×2)
- **httpRequest** (×3)
- **if** 
- **crypto** 
- **executeWorkflowTrigger** 
- **discord** (×2)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
