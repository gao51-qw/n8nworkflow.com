# Extract internal links from a webpage

> [![changelog](https://xqus.relezy.com/extract-internal-links-from-webpage/badge.svg)](https://xqus.relezy.com/extract-internal-links-from-webpage)

### Who Is This For?
- Web developers
- SEO specialists
- Digital marketers

### What Problem Is This Workflow Solving?
- Automates the extraction of internal links from a webpage
- Eliminates the manual and error-prone process of collecting links
- Facilitates analysis of website structure and optimization

### What This Workflow Does
- Uses HTTP request node to fetch HTML content from a specified webpage
- Parses the HTML to identify and extract internal links
- Compiles a list of URLs directing to pages within the same domain

### Setup
1. Configure the `Set Base URL` node:
   - Set the `url` field to the URL you want to analyze.

### How to Customize This Workflow to Your Needs
- Change the target URL in the `Set Base URL` node to analyze different webpages.
- Add nodes to:
  - Filter or categorize the extracted links
  - Export the list to a database or CSV
  - Send links via email or integrate with other tools

This workflow can be used as a base for workflows to manage the process of extracting internal links, aiding in website optimization and SEO efforts.

## 📊 Basic Information

- **Workflow ID:** 3167
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 5442
- **Downloads:** 544
- **Created:** 2025/3/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3167)

## 👤 Author

- **Name:** Audun
- **Username:** @xqus

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **splitOut** 
- **merge** 
- **set** (×2)
- **httpRequest** 
- **html** 
- **if** 
- **filter** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
