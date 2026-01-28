# Extract top products from any website with Dumpling AI and GPT-4o

> ### 🛍️ Pick Best-Value Products from Any Website Using Dumpling AI, GPT-4o, and Google Sheets

### Who’s it for  
This workflow is for eCommerce researchers, affiliate marketers, and anyone who needs to compare product listings across sites like Amazon. It’s perfect for quickly identifying top product picks based on delivery speed, free shipping, and price.

### What it does  
Just submit a product listing URL. The workflow will crawl it using Dumpling AI, take screenshots of the pages, and pass them to GPT-4o to extract up to 3 best-value picks. It analyzes screenshots visually—no HTML scraping needed.

Each result includes:  
- product name  
- price  
- review count  
- free delivery date (if available)

### How it works  
- 📝 Receives a URL through a web form  
- 🧠 Uses Dumpling AI to crawl the website  
- 📸 Takes screenshots of each product listing  
- 🔍 GPT-4o analyzes each image to pick top products  
- 🔧 A code node parses and flattens the output  
- 📊 Google Sheets stores the result  
- 📧 Sends the spreadsheet link via email

### Requirements  
- **Dumpling AI token** 
- **OpenAI key** (GPT-4o)  
- **Google Sheet** with columns: `product name`, `price`, `reviews no.`, `free_delivery_date`

&gt; You can customize the AI prompt to extract other visual insights (e.g., ratings, specs).


## 📊 Basic Information

- **Workflow ID:** 8565
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 381
- **Downloads:** 38
- **Created:** 2025/9/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8565)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **googleSheets** 
- **gmail** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
