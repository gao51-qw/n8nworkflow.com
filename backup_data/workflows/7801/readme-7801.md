# Generate & post LinkedIn content automatically with GPT-4 & GPT image 1

> # **⚙ AI-Powered Social Media Automation for LinkedIn**

---

## **How It Works**
This workflow automates the entire social media content creation and publishing process for LinkedIn. It starts with a simple form to collect a topic or idea. The workflow then uses two AI agents to automatically generate both the written content and a unique image prompt. The AI-generated image is created, uploaded, and then downloaded before the final step, where both the content and the image are posted to your LinkedIn account.

---

## **Setup Steps**

Follow these steps to get the workflow running in your n8n instance.

### **1. Prerequisites**
You will need a working n8n instance and accounts for the following services:
* **OpenAI:** For AI content and image generation.
* **Google Drive:** To temporarily store the generated image.
* **Gmail:** For the file upload process.
* **LinkedIn:** To publish the final post.

### **2. Workflow Import**
Import the provided `.json` file into your n8n instance. All the necessary nodes will appear on your canvas.

### **3. Configure Credentials**
Connect the following credentials to their respective nodes:
* **OpenAI:** Connect to the `OpenAI Chat Model`, `AI Agent Content Generator`, `Ai Agent Prompt Image generator`, and `Image-1` nodes.
* **Google Drive:** Connect to the `Upload file` and `Download file` nodes.
* **Gmail:** Connect to the `Send a message` node.
* **LinkedIn:** Connect to the `Create a post` node.

### **4. Customize the Trigger Form**
1.  Click on the **`On form submission`** node.
2.  Review and customize the form fields to fit your specific needs (e.g., add fields for hashtags, target audience, etc.).
3.  Click **"Share Form"** to get the unique URL for your content ideas form.

### **5. Customize AI Prompts**
1.  Click on the **`AI Agent Content Generator`** node.
2.  Review and adjust the **`System Message`** to refine the writing style, tone, and character limits for your LinkedIn posts.
3.  Similarly, open the **`Ai Agent Prompt Image generator`** node and modify the **`System Message`** to guide the AI in creating images that match your brand identity.

### **6. Configure Google Drive**
1.  Click on the **`Upload file`** node.
2.  Under the **`Parameters`** tab, select the specific **`Drive ID`** and **`Folder ID`** where you want to temporarily store the generated images.

### **7. Configure the LinkedIn Post**
1.  Click on the **`Create a post`** node.
2.  Ensure that the `Text` and `shareMediaCategory` parameters are correctly mapped to the output of the preceding nodes to use the AI-generated text and image.

### **8. Activate the Workflow**
1.  Once all credentials and node configurations are complete, click **"Save"** at the top of the canvas.
2.  Finally, toggle the workflow to **"Active"**. The workflow is now live and will automatically create and publish content upon every form submission.

## 📊 Basic Information

- **Workflow ID:** 7801
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 118
- **Downloads:** 11
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7801)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **gmail** 
- **googleDrive** (×2)
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.toolThink** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
