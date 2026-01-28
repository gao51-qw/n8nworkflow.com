# Scrape blog articles into AI-generated LinkedIn posts with GPT-4o & human review

> ![wflowpreview.JPG](fileId:2061)
Auto-detect news from n8n and turn into a human-approved LinkedIn post.
**gotoHuman** is used to keep a human in the loop. There you can manually edit the AI draft of the post or request to regenerate it.

## How it works
1. The workflow is triggered each day to fetch the latest version of `https://blog.n8n.io`.
2. It then fetches each article, checks if it was published in the last 24 hours and uses an LLM to summarize it.
3. An LLM then drafts a related LinkedIn post which is sent to **gotoHuman** for approval. In gotoHuman, the reviewer can manually edit it or ask to regenerate it with the option to even edit the prompt (Retries loop back to the _AI Draft LinkedIn Post_ node)
![gthpreview.JPG](fileId:2060)
![gthchat.JPG](fileId:2062)
4. Approved Posts are automatically published to LinkedIn

## How to set up

1. **Most importantly, install the gotoHuman node before importing this template!**
(Just add the node to a blank canvas before importing)
2. Set up your credentials for gotoHuman, OpenAI, and LinkedIn
3. In gotoHuman, select and create the pre-built review template "Blog scraper agent" or import the ID: `sMxevC9tSAgdfWsr6XIW`
4. Select this template in the gotoHuman node

## Requirements

You need accounts for
- gotoHuman (human supervision)
- OpenAI (summary, draft)
- LinkedIn

## How to customize

- Change the blog URL to monitor. Adapt to its' HTML structure
- Provide the _AI Draft LinkedIn Post_ with examples of previous posts so it picks up your writing style (consider adding [gotoHuman's dataset of approved examples](https://docs.gotohuman.com/training-data))
- Use the workflow to target other publications, like your newsletter, blog or other socials

## 📊 Basic Information

- **Workflow ID:** 7310
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 1794
- **Downloads:** 179
- **Created:** 2025/8/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7310)

## 👤 Author

- **Name:** gotoHuman
- **Username:** @gotohuman

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **splitOut** 
- **html** (×3)
- **httpRequest** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **set** (×3)
- **linkedIn** 
- **splitInBatches** 
- **switch** 
- **stickyNote** (×9)
- **@gotohuman/n8n-nodes-gotohuman.gotoHuman** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
