# Find top keywords for Youtube and Google and store them in NocoDB

> **Template Description**  
**WDF Top Keywords**: This workflow is designed to streamline keyword research by automating the process of generating, filtering, and analyzing Google and YouTube keyword data. Ensure compliance with local regulations and API terms of service when using this workflow.

---

📌 **Purpose**  
The WDF Top Keywords workflow automates collecting, processing, and managing keyword data for both Google and YouTube platforms. Leveraging multiple data sources and APIs ensures an efficient and scalable approach to identifying high-impact keywords for SEO, content creation, and marketing campaigns.

### **Key Features**
- Automates the generation of keyword suggestions using autocomplete APIs.
- Integrates with NocoDB to store and manage keyword data.
- Filters keywords based on monthly search volume and cost-per-click (CPC).
- Supports bulk import of keyword data into structured databases.
- Outputs both Google and YouTube keyword insights, enabling informed decision-making.

---

🎯 **Target Audience**  
This workflow is ideal for:
- Digital marketers aiming to optimize ad campaigns with data-driven insights.
- SEO specialists looking to identify high-potential keywords efficiently.
- Content creators seeking trending and relevant topics for their platforms.
- Agencies managing keyword research for multiple clients.

---

⚙️ **How It Works**  
1. **Trigger**: The workflow runs on-demand or at scheduled intervals.  
2. **Keyword Generation**:  
   - Retrieves base keywords from NocoDB.  
   - Generates autocomplete suggestions for Google and YouTube.  
3. **Data Processing**:  
   - Filters and formats keyword data based on specific criteria (e.g., search volume, CPC).  
   - Consolidates results for efficient storage and analysis.  
4. **Storage and Output**:  
   - Saves data into structured NocoDB tables for tracking and reuse.  
   - Bulk imports monthly search volume statistics for detailed analysis.

---

🛠️ **Key APIs and Tools Used**  
- **NocoDB**: Stores and organizes base and processed keyword data.  
- **DataForSEO API**: Provides search volume and keyword performance metrics.  
- **Google Autocomplete API**: Suggests relevant Google search terms.  
- **YouTube Autocomplete API**: Suggests trending YouTube keywords.  
- **Social Flood Docker Instance**: Serves as the local integration hub.  

---

**Setup Instructions**  
1. Required Tools:
   - [NocoDB](https://www.nocodb.com/)  
   - [n8n](https://n8n.io/)  
   - [DataForSEO Account](https://app.dataforseo.com/?aff=184401)  
   - [Social Flood Docker Instance](https://github.com/rainmanjam/social-flood)  
2. Create the following NocoDB tables:  
   - Base Keyword Search  
   - Second Order Google Keywords  
   - Second Order YouTube Keywords  
   - Search Volume  

This template empowers users to handle complex keyword research tasks effortlessly, saving time and providing actionable insights. Share this template to enhance your workflow efficiency!



## 📊 Basic Information

- **Workflow ID:** 2884
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 3433
- **Downloads:** 343
- **Created:** 2025/2/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2884)

## 👤 Author

- **Name:** Shannon Atkinson
- **Username:** @rainmanjam

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **code** (×5)
- **stickyNote** (×7)
- **nocoDb** (×5)
- **httpRequest** (×8)
- **splitOut** (×2)
- **filter** (×2)
- **if** (×2)
- **splitInBatches** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
