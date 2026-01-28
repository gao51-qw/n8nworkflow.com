*Learning something new? Endlessly searching to find the best resources?* This workflow finds top community-recommended learning resources on any topic from Hacker News, delivered to your inbox.

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