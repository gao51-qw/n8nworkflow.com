# Automate YouTube community posts with DeepSeek AI & dynamic image generation using Google Sheets

> **The Ultimate AI Workflow for YouTube Community Posts (with Dynamic Images)**

**Product Description:**
Is your YouTube Community tab collecting dust? You've probably noticed that while you can schedule videos, there's a massive gap in automation: almost no tools or templates can automatically create content for your YouTube Community Posts.
![Screenshot 20250801 234635.png](fileId:1931)

***You are leaving a huge amount of engagement, audience connection, and growth on the table.***

This n8n workflow is engineered to solve this exact problem. It doesn't just create posts for you; it acts as your personal AI content strategist, creating high-quality, engaging Community Posts with perfectly matched images, every single day.

**✨ Next-Level Automation:** Dynamic Image Generation
What makes this workflow truly unique? It doesn't just use a generic, pre-written prompt for your images. It features a two-step AI process:

First, the AI writes the text for your Community Post based on the day's theme.

Then, it reads its own writing to generate a brand new, highly specific image prompt that perfectly matches the post's content.

This means you get unique, incredibly relevant images for every single post, not just generic visuals. It's the difference between custom-tailored content and off-the-shelf templates.

**🚀 Core Features & Benefits**
Dynamic AI Image Generation: Creates a unique, perfectly matched image for every post by analyzing the generated text first.

**AI-Powered Copywriting:** Automatically writes high-quality text in a customizable voice (pre-configured for a direct, "Alex Hormozi" style) that gets your audience talking.

**Built-in 7-Day Content Strategy:** Never run out of ideas. The workflow uses daily themes like 'How-to Tutorials', 'Audience Q&A', and 'Industry News' to keep your content calendar full and engaging.

**Automated Content Dashboard:** Organizes every generated post—including text, the dynamic image prompt, the final image URL, and character count—into a Google Sheet for easy review and management.

**Set-and-Forget Scheduling:** Runs on a fully automated daily schedule, ensuring you maintain rock-solid consistency without any manual effort.

**💡 Why Is This a Game-Changer?**
Most creators ignore the Community tab because it's too much work. By automating it intelligently, you will:

**Save Hours of Creative Work:** Stop the daily grind of brainstorming, writing, and designing posts.

**Dramatically Boost Engagement:** Keep your audience hooked between video uploads with fresh, interactive content.

**Build a Stronger Community:** Use the tab for its intended purpose—building a loyal following that feels connected to your brand.

***Stop neglecting the most powerful engagement tool on YouTube. Get this workflow and put your community growth on true autopilot.***

**Part 2: Configuration Guide**
⚙️ Configuration Guide: YouTube Community Post Automation
Follow these steps to get your powerful new content engine set up and running.

**1. Prerequisites**
Before you start, make sure you have accounts and API keys for the following services:

An active n8n instance (Cloud or self-hosted).

A Google account.

OpenRouter (for text generation).

Together AI (for image generation).

**2. Set Up Your Credentials in n8n**
This workflow requires three credentials. Add them in your n8n dashboard under Credentials &gt; Add credential.

Google Sheets: Search for the Google Sheets credential and follow the steps to connect your Google account.

OpenRouter API Key:

Select credential type: Header Auth.

Credential Name: OpenRouter API Key

Header Name: Authorization

Header Value: Bearer YOUR_OPENROUTER_API_KEY

Together AI API Key:

Select credential type: Header Auth.

Credential Name: Together AI API Key

Header Name: Authorization

Header Value: Bearer YOUR_TOGETHER_AI_API_KEY

**3. Configure the Workflow Nodes**
Open the workflow and connect your accounts.

Node: "Add to Google Sheets"

Select your Google Sheets Credential.

Paste in your Spreadsheet ID (from the sheet's URL).

Enter the Sheet Name (the name of the tab).

Nodes: "DeepSeek R1 Model" & "Generate Image - Together AI"

On the "DeepSeek R1 Model" node, select your "OpenRouter API Key" credential.

On the "Generate Image - Together AI" node, select your "Together AI API Key" credential.

**4. Customize Your Content (Optional but Recommended)
Edit Daily Themes:**

Open the "Set Day Variables" node.

In the contentMap, you can edit the type and theme for each day of the week. (You no longer need to set an image prompt here!)

Change the AI's Writing Style:

Open the "Generate Content - LLM Chain" node.

Edit the System Message to change the personality, tone, and rules the AI follows when writing your posts.

Refine the Image Prompting Style:

Open the "Generate Dynamic Image Prompt" node.

You can edit the prompt here to change how the AI creates the image prompts. For example, you could add "in a photorealistic style" or "as a vector illustration" to influence the final images.

**5. Set Your Schedule**
Open the "Daily 10AM EST Trigger" node.

Adjust the Cron Expression to change the time or frequency. Use crontab.guru to help create your desired schedule.

Note: The schedule runs based on your n8n instance's timezone, which can be set in your main n8n Settings.

**6. Activate Your Workflow! ✅**
Once configured, click the "Active" toggle at the top right. Congratulations, your automated content engine is now live!

## 📊 Basic Information

- **Workflow ID:** 6826
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 70
- **Downloads:** 7
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6826)

## 👤 Author

- **Name:** Gerald Denor
- **Username:** @dominixai

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleSheets** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
