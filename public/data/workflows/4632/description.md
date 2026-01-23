### Who is this for?
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
