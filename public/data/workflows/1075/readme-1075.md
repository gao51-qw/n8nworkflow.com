# Filter the feedback from Typeform and store in Google Sheets

> This workflow allows you to filter positive and negative feedback received from a Typeform and insert the data into Google Sheets.

![workflow-screenshot](fileId:496)

**Typeform Trigger node:** Start the workflow when a new form is submitted via Typeform

**Set node:** Extract the information submitted in typeform

**IF node:** Filter positive and negative reviews (i.e. ratings above or below 3 out of 5).

**Google Sheets node**: Store the positive and negative reviews and ratings in two different sheets for each case.

## 📊 Basic Information

- **Workflow ID:** 1075
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1064
- **Downloads:** 106
- **Created:** 2021/5/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1075)

## 👤 Author

- **Name:** Lorena
- **Username:** @lorenanda

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **typeformTrigger** 
- **if** 
- **googleSheets** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
