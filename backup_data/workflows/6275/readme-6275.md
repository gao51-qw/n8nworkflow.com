# Auto-generate SEO articles in WordPress with Gemini AI and OpenAI images

> ### This n8n template helps you automate the process of generating, uploading, and saving SEO-optimized articles as drafts in your Wordpress site using AI agents for both content and visuals.

Use cases are many: 
- **Blog Owners**: Effortlessly keep your Wordpress blog updated with automated, SEO-optimized articles and featured images.
- **Affiliate Marketers**: Rapidly publish keyword-rich Wordpress posts to boost traffic and affiliate earnings without manual writing.
- **Newsrooms & Content Teams**: Instantly draft and upload timely Wordpress articles to stay ahead on trending topics with minimal effort.
- **Agencies**: Automate content creation and publishing across multiple client Wordpress sites, scaling your agency’s output.

## How It Works
- The workflow begins with a manual trigger in n8n.
- The target Wordpress website domain - where the article will be published - is specified using the **Fields – Set Website** node.
- The **Agent – Topic Chooser & Title Generator** uses Google Gemini to randomly select one of your pre-defined website-related topics and requests the model to generate article elements in your specified format. The results are then parsed and routed to the next AI agent.
- The **Agent – Article Generator** (powered by Google Gemini) creates a complete, SEO-optimized article tailored to your settings and the selected topic.
- The workflow then uploads the AI-generated article as a draft post to your Wordpress site.
- Next, the article content is sent to the **OpenAI** to generate a unique, relevant featured image.
- The generated image is uploaded and set as the featured image in the draft post.
- (Optional) Finally, the workflow can notify you via **Telegram** (or any connected messaging app) that the post is ready as a draft on your Wordpress account for further review.


⚠️ **Important Note**: 

In the default prompt setup of the first **Agent – Topic Chooser & Title Generator**, the website domain is set to **Agent Circle**, the industry is **Technology and Artificial Intelligence**, and the **5 available topics** for article generation are: Artificial Intelligence (AI); AI Agents; Automation; Workflow; Prompts). 

To get the best results for your site, please make sure to adjust this part of the prompt to match your own website domain, your industry, and the topics most relevant to your audience. 

## How To Set Up
- Download and import the workflow into your n8n workspace.
- Set up the necessary credentials for each tool:
     - **Google Gemini API** (for article elements generation) → connected to nodes **Google Gemini Chat Model 1** and **Google Gemini Chat Model 2**.
     - **OpenAI API** (for creating unique featured images) → connected to the node **OpenAI - Generate Image**.
     - **Wordpress API access** (for posting, uploading, and setting featured images) → connected to the node **Wordpress - Post Draft**.
     - (Optional) **Telegram** or your preferred chat app (for completion notifications).
- Adjust the **Fields – Set Website** node to match your target Wordpress website domain.
- Manually trigger the workflow by clicking **Test Workflow** or **Execute Workflow**.
- Wait for the process to complete.
- Receive a chat notification or check the draft post directly in your Wordpress dashboard.

## Requirements
- An **n8n** instance (self-hosted or cloud).
- **OpenAI** API access (for image generation).
- **Wordpress** API access with admin permissions.
- Access to **Google Gemini** (for advanced topic selection and article generation).
- (Optional) API credentials for **Telegram** or another messaging app if you want to receive notifications when the process is complete.

## How To Customize
- **Modify topics, article elements and guildelines**: You can easily customize the pre-defined topics in the instruction prompt within Node **Agent – Topic Chooser & Title Generator**, as well as adjust the descriptions or structure of each article element to fit your needs and style.
- **Integrate other chat triggers**: Link up with Slack, Discord, or any messaging tool to update progress.
- **Choose your AI model**: Swap between Google Gemini and OpenAI for content generation, or add your preferred LLM.

## Need Help?
If you’d like this workflow customized, or if you’re looking to build a tailored AI Agent for your own business - please feel free to reach out to [**Agent Circle**](https://www.agentcircle.ai/). We’re always here to support and help you to bring automation ideas to life.

Join our community on different platforms for assistance, inspiration and tips from others.

Website: https://www.agentcircle.ai/
Etsy: https://www.etsy.com/shop/AgentCircle
Gumroad: http://agentcircle.gumroad.com/
Discord Global: https://discord.gg/d8SkCzKwnP
FB Page Global: https://www.facebook.com/agentcircle/
FB Group Global: https://www.facebook.com/groups/aiagentcircle/
X: https://x.com/agent_circle
YouTube: https://www.youtube.com/@agentcircle
LinkedIn: https://www.linkedin.com/company/agentcircle

## 📊 Basic Information

- **Workflow ID:** 6275
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 3319
- **Downloads:** 331
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6275)

## 👤 Author

- **Name:** Agent Circle
- **Username:** @agentcircle

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **wordpress** 
- **httpRequest** (×2)
- **telegram** 
- **stickyNote** (×6)
- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
