# Send Typeform results to Google Sheet, Slack and email

> ![workflow-screenshot](fileId:19)

1. Trigger on new Typeform form submission
2. Write data to Google Sheet
3. Check severity of problem
4. If very severe post message to Slack
5. If not so severe just send an email

## Assumptions

### Google Sheet

Sheet in Spreadsheet called "Problems".

Columns Names:
 - Name
 - Email
 - Severity
 - Problem

Example Sheet: [https://docs.google.com/spreadsheets/d/17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU](https://docs.google.com/spreadsheets/d/17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU)

![googlesheettypeformerror.png](fileId:18)

### Typeform

Typeform formular with questions named exactly like the columns of the Google Sheet.


## 📊 Basic Information

- **Workflow ID:** 29
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2330
- **Downloads:** 233
- **Created:** 2019/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/29)

## 👤 Author

- **Name:** Jan Oberhauser
- **Username:** @jan

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **typeformTrigger** 
- **if** 
- **googleSheets** 
- **emailSend** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
