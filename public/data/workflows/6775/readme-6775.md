# Extract seed-funded startup data with RSS, GPT-4.1-MINI & BrightData to Excel

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## What It Does
This workflow automatically discovers recently seed-funded startups by monitoring RSS feeds for funding announcements. It uses Bright Data to scrape full article content, then extracts structured company information using OpenAI (GPT). The data is exported to an Excel sheet on OneDrive, providing sales teams with a real-time list of qualified leads without any manual effort.

## How It Works
1. **Trigger & Article Discovery**:  Monitors curated RSS feeds for articles mentioning seed funding and triggers the workflow on new article detection.
2. **Content Scraping & Preparation**: Scrapes full article content and converts it into clean markdown format for AI processing.
3. **Data Extraction with AI**: Uses OpenAI to extract structured details like company name, website, LinkedIn profile, founders, and funding amount.
4. **Structured Data Output & Storage**: Appends extracted data to an Excel sheet on OneDrive via Microsoft Graph API.

## Prerequisites
- **RSS Feed URL**: A valid RSS feed source that provides seed funding articles for startups.
- **Bright Data Credentials**: Active Bright Data account with access credentials (API token ) to enable article scraping.
- **OpenAI API Key**: An OpenAI account with an API key and access to GPT-4.1-MINI models for data extraction.
- **Microsoft OAuth2 API Credentials**: OAuth2 credentials (Client ID, Secret, Tenant ID) with access scopes to use Microsoft Graph API for Excel integration.
- **Excel Sheet in SharePoint**: A pre-created Excel file hosted on OneDrive or SharePoint with the following column headers:
`createdAt`, `companyName`, `companyWebsite`, `companyLinkedIn`, `fundingAmount`, `founderName`, `founderLinkedIn`, `articleLink`
- **Excel File & Sheet Identifiers**: The Drive ID, File ID and Sheet ID of your Excel sheet stored on OneDrive or SharePoint, required by the Microsoft Graph API for appending rows using the HTTP node in n8n.

Need help with the setup? Feel free to [contact us](https://eumentis.com/writetous)





## How to Set It Up
Follow these steps to configure and run the workflow:
1. **Import the Workflow**

	-  Copy the provided n8n workflow template.
	- In your n8n instance, go to Editor UI &gt; paste this workflow.
2. **Configure the RSS Feed Node**
	- Open the RSS trigger node.
	- Replace the default URL with your RSS feed URL.
	- Ensure the polling interval matches your desired frequency (e.g., every 15 minutes or 1 hour).
3. **Set Up Bright Data Node**
	- Add your Bright Data credentials.
	- Follow the [documentation](https://docs.brightdata.com/api-reference/introduction) to complete the setup.
4. **Configure OpenAI Integration**
	- Add your OpenAI API key as a credential in n8n.
	- Ensure the model is set to gpt-4.1-MINI.
	- Follow the [documentation](https://docs.n8n.io/integrations/builtin/credentials/openai/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) to complete the setup.

5. **Configure Excel File Integration**
	- Open the HTTP node responsible for sending data to the Excel sheet via Microsoft Graph API.
	- Replace the placeholder values in the API endpoint URL with your actual File ID and Sheet ID from the Excel file stored on OneDrive or SharePoint.
	`https://graph.microsoft.com/v1.0/drives/{{drive-id}}/items/{{file-id}}/workbook/tables/{ {{ sheet-id }} }/rows`
This URL is used to append data to the specified Excel sheet range. 
	- Next, set up Microsoft OAuth2 credentials in n8n:
	
		- Go to n8n &gt; Credentials &gt; Microsoft OAuth2 API.
		- Provide the required values:
	           - Client ID
	           - Client Secret
	           - Tenant ID
	           - Scope		
		-  Follow the [documentation](https://docs.n8n.io/integrations/builtin/credentials/httprequest/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) to complete the setup.
	- Once the credential is saved, connect it to the HTTP node making the Graph API call.	      	
6. **Activate the Workflow**
	- Set the workflow status to Active in n8n so it runs automatically when a new article appears in the RSS feed.
---
Need Help? [Contact us](https://eumentis.com/writetous) for support and custom workflow development.




 



## 📊 Basic Information

- **Workflow ID:** 6775
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 567
- **Downloads:** 56
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6775)

## 👤 Author

- **Name:** Eumentis
- **Username:** @eumentis

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **set** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **markdown** 
- **code** (×3)
- **rssFeedReadTrigger** 
- **stickyNote** (×5)
- **@brightdata/n8n-nodes-brightdata.brightData** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
