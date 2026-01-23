# Create food emoji icons with OpenAI GPT & image generation

> ![Screenshot 20250712 at 5.52.43 PM.png](fileId:1745)

This workflow allows users to generate beautifully stylized 3D-rendered food emoji icons based on a simple text prompt. It combines user input, structured visual design generation, and image rendering using OpenAI’s GPT models.

## ✨ What It Does
1. Collects user input via a form: e.g. "green apple"
2. Generates a structured JSON specification describing the emoji’s form, lighting, texture, and color scheme
3. Uses AI to render an image based on that spec—styled like a high-quality emoji icon with a transparent background

## 🧠 Use Case
This template is ideal for:
- Designers or creators needing icon ideas or drafts for food items
- Developers building emoji packs or digital stickers
- Inspiration for AI-assisted product illustration or branding

## 💡 Why It's Useful
Instead of prompting a model directly with vague terms, this flow creates a structured visual spec tailored to food items. The final emoji-style icon is polished, modern, and downloadable.

## ✅ Requirements
To get started with this workflow, follow these steps:
1. **🔑 Configure Credentials**: Set up your API credentials for OpenAI and Google Drive
2. **💳 Add OpoenAI Credit**: Make sure to add credit to your OpenAI account, verify your organization (required for generating images)
3. **📊 Connect Google Drive**: Authenticate your Google Drive account
4. **⚙️ (Optional) Customize Prompts**: Adjust the prompts within the workflow to better suit your specific needs

**Note: Each image generation will cost you about $0.17**



## 📊 Basic Information

- **Workflow ID:** 5922
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 2305
- **Downloads:** 230
- **Created:** 2025/7/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5922)

## 👤 Author

- **Name:** Adnan
- **Username:** @adnan

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **googleDrive** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
