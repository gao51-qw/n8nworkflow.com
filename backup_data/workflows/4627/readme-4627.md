# Discover hidden website API endpoints using regex and AI

> # 💡 What it is for

This workflow helps to automatically discover undocumented API endpoints by analysing JavaScript files from the website's HTML code.

When building automation for platforms without public APIs, we face a significant technical barrier. In a perfect world, every service would offer well-documented APIs with clear endpoints and authentication methods. But the reality is different.

Before we resort to complex web scraping, let's analyse the architecture of the platform and check whether it makes internal API calls. We will examine JavaScript files embedded in the HTML source code to find and extract potential API endpoints.

# ⚙️Key Features

To discover hidden API endpoints, we can apply two major approaches:

**1.** **Predefined regex extraction:** manually insert a fixed regex with the necessary conditions to extract endpoints. Unlike LLM, which creates a custom regex for each JS file, we provide a generic expression to capture all URL strings. We do not want to accidentally miss important API endpoints. 

**2.** **AI-supported extraction:** 
  - ask LLMs to examine the structure of the JavaScript code. The 1st model will:
  - capture potential API endpoints
  - create a detailed description of each identified endpoint with methods and query parameters
  - the 2nd LLM connected to the AI Agent will generate a regex for each JS file individually based on the output of the 1st model.
	 
In addition to pure endpoint extraction, we supplement our analysis with:	 

- **AI regex validation:** the AI Agent calls a validation tool to iteratively improve its regex based on the reference data.  

-  **Results comparison:** side-by-side analysis of API endpoints extracted with a predefined regex against AI-supported results.
   
# ✅Requirements:

- OpenRouter API access: for AI-powered analysis (Gemini + Claude models by default)
- Minimal setup: simply configure the target URL and run
- Platforms: JS files must be accessible and have embedded standard API endpoints patterns (/api/, /v1/, etc.)  

# 💪Use Cases

📚 API documentation: create complete endpoint descriptions for internal APIs
🚀 Automation & integration projects: find the APIs you need when official documentation is missing
🛠 Web scraping projects: discover data access patterns
🔍 Security research: map attack surfaces and explore unprotected endpoints

# 🎉Extracted the endpoints, what now? 
To execute API requests, we often need additional information such as query parameters or JSON body data:
- One way to find out exactly how the request is being made on the platform is to navigate to the Network tab in the Dev Tools console while interacting with the platform. Look for anything that resembles API requests and review the request/response headers, payload and query parameters. 
- Alternatively, you can also check the JS file and the page source code for the required values.

# ✨Inspiration

As a guitarist who also builds workflows, I wanted to automate communication with the booking platform I use in my music project. While trying to connect to the platform from n8n, I ran into a challenge: no public APIs. 

Fortunately, I found out that the platform I work with was built as a modern web app with client-side JavaScript that contained information about the API structure. This led me to the topic of hidden API endpoints and eventually to this workflow. 

It is part of my music booking project which I presented at [the n8n Community Meetup in Berlin on 22 May 2025](https://www.linkedin.com/posts/exxeta_n8n-automation-ai-activity-7331582589398302721-xK_A).







## 📊 Basic Information

- **Workflow ID:** 4627
- **Complexity:** advanced
- **Node Count:** 58
- **Views:** 1477
- **Downloads:** 147
- **Created:** 2025/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4627)

## 👤 Author

- **Name:** Yulia
- **Username:** @yulia

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×16)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **manualTrigger** 
- **set** (×9)
- **httpRequest** (×3)
- **html** 
- **splitOut** (×3)
- **filter** 
- **if** 
- **removeDuplicates** (×3)
- **noOp** (×2)
- **splitInBatches** 
- **convertToFile** (×2)
- **readWriteFile** (×2)
- **merge** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **executeWorkflowTrigger** 
- **extractFromFile** 
- **sort** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 58 nodes with 39 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
