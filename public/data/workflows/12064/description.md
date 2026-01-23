## 🤖 AI-Powered n8n Workflow Generator with n8nBuilder API

### Overview

This workflow lets you **generate complete n8n workflows from natural language descriptions** using the **n8nBuilder API**. 🚀

Users submit a short description via a form, and the workflow returns a ready-to-import n8n workflow JSON.

**Why use it?**

- ⚡ **AI-generated workflows** from natural language 
- 🛠️ **Production-ready patterns** (triggers, error handling, best practices)
- 🎯 **Perfect for beginners** who don't know which nodes to pick
- 🔄 **Two modes**: Form-based and AI Chat Agent

---

## Prerequisites

- 🔑 **n8nBuilder account + API token** — Get your free token at [n8nbuilder.dev](https://n8nbuilder.dev)
- 🏢 **An n8n instance** (Cloud or self-hosted)
- 🤖 **OpenAI API Key** (Optional - to use with AI Agents)

⚠️ **Important**: Never expose your API key in public workflows. Use **n8n Credentials** for production setups.

---

## Setup Instructions

### 1. Get your n8nBuilder API token

- Visit [n8nbuilder.dev](https://n8nbuilder.dev)
- Sign up or log in to your account
- Navigate to Account → API to generate your token

### 2. Configure the Form

The **Form Trigger** collects:

- `api_token` (required) — Your n8nBuilder API token
- `email` (required) — Your email address
- `query` (required) — Natural language description of the workflow (e.g., "Read RSS from https://n8nbuilder.dev/blog/feed.xml every hour and send Slack message if new post arrives")

### 3. Workflow Execution

1. User fills the form and submits
2. Workflow sends a **POST** request to `https://api.n8nbuilder.dev/api/generate`
3. n8nBuilder API processes the request and generates a complete workflow
4. Response is cleaned and formatted
5. User receives the generated workflow JSON ready to import

### 4. Outputs

The workflow returns:

- `output` — Complete n8n workflow JSON ready to import

💡 **Tip**: Copy the generated JSON and import it directly into your n8n instance via Settings → Workflows → Import from File.

---

## Customization Tips

- 📝 **Write clear descriptions**: The more specific your query, the better the generated workflow
- 🎨 **Try different use cases**: Data transformation, API integrations, scheduled tasks, webhooks, etc.
- 🔧 **Edit after generation**: Generated workflows are production-ready but you can always customize them further
- 🤖 **Use AI Chat mode**: Enable the AI Agent for conversational workflow generation

---

## Alternative: Use the n8nBuilder Community Node

🎁 **Optional**: Install the `n8n-nodes-n8nbuilder` community node if you prefer using a dedicated node instead of raw HTTP.

See: [GitHub Repository](https://github.com/mbakgun/n8n-nodes-n8nbuilder)

---

## Troubleshooting

- **401/403 Unauthorized** → Check your API token in the form
- **Invalid JSON** → Ensure your email and query are properly filled
- **No output returned** → Verify your API token is valid and active
- **Slow response** → Complex workflows may take a few seconds to generate

---

## Security Best Practices

- 🔒 Do not hardcode API tokens in public workflows
- 🔐 Use **n8n Credentials** for storing tokens securely
- 🛡️ Keep your API token private and regenerate if compromised

---

## Learn More

- 📚 [n8nBuilder Documentation](https://n8nbuilder.dev)