# Add AI-generated headings & conclusions to WordPress posts with GPT-4.1

> This workflow enriches your WordPress articles by automatically adding an AI-generated heading and a short concluding paragraph. It ensures each post ends with valuable, engaging content to improve user satisfaction, branding, and SEO.

## How It Works

Fetches published articles from your WordPress site via the REST API.

Cleans and formats the article text for processing.

Sends the content to OpenAI with a structured prompt.

AI generates a new heading + 3-line conclusion tailored to the article.

Appends the generated text to the original content.

Updates the article back in WordPress automatically.

### Requirements

1. n8n version: 1.49.0 or later (recommended).
3. Active OpenAI API key.
5. WordPress REST API enabled.
7. WordPress API credentials (username + application password).

### Setup Instructions

Import this workflow into n8n.

Go to Credentials and configure:

OpenAI API (API key).

WordPress API (username + application password).

Replace https://example.com with your site’s URL.

Run manually or schedule it to enhance content automatically.

### Categories

AI & Machine Learning

WordPress

Content Marketing

SEO

#### Tags

ai, openai, wordpress, seo, content enhancement, automation, n8n

## 📊 Basic Information

- **Workflow ID:** 7581
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 323
- **Downloads:** 32
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7581)

## 👤 Author

- **Name:** Ali Khosravani
- **Username:** @alikhosro

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** 
- **httpRequest** (×2)
- **set** 
- **code** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
