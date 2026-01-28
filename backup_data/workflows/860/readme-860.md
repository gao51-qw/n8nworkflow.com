# Discover company data by name with uProc

> Do you want to discover company-related information to enrich a signup process?

This workflow enriches any company by name using the uProc [**Get Company by Name tool**](https://app.uproc.io/#/tools/processor/get/company/by-name).
This tool combines Google Maps and emails research on the internet to return results. You get no results if the company has no presence on Google Maps. 

![workflow-screenshot](fileId:359)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

You can replace node "Create Company Item" with any other supported service returning Company names and countries, like Hubspot, Google Sheets, MySQL, or Typeform.

You can set up the uProc node with several parameters:
- country: the country name you want to use.
- name: the name of the company you need to locate.

Every "uProc" node returns the next fields per every located company:
- name: Contains the company's given name.
- email: Contains the company's given email.
- cif: Contains company's cif number.
- address: Contains company's formatted address.
- city: Contains the city location of the company.
- state: Contains province location of the company.
- county: Contains state location of the company
- country: Contains country location of the company
- zipcode: Contains zipcode code of the company
- phone: Contains phone number of the company
- website: Contains website of the company
- latitude: Contains latitude of the company
- longitude: Contains longitude of the company
 
Next, you can save results to a CRM or Google Sheets, and prepare returned email or phone to launch an email or telemarketing campaign.

## 📊 Basic Information

- **Workflow ID:** 860
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 999
- **Downloads:** 99
- **Created:** 2020/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/860)

## 👤 Author

- **Name:** Miquel Colomer
- **Username:** @mcolomer

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **functionItem** 
- **uproc** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
