# Create screenshots with uProc, save to Dropbox and send by email

> Do you want to create a website screenshot without browser extensions?

This workflow creates screenshots of any website using the uProc [**Get Screenshot by URL tool**](https://app.uproc.io/#/tools/processor/get/url/screenshot) and sends an email with the screenshots.

![workflow-screenshot](fileId:357)

You need to add your credentials (Email and API Key - real -) located at [**Integration section**](https://app.uproc.io/#/settings/integration) to n8n.

Node "Create Web + Email Item" can be replaced by any other supported service returning Website and Email values, like Google Sheets, Mailchimp, MySQL, or Typeform.

Every "uProc" node returns an image URL of the captured website. This generated URL will remain only 24 hours in our server.
 
You can set up the uProc node with several parameters:
- width: you can choose one of the predefined values to generate the screenshot, or you can set up a custom width you want.
- full-page: the tool will return a screenshot of the website from top to bottom with the defined width.

In our workflow, we generate two screenshots:
1) One screenshot of 640 pixels width.
2) One full-page screenshot of 640 pixels width.

Screenshots are downloaded by "Get File" nodes and saved to the screenshots folder in Dropbox.

![image.png](fileId:356)

Finally, we use the Amazon SES node to send an HTML email with both screenshots to the specified email.

We will receive the next email:

![image.png](fileId:355)

## 📊 Basic Information

- **Workflow ID:** 857
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2452
- **Downloads:** 245
- **Created:** 2020/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/857)

## 👤 Author

- **Name:** Miquel Colomer
- **Username:** @mcolomer

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **manualTrigger** 
- **functionItem** 
- **awsSes** 
- **uproc** (×2)
- **httpRequest** (×2)
- **merge** 
- **dropbox** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
