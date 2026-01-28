
🚀 What this template does


Automatically finds and enriches key contacts in a deal’s buying group by combining the company domain from the HubSpot deal with the buying group criteria you define (departments, seniorities, countries, job titles). It then pushes these contacts into HubSpot and emails your team a clean summary with direct HubSpot links—so no decision-maker falls through the cracks.

Before starting, make sure you have:
Buying Group Criteria Excel – Contains two sheets:
Buying group reference values (reference list)
Your Buying Group Criterias (where you define your filters)
You’ll import the Excel file into Google Sheets during setup.
1. ❓ What Problem Does This Solve?
When a new opportunity/deal is created, sales teams often miss adjacent decision-makers (e.g., VP Sales, Head of Marketing). This template searches for those people, enriches their contact data, adds/updates them in HubSpot, and notifies your team with a one-glance table.
2. 🧰 Prerequisites:
To use this template, you’ll need:
A self-hosted or cloud instance of n8n
A Surfe API Key (Bearer token for People Search & Bulk Enrich)
A Google Sheets account (OAuth2 or service account) with access to your criteria sheet
A HubSpot developer account (for the HubSpot Deal Trigger)
A HubSpot normal account  (where there is your deals, contacts, companies)
A Gmail account to send the enrichment summary email
The workflow JSON file (included with this tutorial)
Buying Group Criteria Excel (included with this tutorial)
3. 📌  Your input (Google Sheets)
This workflow uses a Google Sheet with two tabs:
Buying group reference values – A read-only reference list of all available options for the departments and seniorities columns. You’ll use this list to choose your search filters.
Your Buying Group Criterias – The sheet where you define the actual filters used in the workflow.
⚠️ Before you start: Import the provided Excel file into your Google Sheets account so both tabs appear exactly as in the template.
How to fill it the tab “Your Buying Group Criterias”:
departments (Column A) → Select one or more values from the reference tab. Only rows containing a value will be used in the search.
seniorities (Column B) → Select one or more values from the reference tab. Only rows containing a value will be used in the search.
countries (Column C) → Enter any ISO Alpha-2 country codes (e.g., fr, gb, de). This is a free-text filter.
jobTitles (Column D) → Enter any job title keywords you want to search for (e.g., CTO, Head of Marketing). This is also a free-text filter.
The workflow will read the filled cells from each column, clean duplicates, and pass them to the Surfe People Search API.

![Screenshot 20250811 at 17.24.28.png](fileId:2038)

![Screenshot 20250811 at 17.24.44.png](fileId:2031)

4. ⚙️ Setup Instructions
4.1 🔐 Create Your Credentials in n8n
4.1.1 📊 Google Sheets OAuth2 API
Go to n8n → Credentials
Create new credentials:
Type: Google Sheets OAuth2 API
Here a pop-up will open where you can login to your Google account from where you will read the Google Sheets
When it’s done you should see this on n8n

![Screenshot 20250811 at 17.25.54.png](fileId:2024)

4.1.2 📧 Gmail OAuth2 API
Go to n8n → Credentials
Create new credentials:
Type: Gmail OAuth2 API
A pop-up window will appear where you can log in with your Google account that is linked to Gmail
Make sure you grant email send permissions when prompted

![Screenshot 20250811 at 17.26.22.png](fileId:2023)

4.1.3 🚀 Surfe API
In your Surfe dashboard → Use Surfe Api → copy your API key

![Screenshot 20250811 at 17.27.03.png](fileId:2039)

Go to n8n → Credentials → Create Credential
Choose Credential Type: Bearer Auth
Name it something like SURFE API Key
Paste your API key into the Bearer Token
Save

![Screenshot 20250811 at 17.28.08.png](fileId:2027)

4.1.4 🎯 HubSpot OAuth2 API
Go to n8n → Credentials → Create Credential → HubSpot Oauth2 API

![Screenshot 20250811 at 17.28.36.png](fileId:2025)

![Screenshot 20250811 at 17.28.51.png](fileId:2037)

![Screenshot 20250811 at 17.29.11.png](fileId:2028)

Here make sure to select your normal hubspot account where your companies, deals and contacts are and not the hubspot-developers-xxx.com 
Done ✅
4.1.5 🔓 HubSpot Private App Token
Go to HubSpot → Settings → Integrations → Private Apps
Create an app with scopes:
crm.objects.contacts.read
crm.objects.contacts.write
crm.schemas.contacts.read
Save the App token
Go to n8n → Credentials → Create Credential → HubSpot App Token
Paste your App Token

![Screenshot 20250811 at 17.29.39.png](fileId:2033)

![Screenshot 20250811 at 17.30.09.png](fileId:2040)

![Screenshot 20250811 at 17.30.23.png](fileId:2026)

4.1.6 🎯 HubSpot Developer Api:
In order to Use the HubSpot Trigger node, you need to setup HubSpot Developer Api
To configure this credential, you'll need a HubSpot developer account and:
A Client ID: Generated once you create a public app.
A Client Secret: Generated once you create a public app.
A Developer API Key: Generated from your Developer Apps dashboard.
An App ID: Generated once you create a public app.
To create the public app and set up the credential:
Log into your HubSpot app developer account.
Select Apps from the main navigation bar.
Select Get HubSpot API key. You may need to select the option to Show key.
Copy the key and enter it in n8n as the Developer API Key.
Still on the HubSpot Apps page, select Create app.
On the App Info tab, add an App name, Description, Logo, and any support contact info you want to provide. Anyone encountering the app would see these.
Open the Auth tab.
Copy the App ID and enter it in n8n.
Copy the Client ID and enter it in n8n.
Copy the Client Secret and enter it in n8n.
In the Scopes section, select Add new scope.
Add all the scopes listed in Required scopes for HubSpot Trigger node to your app.

![Screenshot 20250811 at 17.58.10.png](fileId:2035)

Select Update.
Copy the n8n OAuth Redirect URL and enter it as the Redirect URL in your HubSpot app.
Select Create app to finish creating the HubSpot app.
Refer to the HubSpot Public Apps documentation for more detailed instructions.
You should see this on n8n at the end.

![Screenshot 20250811 at 17.58.29.png](fileId:2034)

✅ You are now all set for the credentials
4.2 📥 Import and Configure the N8N Workflow
Import the provided JSON workflow into N8N
Create a New Blank Workflow
click the … on the top left
Import from File

![Screenshot 20250811 at 17.58.55.png](fileId:2029)
![Screenshot 20250811 at 17.59.08.png](fileId:2041)

4.2.1 🔗 Link Nodes to Your Credentials
In the workflow, link your newly created credentials to each node of this list :
Google Sheets -&gt; Credentials to connect with → Google Sheets Account
Gmail Node Credentials to connect with → Gmail account
HubSpot: Create or Update →Credentials to connect with → Huspot App Token Account
HubSpot Get Company →Credentials to connect with → Huspot App Token Account
HubSpot get deal →Credentials to connect with → Huspot App Token Account 
HubSpot Trigger →Credentials to connect with → Huspot Developer account
HTTP Node GET deal associated companies from HUBSPOT → Credential Type → Hubspot OAuth2 API 
Surfe HTTP nodes:
Authentication → Generic Credential Type
Generic Auth Type → Bearer Auth
Bearer Auth → Select the credentials you created before

![Screenshot 20250811 at 17.59.48.png](fileId:2030)

Surfe HTTP nodes
4.2.2 🔧 Additional Setup for the node Google Sheets READ CRITERIAS:

![Screenshot 20250811 at 18.00.10.png](fileId:2032)

Paste the url of your google sheets in Document → By URL
Select the sheet Your Buying Group Criterias 
5. 🔄 How This N8N Workflow Works
A new deal is created in HubSpot, which triggers the workflow.
The workflow retrieves the company domain linked to that deal.
It reads the buying group criteria from your Google Sheet (departments, seniorities, countries, job titles).
These criteria are combined with the company domain to create a search payload for Surfe’s People Search API (limited to 200 people per run).
Matching contacts are then sent to Surfe’s Bulk Enrichment API to retrieve emails, phone numbers, and other details.
n8n polls Surfe until the enrichment job is complete.
Enriched contact data is extracted and filtered so that only contacts with at least one valid email or phone number remain.
These contacts are created or updated in HubSpot.
Finally, a Gmail summary email is sent to your team with a clean table of the new or updated contacts and direct links to view them in HubSpot.

![Screenshot 20250811 at 18.00.33.png](fileId:2036)

6. 🧩 Use Cases
Net-new deal created → instantly surface the rest of the buying group and enrich contacts.
7. 🛠 Customization Ideas
🔁 Add retry logic for failed Surfe enrichment jobs
📤 Log enriched contacts into a Google Sheet or Airtable for auditing
📊 Extend the flow to generate a basic summary report of enriched vs rejected contacts
⏳ Trigger the enrichment not only on deal creation but also at a specific deal stage change
📧 Send the summary email to multiple recipients or a team mailing list
9. ✅ Summary 
This template automates buying-group discovery and enrichment off a new HubSpot deal, writes enriched contacts back to HubSpot, and emails a neat table to your team—so reps focus on outreach, not admin. 
Import it, connect credentials, point at your criteria sheet, and Let Surfe do the rest.