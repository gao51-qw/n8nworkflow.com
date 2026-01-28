# Simple Google indexing workflow in n8n

> # What it does
The workflow is a simple yet efficient way to automate the process of indexing your website on Google using the Google Indexing API.

# How it works

It works by extracting information from your sitemap, converting it into a JSON file, and looping through each URL to submit it for indexing. 


Here's a brief rundown of the workflow:

1. The workflow can be triggered manually via the "Execute Workflow" button or scheduled to run at a specific time using the "Schedule Trigger" node.

2. The sitemap of your website is fetched using the "sitemap_set" node with a HTTP Request to the sitemap URL. 

3. This XML sitemap is then converted into a JSON file using the "sitemap_convert" node.

4. The "sitemap_parse" node splits the JSON file into individual URLs.

5. The "url_set" node then prepares each URL to be sent to the Google Indexing API.

6. A loop is created using the "loop" node to process each URL individually and make a POST request to Google Indexing API indicating that the URL has been updated.

7. If the POST request is successful and the URL has been updated, the workflow waits for 2 seconds before moving to the next URL.

8. In case the daily limit for the Google Indexing API is reached (200/day by default), an error message is triggered using the "Stop and Error" node.
# Before you use the workflow
## Activate the indexing API
* Create an account with Google Cloud Platform &gt; Console and then create a new project
* Search for the Indexing API in the Library
* Activate the API

## Create a Service Account and get credentials
* Open the Service accounts page. If prompted, select a project.
* Click add Create Service Account, enter a name and description for the service account. You can use the default service account ID, or choose a different, unique one. 
* When done click Create.
* On the Grant users access to this service account screen, scroll down to the Create key section. Click add Create key.
* In the side panel that appears, select the JSON format
* Click Create. Your new public/private key pair is generated and downloaded to your machine.
* Open the file and copy the private key.
* Add the credentials in the url_index node

![image.png](fileId:743)


## Add the user as owner of the site
Beware, for each site you need to add the user as a owner like this:

![image.png](fileId:742)

## Set your sitemap

* Open the sitemap_set node and add the url to your sitemap.

-------
*Now you should be able to ensure that Google is always up-to-date with the latest content on your website, improving your website's visibility and SEO rankings, have fun!*

## 📊 Basic Information

- **Workflow ID:** 2123
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 5889
- **Downloads:** 588
- **Created:** 2024/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2123)

## 👤 Author

- **Name:** Joachim Brindeau
- **Username:** @joachimbrindeau

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **splitInBatches** 
- **httpRequest** (×2)
- **xml** 
- **splitOut** 
- **set** 
- **if** 
- **wait** 
- **stopAndError** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
