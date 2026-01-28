# AI blog post generator with scheduled or prompt-based content for WordPress

> # This n8n template demonstrates how to automate blog post creation with AI and WordPress

This workflow is designed for creators who want to maintain an active blog without spending hours writing — while still taking advantage of SEO benefits.  
It connects **OpenAI** and **WordPress** to help you **schedule AI-generated posts** or **create content from simple one- or two-word prompts**.

---

## 🧠 Good to know

At the time of writing, each AI-generated post will use your **OpenAI API credits** according to your model and usage tier.  
This workflow requires an active **WordPress site** with API access and your **OpenAI API key**.  
Setup is quick — in less than **5 minutes**, you can have everything running smoothly!

---

## ⚙️ How it works

1. The workflow connects to your **WordPress API** and your **OpenAI account**.  
2. You can choose between two modes:  
   - **Scheduled mode:** AI automatically creates and publishes posts based on your defined schedule.  
   - **Prompt mode:** Enter a short phrase (one or two words) and let AI generate a complete SEO-optimized post.  
3. The generated content is formatted and published directly to your WordPress blog.  
4. You can easily customize prompts, post styles, or scheduling frequency to match your brand and goals.

---

## 🚀 How to use

- Start with the **Manual Trigger** node (as an example) — or replace it with other triggers such as **webhooks**, **cron jobs**, or **form submissions**.  
- Adjust your **OpenAI prompts** to fine-tune the tone, structure, or SEO focus of your posts.  
- You can also extend this workflow to automatically share posts on social media or send notifications when new articles go live.

---

## ✅ Requirements

- Active **OpenAI API key**  
- **WordPress site** with API access  

---

## 🧩 Customising this workflow

AI-powered content creation can be adapted for many purposes. Try using it for:  
- Automated **content calendars**  
- Generating **product descriptions**  
- Creating **newsletter drafts**  
- Building **SEO-focused blogs** effortlessly  


## 📊 Basic Information

- **Workflow ID:** 10180
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 1040
- **Downloads:** 104
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10180)

## 👤 Author

- **Name:** Cadu | Ei, Doc!
- **Username:** @eidoc

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **code** (×3)
- **xml** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **wordpress** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
