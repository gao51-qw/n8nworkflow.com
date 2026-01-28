# Auto-collect business leads from Google Maps with APIFY and Gmail

> ## Who is this for?

- Marketers, lead generation agencies, freelancers, consultants, and sales teams who need to collect business leads from Google Maps.
- Small business owners looking to build targeted local business lists.
- Anyone interested in automating web scraping without coding skills.
What problem is this workflow solving?

Manually scraping business data from Google Maps is time-consuming and repetitive. This automation simplifies the process by:
- Collecting business details based on search terms and location.
- Filtering out irrelevant results.
- Delivering qualified leads directly to your inbox.
What this workflow does

This workflow automates Google Maps lead scraping using APIFY and sends the gathered leads via email. The steps include:
- Collecting user input through a simple form (business type, location, recipient email).
- Sending an HTTP request to APIFY to run a Google Maps scraper (actor).
- Filtering results to include only businesses with email addresses.
- Converting results to CSV format.
- Sending an automated email with the leads as a CSV attachment via Gmail.
Setup
1. Create an APIFY Account:
- Sign up at APIFY.COM (https://apify.com/).
- You get $5 in free credits (~1,000 leads).
2. Get Your API Key:
- Copy your API key from APIFY
3. Prepare n8n:
- Create a new workflow.
- Add an HTTP Request node to interact with APIFY.
- Configure authentication with your API key.
4. Customize the Form:
- Build a simple form inside n8n to collect user inputs: Business Type, City, Country, Recipient Email.
5. Filter Results:
- Use IF and Filter nodes to remove entries without email addresses.
6. Convert to CSV:
- Use a "Spreadsheet File" node to generate a CSV from the filtered leads.
7. Send Email:
- Use the Gmail node (or any email node) to send the CSV file to the provided recipient.
How to customize this workflow to your needs

- Change search parameters to target different business niches or locations.
- Add filters to only include businesses with websites.
- Customize the email subject and body.
- Integrate with CRM or marketing platforms for direct lead injection.
- Expand filtering logic for more refined targeting.
Notes

- This template uses APIFY (paid service after free credits).
- You will need an APIFY API key and a Gmail account (or SMTP credentials) to run this automation.
- For self-hosted n8n users: ensure you have internet access and proper credentials set up for external HTTP requests.

Want A Video Tutorial on How To Setup This Automation : 
https://www.youtube.com/watch?v=Kz_Gfx7OH6o


## 📊 Basic Information

- **Workflow ID:** 5020
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 349
- **Downloads:** 34
- **Created:** 2025/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5020)

## 👤 Author

- **Name:** Santhej Kallada
- **Username:** @santhejkallada

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **httpRequest** 
- **filter** 
- **convertToFile** 
- **formTrigger** 
- **stickyNote** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
