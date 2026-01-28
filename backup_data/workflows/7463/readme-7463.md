# Seo competitor analysis & data logging with Semrush API and Google Sheets

> ### Competitor Analysis & SEO Data Logging Workflow Using [Competitor Analysis Semrush API](https://rapidapi.com/skdeveloper/api/competitor-analysis-semrush)

## Description  
This workflow automates SEO competitor analysis using the **[Competitor Analysis Semrush API](https://rapidapi.com/skdeveloper/api/competitor-analysis-semrush)** and logs the data into **Google Sheets** for structured reporting.  
It captures domain overview, organic competitors, organic pages, and keyword-level insights from the **[Competitor Analysis Semrush API](https://rapidapi.com/skdeveloper/api/competitor-analysis-semrush)**, then appends them to different sheets for easy tracking.

---

## Node-by-Node Explanation

1. **On form submission** – Captures the website URL entered by the user.  
2. **Competitor Analysis** – Sends the website to the **[Competitor Analysis Semrush API](https://rapidapi.com/skdeveloper/api/competitor-analysis-semrush)** via HTTP POST request.  
3. **Re format output** – Extracts and formats the domain overview data.  
4. **Domain overview** – Saves organic keywords and traffic into Google Sheets.  
5. **Reformat** – Extracts the organic competitors list.  
6. **Organic Competitor** – Logs competitor domains, relevance, and traffic into Google Sheets.  
7. **Reformat 2** – Extracts organic pages data.  
8. **Organic Pages** – Stores page-level data such as traffic and keyword counts.  
9. **Reformat2** – Extracts organic keywords details.  
10. **organic keywords** – Logs keyword data like CPC, volume, and difficulty into Google Sheets.  

---

## Benefits  

- ✅ **Automated competitor tracking** – No manual API calls, all logged in Google Sheets.  
- ✅ **Centralized SEO reporting** – Data stored in structured sheets for quick access.  
- ✅ **Time-saving** – Streamlines research by combining multiple reports in one workflow.  
- ✅ **Accurate insights** – Direct data from the **[Competitor Analysis Semrush API](https://rapidapi.com/skdeveloper/api/competitor-analysis-semrush)** ensures reliability.  

---

## Use Cases  

- 📊 **SEO Research** – Track domain performance and competitor strategies.  
- 🔍 **Competitor Monitoring** – Identify competitor domains, keywords, and traffic.  
- 📝 **Content Strategy** – Find top-performing organic pages and replicate content ideas.  
- 💰 **Keyword Planning** – Use CPC and difficulty data to prioritize profitable keywords.  
- 📈 **Client Reporting** – Generate ready-to-use SEO competitor analysis reports in Google Sheets.  


## 📊 Basic Information

- **Workflow ID:** 7463
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1095
- **Downloads:** 109
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7463)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **code** (×4)
- **httpRequest** 
- **googleSheets** (×4)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
