# Automate Instagram posts with GPT-4o captions, ImgBB & Buffer integration

> ## Disclaimer
This workflow uses two community nodes.![Instagram n8n workflow.png](fileId:1850)

# What It Does
[Workflow Demonstration](https://www.youtube.com/watch?v=kv--CRbrcFg)

This powerful automated workflow eliminates the need to manually create and upload Instagram posts, saving you time while delivering perfect captions and hashtags.
Simply drop an image into a designated folder on your desktop, and the process begins instantly.
GPT-4o analyzes the image and generates an engaging Instagram caption along with relevant hashtags tailored to the content.
The image is then uploaded to ImgBB for reliable hosting, while the caption and hashtags are sent to Airtable. From there, Airtable automatically pulls in the hosted image link.
Once everything is in place, Zapier takes over — sending the complete post, including the image and AI-generated description, directly to Buffer for scheduling and publishing to your Instagram account.
In just a few minutes, you go from saving an image to having a fully composed, ready-to-post piece of content — with almost zero effort.

# Who This Is For
This workflow is designed for content creators, social media managers, entrepreneurs, and small business owners who want to save time, stay consistent, and scale their Instagram presence effortlessly.
Whether you're running a brand, promoting a product, managing multiple clients, or just tired of the repetitive grind of posting — this automation gives you back your time while keeping your content sharp and professional.
No design skills needed. No social media assistant required. Just drop your image, and let AI handle the rest.
If you’re looking to streamline your workflow, boost engagement, and focus more on creativity than logistics — this is made for you.

# How It Works
Start by connecting a designated folder on your desktop to the workflow. Every time a new image is saved to this folder, the automation is triggered.
Once you've added the image you'd like to post to Instagram, the workflow kicks off — sending the image to OpenAI, where GPT-4o analyzes it and generates an engaging Instagram-style caption, complete with relevant hashtags.
For more personalized results, you can customize the GPT-4o prompt to match your brand’s voice or even provide a sample post from your Instagram account.
The image is then uploaded to ImgBB for reliable cloud storage, and the AI-generated caption is sent to Airtable. Airtable automatically pulls in the hosted image link from ImgBB.
This triggers Zapier, which packages the content and sends it to Buffer — where your post can be published immediately or scheduled for a later time based on your preferences.
In just a few minutes, your image goes from a desktop folder to a fully automated, AI-crafted Instagram post — all without manual input.

# Set Up Steps
- Create a Folder:
- Create a folder on your computer for saving images. Copy the folder path and add it to the Local File Trigger node in n8n.
- Get OpenAI API Key:
- Visit https://platform.openai.com/api-keys to generate your API key. Connect it to the Analyze Image AI Agent and the Prompt/Text Generator AI Agent.
- Fund Your OpenAI Account:
- Add credits to your OpenAI account. GPT-4o costs approximately $0.01 for every 3 automation runs.
- Create an ImgBB Account (free):
- Sign up at https://imgbb.com and obtain your free API key.
- Create an Airtable Account (free):
- Sign up at https://airtable.com and get your API key.
- Set Up Zapier:
- Create a free Zapier account at https://zapier.com. Connect it to Airtable and Buffer (100 tasks/month free).
- Set Up Buffer:
- Sign up at https://buffer.com, connect your Instagram account, and start with 10 free posts/month.

## Tips
For improved description and tag performance recommend customizing the Analyze node. Change the #Description portion of the node to describe the types of posts you normally place on your Instagram and tailor it to how you like your descriptions to be.  Additionally, change the #Example Post Description to a post with tags included of what you would normally post to your Instagram.

## 📊 Basic Information

- **Workflow ID:** 6334
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 169
- **Downloads:** 16
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6334)

## 👤 Author

- **Name:** AiAgent
- **Username:** @lifehacks

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **localFileTrigger** 
- **code** (×2)
- **readWriteFile** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** 
- **extractFromFile** 
- **merge** 
- **aggregate** 
- **httpRequest** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
