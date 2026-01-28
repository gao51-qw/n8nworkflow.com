# Scrape business emails from Google Maps without the use of any third party APIs

> ## Who is this template for?
This workflow template is designed for sales, marketing, and business development professionals who want a cost-effective and efficient way to generate leads. By leveraging n8n core nodes, it scrapes business emails from Google Maps without relying on third-party APIs or paid services, ensuring there are no additional costs involved.

Ideal for small business owners, freelancers, and agencies, this template automates the process of collecting contact information for targeted outreach, making it a powerful tool for anyone looking to scale their lead generation efforts without incurring extra expenses.

You can watch the video tutorial here: https://youtu.be/HaiO-UeiKBA

## How it works
This template streamlines email scraping from Google Maps using only n8n core nodes, ensuring a completely free and self-contained solution. Here’s how it operates:

### Input Queries
You provide a list of queries, each consisting of keywords related to the type of business you want to target and the specific region or subregion you’re interested in.

### Iterates through Queries
The workflow processes each query one at a time. For each query, it triggers a sub-workflow dedicated to handling the scraping tasks.

### Scrapes Google Maps for URLs
Using these queries, the workflow scrapes Google Maps to collect URLs of business listings matching the provided criteria.

### Fetches HTML Content
The workflow then fetches the HTML pages of the collected URLs for further processing.

### Extracts Emails

Using a Code Node with custom JavaScript, the workflow runs regular expressions on the HTML content to extract business email addresses.

## Setup
1. **Add Queries:**
Open the first node, "Run Workflow" and input a list of queries, each containing the business keywords and the target region.

2. **Configure the Google Sheets Node:**
Open the Google Sheets node and select a document and specific sheet where the scraped results will be saved.

3. **Run the workflow**:
Click on "Test workflow" and watch your Google Sheets document gradually receive business email addresses. 

## Customize as Needed:

You can adjust the regular expressions in the Code Node to refine the email extraction logic or add logic to extract other kinds of information.

## 📊 Basic Information

- **Workflow ID:** 2567
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 198089
- **Downloads:** 19808
- **Created:** 2024/11/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2567)

## 👤 Author

- **Name:** Akram Kadri
- **Username:** @akramkadri

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **removeDuplicates** (×2)
- **splitInBatches** (×3)
- **httpRequest** (×2)
- **code** (×2)
- **filter** (×2)
- **aggregate** 
- **splitOut** 
- **googleSheets** 
- **executeWorkflowTrigger** 
- **manualTrigger** 
- **wait** 
- **executeWorkflow** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
