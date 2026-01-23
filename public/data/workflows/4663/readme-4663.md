# Enrich Company Data from LinkedIn via Bright Data & Google Sheets

> This n8n workflow automates the enrichment of a company list by discovering and extracting each company’s official LinkedIn URL using Bright Data’s search capabilities and Google Gemini AI for HTML parsing and result interpretation.

![image.png](fileId:1451)

## Who is this template for?
This workflow is ideal for sales, business development, and data research professionals who need to collect official LinkedIn company profiles for multiple organizations, starting from a list of company names in Google Sheets. It’s especially useful for teams who want to automate sourcing LinkedIn URLs, enrich their prospect database, or validate company data at scale.

## How it works
**Manual Trigger:**
The workflow is started manually (useful for controlled batch runs and testing).
**Read Company Names:**
Company names are loaded from a specified Google Sheets table.
**Loop Over Each Company:**
Each company is processed one-by-one:
- A custom Google Search URL is generated for each name.
- A Bright Data Web Unlocker request is sent to fetch Google search results for “site:linkedin.com [company name]”.
- Parse LinkedIn Profile URL Using AI:
Google Gemini (or your specified LLM) analyzes the fetched search page and extracts the most likely official LinkedIn company profile.

**Result Handling:**
- If a profile is found, it’s stored in the results.
- If not, an empty result is created, but you can add custom logic (notifications, retries, etc.).

**Batch Data Enrichment:**
All found company URLs are bundled into a single request for further enrichment from a Bright Data dataset.
**Export:**
The workflow appends the final, structured data for each company to another sheet in your Google Sheets file.
## Setup instructions
**1. Replace API Keys:**
Insert your Bright Data API key in these nodes:
- Bright Data Web Request - Google Search for Company LinkedIn URL
- HTTP Request - Post API call to Bright Data
- Snapshot Progress
- HTTP Request - Getting data from Bright Data

**2. Connect Google Sheets:**
Set up your Google Sheets credentials and specify the sheet for reading input and writing output.

**3. Customize Output Structure:**
Adjust the Python code node (see sticky note in the template) if you want to include additional or fewer fields in your output.

**4. Adjust for Scale or Error Handling:**
- You can modify the logic for “not found” results (e.g., to notify a Slack channel or retry failed companies).

**5. Run the Workflow:**
Start manually, monitor the run, and check your Google Sheet for results.

## Customization guidance
**Change Input/Output Sheets:**
Update the sheet names or columns if your source/target spreadsheet has a different structure.

**Use Another AI Model:**
Replace the Google Gemini node with another LLM node if preferred.

**Integrate Alerts:**
Add Slack or email nodes to notify your team when a LinkedIn profile is not found or when the process is complete.

## 📊 Basic Information

- **Workflow ID:** 4663
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 729
- **Downloads:** 72
- **Created:** 2025/6/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4663)

## 👤 Author

- **Name:** Gleb D
- **Username:** @glebd

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** (×2)
- **merge** 
- **set** (×4)
- **httpRequest** (×4)
- **wait** 
- **code** (×2)
- **stickyNote** (×5)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
