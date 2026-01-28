# Automate LinkedIn Outreach with Notion and OpenAI

> This template is based on the [following template](https://n8n.io/workflows/2273-automated-workflow-for-daily-linkedin-posts-using-notion/). Thank you for the groundwork, Matheus.

## How it works:
1. Store your snippets of text in a Notion table.  Each snippet should have an image associated with it (copy + pasted into the text)
2. Connect to your table via a Notion _"integration"_, from which N8N can then query your pre-meditated posts
3. The text is fed through an OpenAI assistant to boost engagement via formatting
4. The re-formatted text along with the image pulled from the Notion snippet are combined into a post for your LinkedIn
5. The row in the original Notion table from step 1 containing this post is set to a status of _"Done"_

## Set up steps:
- You will need to create a Notion _"integration"_, which will yield a _"secret key"_ which you enter into your N8N as a _"Credential"_. 
- You will need to create a LinkedIn _"app"_ in order to post on your behalf.  When creating your LinkedIn _"app"_, you will be required to link this _"app"_ to a company page on LinkedIn.  If you are doing this for yourself, seach for the _"Default Company Payge (for API testing)"_, and select this page as it is provided by LinkedIn for individuals.  You can find your LinkedIn apps here, and if you get stuck, further instructions on setting up this workflow (including this LinkedIn OAuth piece) can be found in this [YouTube Video Aide](https://www.youtube.com/watch?v=oOgmv6E9PAM) to these instructions.
- Lastly, you will need to create an OpenAI API key, found on your [OpenAI Playground Dashboard](https://platform.openai.com/playground/chat).  Once you created an API key, make sure you have an assistant created from the _"Assistants"_ tab on the OpenAI dashboard.  This assistant and its instructions will be needed for carrying out the re-formatting of your post.  




## 📊 Basic Information

- **Workflow ID:** 2288
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 20137
- **Downloads:** 2013
- **Created:** 2024/6/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2288)

## 👤 Author

- **Name:** Paul Mikulskis
- **Username:** @mikulskisp

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×2)
- **notion** (×3)
- **linkedIn** 
- **merge** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
