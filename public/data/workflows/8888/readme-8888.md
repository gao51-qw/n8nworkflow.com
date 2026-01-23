# Automated blog content generation with GPT-4o from Google Trends to WordPress

> # Automated Blog Content Generation from Google Trends to WordPress

This n8n workflow automatically generates SEO-friendly blog content based on trending topics from Google Trends and publishes it to WordPress. Perfect for content creators, bloggers, and digital marketers who want to stay on top of trending topics with minimal manual effort.

## Who's it for

- **Content creators** who need fresh, trending topic ideas
- **Bloggers** looking to automate their content pipeline
- **Digital marketers** wanting to capitalize on trending searches
- **WordPress site owners** seeking automated content generation
- **SEO professionals** who want to target trending keywords

## How it works

The workflow operates on a scheduled basis (daily at 8:45 PM by default) and follows this process:

1. **Trend Discovery**: Fetches the latest trending searches from Google Trends for a specific country (Iran by default)
2. **Content Research**: Performs Google searches on the top 3 trending topics to gather detailed information
3. **AI Content Generation**: Uses OpenAI's GPT-4o model to create SEO-friendly blog posts based on the trending topics and search results
4. **Structured Output**: Ensures the generated content has proper title and content structure
5. **Auto-Publishing**: Automatically creates draft posts in WordPress

The AI is specifically prompted to create engaging, SEO-optimized content without revealing the automated sources, ensuring natural-sounding blog posts.

## How to set up

1. **Install required community node**:
   - `n8n-nodes-serpapi` for Google Trends and Search functionality


2. **Configure credentials**:
   - **SerpApi**: Sign up at serpapi.com and add your API key
   - **OpenAI**: Add your OpenAI API key for GPT-4o access
   - **WordPress**: Configure your WordPress site credentials

3. **Customize the country code**: Change the "Country" field in the "Edit Fields" node (currently set to "IR" for Iran)

4. **Adjust the schedule**: Modify the "Schedule Trigger" to run at your preferred time

5. **Test the workflow**: Run it manually first to ensure all connections work properly

## Requirements

- **SerpApi account** (for Google Trends and Search data)
- **OpenAI API access** (for content generation using GPT-4o)
- **WordPress site** with API access enabled


## How to customize the workflow

- **Change target country**: Modify the country code in the "Edit Fields" node to target different regions
- **Adjust content quantity**: Change the limit in the "Limit" node to process more or fewer trending topics
- **Modify AI prompt**: Edit the prompt in the "Basic LLM Chain" node to change writing style or focus
- **Schedule frequency**: Adjust the "Schedule Trigger" for different posting frequencies
- **Content status**: Change from "draft" to "publish" in the WordPress node for immediate publishing
- **Add content filtering**: Insert additional nodes to filter topics by category or keywords

## 📊 Basic Information

- **Workflow ID:** 8888
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 979
- **Downloads:** 97
- **Created:** 2025/9/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8888)

## 👤 Author

- **Name:** IranServer.com
- **Username:** @iranserver

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **wordpress** 
- **stickyNote** (×3)
- **set** 
- **n8n-nodes-serpapi.serpApi** (×2)
- **code** (×2)
- **limit** 
- **@n8n/n8n-nodes-langchain.chainLlm** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
