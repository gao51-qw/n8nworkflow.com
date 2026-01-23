# Convert YouTube videos to SEO articles with Supadata, Claude Sonnet 4 and WordPress

> ## Problem This Solves
Content creators, digital marketers, and website owners struggle with the time-consuming process of creating fresh, SEO-optimized blog content consistently. Manually writing articles, researching keywords, and maintaining a regular publishing schedule can take hours per piece of content.

## Target Audience
This workflow is perfect for:
- **Bloggers and Content Creators** who want to repurpose video content into written articles
- **Content Marketing Agencies** managing multiple client websites
- **Digital Marketing Teams** looking to scale their content production
- **Small Business Owners** who need ****regular blog content**** but lack time or writing resources
- **SEO Specialists** seeking to maximize content output while maintaining quality
- **YouTube Channel Owners** who want to expand their content reach across different platforms

## What This Workflow Does
This n8n automation transforms popular YouTube videos into high-quality, SEO-optimized articles that appear completely human-written. The workflow intelligently selects trending content from your chosen YouTube channels, transcribes the videos, and uses advanced AI to craft engaging articles optimized for search engines.

## How it works
- The user selects YouTube channels from which the workflow retrieves the most popular videos.
- The videos are transcribed and converted into SEO-optimized articles.
- Generated articles are automatically published to your WordPress website.

## Set up steps
- Connect your Google Account to all YouTube nodes.
- Integrate your Supadata account.
- Customize White-labeled prompt in the 'Compose Article' node according to your brand.
- Configure the 'Create WordPress Post' node with your WordPress website API.
- Set your target YouTube channels and activate the workflow.
- Detailed instructions and tutorials can be found in the workflow's sticky notes.

## Requirements
- Google account.
- supadata.ai account (used for video transcription).
- Anthropic subscription (GPT models are also supported, but I personally recommend using Anthropic Claude Sonnet 4 for text generation).

## 📊 Basic Information

- **Workflow ID:** 7139
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 822
- **Downloads:** 82
- **Created:** 2025/8/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7139)

## 👤 Author

- **Name:** Pavlo Hurhu
- **Username:** @pavlohurhu

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **splitInBatches** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **stickyNote** (×4)
- **set** 
- **httpRequest** (×3)
- **youTube** (×2)
- **removeDuplicates** 
- **filter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** (×3)
- **wait** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
