# Generating new keywords and their search volumes using the Google Ads API

> ## Generate new keywords for SEO with the monthly Search volumes

This workflow is an improvement on the workflows below. It can be used to generate new keywords that you can use for your SEO campaigns or Google ads campaigns


[Generate SEO Keyword Search Volume Data using Google API](https://n8n.io/workflows/2494-generate-seo-keyword-search-volume-data-using-google-api/) and [Generating Keywords using Google Autosuggest](https://n8n.io/workflows/2155-generating-keywords-using-google-autosuggest/)

## Usage
1. Send the keywords you need as an array to this workflow
2. Pin the data and map it to the `set Keywords`  node
3. Map the keywords to the Google ads API with the location and Language of your choice
4. Split the results and set them data 
5. Pass this to the next nodes as needed for storage
6. Make a copy of this [spreedsheet](https://docs.google.com/spreadsheets/d/10mXXLB987b7UySHtS9F4EilxeqbQjTkLOfMabnR2i5s/edit?usp=sharing) and update the data accordingly

## Having challenges with the google Ads API? Read this [blog ](https://funautomations.io/workflows/automating-keyword-generation-with-n8n-google-ads-api/)


## Setup

1. Replace the trigger with your desired trigger eg a webhook or manual trigger

2. Map the data correctly to the `set Keywords` node
3. On the `Generate new keywords`, Update the `{customer_id} on the url and login-customer-id with your actual one. Update the `developer-token` also with your values. 

The url should be corrected as below https://googleads.googleapis.com/v18/customers/{customer-id}:generateKeywordIdeas

You should send the headers as below

```


            {
              "name": "content-type",
              "value": "application/json"
            },
            {
              "name": "developer-token",
              "value": "5j-tyzivCNmiCcoW-xkaxw"
            },
            {
              "name": "login-customer-id",
              "value": "513554 "
            }
         
    


```

and the json body should take the following format 

```

{
  "geoTargetConstants": ["geoTargetConstants/2840"], 
  "includeAdultKeywords": false,
  "pageToken": "",
  "pageSize": 2,
  "keywordPlanNetwork": "GOOGLE_SEARCH",
  "language": "languageConstants/1000", 
  "keywordSeed": {
    "keywords": {{ $json.Keyword }}
  }
}

```



## Troubleshooting

1. If you get an error with the workflow, check the credentials you are using

2. Check the account you are using eg the right customer id and developer token

3. Follow the [guide ](https://funautomations.io/workflows/automating-keyword-generation-with-n8n-google-ads-api/)on the blog to set up your Google ads account 


Made by [@Imperol](https://www.linkedin.com/in/zacharia-kimotho/)

## 📊 Basic Information

- **Workflow ID:** 2695
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 14407
- **Downloads:** 1440
- **Created:** 2025/1/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2695)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **splitOut** 
- **stickyNote** (×5)
- **httpRequest** 
- **set** (×2)
- **googleSheets** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
