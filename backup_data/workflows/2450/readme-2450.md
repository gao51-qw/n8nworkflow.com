# One-way sync Stripe invoice PDFs to a S3 bucket

> This automation syncs your Invoice PDFs from Stripe to a (AWS) S3 Bucket each month, in a folder of your choice, with the following subPath:

*yourFolder/invoiceYear/invoiceMonth/fileName*


Fill in your **Credentials and Settings** in the Nodes marked with _"*"_.

You can adjust this Workflow to your needs. You can also override the `year`and `month` in the ENV* Node for manual syncs. It will sync every Invoice PDF which `created`-date is *greater then* the provided year and month. It will automatically set the day to the first day of the desired month.


![Image](https://cloud.let-the-work-flow.com/logo-64.png)
Enjoy the Workflow! ❤️ 
https://let-the-work-flow.com
Workflow Automation & Development

## 📊 Basic Information

- **Workflow ID:** 2450
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1212
- **Downloads:** 121
- **Created:** 2024/10/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2450)

## 👤 Author

- **Name:** Marcel Claus-Ahrens
- **Username:** @geckse

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **manualTrigger** 
- **splitOut** 
- **set** (×4)
- **if** 
- **stopAndError** 
- **httpRequest** (×2)
- **stickyNote** (×5)
- **scheduleTrigger** 
- **awsS3** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
