# Enrich domains with SimilarWeb traffic analytics in Google Sheets & Airtable

> ### How it works
This workflow starts whenever a new domain is added to a Google Sheet. It cleans the domain, fetches traffic insights from SimilarWeb, extracts the most relevant metrics, and updates the sheet with enriched data. Optionally, it can also send this information to Airtable for further tracking or analysis.

### Step-by-step

**Trigger on New Domain**

- Workflow starts when a new row is added in the Google Sheet.

- Captures the raw URL/domain entered by the user.

**Clean Domain URL**

- Strips unnecessary parts like http://, https://, www., and trailing slashes.

- Stores a clean domain format (e.g., example.com) along with the row number.

**Fetch Website Analysis**

- Uses the SimilarWeb API to pull traffic and engagement insights for the domain.

- Data includes global rank, country rank, category rank, total visits, bounce rate, and more.

**Extract Key Metrics**

- Processes raw SimilarWeb data into a simplified structure.

- Extracted insights include:

  - Ranks: Global, Country, and Category.

  - Traffic Overview: Total Visits, Bounce Rate, Pages per Visit, Avg Visit Duration.

  - Top Traffic Sources: Direct, Search, Social.

  - Top Countries (Top 3): With traffic share percentages.

  - Device Split: Mobile vs Desktop.

**Update Google Sheet**

- Writes the cleaned and enriched domain data back into the same (or another) Google Sheet.

- Ensures each row is updated with the new traffic insights.

**Export to Airtable (Optional)**

- Creates a new record in Airtable with the enriched traffic metrics.

- Useful if you want to manage or visualize company/domain data outside of Google Sheets.

### Why use this?

- Automatically enriches domain lists with live traffic data from SimilarWeb.

- Cleans messy URLs into a standard format.

- Saves hours of manual research on company traffic insights.

- Provides structured, comparable metrics for better decision-making.

- Flexible: update sheets, export to Airtable, or both.

## 📊 Basic Information

- **Workflow ID:** 7623
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 232
- **Downloads:** 23
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7623)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **set** 
- **httpRequest** 
- **code** 
- **googleSheets** 
- **airtable** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
