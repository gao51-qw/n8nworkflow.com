# Generate SEO keywords with AI: topic to keyword list in seconds

> ## Who is this template for?
This **AI Keyword Generator** workflow template is designed for **marketers**, **SEO specialists**, and **content creators** who need to quickly generate high-quality keyword lists for their content strategy. Instead of spending hours researching keywords manually, this AI-powered tool delivers targeted keyword suggestions based on your specific criteria.

![979shots_so.jpg](fileId:1109)

## What problem does this workflow solve?
Keyword research is a time-consuming but essential part of SEO and content marketing. Many professionals struggle with:
* Finding relevant keywords that match specific search intents
* Balancing between short-tail and long-tail keywords
* Generating comprehensive keyword lists that cover different aspects of a topic
* Consistently identifying high-potential keywords for content creation

## What this workflow does
This n8n workflow leverages AI to automatically generate a customized list of 15-20 high-potential keywords based on three simple inputs:
* **Topic** - The main subject area you want keywords for
* **Search Intent** - Choose between Navigational, Informational, Commercial, or Transactional
* **Keyword Type** - Select Short-Tail or Long-Tail keywords

The workflow processes your input through an AI language model that follows SEO best practices to generate relevant keywords. It then formats the results and delivers them directly to your email inbox, ready for use in your SEO strategy.

## Setup
Setting up this workflow is straightforward:

1. **Add your credentials** for the AI language model in the "Select your Chat Model" node
   * Click on the node and connect your Groq account (and choose any LLM you want, like: *OpenAI*, *Claude AI* or *Llama*)  or replace with another LLM provider
   
2. **Configure email delivery** in the "Send Result" node
   * Update the "sendTo" parameter with your email address
   * Add your Gmail credentials or replace with your preferred email service

3. **Test your workflow** by clicking the "Test Workflow" button
   * Use the form to enter your topic, search intent, and keyword type
   * Check your email for the generated keyword report

4. **Activate the workflow** once testing is complete

## How to customize this workflow
The template is highly adaptable to fit your specific needs:

* **Replace the email node** with a database or spreadsheet node to store keywords
* **Modify the AI prompts** in the "AI Keyword Agent" to adjust the keyword generation strategy
* **Add additional filtering nodes** to further refine keywords based on custom criteria
* **Integrate with other SEO tools** to analyze competition or search volume for generated keywords

This workflow serves as a powerful starting point for automating your keyword research process, saving you valuable time while delivering consistent, high-quality results.

## 📊 Basic Information

- **Workflow ID:** 3544
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2996
- **Downloads:** 299
- **Created:** 2025/4/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3544)

## 👤 Author

- **Name:** Gegenfeld
- **Username:** @gegenfeld

## 🏷️ Categories

- Market Research
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **@n8n/n8n-nodes-langchain.agent** 
- **aggregate** 
- **code** 
- **gmail** 
- **stickyNote** (×3)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
