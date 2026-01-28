# Generate SEO-optimized blog posts with Google Autocomplete & GPT-4

> ## Try It Out!

This n8n template helps you create SEO-optimized Blog Posts for your businesses website or for personal use.

Whether you're managing a business or helping local restaurants improve their digital presence, this workflow helps you build SEO-Optimized Blog Posts in seconds using Google Autocomplete and People Also Ask (SerpAPI). 

Who Is It For? 
- This is helpful for people looking to SEO Optimize either another person's website or their own. 

How It Works?
- You start with a list of blog inspirations in Google Sheets (e.g., “Best Photo Session Spots”).
- The workflow only processes rows where the “Status” column is not marked as “done”, though you can remove this condition if you’d like to process all rows each time. 
- The workflow pulls Google Autocomplete suggestions and PAA questions using: A custom-built SEO API I deployed via Render (for Google Autocomplete + PAA), SerpAPI (for additional PAA data). 
- These search insights are merged. For example, if your blog idea is “Photo Session Spots,” the workflow gathers related Google search phrases and questions users are asking.
- Then, GPT-4 is used to draft a full blog post based on this data.
- The finished post is saved back into your Google Sheet.

How To Use
- Fill out the “Blog Inspiration” column in your Google Sheet with the topics you want to write about.
- Update the OpenAI prompt in the ChatGPT node to match your tone or writing style. (Tip: Add a system prompt with context about your business or audience.)
- You can trigger this manually, or replace it with a cron schedule, webhook, or other event.

Requirements
- A SerpAPI account to get PAA
- An OpenAI account for ChatGPT
- Access to Google Sheets and n8n

How To Set-Up? 
- Your Google Sheet should have three columns: "Blog Inspiration", "Status" → set this to “done” when a post has been generated, "Blog Draft" → this is automatically filled by the workflow. 

- To use the SerpAPI HTTP Request node: 1. Drag in an HTTP Request node, 2. Set the Method and URL depending on how you're using SerpAPI: Use POST to run the actor live on each request. Use GET to fetch from a static dataset (cheaper if reusing the same data). 3. Add query parameters for your SerpAPI key and input values. 4. Test the node.
Refer to this n8n documentation for more help! https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi/.
 
- The “Autocomplete” node connects to a custom web service I built and deployed using Render. I wrote a Python script (hosted on GitHub) that pulls live Google Autocomplete suggestions and PAA questions based on any topic you send. This script was turned into an API and deployed as a public web service via Render. Anyone can use it by sending a POST request to: https://seo-api2.onrender.com/get-seo-data (the URL is already in the node). Since this is hosted on Render’s free tier, if the service hasn’t been used in the past ~15 minutes, it may “go to sleep.” When that happens, the first request can take 10–30 seconds to respond while it wakes up.


Happy Automating! 

## 📊 Basic Information

- **Workflow ID:** 6283
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1007
- **Downloads:** 100
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6283)

## 👤 Author

- **Name:** keisha kalra
- **Username:** @keisha

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **merge** 
- **splitInBatches** 
- **googleSheetsTrigger** 
- **stickyNote** (×6)
- **code** (×4)
- **googleSheets** (×2)
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
