# Generate personalized sales emails from Google Maps with OpenAI to Google Sheets

> 

# Generate personalized sales emails from Google Maps results to Google Sheets

This workflow automates the entire process of lead generation and personalized outreach drafting for local businesses. It utilizes **Apify** to scrape business data from Google Maps based on your search criteria (e.g., "Cafes in Shibuya"), visits each business's website to extract content, and uses **OpenAI** to generate a highly personalized sales email that connects the business's unique characteristics with your service's value proposition. Finally, it saves the business details, scraped data, and the generated email draft into **Google Sheets**.

This template is perfect for reducing the manual effort required to research leads and write initial cold outreach emails.

## Who is this for
- **Sales Representatives** looking to automate lead sourcing and initial drafting.
- **Marketing Agencies** doing outreach for local businesses.
- **Freelancers** offering web design, SEO, or reservation system services to brick-and-mortar stores.

## What it does
1. **Configuration**: You define your search query (e.g., "Gyms in London"), the number of leads to fetch, and details about the service you are selling.
2. **Lead Scraping**: The workflow triggers an Apify actor (Google Maps Scraper) to find businesses matching your criteria.
3. **Website Analysis**: It checks if the business has a website, fetches the HTML, and extracts relevant text to understand the business's vibe and offerings.
4. **AI Email Generation**: OpenAI analyzes the scraped website text and generates a specific, personalized email subject and body promoting your service.
5. **Data Storage**: All data (Business Name, Phone, Address, Website, Scraped Info, and Email Draft) is appended to a Google Sheet.

## Requirements
- **n8n** (v1.0 or later)
- **Apify Account**: You need an Apify account and the `compass/google-maps-scraper` actor.
- **OpenAI Account**: An API key for generating the email content.
- **Google Cloud Platform**: A project with the Google Sheets API enabled.

## How to set up
1. **Credentials**: Set up your credentials for Apify, OpenAI, and Google Sheets in n8n.
2. **Google Sheet**: Create a new Google Sheet and add the following headers in the first row:
   - `店舗名` (Store Name)
   - `住所` (Address)
   - `Webサイト` (Website)
   - `電話番号` (Phone Number)
   - `サイトから取得した情報` (Info from Website)
   - `生成されたメール件名` (Generated Subject)
   - `生成されたメール本文` (Generated Body)
3. **Workflow Configuration Node**: Open the first "Workflow Configuration" node and update the following values:
   - `searchQuery`: The location and keyword you want to target.
   - `serviceName`: The name of the product you are selling.
   - `serviceStrength`: The USP (Unique Selling Proposition) of your product.
4. **Google Sheets Node**: Open the "Save to Google Sheets" node and select the file you created in step 2.

## How to customize
- **Change the Prompt**: Open the "Generate Personalized Email" (OpenAI) node to modify the system prompt. You can change the tone, language (currently set to Japanese context in your example), or structure of the sales email.
- **Filter Results**: You can add logic to the "Check Website URL Exists" node to filter out specific types of businesses or domains.
- **Limit Scraping**: Adjust the `maxPlaces` value in the Configuration node to control how many leads you process per run to save on API credits.


## 📊 Basic Information

- **Workflow ID:** 11028
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 90
- **Downloads:** 9
- **Created:** 2025/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11028)

## 👤 Author

- **Name:** 小林幸一
- **Username:** @korin

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **splitInBatches** 
- **if** 
- **httpRequest** 
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **@apify/n8n-nodes-apify.apify** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
