# Analyze Crunchbase startups by keyword with Bright Data, Gemini AI & Google Sheets

> This n8n workflow automates the discovery, enrichment, and comparative analysis of startups from the Crunchbase dataset via Bright Data, enhanced with AI, and exports structured results to Google Sheets.

🚀 **What It Does**
- Receives a keyword from the user that describes the area of interest — such as an industry, sector, technology, or trend (e.g., "AI in healthcare", "carbon capture", "edtech"). 
- This keyword is used to filter relevant startups from the Crunchbase dataset via Bright Data.
- Fetches data from Bright Data's Crunchbase snapshot API.
- Extracts and cleans key fields from the JSON response.
- Sorts startups by most recent founding date.
- Selects the top 10 most recent companies.
- Sends these 10 companies to Google Gemini AI for comparative analysis.
- Embeds the AI-generated summary into the final export.

- Appends results to a Google Sheet for tracking and reporting.

🛠️ **Step-by-Step Setup**
1. Get user keyword input from a form.
2. Use 3 Bright Data requests:
Start snapshot.
Poll snapshot status until ready.
Fetch snapshot data in JSON format.
3. Use a Python Code node to:
4. Parse and sort companies by founded_date.
5. Clean and standardize data fields.
6. Pass the top 10 companies into Gemini AI for comparative insight.
7. Merge the AI output back with company data.
8. Send everything to Google Sheets.

🧠 **How It Works**
- Snapshot Control: Polls every few seconds until the Bright Data snapshot is complete.
- Code Cleanup: Ensures consistent structure and formatting across all records.
- Comparative AI Analysis: Gemini compares all 10 companies at once and returns a unified analysis.
- Merging Output: AI analysis is merged into the first company’s record (to avoid duplication), while all 10 are exported.

📤 **Google Sheet Output**
Each row includes:
- name, 
founded, 
about, 
num_employees, 
type, 
ipo_status, 
full_description, 
social_media_links, 
address, 
website, 
funding_total, 
num_investors, 
lead_investors, 
founders, 
products_and_services, 
monthly_visits, 
crunchbase_link, 
ai_analysis.

- AI comparative analysis summary (only once per batch – attached to the first company).
- All fields from above customizible through the python code (you can add additional ones from Bright Data output).

🔐 **Required Credentials**
- **Bright Data** – Replace **YOUR_API_KEY** in 3 HTTP Request nodes.
- **Google Gemini API** – For AI analysis.
- **Google Sheets OAuth2** – For spreadsheet export.

⚠️ **Notes**
- AI output is shared once per batch of 10 companies, attached to the first company entry. You can configure the limit of batch size in the first "Code" node.



## 📊 Basic Information

- **Workflow ID:** 4565
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 346
- **Downloads:** 34
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4565)

## 👤 Author

- **Name:** Gleb D
- **Username:** @glebd

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** (×3)
- **wait** 
- **if** 
- **code** (×2)
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **formTrigger** 
- **merge** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
