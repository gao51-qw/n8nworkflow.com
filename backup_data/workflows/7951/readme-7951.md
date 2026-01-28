# Visual storytelling content factory: Gemini & Replicate AI with human-in-the-loop publishing

> This n8n workflow **automates the entire content creation and publishing pipeline** for engaging, AI-generated visual stories, ensuring image and video quality with human-in-the-loop approvals.

### What it does:
It takes a narrative concept (e.g., 'A Day in the Life of a Serene Skeleton') and transforms it into a series of unique images and videos, which are then published across multiple social media platforms.

### How it works:

**Creative Conceptualization**: An AI 'Creative Director' develops a detailed narrative, including scenes, moods, and character details.

**Prompt Engineering**: An AI 'Creative Technician' translates the narrative into precise text-to-image and text-to-video prompts, maintaining a consistent artistic style, lighting, and character appearance.

**AI Asset Generation**: Replicate's AI models (Qwen-Image for images and Seedance-1-Lite for videos) create the visual content from these prompts.

**Human-in-the-Loop Approval**: Generated images and videos are sent to **Slack** for manual review. Users can approve or request regeneration, ensuring creative control and quality.

**Multi-Platform Publishing**: Approved content is automatically published via **Blotato** to Instagram and Facebook (videos), and TikTok (image slideshows), ready for your audience.

### Technical Requirements:

- Replicate Account with Balance: For image and video generation (using Qwen-Image and Seedance-1-Lite).

- Blotato Subscription: For seamless publishing to multiple social media platforms.

- OpenRouter Account with Balance: To access various Large Language Models (LLMs) like Gemini 2.5 Flash for creative direction and prompt generation.

- Slack Account: For the human-in-the-loop approval process.

### Customization Potential:
This workflow serves as a robust foundation that can be easily adapted for various use cases beyond story narratives, such as:

- Automating product publishing with AI-generated visuals and descriptions.

- Creating dynamic advertising content for campaigns.

- Generating personalized visual content for marketing.

- Scaling content creation for personal or e-commerce brands.

### Why use it?
Ideal for content creators, marketers, and businesses seeking to scale their visual content production, maintain creative control through human oversight, and automate distribution (with scheduling option) to key social media channels (Instagram, Facebook, TikTok, X, Pinterest, YouTube, and more). Customize the initial story brief to unleash endless themed narratives tailored to your brand.

## 📊 Basic Information

- **Workflow ID:** 7951
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 1052
- **Downloads:** 105
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7951)

## 👤 Author

- **Name:** Nadia Privalikhina
- **Username:** @nadiap

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **splitOut** 
- **httpRequest** (×3)
- **slack** (×2)
- **if** (×2)
- **set** (×4)
- **stickyNote** (×9)
- **limit** 
- **splitInBatches** (×3)
- **sort** 
- **summarize** (×2)
- **@blotato/n8n-nodes-blotato.blotato** (×6)
- **editImage** (×2)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
