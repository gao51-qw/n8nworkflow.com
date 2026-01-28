# Auto Germany apartment search & apply with Immobilienscout24 & Google Services

> This n8n workflow automatically finds apartments for rent in Germany, filters them by your city, rent budget, and number of rooms, and applies to them via email. Each application includes:
- A personalized German cover letter
- Schufa report (fetched dynamically from Google Drive)
- Recent salary slips (also fetched from Google Drive)

The workflow runs daily at a scheduled time, emails landlords or agencies automatically, and logs every application into a Google Sheet for tracking.

## How It Works
1. **Scheduled Trigger** – Runs every day at 9 AM (adjustable).
2. **Fetch Listings** – Uses immobilienscout24 API (or similar) to pull rental listings for your selected city.
3. **Filter Listings** – Keeps only listings matching your CITY, MAX_RENT, and ROOMS settings.
4. **Fetch Documents** – Retrieves your Schufa report and salary slips from Google Drive (no need for local hosting).
5. **Generate Cover Letter** – Creates a personalized German-language letter per apartment.
6. **Send Email Application** – Sends the email to the landlord or agent with cover letter + documents attached.
7. **Log Applications** – Saves each application (title, address, rent, date) in a Google Sheet.


## How to Use
1. Import the workflow JSON into n8n.
2. Set environment variables in n8n (for security):
	-  **immobilienscout24_TOKEN:** Your immobilienscout24 API token
	-  **immobilienscout24_LISTING_ACTOR:** Actor ID for your preferred rental listing scraper (or custom)
	-  **MY_EMAIL:**  Your sender email address (SMTP configured in n8n)
	-  **SCHUFA_FILE_ID:**  Google Drive File ID for your Schufa PDF
	-  **SALARY_FILE_ID:** Google Drive File ID for your Salary Slips PDF
	-  **APPLICATION_SHEET_ID:** Google Sheet ID to log applications
3. Authenticate Google Drive and Google Sheets (OAuth2 in n8n).
4. Customize search filters in the Set Config node:
	- **CITY** (e.g., Berlin)
	- **MAX_RENT** (e.g., 1200)
	- **ROOMS** (e.g., 2)
5. Activate the workflow – It will run daily at the configured time and send applications automatically.
6. Check your Google Sheet – Every application will be logged for tracking.

## Requirements
- An immobilienscout24 account (or another apartment listing API, can be substituted).
- A Google account (for Drive and Sheets integration).
- A Schufa report (PDF) uploaded to Google Drive.
- Recent salary slips (PDF) uploaded to Google Drive.
- An SMTP-configured email account for sending applications.
- n8n instance (self-hosted or cloud) with:
	- Google Drive and Google Sheets credentials configured
	- Environment variables set for tokens and file IDs
	- A working email SMTP setup



## 📊 Basic Information

- **Workflow ID:** 6150
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 1029
- **Downloads:** 102
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6150)

## 👤 Author

- **Name:** Abbas Ali
- **Username:** @abbas12142

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **manualTrigger** 
- **set** 
- **httpRequest** (×2)
- **function** (×4)
- **googleDrive** (×2)
- **emailSend** 
- **googleSheets** 
- **stickyNote** (×10)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
