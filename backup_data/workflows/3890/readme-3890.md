# Create customized Google Slides presentations from CSV data for cold outreach 🚀

> ### 👥 Who Is This For?

Sales and marketing teams seeking efficient, hands‑free generation of personalized slide decks for each prospect from CSV lead lists.

### 🛠 What Problem Does This Solve?

Manually editing presentation decks for large lead lists is slow and error‑prone. This workflow fully automates:

* Importing and parsing CSV lead data
* Logging leads and outputs in Google Sheets
* Duplicating a master Slides template per lead
* Injecting lead‑specific variables into slides

### 🔄 Node‑by‑Node Breakdown

| Step | Node                                     | Purpose                                                  |
| ---- | ---------------------------------------- | -------------------------------------------------------- |
| 1    | New Leads Arrived                        | Detect new CSV uploads in Drive                          |
| 2    | File Type?                               | Filter for `.csv` files only                             |
| 3    | Download by ID                           | Download the CSV content                                 |
| 4    | Create new Sheet                         | Create a Google Sheet to record lead data                |
| 5    | Combine Empty New Document with CSV Data | Structure each lead record for slide creation            |
| 6    | Merge Data for new Lead Document         | Map template placeholders to lead values                 |
| 7    | Get all Leads                            | Retrieve sheet rows to iterate through each lead         |
| 8    | MoveToLeadListFolder                     | Move processed CSV to an archive folder                  |
| 9    | Copy Slides Template                     | Make a copy of the master Slides deck                    |
| 10   | Create Custom Presentation               | Replace placeholders in the copied deck with lead data   |
| 11   | Add Presentation ID to Lead              | Write the generated presentation URL back into the Sheet |

### ⚙️ Pre‑conditions / Requirements

* n8n with Google Drive, Sheets, and Slides credentials
* A master Google Slides deck with placeholder tokens (e.g. {{Name}}, {{Company}})
* A Drive folder for incoming CSV lead files

### ⚙️ Setup Instructions

1. Import this workflow into your n8n instance.
2. Configure the New Leads Arrived node to watch your CSV folder.
3. Enter your Google credentials in the Drive, Sheets, and Slides nodes.
4. Specify the master Slides template ID in the Copy Slides Template node.
5. In Create Custom Presentation, map slide tokens to sheet column names.
6. Disable “Keep Binary Data” in Copy Slides Template to conserve memory.
7. Upload a sample CSV (with headers like Name, Company, Metric) to test.

### 🎨 How to Customize

* Add or remove variables by editing the CSV headers and updating the mapping in Merge Data for new Lead Document.
* Insert an AI/natural‑language node before slide creation to generate more advanced and personalized text blocks.
* Use SplitInBatches to throttle API calls and avoid rate‑limit errors.
* Add error‑handling branches to capture and log failed operations.

### 🔐 Security and Privacy

* The workflow uses placeholder variables for file and folder IDs, so no actual IDs are exposed in the template.
* Ensure OAuth scopes are limited to only the required Google APIs.


## 📊 Basic Information

- **Workflow ID:** 3890
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 3481
- **Downloads:** 348
- **Created:** 2025/5/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3890)

## 👤 Author

- **Name:** JPres
- **Username:** @stardawnai

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **googleDrive** (×3)
- **googleSheets** (×4)
- **googleDriveTrigger** 
- **switch** 
- **merge** 
- **googleSlides** 
- **stickyNote** (×2)
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
