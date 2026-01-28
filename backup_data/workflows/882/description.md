This workflow allows you to store the output of a phantom in Airtable. This workflow uses the LinkedIn Profile Scraper phantom. Configure and launch this phantom from your Phantombuster account before executing the workflow.

![workflow-screenshot](fileId:375)

The workflow uses the following node:

**Phantombuster node:** The Phantombuster node gets the output of the LinkedIn Profile Scraper phantom that ran earlier. You can select a different phantom from the ***Agent*** dropdown list, but make sure to configure the workflow accordingly.

**Set node:** Using the Set node we are setting the data for the workflow. The data that we set in this node will be used by the next nodes in the workflow. Based on your use-case, you can modify the node.

**Airtable node:** The Airtable node allows us to append the data in an Airtable. Based on your use-case you can replace this node with any other node.

Instead of storing the data in Airtable, you can store the data in a database or Google Sheet, or send it as an email using the Send Email node, Gmail node, or Microsoft Outlook node.