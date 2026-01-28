# Generate business leads with OpenStreetMap data and save to Google Sheets

> ## Who is this template for?

This n8n lead generation workflow template is designed for business owners, marketers, sales professionals, and entrepreneurs who need to generate targeted business leads without paying for expensive APIs or third-party services. The template leverages the free Overpass API (powered by OpenStreetMap data) to gather comprehensive business information for any industry in almost any region worldwide.

Perfect for:
- Small businesses looking to expand their customer base
- Real estate agents seeking potential clients
- Marketing agencies needing targeted lead lists
- Entrepreneurs researching potential markets
- Sales teams building prospect databases

You can watch the video tutorial here: https://youtu.be/6WVfAIXdwsE

## How it works

This n8n lead generation template provides a powerful solution using n8n core nodes and the free OpenStreetMap Overpass API, allowing you to generate thousands of business leads with comprehensive contact information:

### Data Collection Process

**1. Define Your Queries**
- Create a list of search queries combining keywords (like "real estate", "dentist", etc.) with target locations
- Use both inner areas (specific cities) and outer areas (broader regions) to precisely target your search

**2. Iterative Query Execution**
- The workflow processes each query in sequence, preventing API timeout issues
- Each query triggers a sub-workflow that handles the data extraction process

**3. Data Extraction via OpenStreetMap's Overpass API**
- Searches for businesses matching your keywords in name, description, and relevant OpenStreetMap tags
- Collects comprehensive business data including names, addresses, and contact details from the OpenStreetMap database
- Searches using both regular expressions and exact tag matching for optimal n8n lead generation results

**4. Website Scraping for Additional Information**
- For businesses with websites but missing email addresses, the workflow visits their homepage
- Extracts email addresses using regular expressions for more complete contact information
- Filters out irrelevant emails using configurable patterns

**5. Data Cleaning and Organization**
- Removes duplicate contact information and standardizes data format
- Filters results based on your specific requirements for contact details
- Saves all extracted data to Google Sheets for easy access and management

## Setup

**1. Configure Your Queries:**
- Open the "Run Workflow" node and input your list of queries
- Format queries with outer area, inner area, and keyword (e.g., "California,Los Angeles,real estate")

**2. Optimize Tag Targeting:**
- After initial runs, identify the specific tags used by your target industry
- Update the HTTP Request node with these specific tags to improve result quality
- Common tags include "office", "shop", and "amenity" with industry-specific values

**3. Configure Data Filters:**
- Customize the filter node to keep only results meeting your specific requirements
- Adjust the email filtering regex to remove irrelevant email addresses

**4. Set up Google Sheets Integration:**
- Configure the Google Sheets node to save results to your preferred spreadsheet
- Authorize the connection to your Google account

**5. Run the Workflow:**
- Start the workflow and watch as your Google Sheet fills with comprehensive business leads
- The template automatically handles pagination and rate limiting to prevent API timeouts

The resulting leads include comprehensive contact information such as:
- Business names
- Complete addresses (street, city, postal code)
- Phone numbers
- Email addresses (both from API and website scraping)
- Website URLs
- Social media accounts
- Opening hours
- And more!

## 📊 Basic Information

- **Workflow ID:** 3827
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 1034
- **Downloads:** 103
- **Created:** 2025/5/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3827)

## 👤 Author

- **Name:** Akram Kadri
- **Username:** @akramkadri

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×5)
- **wait** 
- **noOp** 
- **executeWorkflowTrigger** 
- **splitInBatches** (×2)
- **executeWorkflow** 
- **filter** 
- **merge** (×3)
- **httpRequest** (×2)
- **code** (×3)
- **if** (×2)
- **set** (×2)
- **googleSheets** 
- **splitOut** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
