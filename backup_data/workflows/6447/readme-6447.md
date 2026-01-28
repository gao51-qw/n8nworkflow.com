# Automate invoice creation and delivery with Google Sheets, Invoice Ninja and Gmail

> # ⚙️ How It Works

This workflow automates the repetitive task of invoicing, turning a manual process into an efficient, hands-free operation.

#### ✅ Trigger
The workflow is automatically activated when a new row is **added or updated** in your Google Sheet with the status **`Ready for Invoice`**.

#### 🧾 Create Invoice
The workflow sends project data to your invoicing service (e.g., Invoice Ninja) using an **HTTP Request** node to generate a professional invoice.

#### 📧 Send Email
The generated invoice is attached to an email and sent to the client using the **Gmail node**.

#### 📝 Update Status
Finally, the workflow updates the `Status` field in Google Sheet to **`Invoiced`**, marking the process complete and recorded.

---

# 🛠️ How to Set Up

#### 1. Install the Workflow
- Copy the provided **workflow JSON**.
- In your **n8n** instance, go to **Workflows &gt; New**.
- Click **Import from JSON** and paste the JSON.
- Save the workflow.

#### 2. Prepare Your Google Sheet
Create a Google Sheet to act as your project database. It must include the following columns:


Ensure the data is accurate and matches your workflow expressions.

#### 3. Configure Credentials

##### 🟡 Google Sheets Trigger & Update Node
- Add your **Google Sheets OAuth2** credentials.
- In both the **trigger node** and **update node**, select:
  - Correct **Spreadsheet ID**
  - Correct **Sheet Name**

##### 🔵 HTTP Request Node (Invoice API)
- Add your API Key (e.g., from **Invoice Ninja**) in the request URL.
- Adjust:
  - The **URL endpoint**
  - The **JSON body**
  
Based on your invoicing service’s API documentation.

##### 🔴 Gmail Node
- Add your **Gmail OAuth2** credentials.

#### 4. Customize the Workflow

##### 🔧 HTTP Request Node
- Replace `YOUR_INVOICE_NINJA_API_KEY` with your real API key.
- Ensure expressions like `{{ $json['Client Email'] }}` match the exact column headers in your Google Sheet.

##### 💌 Gmail Node
- Customize:
  - **From Email**
  - **Subject**
  - **Email body** (HTML or text)

Tailor the content to match your brand and tone.

#### 5. Activate the Workflow
Once everything is configured:

- Click the **Inactive** toggle (top-right) to activate the workflow.

Now your invoicing process is fully automated!


## 📊 Basic Information

- **Workflow ID:** 6447
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 101
- **Downloads:** 10
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6447)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** 
- **gmail** 
- **googleSheets** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
