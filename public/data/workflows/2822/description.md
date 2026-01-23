## What is this workflow?  
This **n8n template** automates the process of adding an **AI-generated summary** at the top of your WordPress posts.  
It **retrieves, processes, and updates** your posts dynamically, ensuring efficiency and flexibility without relying on a heavy WordPress plugin.  

## Example of AI Summary Section

![Example of AI Summary Section](https://i.imgur.com/XkNKJsJ.png)  

## How It Works  
1. **Triggers** → Runs on a **scheduled interval** or via a **webhook** when a new post is published.  
2. **Retrieves posts** → Fetches content from WordPress and converts HTML to Markdown for AI processing.  
3. **AI Summary Generation** → Uses OpenAI to create a concise summary.  
4. **Post Update** → Inserts the summary at the top of the post while keeping the original excerpt intact.  
5. **Data Logging & Notifications** → Saves processed posts to **Google Sheets** and notifies a **Slack channel**.  

## Why use this workflow?  
✅ **No need for a WordPress plugin** → Keeps your site lightweight.  
✅ **Highly flexible** → Easily connect with **Google Sheets, Slack, or other services**.  
✅ **Customizable** → Adapt AI prompts, formatting, and integrations to your needs.  
✅ **Smart filtering** → Ensures posts are not reprocessed unnecessarily.  

💡 *Check the detailed sticky notes for setup instructions and customization options!*  
