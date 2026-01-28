# Secure GET webhooks with query parameter validation for limited authentication cases

> # How to secure GET Webhooks?
## What are webhooks?

Webhooks are special URLs that instantly trigger workflows when they receive an incoming HTTP request (like GET or POST). They're perfect for connecting external tools to n8n in real time.

## 🔐 Why webhooks should be protected
Unprotected webhooks are publicly accessible on the internet — anyone with the link can trigger your workflow. This can lead to spam, unwanted requests, or even data loss.

## ✅ Best Practice: Use built-in Authentication
n8n provides native authentication options for webhook nodes:
- Basic Auth
- Header Auth
- JWT Auth

These methods are **highly recommended if supported by your external app or service**. You can find them in the “Authentication” dropdown of the webhook node.

## 🛠️ When to use THIS SETUP
Sometimes, external tools don’t support custom headers or advanced auth methods — for example:
- A button click in Google Sheets
- A link shared via email or chat with a trusted partner
- IoT devices or basic web apps

In those cases, you can protect a webhook by adding a secret query parameter (e.g. ?secret=abc123xyz456...) and validating it with an IF node at the start of your workflow. 

**This way, only those requests with the secret can trigger the core elements of your workflow.**

It's a simple yet powerful way to secure GET-based workflows. Only use if better methods aren't available.

## 📊 Basic Information

- **Workflow ID:** 9570
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 35
- **Downloads:** 3
- **Created:** 2025/10/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9570)

## 👤 Author

- **Name:** Kai S. Huxmann
- **Username:** @kaihuxmann

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **stopAndError** 
- **stickyNote** (×4)
- **if** 
- **noOp** 
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
