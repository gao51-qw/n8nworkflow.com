# Verifying email deliverability using  google sheets and Effibotics API

> This workflow helps marketers verify and update data using EffiBotics Email Verifier API.

Copy and create a list with emails as on this one https://docs.google.com/spreadsheets/d/1rzuojNGTaBvaUEON6cakQRDva3ueGg5kNu9v12aaSP4/edit#gid=0

The trigger checks for any updates in the number of rows that are present in  a sheet and updates the verified emails on Google sheets

Once you update a new cell, the new data is read, and the email is checked for its validity before. The results are then updated in real-time on the sheet.

Happy Emailing!

## 📊 Basic Information

- **Workflow ID:** 2191
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1767
- **Downloads:** 176
- **Created:** 2024/3/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2191)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **removeDuplicates** 
- **httpRequest** 
- **stickyNote** 
- **googleSheets** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
