# Landing page analyzing agent

> **Use Cases**
Analyze e-commerce product pages for conversion optimization, audit SaaS landing pages for signup improvements, or evaluate marketing campaign pages for better lead generation.

**Good to know**
* At time of writing, Google Gemini API calls have usage costs. See Google AI Pricing for current rates.
* The workflow analyzes publicly accessible pages only - pages behind login walls or with restricted access won't work.
* Analysis quality depends on page content structure - heavily image-based pages may receive limited text-based recommendations.

**How it works**
* User submits a landing page URL through the form trigger interface.
* The HTTP Request node fetches the complete HTML content from the target landing page.
* Content is converted from HTML to markdown format for cleaner AI processing and better text extraction.
* Google Gemini 2.5 Flash analyzes the page using expert CRO knowledge and 2024 conversion best practices.
* The AI generates specific, actionable recommendations based on actual page content rather than generic advice.
* Information Extractor processes the analysis into 5 prioritized improvement tips with relevant visual indicators.
* Results are delivered through a completion form showing concrete steps to improve conversion rates.

**How to use**
* The form trigger is configured for direct URL submission but can be replaced with webhook triggers for integration into existing websites or apps.
* Multiple pages can be analyzed sequentially, though each requires a separate workflow execution.
* Recommendations focus on high-impact changes that don't require heavy development work.

**Requirements**
* Google Gemini (PaLM) API account for AI-powered analysis
* Publicly accessible landing pages for analysis
* N8N instance with proper webhook configuration

**Customizing this workflow**
* CRO analysis can be tailored for specific industries by modifying the AI system prompt - try focusing on e-commerce checkout flows, SaaS trial conversions, or local business lead capture forms.
* Add competitive analysis by incorporating multiple URL inputs and comparative recommendations.

## 📊 Basic Information

- **Workflow ID:** 7897
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 804
- **Downloads:** 80
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7897)

## 👤 Author

- **Name:** Rakin Jakaria
- **Username:** @rakinjakaria

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.agent** 
- **form** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
