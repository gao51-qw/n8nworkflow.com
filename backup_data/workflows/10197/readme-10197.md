# Generate YouTube channel profile reports in Google Slides with ChannelCrawler & GPT-4

> ## ChannelCrawler API to Google Slides Template

**This template shows how you can use the ChannelCrawler API alongside ChatGPT (or any LLM) to generate google slides using images and texts received from the API**

## How it Works
1. A user inputs the link to the Youtube channel(s) of their target creators
2. The list is parsed by a python script, returning it in a format that can be ran in a loop
3. The workflow iterates over each channel url
4. The url is passed to the ChannelCrawler API, where it returns a json of the creators profile.
5. The OpenAI node processes the description and content of the creators profile to create a summary
6. We retrieve the google slides presentation using the get presentation node.
7. We use the Google Slides API to duplicate an existing page and pull back the original page as it has a new revision ID
8. We use the Google Slides API to change the image placeholder of the of the image Presentation
9. Lastly we update other placeholders in with text from the ChannelCrawler and ChatGPT outputs

## How to Use
- From executing the workflow, a pop up form will come up where you can insert the Youtube Channel urls
- On submission, provided the prerequisites are set up - rest of the workflow will be triggered

## Use Cases
- You can create profiles on influencers and creators with extensive data points from the ChannelCrawler API and consistent summarisation from GPT

## Prerequisites
[ChannelCrawler Account](https://channelcrawler.com) - there's a great pay as you go options for access to the API
[OpenAI account](https://platform.openai.com/docs/overview) - the you can access free Open AI credit if you are a first time n8n user! Check the credentials options in the node
[Google account](https://workspace.google.com/products/slides/) (For slides) - You should have a google account or sign up for google with your non google email


## 📊 Basic Information

- **Workflow ID:** 10197
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/10/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10197)

## 👤 Author

- **Name:** Afareayo Soremekun
- **Username:** @aos

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **splitInBatches** 
- **httpRequest** (×3)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **googleSlides** (×3)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
