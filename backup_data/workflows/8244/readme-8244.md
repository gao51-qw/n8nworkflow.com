# Log e-commerce orders in Google Sheets with monthly tabs & status tracking

> 
# n8n Google Sheets Monthly Order Logger

This n8n template records incoming e-commerce orders into Google Sheets, auto-creates a monthly sub-sheet, and adds a “Status” dropdown so your team can track fulfillment at a glance.

---

## Use cases

Centralize order logs, coordinate shipping across months, trigger customer updates (e.g., WhatsApp/Email) from status changes, and build lightweight ops dashboards.

---

## Good to know

- The Google Sheet **ID** is the part in the URL between `/d/` and the next slash:  
  `https://docs.google.com/spreadsheets/d/&lt;sheetId&gt;/`.
- A **new sub-sheet is created every month** (sheet name = current month, e.g., “September 2025”). If it already exists, the workflow appends to it.
- The **Status** column uses data validation with these options:  
  **Not Shipped, Pickup Scheduled, Shipped, InTransit, Delivered, Cancelled**.
- Make sure the Google credential in n8n has edit access to the spreadsheet.
- The **Webhook URL must be updated** in your Shopify **Settings → Notifications → Webhooks** page with the required **Order events** (e.g., Order creation, Order update, Order fulfillment).  
  Reference: [Shopify Webhooks Guide](https://help.shopify.com/en/manual/fulfillment/setup/notifications/webhooks)

---

## How it works

1. **Order created (Webhook/Trigger):** Receives a new order payload from your store/stack.  
2. **Config (set spreadsheetId):** Stores the target Google Sheets **spreadsheetId** (copied from the URL).  
3. **Get Order Sheets metadata:** Lists existing tabs to see if the tab for the **current month** already exists.  
4. **Generate Sheet Name:** Computes the sheet name like `{{ $now.format('MMMM YYYY') }}`.  
5. **If (sheet exists?):**  
   - **True → Google Sheets Row values (existing):** Prepares the row for append using the month tab.  
   - **Append to Existing Orders Sheet:** Appends the order as a new row.  
   - **False → Set Sheet Starting row/col:** Sets starting cell (e.g., A1) for a brand-new month tab.  
   - **Create Month Sheet:** Creates a new tab named for the current month.  
   - **Write Headers (A1:…):** Writes the column headers.  
   - **Google Sheets Row values:** Maps payload fields into the header order and applies validation to **Status**.  
   - **Append to Orders Sheet:** Appends the first row into the newly created month tab.

---

## How to use

- In **Config**, paste your `spreadsheetId` from the sheet URL and confirm your Google credential has edit access.  
- (Optional) Adjust the month-tab naming format to match your preference.  
- In **Shopify → Settings → Notifications → Webhooks**, add your n8n webhook URL and select the **Order events** (Order creation, Order update, Order fulfillment, etc.) you want to capture.  
- Deploy the workflow and send a sample order to the trigger; a new month tab will be created automatically on the first order of each month.

---

## Requirements

- n8n instance with the **Google Sheets** node credential configured.  
- A Google Spreadsheet you own or can edit.  
- A Shopify store with webhook events enabled (see [Shopify Webhooks Guide](https://help.shopify.com/en/manual/fulfillment/setup/notifications/webhooks)).

---

## Customising this workflow

- Add/remove columns (e.g., taxes, discounts, warehouse notes).  
- Change the **Status** list or add conditional formatting (e.g., green = Delivered).  
- Chain automations: on **Status** update → send tracking links, COD confirmation, or delivery feedback forms.  


## 📊 Basic Information

- **Workflow ID:** 8244
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 877
- **Downloads:** 87
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8244)

## 👤 Author

- **Name:** Ruthwik
- **Username:** @ruthwik

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **set** (×5)
- **httpRequest** (×3)
- **webhook** 
- **if** 
- **googleSheets** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
