# Track website SEO metrics with Moz API and Google Sheets integration

> ### Automated DA PA Checker Workflow for SEO Analysis
### Description
This n8n workflow collects a website URL via form submission, retrieves SEO metrics like Domain Authority (DA) and Page Authority (PA) using the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker), and stores the results in Google Sheets for easy tracking and analysis.

---

### Node-by-Node Explanation 

1. **On form submission** – Captures the website input from the user to pass to the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker).  
2. **DA PA API Request** – Sends the website to the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker) via RapidAPI to fetch DA, PA, spam score, DR, and organic traffic.  
3. **If** – Checks if the API request to the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker) returned a successful response.  
4. **Clean Output** – Extracts only the useful data from the [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker) response for saving.  
5. **Google Sheets** – Appends the cleaned SEO metrics to a Google Sheet for record-keeping.

---

## Use Cases
- **SEO Analysis** – Quickly evaluate a website’s DA/PA metrics for optimization strategies.  
- **Competitor Research** – Compare domain authority and organic traffic with competitors.  
- **Link Building** – Identify high-authority domains for guest posting and backlinks.  
- **Domain Purchase Decisions** – Check metrics before buying expired or auctioned domains.

---

## Benefits
- **Automated Workflow** – From input to Google Sheets without manual intervention.  
- **Accurate Metrics** – Uses the trusted [**Moz DA PA Checker API**](https://rapidapi.com/skdeveloper/api/moz-da-pa-checker) for DA, PA, spam score, DR, and traffic.  
- **Instant Insights** – Get SEO scores in seconds for faster decision-making.  
- **Easy Integration** – Seamless connection between RapidAPI and Google Sheets for data storage.


## 📊 Basic Information

- **Workflow ID:** 7213
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 416
- **Downloads:** 41
- **Created:** 2025/8/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7213)

## 👤 Author

- **Name:** Sk developer 
- **Username:** @skdeveloper

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **if** 
- **googleSheets** 
- **httpRequest** 
- **code** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
