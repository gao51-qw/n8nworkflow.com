# Learn anything from HN - get top resource recommendations from Hacker News

> *Learning something new? Endlessly searching to find the best resources?* This workflow finds top community-recommended learning resources on any topic from Hacker News, delivered to your inbox.

### How it works
- User submits a topic they want to learn via a simple form.
- The workflow searches for relevant "Ask HN" posts on Hacker News and extracts top-level comments.
- An LLM analyzes the comments and identifies the best learning resources.
- A personalized email is sent to the user with a Markdown formatted list of top recommendations, categorized by resource type (e.g., book, course, article) and difficulty level.


### Set up steps

- Add your [Google Gemini API credentials](https://n8n.io/integrations/n8n-nodes-base.googlepalm/). You'll need to create a project and enable the Generative Language API.
- Add your [SMTP credentials](https://n8n.io/integrations/n8n-nodes-base.emailsend/#operations) for sending emails.
- Customize the Form and email subject (optional)
- Activate the workflow

### Screenshots for Workflow, Form and Email

![n8nworkflowscreenshot.jpg](fileId:886)

---
**Built on Day-03 as part of the [#100DaysOfAgenticAi](https://github.com/ibrhdotme/100DaysOfAgenticAi/)**
**Fork it, tweak it, have fun!**

## 📊 Basic Information

- **Workflow ID:** 2697
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 4432
- **Downloads:** 443
- **Created:** 2025/1/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2697)

## 👤 Author

- **Name:** ibrhdotme
- **Username:** @ibrhdotme

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **hackerNews** 
- **httpRequest** 
- **aggregate** 
- **splitOut** 
- **formTrigger** 
- **emailSend** 
- **markdown** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
