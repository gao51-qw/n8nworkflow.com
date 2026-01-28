# Generate & deploy landing pages with GPT, Gemini and Vercel

> ## Who’s it for

This workflow is for:
- People who want to quickly launch simple landing pages without paying monthly fees to landing page creators. It’s ideal for rapid prototyping, generation of large amounts of landing pages, testing campaign ideas, or generating quick web mockups with AI.
- People launching products that compete in some way with the complete landing page solutions, and want to get an understanding of the basic building blocks of landing page creators


## How it works / What it does

* Retrieves or creates session data from n8n Tables
* Generates a vivid scene description for the hero image using GPT
* Creates a custom AI-generated hero image (using Gemini Palm or your preferred model)
* Builds a responsive landing page layout with GPT-4o-mini
* Saves the generated HTML to an n8n data table
* Deploys the landing page to Vercel automatically
* Returns the public live URL of the generated site

This workflow combines OpenAI, Google Gemini,Cloudinary, Vercel, and n8n Tables to create, store, and publish your webpage seamlessly from a single prompt.

## How to set up

1. Create an n8n Table with the following columns:

   * `sessionID` (text)
   * `html` (long text)

2. Add your credentials:

   * OpenAI (for text and image generation)
   * Geminoogle Gemini (PaLM) - through the Google Cloud Platform (for text and image generation)
   * Cloudinary (for image upload)
   * Vercel (for live deployment)

3. Update the placeholders as noted inside the workflow:

   * Cloudinary cloud name and upload preset
   * OpenAI model and API key
   * n8n table name and column mapping (`sessionID`, `html`)
   * Vercel Header Auth token

4. Run the workflow. After configuration, it will generate, upload, deploy, and return the live landing page URL automatically.

Inline notes are included throughout the workflow indicating where you must update values such as credentials, table names, or API keys to make the flow work end to end.

## Requirements

* OpenAI API key
* Google Gemini API key
* Cloudinary account
* Vercel account
* n8n Table with `sessionID` and `html` columns

## How to customize the workflow

* Modify the OpenAI model or prompt to change the tone, layout, or visual style of the generated landing page.
* Replace Vercel deployment with your preferred hosting platform (e.g., Netlify or GitHub Pages) if desired.
* Add extra input fields (e.g., title, CTA, description) to collect richer context before generating the page.
* Add ability to integreat with databases to turn into a full loveable/Base44 competitor

## Result

After setup, this workflow automatically converts any idea into a fully designed and live landing page within seconds. It generates the hero image, builds the HTML layout, deploys it to Vercel, and provides the final shareable URL instantly.


## Optional Cleanup Subflow
An additional utility subflow is included to help keep your Vercel project clean by deleting older deployments.  
It preserves the two most recent deployments and deletes the rest.  
**Use with caution** — only run it if you want to remove previous test pages and free up space in your Vercel account.


## 📊 Basic Information

- **Workflow ID:** 10447
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 493
- **Downloads:** 49
- **Created:** 2025/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10447)

## 👤 Author

- **Name:** Lachlan
- **Username:** @ldec

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.googleGemini** 
- **openAi** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.chat** 
- **httpRequest** (×6)
- **code** (×3)
- **stickyNote** (×9)
- **dataTable** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **extractFromFile** 
- **set** (×2)
- **function** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
