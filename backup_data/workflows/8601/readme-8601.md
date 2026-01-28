# Generate creative ADV images from references with Seedream v4 for Instagram & Facebook

> This workflow automates the process of **generating advertising (ADV)** images from multiple reference images and publishing them directly to social media (**Instagram** and **Facebook** with [Upload-Post](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app)) with **Seedream v4** AI.

This workflow automates the process of generating an AI image based on a user's text prompt and up to 6 reference images. The process is triggered by a user submitting a web form.

---

### Key Advantages

* ✅ **Automated Image Creation** – Generates high-quality, consistent visuals from multiple references without manual editing.
* ✅ **Seamless Social Media Publishing** – Automatically posts to Instagram and Facebook with minimal effort.
* ✅ **SEO-Optimized Titles** – Ensures your posts get better reach with AI-generated, keyword-friendly titles.
* ✅ **Scalable Workflow** – Can be triggered manually, on schedule, or via form submissions.
* ✅ **Time-Saving** – Reduces manual steps from design to publishing, enabling faster content production.
* ✅ **Multi-Platform Support** – Easily extendable to other platforms (TikTok, LinkedIn, etc.) with Upload-Post API.

---


### **How It Works**

1.  **Form Trigger:** A user fills out a form with a "Prompt" (text description) and a list of "Reference images" (comma-separated URLs).
2.  **Data Processing:** The workflow converts the submitted image URL string into a proper array for the AI API.
3.  **AI Image Generation:** The workflow sends the prompt and image URLs to the fal.ai API (specifically, the ByteDance `seedream` model) to generate a new, consistent image.
4.  **Status Polling:** It periodically checks the status of the AI job until the image generation is `COMPLETED`.
5.  **Result Retrieval:** Once complete, it fetches the URL of the generated image and downloads the image file itself.
6.  **SEO Title Generation:** The original user prompt is sent to OpenAI's GPT-4o-mini model to generate an optimized, engaging social media title.
7.  **Cloud Backup:** The generated image is uploaded to a specified Google Drive folder for storage.
8.  **Social Media Posting:** Finally, the workflow posts the downloaded image file to both Instagram and Facebook via the Upload-Post.com API, using the AI-generated title.
---


### **Set Up Steps**

To make this workflow functional, you need to configure several third-party services and their corresponding credentials within n8n.

1.  **Obtain fal.ai API Key:**
    *   Create an account at [fal.ai](https://fal.ai/).
    *   Locate your API key in your account settings.
    *   In the **"Create Video"** and **"Get status"** nodes, edit the HTTP Header Auth credentials.
    *   Set the Header `Name` to `Authorization` and the `Value` to `Key YOUR_FAL_AI_API_KEY`.

2.  **Configure Upload-Post.com API:**
    *   Create an account at [Upload-Post.com](https://www.upload-post.com/?linkId=lp_144414&sourceId=n3witalia&tenantId=upload-post-app) and get your API key.
    *   Create a profile within the Upload-Post app (e.g., `test1`); this profile manages your social account connections.
    *   In both the **"Post to Instagram"** and **"Post to Facebook"** nodes, edit the HTTP Header Auth credentials.
    *   Set the Header `Name` to `Authorization` and the `Value` to `Apikey YOUR_UPLOAD_POST_API_KEY`.
    *   **Crucially**, in the same nodes, find the `user` parameter in the body and replace the placeholder `YOUR_USERNAME` with the profile name you created (e.g., `test1`).

3.  **Configure OpenAI/OpenRouter (Optional for Title Generation):**
    *   The **"Generate title"** node uses an OpenAI-compatible API. The provided example uses OpenRouter.
    *   Ensure you have valid credentials (e.g., for OpenRouter or directly for OpenAI) configured in n8n and selected in this node.

4.  **Configure Google Drive (Optional for Backup):**
    *   The **"Upload Image"** node requires Google OAuth credentials.
    *   Set up a Google Cloud project, enable the Drive API, and create OAuth 2.0 credentials in the n8n settings.
    *   Authenticate and select the desired destination folder in the node's parameters.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 📊 Basic Information

- **Workflow ID:** 8601
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 962
- **Downloads:** 96
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8601)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×7)
- **httpRequest** (×6)
- **wait** 
- **if** 
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **formTrigger** 
- **code** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
