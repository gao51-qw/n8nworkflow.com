# Generate WordPress blog posts with GPT-4O and Pixabay featured images via form

> 

This workflow automates the creation of a draft article for a blog
## Use Cases 
* Rapidly generate blog content from simple prompts. 
* Ensure content consistency and speed up time-to-publish. 
* Automatically source and attach relevant featured images. 
* Save your digital marketing team significant time. (Personalized touch based on your experience)

## Prerequisites/Requirements
* An **OpenAI** API Key (for GPT-4O).
* A **Pixabay** API Key (for image sourcing).
* A **WordPress** site URL and API credentials (username/password or application password).

## Customization Options
* Adjust the AI prompt in the **AI Content Generation** node to change the content tone and style.
* Modify the search query in the **Pixabay Query HTTP** node to influence the featured image selection.
* Change the reviewer email address in the final **Send Review Notification** node.

## 📊 Basic Information

- **Workflow ID:** 10402
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 380
- **Downloads:** 38
- **Created:** 2025/11/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10402)

## 👤 Author

- **Name:** Sheragim
- **Username:** @sheragim

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.openAi** 
- **form** 
- **httpRequest** (×6)
- **set** (×3)
- **merge** 
- **wait** 
- **formTrigger** 
- **html** 
- **wordpress** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
