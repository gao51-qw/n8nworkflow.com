## What it does
This workflow automates content syndication and posting to **LinkedIn** and **X/Twitter**. It takes existing long-form articles and generates from them engaging social posts optimized for each platform.

The workflow takes links to existing articles from a given sitemap. It randomly selects the next article to republish, making sure that articles are not repeated. For simplicity it uses a Google spreadsheet to track the articles that have already been republished.

## Requirements
1. Existing [sitemap](https://www.sitemaps.org/protocol.html)
2. Google Gemini API key (or other model provider's key)
3. Google Sheets credentials
4. LinkedIn credentials
5. X/Twitter credentials

## How to set up
1. Adjust the schedule as needed (by default triggers daily at noon)
2. Configure parameters in the **parameters** node:
    - Set the sitemap URL (e.g. https://example.com/sitemap.xml)
    - Set the language of the posts
    - Enable/disable channels as needed
3. Configure Google Sheets credentials for **get processed articles** and **add processed articles** nodes
3. Create a new Google spreadsheet document with "url", "status", "timestamp", "LinkedIn post" and "Twitter post" columns
4. Specify that spreadsheet document in **get processed articles** node (other nodes will take it from here)
5. Add Google Gemini API key for the model (or change to any other model of choice)
6. Configure LinkedIn and X/Twitter credentials for publishing
