# Enrich HubSpot companies with Polish CEIDG data using NIP identifiers

> This workflow automatically enriches HubSpot company records with official data from the Polish CEIDG (Central Register and Information on Economic Activity) database when a NIP (Polish Tax ID) is added or updated.

## Who's it for

Polish sales teams, marketing agencies, and CRM administrators who work with Polish companies in HubSpot and want to save time on manual data entry while ensuring data accuracy.

## How it works

1. **Trigger**: Monitors HubSpot for changes to the "NIP" property on company records
2. **Validation**: Checks if the NIP field is not empty
3. **API Query**: Fetches official company data from the Polish CEIDG database using the provided NIP
4. **Data Check**: Verifies if company data was successfully retrieved
5. **Transform**: Maps CEIDG data to HubSpot company properties
6. **Update**: Enriches the HubSpot company record with:
   - Company name
   - Full address (street, city, postal code, state)
   - Phone number
   - Website URL
   - NIP and REGON numbers
   - Business start date
7. **Error Handling**: If NIP is invalid or no data found, adds a note to the company record

## Requirements

- **HubSpot account** with:
  - Custom property "nip" created for companies
  - Custom property "ceidg_notes" created for companies (optional, for storing API notes)
  - App token or developer API credentials
- **CEIDG API Token** (free registration at https://dane.biznes.gov.pl/)
- **n8n instance** (self-hosted or cloud)

## How to set up

1. **Create HubSpot custom properties**:
   - Go to HubSpot Settings &gt; Properties &gt; Company Properties
   - Create a "nip" property (single-line text)
   - Create a "ceidg_notes" property (multi-line text) for storing API responses

2. **Get CEIDG API Token**:
   - Register at https://dane.biznes.gov.pl/
   - Navigate to API section and generate your token
   - Add token to n8n credentials (HTTP Bearer Auth)

3. **Configure HubSpot credentials**:
   - Add your HubSpot App Token in n8n credentials
   - Or use HubSpot Developer API credentials

4. **Activate the workflow**:
   - Import this workflow to your n8n instance
   - Configure the credentials in all HubSpot and HTTP nodes
   - Activate the workflow

5. **Test**:
   - Add or update a NIP value in any HubSpot company record
   - Check if the company data gets automatically populated

## How to customize

- **Add more fields**: Modify the "Transform data for HubSpot" Code node to map additional CEIDG fields
- **Change trigger property**: Update the HubSpot Trigger to monitor a different property name
- **Notification**: Add an email or Slack notification node after successful updates
- **Batch processing**: Add a schedule trigger to process multiple companies at once
- **Data validation**: Add nodes to validate NIP format before making the API call
- **Logging**: Add a Google Sheets or database node to log all enrichment activities

## Notes

- CEIDG database contains data for sole proprietorships registered in Poland
- For limited liability companies (sp. z o.o.) and other entities, you'll need to use KRS (National Court Register) API instead
- The workflow processes one company at a time as they are updated
- API rate limits apply based on your CEIDG API plan

## 📊 Basic Information

- **Workflow ID:** 10125
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 229
- **Downloads:** 22
- **Created:** 2025/10/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10125)

## 👤 Author

- **Name:** Karol Otręba
- **Username:** @smart-camp-ai

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **if** (×2)
- **hubspotTrigger** 
- **hubspot** (×2)
- **httpRequest** 
- **code** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
