**This n8n workflow template uses community nodes and is only compatible with the self-hosted version of n8n.** 

## Conversational Kubernetes Management with GPT-4o and MCP Integration

This workflow enables you to manage Kubernetes clusters conversationally using OpenAI’s GPT-4o and a secure MCP (Model Context Protocol) server. It transforms natural language queries into actionable Kubernetes commands via a lightweight MCP API gateway — perfect for developers and platform engineers seeking to simplify cluster interaction.

---

## 🚀 Setup Instructions

1. **Import the Workflow**  
   Upload this template to your n8n instance.

2. **Configure Required Credentials**
   - **OpenAI API Key**: Add your GPT-4o API key in the credentials.
   - **MCP Client Node**: Set the URL and auth for your MCP server.

3. **Test Kubernetes Access**  
   Ensure your MCP server is correctly configured and has access to the target Kubernetes cluster.

---

## 🧩 Prerequisites

- n8n version **0.240.0** or later  
- Access to [GPT-4o](https://platform.openai.com/docs/models/gpt-4) via OpenAI  
- A running [MCP server](https://github.com/reza-gholizade/k8s-mcp-server)  
- Kubernetes cluster credentials configured in your MCP backend

---

## ⚠️ Community Nodes Disclaimer

This workflow uses custom community nodes (e.g., MCP Client).  
Make sure to review and trust these nodes before running in production.

---

## 🛠️ How It Works

- A webhook or chat input triggers the conversation.
- GPT-4o interprets the message and generates structured Kubernetes queries.
- MCP Client securely sends requests to your cluster.
- The result is returned and formatted for easy reading.

---

## 🔧 Customization Tips 

- Tweak the GPT-4o prompt to match your tone or technical level.   
- Extend MCP endpoints to support new Kubernetes actions.  
- Add alerting or monitoring integrations (e.g., Slack, Prometheus). 

---

## 🖼️ Template Screenshot

![Screenshot 14040428 at 12.42.32.png](fileId:1808)
---

## 🧠 Example Prompts

```
Show me all pods in the default namespace.
Get logs for nginx pod in kube-system.
List all deployments in staging.
```

---

## 📎 Additional Resources

- [MCP Server on GitHub](https://github.com/reza-gholizade/k8s-mcp-server)  
- [OpenAI Documentation](https://platform.openai.com/docs)  
- [n8n Docs](https://docs.n8n.io/)  

---

Build smarter Kubernetes workflows with the power of AI !
