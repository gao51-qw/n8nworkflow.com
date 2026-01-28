# Automate blog creation in brand voice with AI

> This n8n template demonstrates a simple approach to using AI to automate the generation of blog content which aligns to your organisation's brand voice and style by using examples of previously published articles.

In a way, it's quick and dirty "training" which can get your automated content generation strategy up and running for very little effort and cost whilst you evaluate our AI content pipeline.

## How it works
* In this demonstration, the n8n.io blog is used as the source of existing published content and 5 of the latest articles are imported via the HTTP node.
* The HTML node is extract the article  bodies which are then converted to markdown for our LLMs.
* We use LLM nodes to (1) understand the article structure and writing style and (2) identify the brand voice characteristics used in the posts.
* These are then used as guidelines in our final LLM node when generating new articles.
* Finally, a draft is saved to Wordpress for human editors to review or use as starting point for their own articles.

## How to use
* Update Step 1 to fetch data from your desired blog or change to fetch existing content in a different way.
* Update Step 5 to provide your new article instruction. For optimal output, theme topics relevant to your brand.

## Requirements
* A source of text-heavy content is required to accurately breakdown the brand voice and article style. Don't have your own? Maybe try your competitors?
* OpenAI for LLM - though I recommend exploring other models which may give subjectively better results.
* Wordpress for blog but feel free to use other preferred publishing platforms.

## Customising this workflow
* Ideally, you'd want to "train" your agent on material which is similar to your output ie. your social media post may not get the best results from your blog content due to differing formats.
* Typically, this brand voice extraction exercise should run once and then be cached somewhere for reuse later. This would save on generation time and overall cost of the workflow. 

## 📊 Basic Information

- **Workflow ID:** 2648
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 25791
- **Downloads:** 2579
- **Created:** 2024/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2648)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **httpRequest** (×2)
- **html** (×2)
- **splitOut** 
- **limit** 
- **aggregate** 
- **merge** 
- **wordpress** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **markdown** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
