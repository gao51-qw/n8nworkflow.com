# Export all Strava activity data to Google Sheets

> ## What does this template help with?
Save the data of activities recorded and stored in Strava to a Google Sheets document.

## How it works:
- We have a Google Sheets spreadsheet where each row represents a Strava activity with the date, reference, distance, time, and elevation.
Periodically, the workflow checks the latest activities in our Strava account to see if any are missing from the spreadsheet and adds them to the list.
- All fields must be properly formatted according to how they are stored in the Google Sheets spreadsheet.

## Set up instructions
- Complete the Set up credentials step when you first open the workflow. You'll need a Google Sheets and Strava account.
- In the 'activities' node, you must enter the name of the file and the sheet where you want to save the imported data.
- In the 'Strava' node, you must select the corresponding credential.
- You can adjust the format of dates, times, and distances according to your needs in the 'strava_last' node.

The rest of the information is available at  [sherblog.es](https://sherblog.es/de-strava-a-google-sheets-gracias-a-n8n/)

Template was created in n8n v1.72.1

## 📊 Basic Information

- **Workflow ID:** 2678
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 2406
- **Downloads:** 240
- **Created:** 2024/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2678)

## 👤 Author

- **Name:** Sherlockes
- **Username:** @sherlockes

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **strava** 
- **code** 
- **googleSheets** (×2)
- **set** (×2)
- **removeDuplicates** 
- **sort** (×3)
- **limit** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
