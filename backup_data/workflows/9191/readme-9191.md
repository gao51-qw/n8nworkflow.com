# Generate blog posts from keywords to Webflow

> ### Who's it for
Content marketers and SEO specialists who need to generate multiple SEO-optimized articles targeting keyword variations. Ideal for affiliate sites, niche blogs, or service-based businesses creating location/product-specific landing pages.

### How it works
This workflow automates bulk content creation from keyword list to Webflow draft:

1. **Loads keywords** from Google Sheets with structured format (main keyword + slug)
2. **AI generates articles** - Creates 600+ word content following SEO best practices
3. **Creates custom images** - Calls a sub-workflow using Gemini 2.5 Flash to generate relevant featured images
4. **Quality validation** - Ensures minimum word count; expands content if needed
5. **HTML conversion** - Transforms markdown to Webflow-ready HTML
6. **Result tracking** - Logs success/errors to separate Google Sheets



The workflow includes automatic content expansion, error handling, and uses a separate sub-workflow as a tool for AI image generation.

**Important**: The subworkflow should be created as an individual one. Then, in the Agent Tool node, you need to select it as the tool. DON'T try to run it inside the same workflow.

### Requirements
- OpenAI API key (for content generation)
- OpenRouter API key or similar (for Gemini image generation via sub-workflow) 
- Google Sheets with three tabs: `keywords`, `content_created`, `webflow_error_logs`
- Webflow site with CMS collection configured
- Google Drive folder for image storage
- **Companion workflow**: "AI image generation for automatic content creation" (imported separately and called as a tool)

### How to set up

**1. Import both workflows separately:**
- Main workflow: "Bulk SEO content generation and Webflow draft creation with AI images"
- Sub-workflow: "AI image generation for automatic content creation"

**2. Configure your Google Sheet** with the recommended structure  
Required sheets:
- `keywords`: id, main keyword, head terms, modifiers, slug, status
- `content_created`: id, slug, meta description, content, generatedAt, updated on
- `webflow_error_logs`: keyword, error, timestamp, status

**3. Add API credentials:**
- OpenAI API  
- OpenRouter API with Gemini access or similar (for image generation)
- Webflow OAuth2 API (see Webflow setup instructions in sticky note)
- Google Sheets  
- Google Drive  

**4. Update workflow configuration:**
- Google Sheets: Update document IDs in all Google Sheets nodes
- Webflow: Set your Site ID and Collection ID in Create/Update Post nodes
- Google Drive: Set folder ID in the image generation sub-workflow
- AI Image Tool: Verify the "AI Image Generation Tool1" node points to your imported sub-workflow

**5. Test with a single keyword:**
 

**6. Schedule for production:**
- Enable the Schedule Trigger (currently set to monthly)
 

### How to customize

**Content customization:**
- Adjust article length in AI Agent prompt (currently 600-800 words)
- Modify article structure/sections in the system prompt
- Change content tone by editing the AI Agent system message
- Add/remove content sections in the prompt template

**Image customization:**
- Change AI model in sub-workflow (currently Gemini 2.5 Flash)
- Modify image style/prompt in the AI Image Generation Tool parameters
- Update Google Drive destination folder

**Webflow customization:**
- Add custom CMS fields by updating Create/Update Post nodes
- Modify field mappings to match your Webflow collection structure
- Change draft behavior or add auto-publish logic

**Workflow behavior:**
- Adjust batch size in Loop Over Items node
- Modify quality threshold (currently 600 words minimum)
- Change error handling/retry logic
- Update scheduling frequency in Schedule Trigger


## 📊 Basic Information

- **Workflow ID:** 9191
- **Complexity:** advanced
- **Node Count:** 47
- **Views:** 952
- **Downloads:** 95
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9191)

## 👤 Author

- **Name:** Dahiana
- **Username:** @mssporto

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×17)
- **scheduleTrigger** 
- **googleSheets** (×4)
- **splitInBatches** 
- **if** (×3)
- **code** (×6)
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 
- **markdown** 
- **webflow** 
- **wait** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **executeWorkflowTrigger** 
- **set** 
- **googleDrive** (×2)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 47 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
