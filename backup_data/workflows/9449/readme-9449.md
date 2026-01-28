# Automate lead generation from Google Search & Maps to Google Sheets

> ## This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate on-demand lead generation. 

It acts as a powerful scraping agent that takes a simple chat query, scours both Google Search and Google Maps for relevant businesses, scrapes their websites for contact details, and compiles an enriched lead list directly in Google Sheets.

## Who's this workflow for?
- Sales Development Representatives (SDRs)
- Local Marketing Agencies
- Business Development Teams
- Freelancers & Consultants
- Market Researchers

## How it works
**1. Start with a Chat Query:** The user initiates the workflow by typing a search query (e.g., "dentists in New York") into a chat interface.

**2. Multi-Source Search:** The workflow queries both the Google Custom Search API (for web results across multiple pages) and scrapes Google Maps (for local businesses) to gather a broad list of potential leads.

**3. Deep Dive Website Scraping:** For each unique business website found, the workflow visits the URL to scrape the raw HTML content of the page.

**4. Intelligent Contact Extraction:** Using custom code, it then parses the scraped website content to find and extract valuable contact information like email addresses, phone numbers, and social media links.

**5. Deduplicate and Log to Sheets:** Before saving, the workflow checks your Google Sheet to ensure the lead doesn't already exist. All unique, newly enriched leads are then appended as clean rows to your sheet, along with the original search query for tracking.

## Key Requirements to Use This Template
**1. n8n Instance & Required Nodes:**
- An active n8n account (Cloud or self-hosted).
- This workflow uses the official n8n LangChain integration (@n8n/n8n-nodes-langchain) for the chat trigger. If you are using a self-hosted version of n8n, please ensure this package is installed.

**2. Google Custom Search API:**
- A Google Cloud Project with the "Custom Search API" enabled.
- You will need an API Key for this service.
- You must also create a Programmable Search Engine and get its Search engine ID (cx). This tells Google what to search (e.g., the whole web).

**3. Google Sheets Account:**
- A Google account and a pre-made Google Sheet with columns for Business Name, Primary Email, Contact Number, URL, Description, Socials, and Search Query.

## Setup Instructions
**1. Configure the Chat Trigger:**
- In the "When chat message received" node, you can find the Direct URL or Embed code to use the chat interface.

**Set Up Google Custom Search API (Crucial Step):**
- Go to the "Custom Google Search API" (HTTP Request) node.
- Under "Query Parameters", you must replace the placeholder values for key (with your API Key) and cx (with your Search Engine ID).

**3. Configure Google Sheets:**
- In all Google Sheets nodes (Append row in sheet, Get row(s) in sheet, etc.), connect your Google Sheets credentials.
- Select your target spreadsheet (Document ID) and the specific sheet (Sheet Name) where you want to store the leads.

**4. Activate the Workflow:**
- Save the workflow and toggle the "Active" switch to ON.
- Open the chat URL and enter a search query to start generating leads.

## Connect with us
- Website: https://www.intuz.com/services
- Email: getstarted@intuz.com
- LinkedIn:
- https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 📊 Basic Information

- **Workflow ID:** 9449
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 876
- **Downloads:** 87
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9449)

## 👤 Author

- **Name:** Intuz 
- **Username:** @intuz

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **if** (×5)
- **googleSheets** (×5)
- **removeDuplicates** (×4)
- **splitInBatches** (×3)
- **code** (×7)
- **httpRequest** (×4)
- **filter** 
- **wait** 
- **set** (×3)
- **merge** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
