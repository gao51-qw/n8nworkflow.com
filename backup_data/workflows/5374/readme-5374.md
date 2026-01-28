# Generate & publish SEO articles with Claude AI, Webflow & image generation

> **Content engine that ships fresh, SEO-ready articles every single day.
**

Workflow:

⸻

1. Layout Blueprint
	•	Purpose: Define content structure before writing begins.
	•	What’s Included:
	•	Search intent mapping
	•	Internal link planning
	•	Call-to-action (CTA) placement
	•	Benefit: Ensures consistency, SEO alignment, and content goals are baked in early.

⸻

2. AI-Assisted Drafting
	•	Tool: GPT generates the first draft.
	•	Editor’s Role:
	•	Focus on depth and accuracy
	•	Align tone and style with existing site content
	•	Context-Aware: Pulls insights from top-ranking articles already live on the site.

⸻

3. SEO Validation
	•	Automated Checks for:
	•	Keyword coverage
	•	Readability scoring
	•	Schema markup
	•	Internal/external link quality
	•	Outcome: Each piece is validated before hitting publish.

⸻

4. Media Production
	•	Process: AI auto-generates relevant images.
	•	Delivery: Visual assets are automatically added to the CMS library.

⸻


Optional Human Review: Team feedback via Slack or Teams if needed.

⸻

5. Automated Publishing
	•	Action: Instantly publishes content to Webflow once approved.
	•	Result: A fully streamlined pipeline from draft to live with minimal manual steps.


## 📊 Basic Information

- **Workflow ID:** 5374
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 9225
- **Downloads:** 922
- **Created:** 2025/6/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5374)

## 👤 Author

- **Name:** Marko
- **Username:** @perspectalog

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **slack** (×2)
- **webflow** 
- **wait** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×2)
- **code** 
- **executeWorkflow** 
- **stickyNote** (×6)
- **noOp** 
- **if** (×2)
- **webflowTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
