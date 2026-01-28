# Create SEO outlines from top Google results with SerpAPI and GPT-4o

> ## Overview
Use this workflow to create SEO-friendly outlines based on articles that do well in Google. 

Enter a keyword, and the workflow scrapes the top results, scrapes the content, analyzes it with AI, and builds a MECE (mutually exclusive, collectively exhaustive) outline. 

It’s useful for content creators and SEO specialists who want relevant, well-structured content.

## How it works
- Accepts a keyword submitted through a form
- Uses the SerpAPI to get top Google results for a chosen country
- Collects the top five URLs. We use five because we expect some to fail at the scraping stage
- Scrapes each URL separately
- Uses the first three articles to fit the AI model’s context window
- Extracts the main text from the page body
- Converts HTML to Markdown to get rid of tags and attributes.
- Combines the cleaned text into a single list for AI processing
- Analyzes the content with an AI language model to find common topics and headings
- Generates an SEO-focused outline based on the most frequent topics

## Setup steps
1. Sign up for a [SerpAPI account](https://serpapi.com/) (free tier available)
2. Create an [OpenAI account](https://openai.com/api/) and get an API key
3. Set up your credentials within N8N
4. Run the workflow and enter your keyword in the form.
5. The workflow will generate an SEO-friendly outline for your content

## Improvement ideas
- Add another LLM to turn the outline into an article
- Use the Google docs API to add the outline to a Google doc
- Enright the outline with data from Perplexity or Tavily


## 📊 Basic Information

- **Workflow ID:** 9056
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 284
- **Downloads:** 28
- **Created:** 2025/9/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9056)

## 👤 Author

- **Name:** Robin Geuens
- **Username:** @robingeuens

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** (×2)
- **splitOut** 
- **markdown** 
- **limit** 
- **stickyNote** (×12)
- **formTrigger** 
- **set** 
- **html** 
- **aggregate** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
