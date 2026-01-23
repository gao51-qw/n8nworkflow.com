# Generate product feature announcements from Notion to Google Docs with GPT-5 Mini and Claude

> This n8n workflow automatically generates professional product announcements and blog articles from your Notion content planning database.


## Who's it for & Use Cases

Product Marketers, Content Teams, Product Managers, and Founders who want to:

* Automate product announcement creation from their Notion product backlog.
* Generate SEO and AI Search/ALLMO optimized blog articles with consistent structure and brand voice
* Maintain an up to date product changelog for products with frequent udpates.
 
## How It Works

### Phase 1: Notion Trigger & Validation
1. Workflow monitors your Notion "Content Plan" database for page updates
2. Validates that the entry is marked as ready for writing
3. Checks that content type is set to "Product" (filters other content types)

### Phase 2: AI Outline Generation
1. GPT-5 Mini creates a structured outline based on:
   - Project name from Notion
   - Notes field (context/instructions)
   - Built-in SEO and ALLMO best practices
2. Output includes sections, subsections, and key talking points

### Phase 3: Full Article Generation
1. Claude Sonnet 4.5 writes the complete product announcement using:
   - The generated outline
   - Project details from Notion
   - Expert product communications system prompt

2. Article follows structured format: headline, summary, feature sections, FAQ, CTA, and SEO metadata

### Phase 4: Google Docs Creation & Notion Update
1. Creates new Google Doc with your project name as title
2. Inserts the complete Markdown article into the document
3. Updates Notion page with Google Docs link for instant access
4. Marks the project as complete in Notion

## How to Setup

* Connect your Notion account and select your Content Plan database
* Enter API credentials in the Claude and OpenAI nodes
* Configure your Google Docs folder location
* Customize system prompts with your company description, target audience, and brand voice

## How to Expand

* Replace the Notion node with a product backlog tool of your choice.
* Update and fine tune the prompts.

## Output Structure

* Full Markdown article with YAML front matter
* Structured sections: headline, summary, feature descriptions, additional improvements, FAQ, CTA
* SEO metadata included (title, meta description, slug, tags)
* Automatically saved to Google Docs with link in Notion

## Requirements

**API Credentials:**
* Anthropic API (Claude Sonnet 4.5)
* OpenAI API (GPT-5 Mini)

**Connected Services:**
* Notion workspace with Content Plan database
* Google Docs/Drive account

**Notion Database Fields:**
* Project name (title/text)
* Notes (text/description field)
* Google_Docs_Link (URL field)
* Status field to mark entries as ready (e.g., "Ready for Writing")
* Content Type field set to "Product"

## 📊 Basic Information

- **Workflow ID:** 12535
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 33
- **Downloads:** 3
- **Created:** 2026/1/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12535)

## 👤 Author

- **Name:** Niclas Aunin
- **Username:** @nicallmo

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **notionTrigger** 
- **@n8n/n8n-nodes-langchain.anthropic** 
- **googleDocs** (×2)
- **notion** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×4)
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
