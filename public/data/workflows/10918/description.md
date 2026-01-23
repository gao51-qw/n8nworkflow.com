This workflow automatically fetches job postings from the JSearch API once per day, filters out duplicates, and saves only new jobs to a Google Sheet. It also sends a Telegram summary with the number of newly added jobs.

### What this workflow does
• Builds a custom job search query  
• Fetches job listings from JSearch  
• Loads existing job IDs from Google Sheets  
• Removes already-saved jobs  
• Writes only new jobs into the sheet  
• Sends a Telegram summary with job count  

### Why it's useful
• Hands-free daily job monitoring  
• No duplicates — clean data tracking  
• Uses rate-limit-safe writing  
• Easy to customize search keywords  
• Works entirely with no-code steps  

### Requirements
• RapidAPI (JSearch) account  
• Google Sheets account  
• Telegram Bot token  

### Ideal For
• Job researchers  
• Recruitment automations  
• Personal job-search tracking  
• Data collection workflows
