# Generate landing page layouts from competitor analysis with GPT-4

> ## Who is this for?

This workflow is ideal for SEO specialists, web designers, and digital marketers who want to quickly draft effective landing page layouts by referencing established competitors. It suits users who need a fast, structured starting point for web design while ensuring competitive relevance.

## What problem is this workflow solving? / Use case

Designing a high-converting landing page from scratch can be time-consuming. This workflow automates the process of analyzing a competitor’s website, identifying essential sections, and producing a tailored layout—helping users save time and improve their website’s effectiveness.

## What this workflow does

The workflow fetches and analyzes your chosen competitor’s landing page, using web scraping and structure-detection nodes in n8n. It identifies primary sections like hero banners, service highlights, testimonials, and contact forms, and then generates a simplified, customizable layout suitable for wireframing or initial design.

## Setup

- Prepare your unique services and target audience profile for customization later.
- Gather the competitor’s landing page URL you wish to analyze.
- Run the workflow, inputting your competitor’s URL when prompted.

## How to customize this workflow to your needs

- After generating the initial layout, adapt section names and content blocks to highlight your services and brand messaging.
- Add or remove sections based on your objectives and audience insights.
- Integrate additional nodes for richer analysis, such as keyword extraction or design pattern detection, to tailor the output further.


## 📊 Basic Information

- **Workflow ID:** 4717
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3537
- **Downloads:** 353
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4717)

## 👤 Author

- **Name:** Henry
- **Username:** @henry

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** (×4)
- **set** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
