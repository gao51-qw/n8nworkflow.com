# Upload images to an S3 bucket via a Slack bot

> # Upload Public-Facing Images to an S3 Cloudflare Bucket via Slack Modal

## 🛠 Who is this for?

This workflow is for teams that use **Slack** for internal communication and need a streamlined way to upload public-facing images to an **S3 Cloudflare bucket**. It's especially beneficial for DevOps, marketing, or content management teams who frequently share assets and require efficient cloud storage integration.

---

## 💡 What problem does this workflow solve?

Manually uploading images to cloud storage can be time-consuming and disruptive, especially if you're already working in Slack. This workflow automates the process, allowing you to upload images directly from Slack via a modal popup. It reduces friction and keeps your workflow within a single platform.

---

## 🔍 What does this workflow do?

This workflow connects Slack with an S3 Cloudflare bucket to simplify the image-uploading process:
- **Slack Modal Interaction**: Users trigger a Slack modal to select images for upload.
- **Dynamic Folder Management**: Choose to create a new folder or use an existing one for uploads.
- **S3 Integration**: Automatically uploads the images to a specified S3 Cloudflare bucket.
- **Slack Confirmation**: After upload, Slack sends a confirmation with the uploaded file URLs.

---

## 🚀 Setup Instructions

### Prerequisites
1. **Slack Bot** with the following permissions:
   - `commands`
   - `files:write`
   - `files:read`
   - `chat:write`
2. **Cloudflare S3 Credentials**: Create an API token with write access to your S3 bucket.
3. **n8n Instance**: Ensure n8n is properly set up with webhook capabilities.

### Steps
1. **Configure Slack Bot**:
   - Set up a Slack app and enable the Events API.
   - Add your n8n webhook URL to the Events Subscription section.
2. **Add Credentials**:
   - Add your Slack API and S3 Cloudflare credentials to n8n.
3. **Customize the Workflow**:
   - Open the `Idea Selector Modal` node and update folder options to suit your needs.
   - Update the `Post Image to Channel` node with your Slack channel ID.
4. **Deploy the Workflow**:
   - Activate the workflow and test by triggering the Slack modal.

---

## 🛠 How to Customize This Workflow

### Adjust the Slack Modal
You can modify the modal layout in the `Idea Selector Modal` node to add additional fields or adjust the styling.

### Change the Bucket Structure
Update the `Upload to S3 Bucket` node to customize the folder paths or change naming conventions.

---

## 🔗 References and Helpful Links
- [Slack API Documentation](https://api.slack.com/)
- [Cloudflare S3 Setup](https://developers.cloudflare.com/r2/)
- [n8n Documentation](https://docs.n8n.io/)

---

## 📓 Workflow Notes
### Key Features:
- **Slack Integration**: Uses Slack modal interactions to streamline the upload process.
- **Cloud Storage**: Automatically uploads to a Cloudflare S3 bucket.
- **User Feedback**: Sends a Slack message with file URLs upon successful upload.

### Setup Dependencies:
- Slack API token
- Cloudflare S3 credentials
- n8n webhook configuration

### Sticky Notes Included
Sticky notes are embedded within the workflow to guide you through configuration and explain node functionality.

---

## 🌟 Why Use This Workflow?

This workflow keeps your image-uploading process intuitive, efficient, and fully integrated with tools you already use. By leveraging n8n's flexibility, you can ensure smooth collaboration and quick sharing of public-facing assets without switching contexts.



## 📊 Basic Information

- **Workflow ID:** 2585
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 2696
- **Downloads:** 269
- **Created:** 2024/11/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2585)

## 👤 Author

- **Name:** Angel Menendez
- **Username:** @djangelic

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **set** (×3)
- **stickyNote** (×7)
- **respondToWebhook** (×3)
- **httpRequest** (×4)
- **switch** (×3)
- **splitInBatches** 
- **if** 
- **noOp** (×2)
- **aggregate** 
- **webhook** 
- **s3** 
- **slack** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
