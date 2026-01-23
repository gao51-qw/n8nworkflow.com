# This n8n template demonstrates how to automate the scraping of posts, comments, and sub-comments from a Facebook Group and store the data in a Supabase database.

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