# Fetch live ETF metrics from JustETF to Excel with one-click updates

> # Automate Your ETF Comparison: Real-Time Data & Analysis

**Automate ETF research in Excel with one click.**  
This n8n workflow pulls live data from **justetf.com** using ISIN codes from your Excel table, extracts key metrics (dividends, fees, 5-year performance), and updates your “Div study” sheet instantly — all triggered by a button in Excel.

Perfect for dividend investors, ETF screeners, or portfolio trackers who want **fresh, accurate data without manual copy-paste**.

---

## How it works
1. **Trigger**: Click “Update Table” in Excel → calls n8n via webhook  
2. **Excel**: Logs current time (GMT-2) and reads all rows from “DivComp” table  
3. **HTTP Request**: Fetches ETF profile page from `justetf.com` using ISIN  
4. **HTML Extraction**: Parses page with CSS selectors to grab dividends, fees, 5Y performance  
5. **Code Node**: Cleans & structures data (e.g., last 5 years of dividends, yield, growth)  
6. **Update Excel**: Writes clean values back to your table (fees, yield, performance, name)

---

## Setup steps
1. **In Excel**:  
   - Add a button → assign macro that calls your n8n **webhook URL** (path: `/ETF`)  
   - Ensure table **“DivComp”** has: `ISIN`, `Dernière mise à jour`, `Frais`, `Performance depuis 5 ans`, etc.

2. **In n8n**:  
   - Connect **Microsoft Excel** (OneDrive) credential  
   - Update workbook/worksheet/table references if needed  
   - Test with 1–2 ISINs first

3. **Click “Update Table”** → watch data refresh in real time!

---

**Tags**: `ETF`, `Excel`, `Web Scraping`, `Investing`, `Finance`, `Automation`, `justetf`, `Dividend Tracking`

## 📊 Basic Information

- **Workflow ID:** 2519
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 852
- **Downloads:** 85
- **Created:** 2024/11/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2519)

## 👤 Author

- **Name:** Louis
- **Username:** @louisdl

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **splitInBatches** 
- **stickyNote** (×4)
- **microsoftExcel** (×3)
- **httpRequest** 
- **html** 
- **code** 
- **webhook** 
- **set** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
