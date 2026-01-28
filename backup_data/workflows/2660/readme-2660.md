# Upload files via n8n form and save them to Digital Ocean Spaces

> ## How it works
This workflow provides a streamlined process for uploading files to Digital Ocean Spaces, making them publicly accessible. The process happens in three main steps:

1. User submits the form with file, in this case I needed it to upload images I use in my seo tags.
2. File is automatically uploaded to Digital Ocean Spaces using S3-compatible storage
3. Form completion confirmation is provided

## Setup steps
* Initial setup typically takes 5-10 minutes
* Configure your Digital Ocean Spaces credentials and bucket settings
* Test the upload functionality with a small sample file
* Verify public access permissions are working as expected

![Credentials](https://dailyai.nyc3.cdn.digitaloceanspaces.com/do_template_example.png)

## Important notes
* Credentials are tricky check the screenshot above for how I set the url, bucket etc.
* I am just using the S3 Node
* Set the ACL as seen below

![ACL](https://dailyai.nyc3.cdn.digitaloceanspaces.com/do_settings.png)

## Troubleshooting
* Bucket name might be incorrect
* Region Wrong
* Check Space permissions if uploads fail
* Verify API credentials are correctly configured


You can see a video here. (live in 24 hours)
[https://youtu.be/pYOpy3Ntt1o](https://youtu.be/pYOpy3Ntt1o)

## 📊 Basic Information

- **Workflow ID:** 2660
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 3829
- **Downloads:** 382
- **Created:** 2024/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2660)

## 👤 Author

- **Name:** Alfred Nutile
- **Username:** @dailyaistudio

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **s3** 
- **form** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
