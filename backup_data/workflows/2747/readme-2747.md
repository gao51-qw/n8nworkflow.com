# 🎨 Interactive image editor with FLUX.1 fill tool for inpainting

> &gt; Like this template? [Connect with Eduard](https://www.linkedin.com/in/parsadanyan/) via LinkedIn.

This workflow is a prototype of an AI-powered image editing interface, similar to Photoshop's Generative Fill feature, but running entirely in the browser. It provides a web-based editor that allows users to:

* Select areas in images using an adjustable brush tool
* Input text prompts to guide the AI generation
* Compare original and generated images side by side
* Iterate on edits with different prompts and settings
* Save or reuse generated images

&gt; 🎨 Perfect for [product catalog management](https://www.reddit.com/r/n8n/comments/1h98n7a/have_a_product_catalog_make_a_flux1_in_painting/), seasonal content updates, and creative image editing tasks!

📋 Requirements
--------------
* [FLUX API Access](https://api.bfl.ai/): You'll need API credentials from FLUX to use this workflow.
* Configure the [HTTP Header Auth credential](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) in n8n with your FLUX API key


🔧 Key Components
----------------

* [FLUX Fill API](https://api.us1.bfl.ai/scalar#tag/tasks/POST/v1/flux-pro-1.0-fill) for AI-powered image generation
* [Konva.js](https://konvajs.org/) for canvas manipulation
* [img-comparison-slider](https://www.npmjs.com/package/img-comparison-slider) for result visualization
* [Custom CSS/JS](https://github.com/ed-parsadanyan/n8n-flux-fill-demo) for editor functionality


1. **Simple Editor Interface**
   * HTML page with an editor is served on the Webhook call
   * Adjustable brush selection tool
   * Provides several mock examples and allows uploading custom images
   * Basic prompt and FLUX model parameter controls

2. **Image Processing Pipeline**
   * Handles image and mask separately
   * Processes FLUX Fill API requests
   * Delivers results back to the editor

3. **Result Viewer**
   * Split-screen comparison of original and generated images
   * Interactive slider for before/after comparison
   * Options to save or continue editing
   * Support for multiple iteration cycles

🎯 Use Cases
-----------

This prototype is particularly useful for:

* Testing AI-powered image editing concepts
* Quick product visualization experiments
* Exploring creative image variations
* Demonstrating inpainting capabilities

&gt; 💡 **Pro Tip**: Save masks for frequently edited areas to quickly generate variations with different prompts!

The workflow can be extended to integrate with various data sources and can be customized for specific business needs.

## 📊 Basic Information

- **Workflow ID:** 2747
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 17533
- **Downloads:** 1753
- **Created:** 2025/1/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2747)

## 👤 Author

- **Name:** Eduard
- **Username:** @eduard

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **merge** 
- **respondToWebhook** (×2)
- **wait** 
- **if** 
- **stickyNote** (×6)
- **httpRequest** (×3)
- **set** 
- **webhook** 
- **html** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
