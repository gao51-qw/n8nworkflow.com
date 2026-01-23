# Scrape Google Places via Dumpling AI and auto-save to Google Sheets

> ### Who is this for?
This workflow is perfect for lead generation experts, digital marketers, SEO professionals, and virtual assistants who need to quickly collect local business information based on specific search terms without manually navigating Google Places.

---

### What problem is this workflow solving?
Manually searching Google Places for business leads is time-consuming and inconsistent. This workflow automates the entire process using Dumpling AI’s Google Places search endpoint, helping users collect accurate and structured business data and log it into a Google Sheet automatically.

---

### What this workflow does
This workflow runs daily at 1 PM. It starts by reading a list of business-related search terms from a Google Sheet (for example, “dentists in Dallas”). Each term is sent to Dumpling AI’s `search-places` endpoint, which returns local business listings from Google Places. The data is split, structured, and logged row-by-row in a connected Google Sheet.

---

### Nodes Overview

1. **Run Every Day at 1 PM**  
   A scheduled trigger that executes the workflow daily.

2. **Google Sheets (Input)** – `Fetch Search Terms from Sheet`  
   Pulls a list of search terms from a Google Sheet. Each term should describe a business category and location (e.g., “coffee shops in Atlanta”).

3. **HTTP Request** – `Scrape Google Places via Dumpling AI`  
   Sends each search term to Dumpling AI’s `/search-places` endpoint, returning data like business names, phone numbers, websites, ratings, and categories.

4. **Split In Batches** – `Split Places Result`  
   Breaks the list of businesses returned for each search term into individual items for processing.

5. **Google Sheets (Output)** – `Save Each Business to Sheet`  
   Saves the scraped data into a second Google Sheet. Each row contains:
   - `title`
   - `address`
   - `rating`
   - `category`
   - `phoneNumber`
   - `website`


---

### 📝 Notes

- You must set up Dumpling AI and generate your API key from: [Dumpling AI](https://www.dumplingai.com/)
- You can change the run schedule in the schedule node to fit your needs (e.g., weekly or hourly).


## 📊 Basic Information

- **Workflow ID:** 4632
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 828
- **Downloads:** 82
- **Created:** 2025/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4632)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **splitOut** 
- **googleSheets** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
