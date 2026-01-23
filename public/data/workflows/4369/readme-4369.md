# Convert Venmo statement CSV file to QuickBooks CSV import

> 🧾 Say goodbye to manual Venmo-to-QuickBooks formatting!
This automated workflow transforms raw Venmo CSV exports into QuickBooks-ready files and backs them up seamlessly to Google Drive or Dropbox.

⚙️ What This Workflow Does:

📤 1. Accepts a Venmo CSV Upload
— Triggers on form submission to upload a .csv Venmo transaction file.

📂 2. Extracts Raw CSV Data
— Reads the uploaded file and prepares it for processing.

🛠️ 3. Generates a Smart File Name
— Dynamically names the output file using the transaction month and timestamp:
QB_Venmo_YYYY-MM_HHMM.csv.

🔄 4. Converts Raw Venmo Data
— Filters invalid rows and transforms valid transactions into QuickBooks-friendly format:
 • Standardizes field names (e.g., Amount (total) → Amount)
 • Builds descriptive transaction summaries based on context (e.g., transfers vs payments)

📝 5. Creates a New CSV File
— Structures the processed data into a new downloadable CSV.

☁️ 6. Saves to Google Drive
— Automatically uploads the finalized file to your selected folder in Google Drive.

📦 7. (Optional) Backs Up to Dropbox
— Also configured to upload to Dropbox (currently disabled).

## 📊 Basic Information

- **Workflow ID:** 4369
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 240
- **Downloads:** 24
- **Created:** 2025/5/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4369)

## 👤 Author

- **Name:** Jason Plaisted
- **Username:** @jplaisted

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **extractFromFile** 
- **convertToFile** 
- **dropbox** 
- **code** (×2)
- **formTrigger** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
