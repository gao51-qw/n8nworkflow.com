# 📌 Turn your LinkedIn insights into content ideas with Airtable and Real-Time Linkedin Scraper

> # 🚀 Transform LinkedIn Post Reactions into Content Ideas with Airtable

## 📝 Description
This workflow helps you to turn your LinkedIn activity into a powerful content ideation engine. It captures your most recent post reactions on LinkedIn automatically, filters them based on recency, and structures the content into Airtable—ready for brainstorming, inspiration, or publication planning.


## ⚙️ What It Does
- **Fetches** the latest liked posts from LinkedIn via a public API (***rapidapi.com/Real-Time Linkedin Scraper***).
- **Filters** posts to include only those marked as your decided reaction and posted in the last 7 days.
- **Extracts** the post text, author, links and more.
- **Formats** the data into a database-friendly structure.
- **Saves** the output in Airtable for easy tracking, tagging, or team collaboration.


## 💡 Use Cases
- Build a **content idea vault** from posts you admire.
- Capture inspiration from thought leaders.
- Identify trends based on what you find insightful.
- Supercharge your **personal brand or newsletter** by turning likes into learning.

## 🛠 Prerequisites
Before using this template, make sure you have:

1. ✅ A [RapidAPI account](https://rapidapi.com/) and access to the `linkedin-api8` endpoint.  
2. ✅ Your **RapidAPI key** and the target **LinkedIn username**.  
3. ✅ An [Airtable account](https://airtable.com/) with a base/table set up.


## 🧰 Setup Instructions
1. Clone this template into your n8n instance.
2. Open the `Fetch LinkedIn Likes` node and enter:
   - Your LinkedIn username.
   - Your RapidAPI key in the headers.
3. Open the `Save to Airtable` node and:
   - Connect your Airtable account.
   - Link the correct base (`Content Hub`) and table (`Ideas`).
4. Set your desired schedule in the `Trigger` node.
5. Activate the workflow and you're done!



## 📋 Airtable Setup
Create a base called `Content Hub` and a table named `Ideas` with the following columns:

| Column Name | Type       | Required | Notes                      |
|-------------|------------|----------|----------------------------|
| Title       | Single line text | ✅ | Generated from author info |
| Description | Long text  | ✅ | Contains post content       |
| Source      | URL        | ✅ | Link to the original post   |
| Type        | Single select | ✅ | Value: `Linkedin`  


## 📊 Basic Information

- **Workflow ID:** 3520
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1453
- **Downloads:** 145
- **Created:** 2025/4/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3520)

## 👤 Author

- **Name:** Batu Öztürk
- **Username:** @theozturkbatu

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **splitOut** (×2)
- **filter** 
- **set** 
- **airtable** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
