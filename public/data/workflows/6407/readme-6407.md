# Automate property link shortening & QR code generation with Google Sheets and Bitly

> ### How It Works ⚙️

This workflow automatically takes a long property URL from your Google Sheet, shortens it, generates a QR code, and then updates your sheet with the new links.

1.  **0. Google Sheets (New/Updated Row Trigger):** 🚀 The workflow starts by constantly monitoring a specified Google Sheet. It triggers when a new property listing row is added, or when an existing row's "Property Link" column is updated.
2.  **1. Shorten URL (HTTP Request - Bitly):** 🌐 This node takes the long property URL from the Google Sheet. It then makes an API call to a URL shortening service (like Bitly) to generate a much shorter, shareable URL.
3.  **2. Generate QR Code (HTTP Request - QR Code API):** 📱 Using the *shortened* URL from the previous step, this node makes another API call to a QR code generation service. It generates an image link for a QR code that, when scanned, directs users to your property.
4.  **3. Update Google Sheet (Update Row):** ✅ Finally, this node takes the newly generated short URL and the QR code image link and writes them back into the corresponding row in your Google Sheet. This centralizes all the necessary links for your property listings.

### How to Set Up 🛠️

Follow these steps carefully to get your "Property Link Shortener & QR Code Generator" workflow up and running in n8n:

1.  **Import Workflow JSON:**
    * Open your n8n instance.
    * Click on 'Workflows' in the left sidebar.
    * Click the '+' button or 'New' to create a new workflow.
    * Click the '...' (More Options) icon in the top right.
    * Select 'Import from JSON' and paste the entire JSON code for this workflow.

2.  **Prepare your Google Sheet:**
    * Create a Google Sheet with columns for your property listings.
    * **Crucially**, ensure you have a column for the **original long property URL** (e.g., `Property Link`), a column for the **shortened URL** (e.g., `Short URL`), a column for the **QR code image URL** (e.g., `QR Code URL`), and a **unique identifier** for each row (e.g., `Property ID`).

3.  **Configure 0. Google Sheets (New/Updated Row Trigger):**
    * Locate the '0. Google Sheets (New/Updated Row Trigger)' node.
    * **Credentials:** Select your existing Google Sheets OAuth2 credential or click 'Create New' to set one up.
    * **Spreadsheet ID:** **Replace `YOUR_SPREADSHEET_ID`** with the ID of your Google Sheet. You can find this ID in the Google Sheet's URL.
    * **Sheet Name:** Enter the exact name of the sheet (tab) within your spreadsheet (e.g., `Listings` or `Properties`).
    * **Trigger On:** Choose `Updated Row` and select the column where your original long property link is located (e.g., `Property Link`). This ensures the workflow runs when you add or update a property link.

4.  **Configure 1. Shorten URL (HTTP Request - Bitly):**
    * Locate the '1. Shorten URL (HTTP Request - Bitly)' node.
    * **Method:** Set to `POST`.
    * **URL:** `https://api-ssl.bitly.com/v4/shorten`
    * **Headers:**
        * Add `Authorization` with value `Bearer YOUR_BITLY_ACCESS_TOKEN`. (You'll need to generate a Generic Access Token from your Bitly account settings &gt; Generic Access Token).
        * Add `Content-Type` with value `application/json`.
    * **Body:** Select `Raw` and `JSON`.
    * In the JSON body, enter: `{"long_url": "{{ $json[\"Property Link\"] }}"}`. **Ensure `"Property Link"` exactly matches your Google Sheet column header for the original URL.**
    * **Response Format:** Set to `JSON`.

5.  **Configure 2. Generate QR Code (HTTP Request - QR Code API):**
    * Locate the '2. Generate QR Code (HTTP Request - QR Code API)' node.
    * **Method:** Set to `GET`.
    * **URL:** `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={{ encodeURIComponent($('1. Shorten URL (HTTP Request - Bitly)').item.json.link) }}`
        * Here, `{{ $('1. Shorten URL (HTTP Request - Bitly)').item.json.link }}` refers to the output of the previous Bitly node.
        * You can adjust `size=150x150` as needed.
        * `encodeURIComponent` is important to handle special characters in the URL.
    * **Response Format:** Set to `Binary`. (This API directly returns the image, but we just need its URL which is in the `url` property of the response).

6.  **Configure 3. Update Google Sheet (Update Row):**
    * Locate the '3. Update Google Sheet (Update Row)' node.
    * **Credentials:** Select the same Google Sheets OAuth2 credential as in step 3.
    * **Spreadsheet ID:** Use the same `YOUR_SPREADSHEET_ID`.
    * **Sheet Name:** Use the same `YOUR_SHEET_NAME_E.G._Listings`.
    * **Key Column:** Set this to a unique identifier for your rows, e.g., `Property ID` (assuming you have one in your sheet).
    * **Key Column Value:** `={{ $json["Property ID"] }}`. **Make sure this matches your unique ID column from the Google Sheet.**
    * **Update Columns:**
        * Add an entry:
            * **Column:** `Short URL` (exact name of your short URL column in Google Sheet)
            * **Value:** `={{ $('1. Shorten URL (HTTP Request - Bitly)').item.json.link }}`
        * Add another entry:
            * **Column:** `QR Code URL` (exact name of your QR Code URL column in Google Sheet)
            * **Value:** `={{ $('2. Generate QR Code (HTTP Request - QR Code API)').item.url }}` (This will be the URL of the QR code image from the HTTP request response).

7.  **Review and Activate:**
    * Thoroughly review all node configurations. Ensure all placeholder values (like `YOUR_...`) are replaced with your actual information and settings are correct.
    * Click the 'Save' button in the top right corner.
    * Finally, toggle the 'Inactive' switch to 'Active' to enable your workflow. 🟢 Your "Property Link Shortener & QR Code Generator" workflow is now live!

## 📊 Basic Information

- **Workflow ID:** 6407
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 77
- **Downloads:** 7
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6407)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** (×2)
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
