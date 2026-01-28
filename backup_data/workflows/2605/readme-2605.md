# Generate leads with Google Maps

> This workflow leverages **n8n** to perform automated Google Maps API queries and manage data efficiently in Google Sheets. It's designed to extract specific location data based on a given list of ZIP codes and categories.

---

## Features
- Queries the Google Maps API for location data using predefined ZIP codes and subcategories.
- Filters, de-duplicates, and organizes data into structured rows in Google Sheets.
- Implements **exponential backoff retries** to handle API rate limits.
- Logs and updates statuses directly in Google Sheets for easy tracking.

---

## Prerequisites
1. **Google OAuth Credentials**: A configured Google Cloud project for Google Maps API and Sheets API access.
2. **Google Sheets**: A sheet with ZIP codes and categories defined (e.g., "AZ Zips").
3. **n8n Setup**: A running instance of n8n with credentials configured for Google OAuth.

---

## Setup Instructions

### 1. Prepare Google Sheets
- Add the ZIP codes to the "AZ Zips" sheet.
- Define subcategories in another sheet (e.g., "Google Maps Categories").
- Provide the sheet's URL in the `Settings` node of the workflow.

### 2. Configure API Access
- Set up Google OAuth credentials for Maps and Sheets APIs in n8n.
- Ensure your API key has access to the `places.searchText` endpoint.

### 3. Workflow Customization
- Modify `textQuery` parameters in the **GMaps API** node to match your query needs.
- Adjust trigger intervals as required (e.g., manual or scheduled execution).

### 4. Run the Workflow
- Execute the workflow manually or schedule periodic runs to keep your data updated.

---

## Notes
- This workflow includes robust error handling to retry failed API calls with exponential backoff.
- All data is organized and logged directly in Google Sheets for easy reference and updates.

For more information or issues, feel free to reach out!


## 📊 Basic Information

- **Workflow ID:** 2605
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 147373
- **Downloads:** 14737
- **Created:** 2024/12/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2605)

## 👤 Author

- **Name:** Alex Kim
- **Username:** @alexk1919

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **executeWorkflowTrigger** 
- **if** (×4)
- **stopAndError** (×3)
- **httpRequest** 
- **googleSheets** (×5)
- **set** (×6)
- **code** (×4)
- **removeDuplicates** 
- **wait** (×3)
- **splitInBatches** (×2)
- **limit** 
- **stickyNote** (×6)
- **filter** (×2)
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
