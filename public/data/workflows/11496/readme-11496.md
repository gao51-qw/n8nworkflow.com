# Automate video translation from multiple sources with Rask AI

> ##  🎬 Rask AI Video Translation Workflow

This workflow is designed to **translate a video accessible by URL** (supported sources: YouTube, Google Drive, S3, Vimeo, or a direct link) into [a language supported by Rask AI](https://docs.api.rask.ai/languages/destination).  

It automatically uploads your video, waits for it to finish processing, creates a translation project, and retrieves the final translated output.

You can use it to quickly build automations for localization, multilingual content creation, training materials, and more.

###  🔐 Authentication

To run this workflow, make sure you have **OAuth2 authentication** configured in n8n under the name **`raskOAuth2`**.

Your OAuth2 credentials must include **Client ID**  and **Client Secret**

You can find both in your Rask account settings:  
👉 https://app.rask.ai/account

For details on Rask authentication, refer to the official documentation:  
👉 https://docs.api.rask.ai/api-reference/authentication

Ensure that the **`raskOAuth2`** authentication is selected in the following nodes: **Upload media**,  **Get media**, **Create project**, **Get project**

These nodes interact with the Rask API and require valid credentials.

###  🧪 Test Input

You can test the workflow using the following sample values (simply insert these values into your trigger or input node to run a full translation cycle end-to-end.):

- **`link`**:  
  `https://static.rask.ai/samples/sample_1.mp4`

- **`dst_lang`** (target translation language):  
  `en-us`
--- 

Happy Translating! 🌍✨

## 📊 Basic Information

- **Workflow ID:** 11496
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 12
- **Downloads:** 1
- **Created:** 2025/12/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11496)

## 👤 Author

- **Name:** Victor
- **Username:** @brask

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **httpRequest** (×4)
- **switch** (×2)
- **wait** (×2)
- **stickyNote** (×3)
- **stopAndError** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
