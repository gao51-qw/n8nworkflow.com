This n8n workflow automates the discovery, enrichment, and comparative analysis of startups from the Crunchbase dataset via Bright Data, enhanced with AI, and exports structured results to Google Sheets.

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

