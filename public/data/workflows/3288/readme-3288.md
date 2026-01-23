# Youtube RAG search with frontend using Apify, Qdrant and AI

> ### Ever wanted to build your own RAG search over Youtube videos? Well, now you can! This n8n template shows how you can build a very capable Youtube search engine powered by Apify, Qdrant and your LLM of choice to quickly and efficiently browse over many videos for research.

I originally started to template to ask questions on the "n8n @ scale office-hours" livestream videos but then extended it to include the latest videos on the official channel.

**Check out a demo here**: [https://jimleuk.app.n8n.cloud/webhook/n8n_videos](https://jimleuk.app.n8n.cloud/webhook/n8n_videos)

## How it works
* Stage 1 is to collect the Youtube video transcripts and push them into a vector database. For this, I've used Apify to scrape Youtube and Qdrant to store the embeddings.
* Transcripts are broken down into smaller chunks and carefully tagged with metadata to assist in later search and filtering.
* Stage 2 is to build a web frontend for the user to query the vectorised transcripts. I'm using a webhook to serve a simple web app and API to dynamically fetch the results.
* When searching for a video, I've opted to use Qdrant's search groups API which in this use-case, performs better as it returns a wider range of videos results.
* In the web frontend, when the user clicks on the results, the matching Youtube video plays in an embedded video player.

## How to use
* Once credentials are all set, first run steps 1 - 3 to populate your vector store.
* Next, set the workflow to active to expose the web frontend. Visit the webhook URL in your browser to use it.
* If only for personal use, you may want to remove the rate limiting mechanism in step 4.

## Requirements
* Apify for Youtube Channel and Video Scraping
* Qdrant for Vector store
* OpenAI for LLM and Embeddings

## Customising the template
* Not interested in official n8n videos? Swap to a different channel - this template will work on many as long as videos are not private or set to prevent embeds.
* Technically any vector store should work but may not have the same grouping API. Use the simple vector store node and revert back to basic searching instead.

## 📊 Basic Information

- **Workflow ID:** 3288
- **Complexity:** advanced
- **Node Count:** 62
- **Views:** 4285
- **Downloads:** 428
- **Created:** 2025/3/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3288)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Market Research
- AI RAG

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×4)
- **set** (×9)
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **splitInBatches** (×3)
- **noOp** (×2)
- **wait** 
- **sort** 
- **respondToWebhook** (×5)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **webhook** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **if** (×3)
- **redis** 
- **executeWorkflow** 
- **executeWorkflowTrigger** 
- **splitOut** (×3)
- **scheduleTrigger** 
- **removeDuplicates** 
- **stickyNote** (×13)
- **html** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 62 nodes with 44 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
