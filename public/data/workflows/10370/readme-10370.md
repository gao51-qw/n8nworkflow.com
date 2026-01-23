# Automated Facebook group scraper: posts, comments, and sub-comments to Supabase

> # This n8n template demonstrates how to automate the scraping of posts, comments, and sub-comments from a Facebook Group and store the data in a Supabase database.

Use cases are many: Gather user engagement data for analysis, archive posts and comments for research, or monitor community sentiment by collecting feedback across discussions!

**Good to know**

At the time of writing, this workflow requires the apify api for scraping and Supabase credentials for database storage.

# How it works

- The Facebook Group posts are retrieved using an Apify scraper node.
- For each post, comments and sub-comments are collected recursively to capture all levels of engagement.
- The data is then structured and stored in Supabase, creating records for posts, comments, and sub-comments.
- This workflow includes the option to adjust how often it scrapes and which group to target, making it easy to automate collection on a schedule.

# How to use

- The workflow is triggered manually in the example, but you can replace this with other triggers like webhooks or scheduled workflows, depending on your needs.
- This workflow is capturing data points, such as user interactions or media attached to posts.

# Requirements

- Apify account API
- Supabase account for data storage

# Customizing this workflow
This template is ideal for gathering and analyzing community feedback, tracking discussions over time, or archiving group content for future use.

## 📊 Basic Information

- **Workflow ID:** 10370
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 940
- **Downloads:** 94
- **Created:** 2025/10/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10370)

## 👤 Author

- **Name:** Muhammad Abrar
- **Username:** @muhammadab1

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **@apify/n8n-nodes-apify.apify** (×4)
- **supabase** (×3)
- **set** (×2)
- **if** 
- **splitOut** 
- **stickyNote** (×3)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
