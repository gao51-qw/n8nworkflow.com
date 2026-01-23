# Convert addresses to latLong with Google Sheets and Google Maps API

> #### **Template Detail**
This template automates the process of converting a list of addresses into their latitude and longitude (LatLong) coordinates using Google Sheets and the Google Maps API. It's designed for businesses, developers, and analysts who need accurate geolocation data for use cases like delivery routing, event planning, or market analysis.

---

#### **What the Template Does**
1. **Fetch Address Data**: Retrieves addresses from a Google Sheet.
2. **Google Maps API Integration**: Sends each address to the Google Maps API and retrieves the corresponding LatLong coordinates.
3. **Update Google Sheets**: Automatically updates the same Google Sheet with the LatLong data for each address.

---

#### **Enhancements**
1. **Google Sheets Template**: Provide a pre-configured Google Sheets template that users can copy. Example link: [Google Sheets Template](https://docs.google.com/spreadsheets/d/1VvFne32djbKeo-g5pbpOaFKxU-ps0LyVVKsBbIUjRxk/edit?usp=sharing). 

Columns required:
   - **Address**: Column to input addresses.
   - **LatLong**: Column for the latitude and longitude results.

---

#### **Updated Workflow Structure**

1. **Trigger**:
   - A manual trigger node starts the workflow.
2. **Retrieve Data from Google Sheets**:
   - Fetch addresses from a Google Sheet.
3. **Send to Google Maps API**:
   - For each address, retrieve the LatLong coordinates directly via the Google Maps API.
4. **Update Google Sheets**:
   - Write the LatLong results back into the Google Sheet.

---

#### **Steps to Use**
1. **Prepare Google Sheet**:
   - Copy the provided Google Sheets template and add your addresses to the `Address` column.
2. **Configure Google Cloud API**:
   - Enable the Maps API for your Google Cloud project.
   - Generate an API key with the required permissions.
3. **Run the Workflow**:
   - Start the workflow in n8n; it will process the addresses automatically.
   - Updated LatLong data will appear in the corresponding Google Sheet.
4. **Review the Results**:
   - Use the enriched LatLong data for mapping or analysis.


## 📊 Basic Information

- **Workflow ID:** 2739
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 3491
- **Downloads:** 349
- **Created:** 2025/1/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2739)

## 👤 Author

- **Name:** Boriwat Chanruang
- **Username:** @boriwatopal

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **googleSheets** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
