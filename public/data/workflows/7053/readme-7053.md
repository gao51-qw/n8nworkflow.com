# Auto-generate LinkedIn posts from Google Drive images using GPT-4o

> **Description:**

Streamline your social content creation workflow with this AI-powered n8n automation template. It monitors a specific Google Drive folder for new LinkedIn post images, automatically uploads them to Cloudinary, analyzes the content using GPT-4o via Azure OpenAI, and instantly emails a ready-to-publish HTML email with a full LinkedIn-style post.

Perfect for solopreneurs, content creators, social media managers, and marketing teams who want to automate the creation of branded LinkedIn posts based on visual assets.

**What This Template Does (Step-by-Step):**

📁 Google Drive Folder Monitoring
- Watches a specified Google Drive folder
- Triggers when a new image file is added

⬇️ Download the New Image File
- Securely downloads the uploaded file for processing

☁️ Upload to Cloudinary for Public Hosting
- Converts local file to public URL via Cloudinary
- Necessary for embedding in email content

🧠 Analyze Image with Azure OpenAI (GPT-4o)
Sends the public image URL to a GPT-4o model
Prompts the AI to generate:
- LinkedIn headline
- Overview
- Key features
- Ideal users
- Tech stack
- Hashtags
Complete mobile-friendly HTML email body

📧 Deliver Email with HTML LinkedIn Post
- Sends the generated LinkedIn post via email
- Designed with inline CSS for Gmail & Outlook compatibility

**Best For:**

🧑‍💼 LinkedIn creators & consultants
📣 Social media managers & freelancers
🛠️ SaaS founders and product marketers
📸 Anyone using Google Drive to manage social post assets

**Built With:**
- Google Drive Trigger
- Cloudinary Upload API
- Azure OpenAI (GPT-4o-mini)
- HTML Email via SMTP
- Custom Prompt with LangChain LLM Chain

**Key Benefits:**

✅ Fully hands-free LinkedIn post generation
🚀 Speed up social media content workflows
🎨 Visual-first input: image → post → email
💡 Uses your design work to inspire original posts
📬 Emails ready-to-post content directly to your inbox


## 📊 Basic Information

- **Workflow ID:** 7053
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 61
- **Downloads:** 6
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7053)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatAzureOpenAi** 
- **emailSend** 
- **httpRequest** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
