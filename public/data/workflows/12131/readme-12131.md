# Convert GitHub code commits to LinkedIn posts with Gemini AI and code image generation

> Turn your code commits into engaging social media content automatically. This workflow monitors a GitHub repository, uses AI to write a LinkedIn post about your changes, generates a beautiful "Mac-window" style image of your code, and publishes it all to LinkedIn.

## How it works
1. **GitHub Trigger**: Watches for new `push` events in your selected repository.
2. **AI Analysis**: Passes the code changes to an LLM (via LangChain) to write a professional LinkedIn post and select the best code snippet.
3. **Image Generation**: Creates a custom HTML view of your code (with syntax highlighting and window controls) and converts it to an image using the HCTI API.
4. **Hosting & Posting**: Uploads the generated image back to GitHub for hosting, then combines the text and image to publish a live post on LinkedIn.

## Set up steps
1. **Configure Credentials**: You will need credentials for:
   - GitHub (OAuth2 or Access Token)
   - LinkedIn (OAuth2)
   - OpenRouter (or swap the model node for OpenAI/Anthropic)
   - HCTI.io (for the HTML-to-Image conversion)
2. **Update GitHub Nodes**:
   - In the **Trigger** node: Set your `Owner` and `Repository`.
   - In the **File Download** node: Set the same `Owner` and `Repository`.
   - In the **Upload Image** node: Set the target repo where you want images stored.
3. **Update LinkedIn Node**:
   - Add your LinkedIn Person URN in the `Person` field.

## 📊 Basic Information

- **Workflow ID:** 12131
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 32
- **Downloads:** 3
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12131)

## 👤 Author

- **Name:** Marco Florez
- **Username:** @florezai

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **githubTrigger** 
- **github** (×2)
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** (×2)
- **httpRequest** (×2)
- **merge** 
- **extractFromFile** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
