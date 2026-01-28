This workflow retrieves all Squarespace Orders and saves them into a Google Sheets spreadsheet using the Squarespace Commerce API. It uses pagination to ensure all orders are collected efficiently.

## How It Works
- The workflow queries your [Squarespace Orders API](https://developers.squarespace.com/commerce-apis/retrieve-all-orders).
- It fetches data in paginated batches and inserts them into Google Sheets.
- The **Global node** is used to configure API parameters dynamically, allowing users to set date filters, pagination, and fulfillment status.
- The workflow runs on demand or on a schedule, ensuring your data stays up to date.

### Parameters
This workflow allows you to customize the API request using the Global node settings:
- **api-version** (string, required) – The current API version (see Squarespace Orders API documentation).
- **modifiedAfter**={a-datetime} (string, conditional) – Fetch orders modified after a specific date (ISO 8601 format).
- **modifiedBefore**={b-datetime} (string, conditional) – Fetch orders modified before a specific date (ISO 8601 format).
- **cursor**={c} (string, conditional) – Used for pagination, cannot be combined with other filters.
- **fulfillmentStatus**={status} (optional, enum) – Filter by fulfillment status: PENDING, FULFILLED, or CANCELED.
- **maxPage** – Set -1 to enables infinite pagination to fetch all available orders.

## Requirements
### Credentials
To use this workflow, you need:

- [Squarespace API Key](https://developers.squarespace.com/commerce-apis/authentication-and-permissions) – Retrieve from your Squarespace settings.
- Google Sheets API credentials – Required to insert data into a spreadsheet.

### Google Sheets Setup
- Use the [Squarespace order export](https://beyondspace.studio/blog/how-to-export-orders-data-from-squarespace) feature to create a reference sheet.
- [Google Sheets template](https://docs.google.com/spreadsheets/d/1hXR3N6xr7zItmGbSlYZmgZ6hf8f3Z8xr-nSWp4AZCqY/edit?usp=sharing) is available

## Who Is This For?
This workflow is designed for:

- Squarespace store owners exporting orders for tax reports, analytics, or sales tracking.
- Businesses automating order data retrieval for external reporting.
- Anyone needing an [efficient way to extract Squarespace](https://beyondspace.studio/blog/how-to-export-orders-data-from-squarespace) order data without manual effort.

Explore More Templates
- [Get all orders in Shopify to Google Sheets](https://n8n.io/workflows/3218-get-all-orders-in-shopify-to-google-sheets/)
- [Sync Shopify customers to Google Sheets + Squarespace compatible csv](https://n8n.io/workflows/3280-sync-shopify-customers-to-google-sheets-squarespace-compatible-csv/)

👉 [Check out my other n8n templates](https://n8n.io/creators/bangank36/)