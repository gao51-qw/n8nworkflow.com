# Automated SEO keyword & SERP analysis with DataForSEO for high-converting content

> # Overall Purpose:
The workflow automates the process of gathering extensive keyword data for a "Main Keyword." It starts by reading initial parameters from a Google Sheets template, creates a new dedicated Google Sheet for the research, queries multiple DataForSEO API endpoints for different types of keyword information (related, suggestions, ideas, autocomplete, subtopics, SERP, and PAA), and populates the newly created Google Sheet with this data across various tabs. A "Master All KW Variations" sheet is also populated to consolidate various keyword types.
# Tools & Services Used:
## Google Sheets:
As an input source for the main keyword and initial parameters (from a template).
As the output destination for all collected keyword data, organized into multiple sheets within a new spreadsheet file.
## Google Drive:
To create a new folder for each keyword research session.
To copy the Google Sheets template into this new folder.
## DataForSEO API: 
The primary source for all keyword research data. Specific endpoints utilized:
v3/dataforseo_labs/google/related_keywords/live
v3/dataforseo_labs/google/keyword_suggestions/live (used for both "suggestions" and "ideas")
v3/serp/google/autocomplete/live/advanced
v3/content_generation/generate_sub_topics/live
v3/serp/google/organic/live/advanced (for SERP and People Also Ask data)

# Implementation Steps for Businesses:
## Define Core Business Keywords: 
Start with the primary products, services, or solutions the business offers.
## Regularly Run the Workflow: 
Schedule the workflow to run for new keywords or to refresh data on existing important keywords.
## Collaborative Review: 
Marketing, sales, and even product teams should review the generated Google Sheets.
Marketing focuses on content ideas, SEO opportunities, and competitor SERP positions.
Sales focuses on understanding customer questions (PAA, Autocomplete) to refine pitches.
## Integrate into Content Calendar: 
Use the insights to plan blog posts, articles, FAQs, and social media content.
Update Sales Training: Share common customer questions and keyword insights with the sales team.
## Track & Measure: 
Monitor rankings for targeted keywords and the performance of content created based on this research to demonstrate ROI.
**
By leveraging this automated workflow, businesses can save significant time on manual keyword research, gain deeper insights into their market and competitors, and ultimately create more effective sales and marketing strategies that drive growth.**

## 📊 Basic Information

- **Workflow ID:** 4277
- **Complexity:** advanced
- **Node Count:** 55
- **Views:** 1211
- **Downloads:** 121
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4277)

## 👤 Author

- **Name:** Sam Yassine
- **Username:** @samyassine

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×8)
- **splitOut** (×7)
- **stickyNote** (×15)
- **googleSheets** (×14)
- **googleDrive** (×2)
- **httpRequest** (×6)
- **filter** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 55 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
