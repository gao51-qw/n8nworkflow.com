# Generate custom AI images with OpenAI GPT-Image-1 model

> **How it works**  
1. Trigger the workflow manually via the n8n UI.  
2. Define key parameters like the image prompt, number of images, size, quality, and model.  
3. Send a POST request to OpenAI’s image generation API using those inputs.  
4. Split the API response to handle multiple images.  
5. Convert the base64 image data into downloadable binary files.

**Set up steps**  
Initial setup takes around 5–10 minutes. You’ll need an OpenAI API key, a configured HTTP Request node with credentials, and to customize the prompt/parameter fields in the “Set Variables” node. No advanced config or external services needed.

**Important Note**
You have to make sure to complete OpenAI's new verification requirements to use their new image API:
https://help.openai.com/en/articles/10910291-api-organization-verification

It only takes a few minutes and does not cost any money.

## 📊 Basic Information

- **Workflow ID:** 3705
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 12905
- **Downloads:** 1290
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3705)

## 👤 Author

- **Name:** Max aka Mosheh
- **Username:** @aiwithapex

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **convertToFile** 
- **httpRequest** 
- **manualTrigger** 
- **set** 
- **splitOut** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
