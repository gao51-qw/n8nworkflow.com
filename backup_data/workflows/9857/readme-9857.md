# Generate business leads from Google Maps & Places API to Google Sheets

> ## Overview

This workflow automates the process of generating niche-specific business leads from Google Maps, leveraging the Google Places API and Google Sheets for seamless data collection and storage.

## Who Is This For?

- **Business owners**, marketers, sales teams, or anyone needing to build targeted lead lists by business type and location quickly.

## Main Use Cases

- Building outreach lists for local marketing campaigns.
- Finding potential clients in a specific location and industry.
- Automating research for sales prospecting.

## How It Works

1. **Collect Inputs via Form:**  
   Gather your business type (search term), target location, desired number of results, and Google Maps API key using a simple built-in form.
2. **Geocode Location:**  
   The workflow automatically converts your location input into geographic coordinates.
3. **Search Businesses:**  
   It utilizes the Google Places API to search for businesses that match your criteria within a 10-km radius of your location.
4. **Extract & Validate Data:**  
   For each business found, it extracts key contact details (name, address, phone, website, etc.), validates for essential info, and automatically appends valid leads into your connected Google Sheet—ready for action.

## Prerequisites

- Google account connected to [Google Sheets](https://www.google.com/sheets/about/).
- Active [Google Maps API key](https://developers.google.com/maps/documentation/places/web-service/get-api-key).
- Your target Google Sheet is set up to receive leads.

## Setup Steps

1. **Connect** your Google Sheets account inside n8n.
2. **Obtain** a Google Maps API key (usually takes a few minutes from the Google Cloud Console).
3. **Configure** the workflow:  
   - Fill out the form inside the workflow with your business type, location, number of results, and your API key.
4. **Run** the workflow and watch qualified leads flow into your Google Sheet in real-time.

## Customization Options

- Adjust the search radius or result count to match your needs.
- Extend extracted fields or add filters for advanced lead qualification.
- Change the Google Sheet structure as per your business process.

## Example Output

Each row in your sheet contains:
- Business Name
- Address
- Phone
- Website
- Google Maps URL
- Ratings & Reviews
- Business Types
- Search Query & Location
- Scraped At timestamp

&gt; **Tip:**  
&gt; For more details and advanced customizations, refer to the in-workflow sticky notes.

## 📊 Basic Information

- **Workflow ID:** 9857
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 956
- **Downloads:** 95
- **Created:** 2025/10/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9857)

## 👤 Author

- **Name:** Aryan Shinde
- **Username:** @shindearyan

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **httpRequest** (×2)
- **splitOut** 
- **set** (×3)
- **formTrigger** 
- **if** 
- **googleSheets** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
