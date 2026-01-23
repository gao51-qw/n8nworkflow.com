# Daily business idea insights aggregator from IdeaBrowser to Google Docs

> This automation runs daily at 8:00 AM to automatically collect and organize business idea insights from IdeaBrowser.com into a structured Google Docs document.
The workflow performs the following actions:
Data Collection: Fetches the "idea of the day" content from ideabrowser.com/idea-of-the-day using authenticated HTTP requests.
Content Processing: Extracts the base idea path and generates links to all related insight pages including value ladder, market analysis, proof signals, execution plans, and community insights. The workflow also cleans the HTML content to extract readable text.
Document Creation: Creates a new Google Docs document in a specified folder with a timestamp and idea name in the title format.
Content Aggregation: Systematically visits each insight page (main idea page, value ladder, why now, proof signals, market gap, execution plan, value equation, value matrix, ACP, community signals, and keywords) and collects their content.
Document Population: Processes the collected content through markdown formatting and appends it to the Google Docs document, creating a comprehensive report of the daily business idea with all its associated insights.
Automated Scheduling: Runs automatically every day at 8 AM, ensuring you have fresh business idea analysis delivered to your Google Drive without manual intervention.
This automation is perfect for entrepreneurs, business analysts, or anyone who wants to stay updated with curated business ideas and their detailed market analysis in an organized, searchable format.

## 📊 Basic Information

- **Workflow ID:** 4901
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1982
- **Downloads:** 198
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4901)

## 👤 Author

- **Name:** mahavishnu
- **Username:** @mahavishnu

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **markdown** 
- **code** 
- **httpRequest** (×2)
- **googleDocs** (×2)
- **merge** 
- **splitOut** 
- **splitInBatches** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
