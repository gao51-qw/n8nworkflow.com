# Automate business lead generation with SerpAPI and Google Sheets

> # Overview

This workflow helps you automatically collect verified business leads from Google Search using SerpAPI — no coding required.
It extracts company names, websites, emails, and phone numbers directly from search results and saves them into Google Sheets for easy follow-up or CRM import.

Perfect for marketers, freelancers, and agencies who want real, usable leads fast — without manual scraping or paid databases.

# How It Works

- SerpAPI Node performs a Google search for your chosen keyword or niche.
- Split Out Node separates each result for individual processing.
- HTTP Request Node optionally visits each site for deeper data extraction.
- Code Node filters, validates, and formats leads using smart parsing logic.
- Google Sheets Node stores the final structured data automatically.
- All steps include sticky notes with configuration help.

# Setup Steps

- Setup takes about 5–10 minutes:
- Add your SerpAPI key (replace the placeholder).
- Connect your Google Sheets account.
- Update the search term (e.g., “Plumbers in New York”).
- Run the workflow and watch leads populate your sheet in real time.

## 📊 Basic Information

- **Workflow ID:** 10657
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 101
- **Downloads:** 10
- **Created:** 2025/11/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10657)

## 👤 Author

- **Name:** Muhammad Shaheer Awan
- **Username:** @shaheer03

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **splitOut** 
- **merge** 
- **code** 
- **googleSheets** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
