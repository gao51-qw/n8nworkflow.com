# Create fact-based articles from your knowledge sources with Super RAG and GPT-5

> Move beyond generic AI-generated content and create articles that are high-quality, factually reliable, and aligned with your unique expertise. 
This template orchestrates a sophisticated "research-first" content creation process. Instead of simply asking an AI to write an article from scratch, it first uses an AI planner to break your topic down into logical sub-questions.

It then queries a **Super** assistant—which you've connected to your own trusted knowledge sources like **Notion, Google Drive, or PDFs**—to build a comprehensive research brief. Only then is this fact-checked brief handed to a powerful AI writer to compose the final article, complete with source links. This is the ultimate workflow for scaling expert-level content creation.

## Who is this for?

* **Content marketers & SEO specialists:** Scale the creation of authoritative, expert-level blog posts that are grounded in factual, source-based information.
* **Technical writers & subject matter experts:** Transform your complex internal documentation into accessible public-facing articles, tutorials, and guides.
* **Marketing agencies:** Quickly generate high-quality, well-researched drafts for clients by connecting the workflow to their provided brand and product materials.


## What problem does this solve?

* **Reduces AI "hallucinations":** By grounding the entire writing process in your own trusted knowledge base, the AI generates content based on facts you provide, not on potentially incorrect information from its general training data.
* **Ensures comprehensive topic coverage:** The initial AI-powered "topic breakdown" step acts like an expert outliner, ensuring the final article is well-structured and covers all key sub-topics.
* **Automates source citation:** The workflow is designed to preserve and integrate source URLs from your knowledge base directly into the final article as hyperlinks, boosting credibility and saving you manual effort.
* **Scales expert content creation:** It effectively mimics the workflow of a human expert (outline, research, consolidate, write) but in an automated, scalable, and incredibly fast way.


## **How it works**

This workflow follows a sophisticated, multi-step process to ensure the highest quality output:

1.  **Decomposition:** You provide an article title and guidelines via the built-in form. An initial AI call then acts as a "planner," breaking down the main topic into an array of 5-8 logical sub-questions.
2.  **Fact-based research (RAG):** The workflow loops through each of these sub-questions and queries your **Super assistant**. This assistant, which you have pre-configured and connected to your own knowledge sources (Notion pages, Google Drive folders, PDFs, etc.), finds the relevant information and source links for each point.
3.  **Consolidation:** All the retrieved question-and-answer pairs are compiled into a single, comprehensive research brief.
4.  **Final article generation:** This complete, fact-checked brief is handed to a final, powerful AI writer (e.g., GPT-5). Its instructions are clear: write a high-quality article using *only* the provided information and integrate the source links as hyperlinks where appropriate.


## Implementing the template

1.  **Set up your Super assistant (Prerequisite):** First, go to [Super](https://super.work/), create an assistant, connect it to your knowledge sources (Notion, Drive, etc.), and copy its **Assistant ID** and your **API Token**.
2.  **Configure the workflow:**
    * Connect your **AI provider** (e.g., OpenAI) credentials to the two Language Model nodes (`GPT 5 mini` and `GPT 5 chat`).
    * In the **Query Super Assistant** (HTTP Request) node, paste your **Assistant ID** in the body and add your Super **API Token** for authentication (we recommend using a Bearer Token credential).
3.  **Activate the workflow:** Toggle the workflow to "Active" and use the built-in form to generate your first fact-checked article!


## **Taking it further**

* **Automate publishing:** Connect the final **Article result** node to a **Webflow** or **WordPress** node to automatically create a draft post in your CMS.
* **Generate content in bulk:** Replace the **Form Trigger** with an **Airtable** or **Google Sheet** trigger to automatically generate a whole batch of articles from your content calendar.
* **Customize the writing style:** Tweak the system prompt in the final **New content - Generate the AI output** node to match your brand's specific tone of voice, add SEO keywords, or include specific calls-to-action.

## 📊 Basic Information

- **Workflow ID:** 7907
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 488
- **Downloads:** 48
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7907)

## 👤 Author

- **Name:** Guillaume Duvernay
- **Username:** @duv

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **set** (×3)
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **splitOut** 
- **splitInBatches** 
- **httpRequest** 
- **stickyNote** (×6)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
