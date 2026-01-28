This workflow demonstrates how to create a new deployment when new content gets added to the database. This example workflow can be used when building a JAMstack site.

![workflow-screenshot](fileId:545)

**Webhook node:** This node triggers the workflow when new content gets added. For this example, we have configured the webhook in GraphCMS.

**Netlify node:** This node will start the build process and deploy the website. You will have to select your site from the ***Site ID*** dropdown list. To identify the deployment, we are passing a title.