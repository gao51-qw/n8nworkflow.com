# AI-powered security analysis for n8n with Google Gemini and n8n audit API

> # Generate a security audit report from an n8n instance to a web form
This workflow provides a deep-dive security assessment of an n8n instance using the native Audit API and AI analysis.

## Who’s it for
* This template is for n8n administrators and DevSecOps engineers who need to maintain a high security standard across their automation infrastructure. 
* It is particularly useful for teams managing self-hosted instances with multiple users.

## How it works
* The workflow triggers via an n8n Form where you provide your instance URL and API key. 
* It calls the official n8n Audit API to scan for five categories of risk: instance settings, credentials, database (SQL injection), nodes, and filesystem access. 
* A Code node parses this data, which is then analyzed by Google Gemini to create a prioritized remediation plan.

## Requirements
* n8n version v1.0 or higher.
* A Google Gemini API Key.
* An n8n API Key with 'Audit' scope permissions.

## How to set up
1. Create a Google Gemini API credential in n8n.
2. Ensure your n8n API key has the correct scopes.
3. Execute the workflow and enter your credentials into the trigger form.

## How to customize the workflow
* You can easily swap the Google Gemini node for OpenAI or Anthropic. 
* You can also add a 'Send Email' or 'Slack' node at the end to automatically route the report to your security channel instead of just viewing it in the browser.


## 📊 Basic Information

- **Workflow ID:** 11975
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 86
- **Downloads:** 8
- **Created:** 2025/12/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11975)

## 👤 Author

- **Name:** Hatem Gifaeeri
- **Username:** @hatemgifaeeri

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **code** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **formTrigger** 
- **httpRequest** 
- **stickyNote** (×4)
- **form** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
