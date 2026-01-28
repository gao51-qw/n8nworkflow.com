# Scan URLs for security threats with urlscan.io and GPT-4o mini

> ## How it works
• **Webhook → urlscan.io → GPT-4o mini → Gmail**  
• Payload example: `{ "url": "https://example.com" }`  
• urlscan.io returns a **Scan ID** and raw JSON.  
• AI node classifies the scan as *malicious / suspicious / benign*, assigns a **1-10 risk score**, and writes a two-sentence summary.  
• Gmail sends an alert that includes the URL, Scan ID, AI verdict, screenshot link, and full report link.

---

## Set-up steps  (~5 min)
• Create three credentials in n8n  
  1. **urlscan.io** API key  
  2. **OpenAI** API key (GPT-4o mini access)  
  3. **Gmail** OAuth (or SMTP)  
• Replace those fields in the nodes, or reference env vars like `{{ $env.OPENAI_API_KEY }}`.  
• Switch the Webhook to **Production** → copy the live URL.  
• Test with:  
  ```bash
  curl -X POST &lt;your-webhook-url&gt; \
       -H "Content-Type: application/json" \
       -d '{ "url": "https://example.com" }'


## 📊 Basic Information

- **Workflow ID:** 7159
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 904
- **Downloads:** 90
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7159)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×2)
- **webhook** 
- **urlScanIo** 
- **wait** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
