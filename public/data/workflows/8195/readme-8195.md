# Crawl website blog content and save to Google Sheets with Dumpling AI

> ### Who is this for?  
This workflow is perfect for content strategists, SEO specialists, marketing agencies, and virtual assistants who need to quickly audit and collect blog content from client websites into a structured Google Sheet without doing manual crawling and copy-pasting.  

---  

### What problem is this workflow solving?  
Manually visiting a website, finding blog posts, and copying content into a spreadsheet is time-consuming and prone to errors. This workflow automates the process: it crawls a website, filters only blog-related pages, scrapes the article content, and stores everything neatly in Google Sheets for easy analysis and content strategy planning.  

---  

### What this workflow does  
The workflow starts when a client submits their website URL through a form. A Google Sheet is automatically created and headers are added for organizing the audit. Dumpling AI then crawls the website to discover all available pages, while the automation filters out only blog-related URLs. Each blog page is scraped for content, and the structured results (URL, crawled page, and website content) are appended row by row into the Google Sheet.  

---  

### Nodes Overview  

1. Form Trigger – `Form Submission (Client URL)`  
   Captures the client’s website URL to start the workflow.  

2. Google Sheets – `Create Blog Audit Sheet`  
   Creates a new Google Sheet with a title based on the submitted URL.  

3. Set – `Set Sheet Headers`  
   Defines the headers: `Url`, `Crawled_pages`, `website_content`.  

4. Code – `Format Header Row`  
   Formats the headers properly before sending them to the sheet.  

5. HTTP Request – `Insert Headers into Sheet`  
   Updates the Google Sheet with the prepared header row.  

6. HTTP Request – `Dumpling AI: Crawl Website`  
   Crawls the submitted URL to discover internal pages.  

7. Code – `Extract Blog URLs`  
   Filters the crawl results and keeps only URLs that match common blog patterns (e.g., `/blog/`, `/articles/`, `/posts/`).  

8. HTTP Request – `Dumpling AI: Scrape Blog Pages`  
   Scrapes the text content from each filtered blog page.  

9. Set – `Prepare Row Data`  
   Maps the URL, blog page link, and scraped content into structured fields.  

10. Google Sheets – `Save Blog Data to Google Sheets`  
    Appends the structured data into the audit sheet row by row.  

---  

### 📝 Notes  

- Set up Dumpling AI and generate your API key from: [Dumpling AI](https://www.dumplingai.com/)  
- Google Sheets must be connected with write permissions enabled.  
- You can change the crawl depth or limit (currently set to 10 pages) in the `Dumpling AI: Crawl Website` node.  
- The `Extract Blog URLs` node uses regex patterns to detect blog content. You can customize these patterns to match your website’s URL structure.  


## 📊 Basic Information

- **Workflow ID:** 8195
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 664
- **Downloads:** 66
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8195)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **formTrigger** 
- **googleSheets** (×2)
- **set** (×2)
- **code** (×2)
- **httpRequest** (×3)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
