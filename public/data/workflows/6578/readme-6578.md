# Enrich HubSpot companies with Bedrijfsdata.nl

> This template enriches HubSpot company records using real-time data from the [Bedrijfsdata.nl API](https://developers.bedrijfsdata.nl). It listens for changes to company properties (e.g., `domain`) and updates records with verified information such as KvK, LinkedIn, phone, and company size.

---

## ✨ Features

- Automatically enrich HubSpot company profiles with verified Dutch business data
- Smart fallback: match by Bedrijfsdata ID or dynamic fuzzy matching existing data
- Customize which HubSpot event triggers the workflow (`company.propertyChange`, `create`, etc.)
- Realtime integration with Bedrijfsdata.nl via their official API node
- Secure, modular, and extendable structure (error handling included)

---

## 🏢 Example Data from Bedrijfsdata.nl

Bedrijfsdata.nl offers over 100 attributes per company. Example fields:

- `name`, `address`, `postcode`, `city`, `province`
- `phone`, `email`, `website`, `linkedin_link`
- `industry_section`, `employees`, `revenue`, `sbi`, `vat`
- `bag_bouwjaar`, `bag_oppervlakte`, `bag_energielabel`
- SEO data (keywords, backlinks), usage of software, structured descriptions
- Review ratings, opening hours, geo-location, etc.

Example:  
`Bedrijfsdata.nl B.V.`  
- Phone: `020-7895050`
- Mail: `klantenservice@bedrijfsdata.nl`
- Employees: `2-10`  
- SBI: `6201`  
- LinkedIn: [linkedin.com/company/bedrijfsdata-nl](https://www.linkedin.com/company/bedrijfsdata-nl/)  
- Description: `Bedrijfsdata.nl B.V. is a Dutch company that provides comprehensive data on over 3.1 million businesses in the Netherlands. They offer datasets categorized by industry, region, company [...]`
- More fields: see [developers.bedrijfsdata.nl](https://developers.bedrijfsdata.nl)

---

## ⚙ Requirements

- n8n instance or cloud workspace
- Install the Bedrijfsdata.nl n8n **Verified** Community Node
- HubSpot private app (OAuth2) with a webhook
- Bedrijfsdata.nl developer account (14-day free trial, 500 credits)

---

## 🔧 Setup Instructions

1. **Create HubSpot Private App**
   - Enable scopes for companies
   - Add a webhook to listen to e.g. `company.propertyChange` on `domain`
   - More info: [HubSpot Private Apps](https://developers.hubspot.com/docs/guides/apps/private-apps/overview)

2. **Configure n8n Workflow**
   - Import this template
   - Set your Bedrijfsdata.nl API credentials
   - Set up HubSpot OAuth2 credentials

3. **Customize Fields (Optional)**
   - Modify the `Update a company` node to match your internal CRM fields
   - Add logging, Slack notifications, or conditional branches if needed

---

## 🔐 Security Notes

- Workflow checks `portalId`, `objectId`, and event type
- Test-mode detection using a known company ID
- Errors are routed via dedicated error branches

---

## 🧪 Testing

1. Create or update a company in HubSpot with a known domain
2. Trigger the webhook from HubSpot
3. Check n8n’s execution history
4. Verify enrichment in HubSpot

---

## 🖼 Screenshots

**Before enrichment**  
![Before](https://www.bedrijfsdata.nl/wp-content/uploads/2025/07/Schermafbeelding-2025-07-28-om-13.00.55.png)

**After enrichment**  
![After](https://www.bedrijfsdata.nl/wp-content/uploads/2025/07/Schermafbeelding-2025-07-28-om-13.03.47.png)

---

## 📌 About Bedrijfsdata.nl

Bedrijfsdata.nl operates the most comprehensive company database in the Netherlands. With real-time data on 3.7M+ businesses and AI-ready APIs, we help Dutch SMEs enrich their CRM, workflows, and marketing automation. Built on 25+ years of experience in data collection and enrichment, our technology brings corporate-grade data quality to every organisation.

Website: [https://www.bedrijfsdata.nl](https://www.bedrijfsdata.nl)  
Developers: [developers.bedrijfsdata.nl](https://developers.bedrijfsdata.nl)  

---

## 📞 Support

- Email: klantenservice@bedrijfsdata.nl  
- Phone: +31 20 789 50 50  
- Support hours: Monday–Friday, 09:00–17:00 CET


## 📊 Basic Information

- **Workflow ID:** 6578
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 126
- **Downloads:** 12
- **Created:** 2025/7/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6578)

## 👤 Author

- **Name:** Olivier
- **Username:** @olivier-nl

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **hubspot** (×3)
- **if** (×5)
- **@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata** (×2)
- **stickyNote** (×11)
- **code** (×2)
- **noOp** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
