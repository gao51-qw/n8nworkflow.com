# Create, delete, and organize AWS S3 buckets & files directly from your email

> This automated n8n workflow automates AWS S3 bucket and file operations (create, delete, upload, download, copy, list) by parsing simple email commands and sending back success or error confirmations.

### Good to Know
- The workflow processes email requests via a Start Workflow (GET Request) node.
- Data extraction from emails identifies S3 operation commands.
- Error handling is included for invalid or missing email data.
- Responses are sent via email for each action performed.

## How It Works
- **Start Workflow (GET Request)** - Captures incoming email requests.
- **Extract Data from Email** - Parses email content to extract S3 operation commands.
- **Check Task Type** - Validates the type of task (e.g., create bucket, delete file).
- **Create a Bucket** - Creates a new S3 bucket.
- **Delete a Bucket** - Deletes an existing S3 bucket.
- **Copy a File** - Copies a file within S3.
- **Delete a File** - Deletes a file from S3.
- **Download a File** - Downloads a file from S3.
- **Upload a File** - Uploads a file to S3.
- **Get Many Files** - Lists multiple files in a bucket.
- **Check Success or Fail** - Determines the outcome of the operation.
- **Send Success Email** - Sends a success confirmation email.
- **Send Failed Email** - Sends a failure notification email.

## How to Use
- Import the workflow into n8n.
- Configure the Start Workflow (GET Request) node to receive email commands.
- Test the workflow with sample email commands (e.g., "create bucket: my-bucket", "upload file: document.pdf").
- Monitor email responses and adjust command parsing if needed.

## Example **Email for Testing**

```
List files from the bucket json-test in Mumbai region.
```

## Requirements
- AWS S3 credentials configured in n8n.
- Email service integration (e.g., SMTP settings).
- n8n environment with workflow execution permissions.

## Customizing This Workflow
- Adjust the Extract Data from Email node to support additional command formats.
- Modify the Send Success Email or Send Failed Email nodes to customize messages.
- Update the S3 nodes to include additional bucket or file attributes.


## 📊 Basic Information

- **Workflow ID:** 7244
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 278
- **Downloads:** 27
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7244)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **emailReadImap** 
- **code** 
- **awsS3** (×7)
- **switch** 
- **emailSend** (×2)
- **if** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
