# Create Deepfake Videos by Swapping Faces with Fal.ai Wan 2.2 and AWS S3

> 

***

# **Animate Any Face into a Video with Fal.ai**
*Create stunning deepfake-style videos automatically by swapping a face from an image onto a source video.*

This workflow provides a powerful, automated pipeline to perform video face-swapping using the Fal.ai API. It's designed to handle the entire asynchronous process: accepting a source video and a target face image, uploading them to cloud storage, initiating the AI job, polling for completion, and retrieving the final, rendered video.

| **Services Used** | **Features** |
| :--- | :--- |
| 🤖 **Fal.ai** | Leverages the powerful Wan 2.2 model for high-quality face animation. |
| ☁️ **AWS S3** | Uses enterprise-grade cloud storage for reliable public file hosting. |
| 🔄 **Polling Loop** | Intelligently waits for the asynchronous AI job to complete before proceeding. |
| 📥 **n8n Form Trigger** | Provides a simple UI to upload your source image and video. |

---

## How It Works ⚙️

1.  **📥 Get User Input**: The workflow starts when you upload a source video and a face image via the **n8n Form Trigger**.
2.  **☁️ Upload to Cloud**: Both files are automatically uploaded to a specified **AWS S3 bucket** to generate the publicly accessible URLs required by the AI model.
3.  **🚀 Start AI Job**: The public URLs for the video and image are sent in an **HTTP Request** to the Fal.ai API, which starts the asynchronous face animation process and returns a `request_id`.
4.  **⏳ Wait & Check**: The workflow enters a polling loop. It **Waits** for one minute, then makes another **HTTP Request** to the Fal.ai status endpoint using the `request_id`.
5.  **✅ Check for Completion**: An **IF** node checks if the job status is `COMPLETED`. If not, the workflow loops back to the Wait node.
6.  **🎬 Retrieve Final Video**: Once the job is complete, the workflow makes a final **HTTP Request** to fetch the finished animated video.

---

## 🛠️ How to Set Up

1.  **🔑 Set Up Fal.ai Credentials**: Get your API Key from [Fal.ai](https://fal.ai/). In n8n, go to **Credentials**, add a new **Header Auth** credential, and save your key. Connect this credential to all three `HTTP Request` nodes in the workflow.
2.  **☁️ Configure AWS S3**: Add your AWS credentials in n8n. In the two **AWS S3** nodes (`Upload Video1` and `Upload Image1`), update the **Bucket Name** parameter to your own S3 bucket. Ensure your bucket permissions allow for public reads.
3.  **▶️ Activate and Run**: Activate the workflow. Open the **Form Trigger** URL from the n8n editor, upload your files, and submit. The final video will be available in the execution log of the `Get Final Video` node.

---

## Requirements

*   An active **Fal.ai** account and API key.
*   An **AWS account** with an S3 bucket configured for public access.
*   **Alternative Storage:** For a personal setup, you can replace the AWS S3 nodes with **Cloudinary** nodes. Just ensure the output is a public URL.

---

## 💬 Need Help or Want to Learn More?

*   Join my **Skool community** for n8n + AI automation tutorials, live Q&A sessions, and exclusive workflows:
    👉 https://www.skool.com/n8n-ai-automation-champions

---

**Template Author:** Sandeep Patharkar  
**Category:** Content Generation / Content Marketing
**Difficulty:** Intermediate  
**Estimated Setup Time:** ⏱️ 20 minutes

## 📊 Basic Information

- **Workflow ID:** 9541
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 240
- **Downloads:** 24
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9541)

## 👤 Author

- **Name:** Sandeep Patharkar | www.FastTrackAiMastery.com
- **Username:** @sandy4v

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×3)
- **set** (×2)
- **merge** 
- **if** 
- **wait** 
- **awsS3** (×2)
- **formTrigger** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
