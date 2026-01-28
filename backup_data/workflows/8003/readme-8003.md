# Google Maps to Airtable lead scraper with GPT contact extraction from impressum

> ## How it Works  
This workflow automates the process of discovering companies in different cities, extracting their contact data, and storing it in Airtable.  

1. **City Loop (Airtable → Google Maps API)**  
   - Reads a list of cities from Airtable.  
   - Uses each city combined with a search term (e.g., *SEO Agency, Berlin*) to query Google Maps.  
   - Marks processed cities as “checked” to allow safe restarts if interrupted.  

2. **Business Discovery & Deduplication**  
   - Searches for businesses via Google Maps Text Search.  
   - Checks Airtable to avoid scraping the same company multiple times.  
   - Fetches detailed info for each business via Google Maps Place Details API.  

3. **Impressum Extraction (Website → HTML Parsing)**  
   - Builds an *Impressum* page URL for each business.  
   - Requests the HTML and cleans out ads, headers, footers, etc.  
   - Extracts relevant contact info using an AI extractor (OpenAI node).  

4. **Contact Information Extraction**  
   - Pulls out:  
     - **Decision Maker** (Name + Position in one string, if available).  
     - **Email address** (must be valid, containing `@`).  
     - **Phone number** (international format if possible).  
   - Filters out incomplete results (e.g., empty email).  

5. **Database Storage**  
   - Writes company data back into Airtable:  
     - Company name  
     - Address  
     - Website  
     - Email  
     - Phone number  
     - Decision Maker (Name + Position)  
     - Search term & city used  

---

## Setup Steps  

### 1. Prerequisites  
- Google Maps API Key with access to:  
  - Places API → Text Search + Place Details  
- Airtable base with at least two tables:  
  - `Cities` (with columns: ID, City, Country, Status)  
  - `Companies` (for scraped results)  
- OpenAI API key (for decision maker + contact extraction).  

### 2. Authentication  
- Configure your Airtable API credentials in n8n.  
- Set up HTTP Query Auth with your Google Maps API key.  
- Add your OpenAI API key in the `OpenAI Chat` node.  

### 3. Configuration  
- In the Airtable “Cities” table, list all cities you want to scrape.  
- Define your search term in the “Execute Workflow” node (e.g., `SEO Agency`).  
- Adjust the batch sizes and wait intervals if you want faster/slower scraping (Google API has strict rate limits).  

### 4. Execution  
- Start manually or from another workflow.  
- The workflow will scrape all companies in each city step by step.  
- It can be safely stopped and resumed — cities already marked as processed will be skipped.  

### 5. Results  
- Enriched company dataset stored in Airtable, ready for CRM import, lead generation, or further automation.  

---

## Tips & Notes  
- Always respect GDPR and local laws when handling scraped data.  
- The workflow is modular → you can swap Airtable with Google Sheets, Notion, or a database of your choice.  
- Add custom filters to limit results (e.g., only companies with websites).  
- Use sticky notes inside the workflow to understand each step (mandatory for template publishing).  
- **Keep an eye on Google Places API costs** — queries are billed after the free quota. If you are still within the first 2 months of the Google Cloud Developer free trial, you can benefit from free credits.  


**

## 📊 Basic Information

- **Workflow ID:** 8003
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 736
- **Downloads:** 73
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8003)

## 👤 Author

- **Name:** SuS
- **Username:** @sulieman-said

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **splitOut** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** (×3)
- **splitInBatches** (×3)
- **wait** (×2)
- **html** 
- **executeWorkflowTrigger** 
- **manualTrigger** 
- **executeWorkflow** 
- **airtable** (×4)
- **filter** (×3)
- **stickyNote** (×4)
- **summarize** 
- **if** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
