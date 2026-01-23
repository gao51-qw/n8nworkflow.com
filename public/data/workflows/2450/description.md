This automation syncs your Invoice PDFs from Stripe to a (AWS) S3 Bucket each month, in a folder of your choice, with the following subPath:

*yourFolder/invoiceYear/invoiceMonth/fileName*


Fill in your **Credentials and Settings** in the Nodes marked with _"*"_.

You can adjust this Workflow to your needs. You can also override the `year`and `month` in the ENV* Node for manual syncs. It will sync every Invoice PDF which `created`-date is *greater then* the provided year and month. It will automatically set the day to the first day of the desired month.


![Image](https://cloud.let-the-work-flow.com/logo-64.png)
Enjoy the Workflow! ❤️ 
https://let-the-work-flow.com
Workflow Automation & Development