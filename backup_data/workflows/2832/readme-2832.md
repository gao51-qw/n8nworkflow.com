# Scrape latest 20 TechCrunch articles

> # Retrieve 20 Latest TechCrunch Articles

## Who is this for?
This workflow is designed for developers, content creators, and data analysts who need to scrape recent articles from TechCrunch. It’s perfect for anyone looking to aggregate news articles or create custom feeds for analysis, reporting, or integration into other systems.

## What problem is this workflow solving?
This workflow automates the process of scraping recent articles from TechCrunch. Manually collecting article data can be time-consuming and inefficient, but with this workflow, you can quickly gather up-to-date news articles with relevant metadata, saving time and effort.

## What this workflow does
This workflow retrieves the latest 20 news articles from TechCrunch’s “Recent” page. It extracts the article URLs, metadata (such as titles and publication dates), and main content for each article, allowing you to access the information you need without any manual effort.

## Setup
1. Clone or download the workflow template.
2. Ensure you have a working n8n environment.
3. Configure the HTTP Request nodes with your desired parameters to connect to the TechCrunch API.
4. (Optional) Customize the workflow to target specific sections or topics of interest.
5. Run the workflow to retrieve the latest 20 articles.

## How to customize this workflow to your needs
- Modify the HTTP request to pull articles from different pages or sections of TechCrunch.
- Adjust the number of articles to retrieve by changing the selection criteria.
- Add additional processing steps to further filter or analyze the article data.

## Workflow Steps
1. **Send an HTTP request** to the TechCrunch "Recent" page.
2. **Parse a posts box** that holds the list of articles.
3. **Parse all posts** to extract all articles.
4. **spilt out posts** for each article.
5. **Extract the URL and metadata** from each article.
6. **Send an HTTP request** for each article using its URL.
7. **Locate and parse** the main content of each article.

---

**Note:** Be sure to update the HTTP Request nodes with any necessary headers or authentication to work with TechCrunch’s website.

## 📊 Basic Information

- **Workflow ID:** 2832
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 6650
- **Downloads:** 665
- **Created:** 2025/2/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2832)

## 👤 Author

- **Name:** Teddy
- **Username:** @teddysbeach

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **html** (×4)
- **splitOut** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
