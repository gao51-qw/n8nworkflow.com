This workflow sends out email notifications when a new file has been uploaded to Google Drive.

![](https://docs.n8n.io/assets/img/workflow.44f43fab.png)

The workflow uses two nodes:
- **Google Drive Trigger**: This node will trigger the workflow whenever a new file has been uploaded to a given folder
- **Send Email**: This node sends out the email using data from the previous Google Drive Trigger node.