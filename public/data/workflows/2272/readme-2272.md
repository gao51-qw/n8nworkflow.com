# Enrich up to 1500 emails per hour with Dropcontact batch requests

> The template allows to make Dropcontact batch requests up to 250 requests every 10 minutes (1500/hour). Valuable if high volume email enrichment is expected.

Dropcontact will look for email & basic email qualification if first_name, last_name, company_name is provided.


+++++++++++++++++++++++++++++++++++++++++

Step 1:
Node "Profiles Query"
Connect your own source (Airtable, Google Sheets, Supabase,...) the template is using Postgres by default. 


---

Note I: 
Be careful your source is only returning a maximum of 250 items.

---

Note II: 
The next node uses the next variables, make sure you can map these from your source file: 
- first_name
- last_name
- website (company_name would work too)
- full_name (see note)

----

Note III:
This template is using the Dropcontact Batch API, which works in a POST & GET setup. Not a GET request only to retrieve data, as Dropcontact needs to process the batch data load properly. 


+++++++++++++++++++++++++++++++++++++++++

Step 2:
Node "Data Transformation" 
Will transform the input variables in the proper json format. This json format is expected from the Dropcontact API to make a batch request.


"full_name" is being used as a custom identifier to update the returned email to the proper contact in your source database.

To make things easy, use a unique identiefer in the full_name variable.

+++++++++++++++++++++++++++++++++++++++++

Step3:
Node: "Bulk Dropcontact Requests".
Enter your Dropcontact credentials in the node: Bulk Dropcontact Requests.

+++++++++++++++++++++++++++++++++++++++++

Step4:
Connect your output source by mapping the data you like to use.

+++++++++++++++++++++++++++++++++++++++++

Step5:
Node: "Slack" (OPTIONAL)
Connect your slack account, if an error occur, you will be notified.

---




TIP: Try to run the workflow with a batch of 10 (not 250) as it might need to run initially before you will be able to map the data to your final destination. Once the data fields are properly mapped, adjust back to 250.





## 📊 Basic Information

- **Workflow ID:** 2272
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3534
- **Downloads:** 353
- **Created:** 2024/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2272)

## 👤 Author

- **Name:** victor de coster
- **Username:** @vliegendepater

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** 
- **aggregate** 
- **postgres** (×2)
- **httpRequest** (×2)
- **splitInBatches** 
- **splitOut** 
- **wait** 
- **code** 
- **slack** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
