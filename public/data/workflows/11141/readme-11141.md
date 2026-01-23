# Complete AI safety suite: test 9 guardrail layers with Groq LLM

> # Who's It For
AI developers, automation engineers, and teams building chatbots, AI agents, or workflows that process user input. Perfect for those concerned about security, compliance, and content safety.

# What It Does
This workflow demonstrates all 9 guardrail types available in n8n's Guardrails node through real-world test cases. It provides a comprehensive safety testing suite that validates:

- Keyword blocking for profanity and banned terms
- Jailbreak detection to prevent prompt injection attacks
- NSFW content filtering for inappropriate material
- PII detection and sanitization for emails, phone numbers, and credit cards
- Secret key detection to catch leaked API keys and tokens
- Topical alignment to keep conversations on-topic
- URL whitelisting to block malicious domains
- Credential URL blocking to prevent URLs with embedded passwords
- Custom regex patterns for organization-specific rules (employee IDs, order numbers)
- Each test case flows through its corresponding guardrail node, with results formatted into clear pass/fail reports showing violations and sanitized text.
# How to Set Up

- Add your Groq API credentials (free tier works fine)
- Import the workflow
- Click "Test workflow" to run all 9 cases
- Review the formatted results to understand each guardrail's behavior

# Requirements

- n8n version 1.119.1 or later (for Guardrails node)
- Groq API account (free tier sufficient)
- Self-hosted instance (some guardrails use LLM-based detection)

# How to Customize

- Modify test cases in the "Test Cases Data" node to match your specific scenarios
- Adjust threshold values (0.0-1.0) for AI-based guardrails to fine-tune sensitivity
- Add or remove guardrails based on your security requirements
- Integrate individual guardrail nodes into your production workflows
- Use the sticky notes as reference documentation for implementation

This is a plug-and-play educational template that serves as both a testing suite and implementation reference for building production-ready AI safety layers.

## 📊 Basic Information

- **Workflow ID:** 11141
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 241
- **Downloads:** 24
- **Created:** 2025/11/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11141)

## 👤 Author

- **Name:** Muhammad Shaheer Awan
- **Username:** @shaheer03

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×3)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.guardrails** (×9)
- **@n8n/n8n-nodes-langchain.lmChatGroq** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
