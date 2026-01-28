# Daily competitor research automation using SerpAPI, Google Sheets & Airtable

> ### How it works
This workflow automatically collects a list of companies from Google Sheets, searches for their competitors using SerpAPI, extracts up to 10 relevant competitor names with source links, and logs the results into both Google Sheets and Airtable. It runs on a set schedule, cleans and formats the company list, processes each entry individually, checks if competitors exist, and separates results into successful and “no competitors found” lists for organized tracking.

### Step-by-step
**1. Trigger & Input**
- Auto Run (Scheduled) – Executes every day at the set time (e.g., 9 AM).

- Read Companies Sheet – Pulls the list of companies from a Google Sheet (List column).

- Clean & Format Company List – Removes empty rows, trims names, and attaches row numbers for tracking.

- Loop Over Companies – Processes each company one at a time in batches.

**2. Competitor Search**
- Search Company Competitors (SerpAPI) – Sends a query like "{Company} competitors" to SerpAPI, retrieving structured search results in JSON format.

**3. Data Extraction & Validation**
- Extract Competitor Data from Search – Parses SerpAPI results to:

- Identify the company name

- Extract up to 10 competitor names

- Capture the top source URL

- Count total search results

- Has Competitors? – Checks if any competitors were found:

- Yes → Proceeds to logging

- No → Logs in “no results” list

**4. Logging Results**
- Log to Result Sheet – Appends or updates competitor data into the results Google Sheet.

- Log Companies Without Results – Records companies with zero competitors found in a separate section of the results sheet.

- Sync to Airtable – Pushes all results (successful or not) into Airtable for unified storage and analysis.

### Benefits
- Automated Competitor Research – Eliminates the need for manual Google searching.

- Daily Insights – Runs automatically at your chosen schedule.

- Clean Data Output – Stores structured competitor lists with sources for easy review.

- Multi-Destination Sync – Saves to both Google Sheets and Airtable for flexibility.

- Scalable & Hands-Free – Handles hundreds of companies without extra effort.

## 📊 Basic Information

- **Workflow ID:** 7313
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 674
- **Downloads:** 67
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7313)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×3)
- **code** (×2)
- **splitInBatches** 
- **httpRequest** 
- **if** 
- **airtable** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
