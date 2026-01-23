# Prevent prompt injection attacks with a GPT-4O security defense system

> # AI Security Pipeline - Prompt Injection Defense System using GPT-4O

Protect your AI workflows from prompt injection attacks, XSS attempts, and malicious content with this multi-layer security sanitization system.

&gt; Important:  The n8n workflow template uploader did not allow me to upload the complete system prompt for the **Input Validation & Pattern Detection**. Copy the complete System Prompt from [here](https://github.com/inderjeetsingh21/n8n-workflows/blob/main/Input%20Validation%20%26%20Pattern%20Detection%20System%20Prompt )

## What it does

This workflow acts as a security shield for AI-powered automations, preventing indirect prompt injection and other threats. It processes content through a multi-layered defense pipeline that detects malicious patterns, sanitizes markdown, validates URLs, and provides comprehensive security assessments.

## How it works

1. **Receives content** via webhook endpoint
2. **Detects threats** including prompt injections, XSS attempts, and data URI attacks
3. **Sanitizes markdown** by removing HTML, dangerous protocols, and suspicious links
4. **Validates URLs** blocking suspicious IP addresses, domains, and URL shorteners
5. **Returns security report** with risk assessment and sanitized content

## Setup

1. Import and activate the workflow
2. Use the generated webhook URL: `/webhook/security-sanitize`
3. Send POST requests with 
```
JSON: `{"content": "your_text", "source": "identifier"}`
```

## Use cases

- Secure AI chatbots and LLM integrations
- Process user-generated content before AI processing
- Protect RAG systems from data poisoning
- Sanitize external webhook payloads
- Ensure compliance with security standards

Perfect for any organization using AI that needs to prevent prompt manipulation, data exfiltration, and injection attacks while maintaining audit trails for compliance.




## 📊 Basic Information

- **Workflow ID:** 7453
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 750
- **Downloads:** 75
- **Created:** 2025/8/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7453)

## 👤 Author

- **Name:** inderjeet Bhambra
- **Username:** @idsinghbhambra

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** (×4)
- **@n8n/n8n-nodes-langchain.openAi** (×5)
- **respondToWebhook** 
- **merge** (×2)
- **if** (×3)
- **stickyNote** (×7)
- **code** 
- **switch** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
