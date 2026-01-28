# Automate job search & curation with JSearch API & Google Sheets

> ### How it works
This workflow automates the job curation process by retrieving pending job search inputs from a spreadsheet, querying the JSearch API for relevant job listings, and writing the curated results back to another sheet. It is designed to streamline job discovery and reduce manual data entry.

### Step-by-step
**1. Trigger & Input**
- The workflow starts on a defined schedule (e.g., once per day).

- It reads a row from the Job Scraper sheet where the status is marked as "Pending".

- The selected row includes fields like Position and Location, which are used to build the search query.

**2. Job Search & Processing**
- Sends a search request to the JSearch API using the Position and Location from the spreadsheet.

- Parses the API response and extracts individual job listings.

- Filters out empty, irrelevant, or invalid entries to ensure clean and relevant job data.

**3. Output & Status Update**
- Writes valid job listings to the Job Listing output sheet with fields such as job title, company name, location, and more.

- Updates the original row in the source sheet to mark it as Scraped, ensuring it will not be processed again in future runs.

### **Benefits**
- Reduces manual effort in job research and listing.

- Ensures only valid, structured data is stored and used.

- Prevents duplicate processing with automatic status updates.

- Simple to expand by adding more job sources or filters.

## 📊 Basic Information

- **Workflow ID:** 7040
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 819
- **Downloads:** 81
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7040)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×3)
- **httpRequest** 
- **code** 
- **filter** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
