# Scrape and store data from multiple website pages

> This workflow allows extracting data from multiple pages website.

The workflow:
1) Starts in a country list at https://www.theswiftcodes.com/browse-by-country/.
2) Loads every country page (https://www.theswiftcodes.com/albania/) 
3) Paginates every page in the country page.
4) Extracts data from the country page.
5) Saves data to MongoDB.
6) Paginates through all pages in all countries.

It uses getWorkflowStaticData('global') method to recover the next page (saved from the previous page), and it goes ahead with all the pages.

There is a first section where the countries list is recovered and extracted.

Later, I try to read if a local cache page is available and I recover the cached page from the disk.

Finally, I save data to MongoDB, and we paginate all the pages in the country and for all the countries.

I have applied a cache system to save a visited page to n8n local disk. If I relaunch workflow, we check if a cache file exists to discard non-required requests to the webpage.

If the data present in the website changes, you can apply a Cron node to check the website once per week.

Finally, before inserting data in MongoDB, the best way to avoid duplicates is to check that swift_code (the primary value of the collection) doesn't exist.

I recommend using a proxy for all requests to avoid IP blocks. A good solution for proxy plus IP rotation is scrapoxy.io.

This workflow is perfect for small data requirements. If you need to scrape dynamic data, you can use a Headless browser or any other service.

If you want to scrape huge lists of URIs, I recommend using Scrapy + Scrapoxy.

## 📊 Basic Information

- **Workflow ID:** 1073
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 100277
- **Downloads:** 10027
- **Created:** 2021/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1073)

## 👤 Author

- **Name:** Miquel Colomer
- **Username:** @mcolomer

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **htmlExtract** (×2)
- **splitInBatches** 
- **mongoDb** (×2)
- **uproc** 
- **function** (×4)
- **if** (×3)
- **functionItem** (×2)
- **set** 
- **readBinaryFile** (×2)
- **writeBinaryFile** 
- **executeCommand** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
