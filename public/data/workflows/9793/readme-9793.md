# Automating job searches on LinkedIn and X, then saving results to Notion

> # LinkedIn Job Search Automation

Creator: [Summer Chang](https://www.youtube.com/channel/UCAdp-nOSH-jcrwXkLlUMyXQ)

## Setup Instructions
This n8n workflow automatically searches for senior designer jobs on LinkedIn every day at 5am and saves them to a Notion database.
Prerequisites

n8n instance (cloud or self-hosted)
Notion account with API access
A Notion database set up to receive job listings

## Setup Steps
✅ 1. Create Your Notion Database
Or [duplicate my template](https://summerchangco.notion.site/job-search-automation?v=28e2d5cd4ef48197a875000cb99628e5&source=copy_link)

✅ 2. Connect Notion to n8n

In the "Save to Notion" node, click on the Notion credentials
Follow the authentication flow to connect your Notion account
Select your job search database from the dropdown

✅ 3. Customize Your Search Criteria
In the "Set Search Criteria" node, modify these parameters to match your job preferences: 

search_keywords: Job titles to search for (comma-separated)

Default: senior product designer, product design lead, senior UX designer, AI designer

excluded_keywords: Terms to filter out (comma-separated)

Default: contract, freelance

location: Where you want to work (comma-separated)

Default: remote, san francisco

f_TPR: Time filter for job postings

r86400 = Last 24 hours
r604800 = Last week
r2592000 = Last month

sortBy: How to sort results

DD = Most recent first
R = Most relevant first

✅ 4. Adjust the Schedule
In the "Everyday @5am" node:

Click on the node
Modify the schedule to your preferred time
You can set it to run daily, weekly, or at custom intervals

✅ 5. Set Result Limits
In the "Limit1" node:

Default: Processes 10 jobs per run
Adjust the maxItems value to get more or fewer results

✅ 6. Configure Wait Time (Optional)
The "Wait2" node adds a 10-second delay between requests to avoid rate limiting:

Default: 10 seconds
Increase if you're getting blocked by LinkedIn
Decrease for faster processing (not recommended)

## How It Works

1. Trigger: Runs automatically every day at 5am
2. Search: Queries LinkedIn with your specified criteria
3. Parse: Extracts job title, company, location, and URL from search results
4. Filter: Removes any jobs with missing critical information
5. Wait: Delays between requests to avoid rate limiting
6. Fetch Details: Retrieves full job descriptions and poster information
Save: Adds each job to your Notion database

## 📊 Basic Information

- **Workflow ID:** 9793
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 924
- **Downloads:** 92
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9793)

## 👤 Author

- **Name:** Summer
- **Username:** @summerchang

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×6)
- **httpRequest** (×2)
- **limit** 
- **code** (×3)
- **notion** (×2)
- **filter** 
- **wait** (×2)
- **scheduleTrigger** (×2)
- **set** (×2)
- **twitter** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
