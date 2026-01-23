# Lusha to Easy Redmine CRM: automated lead enrichment

> **Use this workflow to enrich lead records from Easy Redmine with Lusha data and sync updated fields back to the CRM.**

### About Workflow  
This workflow connects Easy Redmine CRM with Lusha via API to enrich lead records. It fetches lead data from Easy Redmine, queries Lusha for matching contact information, transforms the results (e.g., phone, employee count, LinkedIn), and updates the original records in Easy Redmine CRM automatically.

### Use Case  
Built for CRM and sales teams using Easy Redmine, this automation replaces manual Lusha lookups and lead updates. It ensures that enriched data is consistently added to your CRM—boosting lead quality and reducing data maintenance time.

### How it works  
- **Schedule Trigger**  
=&gt; Runs daily at a set hour (e.g., 10:00)  
- **Get Leads from Easy Redmine**  
=&gt; Pulls leads via saved query (e.g., today's leads) using the `easy_leads` resource  
- **Split Out**  
=&gt; Breaks down the batch of leads into single records for enrichment  
- **Get Data from Lusha**  
=&gt; Sends HTTP requests to Lusha’s API using lead fields (email, name, company)  
- **Filter Leads Found in Lusha**  
=&gt; Skips leads with missing or failed Lusha enrichment  
- **Contact Data Transformation for CRM**  
=&gt; Maps and transforms contact data:  
  - Extracts phones, email, LinkedIn, job info  
  - Converts employee ranges like [1000, 5000] into `5000`  
  - Flattens nested Lusha response into CRM-friendly format  
- **Update Leads in Easy Redmine CRM**  
=&gt; Sends a PUT request to update each lead  

### How to use  
- Import the workflow into your n8n instance  
- Set credentials for:  
  - Easy Redmine API  
  - Lusha API (HTTP Header Auth)  
- Update the `Get Leads from Easy Redmine` node with your query ID  
- Ensure Lusha API fields (email, name, company) match available lead fields  
- Adjust the transformation logic in the Code node if needed  
- Update the custom field ID in the final PUT request if your CRM uses different IDs  
- Test with sample data before activating the automation  

### Example Use Cases  
- **Sales Intelligence**: Enrich new leads with verified phone and social info  
- **CRM Hygiene**: Keep records consistent and complete without manual edits  
- **Lead Scoring**: Add employee count and LinkedIn for better segmentation  

### Requirements  
- Easy Redmine API access  
- Lusha API access    
- API credentials for both platforms  

### Customization Options  
- Add more fields from Lusha (job title, company website, etc.)  
- Include error notifications if updates fail  
- Add filters to target only leads missing phone or LinkedIn info  
- Use Merge node if fetching multiple lead segments  

### Workflow Improvement Suggestions  
- Rename technical node labels for better readability  
- Secure credentials via environment variables or vault  
- Handle rate limits or retries if using large lead batches  

**This workflow automates lead enrichment, ensuring CRM records are updated with accurate, verified data—without the manual copy-paste.**



## 📊 Basic Information

- **Workflow ID:** 10726
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 123
- **Downloads:** 12
- **Created:** 2025/11/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10726)

## 👤 Author

- **Name:** Easy8.ai
- **Username:** @easy8ai

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **scheduleTrigger** 
- **splitOut** 
- **stickyNote** (×2)
- **@easysoftware/n8n-nodes-easy-redmine.easyRedmine** 
- **httpRequest** (×2)
- **filter** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
