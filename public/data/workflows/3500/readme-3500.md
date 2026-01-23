# ✍️ AI agent to create Linkedin posts for blog promotion with GPT-4o

> *Tags: Automation, AI, Marketing, Content Creation*

### Context
I’m a [**Supply Chain Data Scientist**](https://samirsaci.com) and content creator who writes regularly about **data-driven optimization, logistics, and sustainability**. Promoting blog articles on LinkedIn used to be a manual task — until I decided to **automate it with N8N and GPT-4o**.

This workflow lets you **automatically extract blog posts**, clean the content, and generate a **professional LinkedIn post** using an **AI Agent powered by GPT-4o** — all in one seamless automation.

&gt;Save hours of repetitive work and boost your reach with AI.

📬 For business inquiries, you can add me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?
This template is perfect for:
- **Bloggers and writers** who want to promote their content on LinkedIn
- **Marketing teams** looking to automate professional post-generation
- **Content creators** using Ghost platforms

It generates polished LinkedIn posts with:
- A hook
- A quick summary
- A call-to-action
- A signature to drive readers to your contact page

[![Automated Blog Promotion](https://www.samirsaci.com/content/images/2025/04/image-2.png)](https://www.youtube.com/watch?v=Lhi6hV6rWEo)

### How does it work?
This workflow runs in N8N and performs the following steps:

1. 🚀 **Triggers manually** or you can add a scheduler
2. 📰 **Pulls recent blog posts** from your Ghost site (via API)
3. 🧼 **Cleans the HTML** content for AI input
4. 🤖 **Sends content to GPT-4o** with a tailored prompt to create a LinkedIn post
5. 📄 **Records all data** (post content + LinkedIn output) in a Google Sheet

[![Workflow Overview](https://www.samirsaci.com/content/images/size/w1000/2025/04/image-3.png)](https://www.youtube.com/watch?v=Lhi6hV6rWEo)

### What do I need to start?
You don’t need to write a single line of code.
#### Prerequisites:
- A **Ghost CMS account** with blog content
- A **Google Sheet** to store generated posts
- An **OpenAI API Key**
- **Google Sheets API** connected via OAuth2

### Next Steps
Use the sticky notes in the workflow to understand how to:
- Add your Ghost API credentials
- Link your Google Sheet
- Customize the AI prompt (e.g., change the author name or tone)
- Optionally add auto-posting to LinkedIn using tools like Buffer or Make

[![Generated Post Example](https://www.samirsaci.com/content/images/2025/04/temp-4.png)](https://www.youtube.com/watch?v=Lhi6hV6rWEo)

[🎥 Watch My Tutorial](https://www.youtube.com/watch?v=Lhi6hV6rWEo)

🚀 Want to explore how automation can scale your brand or business?
📬 Let’s connect on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Notes
- You can adapt this template for **Twitter, Facebook**, or even **email newsletters** by adjusting the prompt and output channel.
- This workflow was built using **n8n 1.85.4**

Submitted: April 9th, 2025


## 📊 Basic Information

- **Workflow ID:** 3500
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 4935
- **Downloads:** 493
- **Created:** 2025/4/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3500)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **ghost** 
- **set** 
- **stickyNote** (×4)
- **googleSheets** 
- **merge** (×2)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
