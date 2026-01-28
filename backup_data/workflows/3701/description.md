
### 👥 Who is this for?

This workflow is ideal for virtual assistants, researchers, developers, automation specialists, and data analysts who need to regularly extract and organize structured product information (like books) from a website. It’s especially useful for those working with catalog-based websites who want to automate extraction and delivery of clean, sorted data.

---

### 🧩 What problem is this solving?

Manually copying product listings like book titles and prices from a website into a spreadsheet is slow and repetitive. This automation solves that problem by scraping content using Dumpling AI, extracting the right data using CSS selectors, and formatting it into a clean CSV file that is sent to your email—all triggered automatically when a new URL is added to Google Sheets.

---

### ⚙️ What this workflow does

This template automates an entire content scraping and delivery process:

- Watches a Google Sheet for new URLs
- Scrapes the HTML content of the given webpage using Dumpling AI
- Uses CSS selectors in the HTML node to extract each book from the page
- Splits the HTML array into individual items
- Extracts the book title and price from each HTML block
- Sorts the books in descending order based on price
- Converts the sorted data to a CSV file
- Sends the CSV via email using Gmail

---

### 🛠️ Setup

1. **Google Sheets**
   - Create a sheet titled something like `URLs`
   - Add your product listing URLs (e.g., [http://books.toscrape.com](http://books.toscrape.com))
   - Connect the Google Sheets trigger node to your sheet
   - Ensure you have proper credentials connected

2. **Dumpling AI**
   - Create an account at [Dumpling AI](https://app.dumplingai.com])   - Generate your API key
   
   - Set the HTTP Method to `POST` and pass the URL dynamically from the Google Sheet
   - Use `Header Auth` to include your API key in the request header
   - Make sure `"cleaned": "True"` is included in the body for optimized HTML output

3. **HTML Node**
   - The first HTML node extracts the main book container blocks using:  
     `.row &gt; li`
   - The second HTML node parses out the individual fields:  
     - `title`: `h3 &gt; a` (via the `title` attribute)  
     - `price`: `.price_color`

4. **Sort Node**
   - Sorts books by `price` in descending order  
   - Note: price is extracted as a string, ensure it's parsable if you plan to use numeric filtering later

5. **Convert to CSV**
   - The JSON data is passed into a Convert node and transformed into a CSV file

6. **Gmail**
   - Sends the CSV as an attachment to a designated email

 

---

### 🔄 How to customize this workflow

- **Extract more data**: Add more CSS selectors in the second HTML node to pull fields like author, availability, or product links
- **Switch destinations**: Replace Gmail with Slack, Google Drive, Dropbox, or another platform
- **Adjust sorting**: Sort alphabetically or based on another extracted value
- **Use a different source**: As long as the site structure is consistent, this can scrape any listing-like page
- **Trigger differently**: Use a webhook, form submission, or schedule trigger instead of Google Sheets

---

### ⚠️ Dependencies and Notes

- This workflow uses **Dumpling AI** to perform the web scraping. This requires an API key and uses credits per request.
- The **HTML node** depends on valid CSS selectors. If the site layout changes, the selectors may need to be updated.
- Ensure you’re not scraping content from websites that prohibit automated scraping.
