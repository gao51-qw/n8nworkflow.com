# Auto-categorize blog posts with OpenAI GPT-4, GitHub, and Google Sheets for Astro/Next.js

> ![image.png](fileId:3102)

## Automatically Assign Categories and Tags to Blog Posts with AI  

This workflow streamlines your **content organization process** by automatically analyzing new blog posts in your GitHub repository and assigning appropriate **categories** and **tags** using OpenAI. It compares new posts against existing entries in a Google Sheet, updates the metadata for each new article, and records the suggested tags and categories for review — all in one automated pipeline.  

---

## Who’s It For  

- **Content creators and editors** managing a static website (e.g., Astro or Next.js) who want AI-driven tagging.  
- **SEO specialists** seeking consistent metadata and topic organization.  
- **Developers or teams** managing a Markdown-based blog stored in GitHub who want to speed up post curation.  

---

## How It Works  

1. **Form Trigger** – Starts the process manually with a form that initiates article analysis.  
2. **Get Data from Google Sheets** – Retrieves existing post records to prevent duplicate analysis.  
3. **Compare GitHub and Google Sheets** – Lists all `.md` or `.mdx` blog posts from the GitHub repository (`piotr-sikora.com/src/content/blog/pl/`) and identifies **new posts** not yet analyzed.  
4. **Check New Repo Files** – Uses a code node to filter only unprocessed files for AI tagging.  
5. **Switch Node** –  
   - If there are **no new posts**, the workflow stops and shows a confirmation message.  
   - If new posts exist, it continues to the next step.  
6. **Get Post Content from GitHub** – Downloads the content of each new article.  
7. **AI Agent (LangChain + OpenAI GPT-4.1-mini)** –  
   - Reads each post’s frontmatter (`---` section) and body.  
   - Suggests new `categories` and `tags` based on the article’s topic.  
   - Returns a JSON object with proposed updates (Structured Output Parser)
8. **Append to Google Sheets** – Logs results, including:  
   - File name  
   - Existing tags and categories  
   - Proposed tags and categories (AI suggestions)  
9. **Completion Message** – Displays a success message confirming the categorization process has finished.  

---

## Requirements  

- **GitHub account** with repository access to your website content.  
- **Google Sheets connection** for storing metadata suggestions.  
- **OpenAI account** (credential stored in `openAiApi`).  

---

## How to Set Up  

1. Connect your **GitHub**, **Google Sheets**, and **OpenAI** credentials in n8n.  
2. Update the GitHub repository path to match your project (e.g., `src/content/blog/en/`).  
3. In Google Sheets, create columns:  
   - `FileName`, `Categories`, `Proposed Categories`, `Tags`, `Proposed Tags`.  
4. Adjust the AI model or prompt text if you want different tagging behavior.  
5. Run the workflow manually using the **Form Trigger** node.  

---

## How to Customize  

- Swap **OpenAI GPT-4.1-mini** for another LLM (e.g., Claude or Gemini) via the LangChain node.  
- Modify the **prompt** in the AI Agent to adapt categorization style or tone.  
- Add a **GitHub commit node** if you want AI-updated metadata written back to files automatically.  
- Use the **Schedule Trigger** node to automate this process daily.  

---

## Important Notes  

- All API keys and credentials are securely stored — **no hardcoded keys**.  
- The workflow includes multiple **sticky notes** explaining:  
  - Repository setup  
  - File retrieval and AI tagging  
  - Google Sheet data structure  
- It uses a **LangChain memory buffer** to improve contextual consistency during multiple analyses.  

---

## Summary  

This workflow automates metadata management for blogs or documentation sites by combining **GitHub content**, **AI categorization**, and **Google Sheets tracking**.  
With it, you can easily maintain consistent tags and categories across dozens of articles — boosting SEO, readability, and editorial efficiency without manual tagging.


## 📊 Basic Information

- **Workflow ID:** 9983
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 193
- **Downloads:** 19
- **Created:** 2025/10/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9983)

## 👤 Author

- **Name:** Piotr Sikora
- **Username:** @argone

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **github** (×2)
- **stickyNote** (×11)
- **googleSheets** (×2)
- **code** (×2)
- **aggregate** (×2)
- **switch** 
- **formTrigger** 
- **form** (×2)
- **merge** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
