# Extract & process specific links from sitemap.xml

> ## Description
This workflow reads a `sitemap.xml` file, extracts all URLs, and allows you to filter out specific types of links—such as PDF files, images, or any other content—based on your needs.

## Who Is This For?
- **SEO Specialists** looking to analyze specific URLs in their sitemap.
- **Developers** who need to extract links for automated processing.
- **Content Managers** filtering out downloadable assets like PDFs or images.

## How It Works
1. **Fetch `sitemap.xml`** – The workflow reads the sitemap file from a given URL.
2. **Extract URLs** – Parses all the URLs listed in the sitemap.
3. **Filter URLs** – Use a simple filter to extract only the links you need (e.g., *.pdf).
3. **Export or Process** – The filtered list can be sent via email, stored in a database, or used in another workflow.

## Customization
1. Edit the **Set sitemap URL** block and edit the `sitemapUrl` value to the sitemap you want to fetch.
2. Edit the **Filter URLs** block and edit the filter conditions to meet your needs.

## 📊 Basic Information

- **Workflow ID:** 3133
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 3240
- **Downloads:** 324
- **Created:** 2025/3/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3133)

## 👤 Author

- **Name:** Audun
- **Username:** @xqus

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **splitOut** 
- **httpRequest** 
- **xml** 
- **filter** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
