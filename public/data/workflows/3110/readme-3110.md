# Convert Squarespace profiles to Shopify customers in Google Sheets

> This workflow converts an exported CSV from Squarespace profiles into a Shopify-compatible format for customer import.

## How It Works
Clone this [Google Sheets template](https://docs.google.com/spreadsheets/d/1ZUP7RySMCjQUBAvlZhSE1rOul1FMVHvTSF0QexuV7mQ/edit?usp=sharing), which includes two sheets:

#### Squarespace Profiles (Input)
1. Go to **Squarespace Dashboard → Contacts**  
2. Click the **three-dot icon** → Select **Export all Contacts**

#### Shopify Customers (Output)
- This sheet formats the data to match Shopify's customer import CSV.  
- Shopify Dashboard → Customers → **Import customers by CSV**

The workflow can run **on-demand** or be **triggered via webhook**.

### Via webhook
1. Set up webhook node to expect a POST request
2. Trigger the webhook using this code (psuedo) - replace {webhook-url} with the actual URL
```
    const formData = new FormData();
    formData.append('file', blob, 'profiles_export.csv'); // Add file to FormData

    fetch('{webhook-url}', { // Replace with your target URL
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });
```
3. The data is processed into the Shopify Customers sheet.

### Manually trigger
1. Import Squarespace profiles into the sheet.
2. Run the workflow to convert and populate the Shopify Customers sheet.

Once workflow is done, export the Shopify to csv and import to Shopify customers

## Requirements
To use this template, you need:

- Google Sheets API credentials

### Google Sheets Setup
Use this [sample Google Sheets template](https://docs.google.com/spreadsheets/d/1ZUP7RySMCjQUBAvlZhSE1rOul1FMVHvTSF0QexuV7mQ/edit?usp=sharing) to get started quickly.

## Who Is This For?
For anyone looking to automate Squarespace contact exports into a Shopify-compatible format—no more manual conversion!

Explore More Templates
Check out my other n8n templates:
👉 [n8n.io/creators/bangank36](https://n8n.io/creators/bangank36/)

## 📊 Basic Information

- **Workflow ID:** 3110
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 326
- **Downloads:** 32
- **Created:** 2025/3/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3110)

## 👤 Author

- **Name:** bangank36
- **Username:** @bangank36

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **googleSheets** (×3)
- **splitInBatches** 
- **stickyNote** 
- **extractFromFile** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
